import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, X } from 'lucide-react';
import SectionHead from '../common/SectionHead.jsx';
import Reveal from '../common/Reveal.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import { company, emailRecipients, emailsPendingConfirmation, whatsappContacts } from '../../config/site.js';
import { LIMITS, buildWhatsAppMessage, validateContact, whatsappLink } from '../../utils/contact.js';
import './Contact.css';

const empty = { name: '', email: '', message: '' };

export default function Contact({ inquiry }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [chooser, setChooser] = useState(false);
  const nameRef = useRef(null);

  // Pre-fill from "Request information" in the product modal
  useEffect(() => {
    if (!inquiry) return;
    setForm((f) => ({ ...f, message: inquiry }));
    setErrors((e) => ({ ...e, message: undefined }));
    const t = setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700);
    return () => clearTimeout(t);
  }, [inquiry]);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const check = () => {
    const errs = validateContact(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus();
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (check()) setChooser(true);
  };

  const waText = buildWhatsAppMessage(form);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-shape s1" aria-hidden="true" />
      <div className="contact-shape s2" aria-hidden="true" />
      <div className="container">
        <SectionHead
          center
          id="contact-title"
          eyebrow="Get in Touch"
          title={<>Let&rsquo;s grow <em>together</em>.</>}
          lead="Tell us about your requirements — our team will be glad to help with product information and export inquiries."
        />

        <div className="contact-grid">
          {/* -------- Contact details -------- */}
          <Reveal from="left" className="contact-info">
            <div className="ci-card ci-whatsapp">
              <span className="ci-icon"><WhatsAppIcon size={22} /></span>
              <div>
                <h3>WhatsApp</h3>
                {whatsappContacts.map((c) => (
                  <a key={c.id} className="ci-contact" href={whatsappLink(c.number)} target="_blank" rel="noopener noreferrer">
                    <span className="ci-contact-name">{c.name}</span>
                    {c.display} 
                  </a>
                ))}
              </div>
            </div>
            <div className="ci-card ci-phone">
              <span className="ci-icon"><Phone size={20} /></span>
              <div>
                <h3>Phone</h3>
                {whatsappContacts.map((c) => (
                  <a key={c.id} href={`tel:+${c.number}`}>{c.display}</a>
                ))}
              </div>
            </div>
            <div className="ci-card ci-email">
              <span className="ci-icon"><Mail size={20} /></span>
              <div>
                <h3>Email</h3>
                {emailRecipients.map((r) => (
                  <a key={r.email} href={`mailto:${r.email}`} className="ci-email-link">{r.email}</a>
                ))}
                {emailsPendingConfirmation && <small className="ci-pending">Email domain pending confirmation</small>}
              </div>
            </div>
            <div className="ci-card ci-address">
              <span className="ci-icon"><MapPin size={20} /></span>
              <div>
                <h3>Address</h3>
                <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {company.address} <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* -------- Form -------- */}
          <Reveal from="right" className="contact-form-wrap">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="cf-row">
                <Field id="cf-name" label="Name" name="name" value={form.name} onChange={update} error={errors.name} inputRef={nameRef} autoComplete="name" maxLength={LIMITS.name} />
                <Field id="cf-email" label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} autoComplete="email" maxLength={LIMITS.email} />
              </div>
              <Field id="cf-message" label="Message" name="message" textarea value={form.message} onChange={update} error={errors.message} maxLength={LIMITS.message} />

              <div className="cf-actions single">
                <button type="submit" className="btn btn-wa" aria-expanded={chooser} aria-controls="wa-chooser">
                  <WhatsAppIcon size={19} /> Send via WhatsApp
                </button>
              </div>

              <AnimatePresence>
                {chooser && (
                  <motion.div
                    id="wa-chooser"
                    className="wa-chooser"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="wa-inner">
                      <div className="wa-head">
                        <strong>Choose who to message on WhatsApp</strong>
                        <button type="button" onClick={() => setChooser(false)} aria-label="Close WhatsApp options"><X size={18} /></button>
                      </div>
                      <p>WhatsApp opens a chat with one representative at a time, with your message already filled in. Press send in WhatsApp to deliver it.</p>
                      <div className="wa-options">
                        {whatsappContacts.map((c) => (
                          <a key={c.id} className="wa-option" href={whatsappLink(c.number, waText)} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon size={20} />
                            <span>Contact {c.name} via WhatsApp<small>{c.display}</small></span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="cf-privacy">Fields marked * are required. Your details are used only to respond to your inquiry.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, textarea, error, inputRef, ...props }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={`field${error ? ' has-error' : ''}${props.value ? ' filled' : ''}`}>
      <Tag
        id={id}
        ref={inputRef}
        placeholder=" "
        required
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        rows={textarea ? 6 : undefined}
        type={textarea ? undefined : props.type || 'text'}
        {...props}
      />
      <label htmlFor={id}>{label} <span aria-hidden="true">*</span></label>
      <span className="field-line" aria-hidden="true" />
      <AnimatePresence>
        {error && (
          <motion.span id={`${id}-err`} className="field-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
