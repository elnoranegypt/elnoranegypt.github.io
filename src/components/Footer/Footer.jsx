import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, X } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import LinkedInIcon from '../common/LinkedInIcon.jsx';
import useLockBody from '../../hooks/useLockBody.js';
import { navLinks } from '../Navbar/Navbar.jsx';
import { categories } from '../../data/products.js';
import credits from '../../data/imageCredits.json';
import { company, emailRecipients, emailsPendingConfirmation, whatsappContacts } from '../../config/site.js';
import { whatsappLink } from '../../utils/contact.js';
import { asset } from '../../utils/asset.js';
import './Footer.css';

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);
  useLockBody(showCredits, () => setShowCredits(false));
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C320,90 640,0 960,30 C1180,52 1320,60 1440,36 L1440,0 L0,0 Z" />
      </svg>
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="EL NORAN — back to top">
            <img src={asset('images/logo/elnoran-logo.png')} alt="" width="52" height="63" loading="lazy" />
            <span>
              <strong>EL NORAN</strong>
              <small>For Trade &amp; Export</small>
            </span>
          </a>
          <p>
            An Egyptian company established in {company.founded} in Cairo, exporting premium-quality fresh and frozen
            fruits and vegetables to markets across Europe, Africa, Asia and Arab countries.
          </p>
          <div className="footer-standards">
            {company.standards.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
          </ul>
        </nav>

        <div className="footer-col">
          <h3>Our Products</h3>
          <ul>
            {categories.map((c) => <li key={c.id}><a href="#products">{c.label}</a></li>)}
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <MapPin size={16} />
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{company.address}</a>
            </li>
            {whatsappContacts.map((c) => (
              <li key={c.id}>
                <WhatsAppIcon size={16} />
                <a href={whatsappLink(c.number)} target="_blank" rel="noopener noreferrer">{c.display}</a>
              </li>
            ))}
            {emailRecipients.map((r) => (
              <li key={r.email}>
                <Mail size={16} />
                <a href={`mailto:${r.email}`}>{r.email}</a>
              </li>
            ))}
            <li>
              <LinkedInIcon size={16} />
              <a href="https://www.linkedin.com/company/el-noran-egypt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            {emailsPendingConfirmation &&<li className="footer-pending">Email addresses pending domain confirmation</li>}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} {company.fullName}. All rights reserved.</p>
        <button className="footer-link" onClick={() => setShowCredits(true)}>Image credits</button>
        <a href="#home" className="to-top" aria-label="Back to top"><ArrowUp size={20} /></a>
      </div>

      <AnimatePresence>
        {showCredits && (
          <motion.div className="credits-backdrop" onClick={() => setShowCredits(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="credits"
              role="dialog"
              aria-modal="true"
              aria-labelledby="credits-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <button className="credits-close" onClick={() => setShowCredits(false)} aria-label="Close image credits" autoFocus><X size={20} /></button>
              <h2 id="credits-title">Image credits</h2>
              <p>
                Gallery photographs and several product images are EL NORAN&rsquo;s own photographs from the company
                profile. The following representative product images are used under their open licences via Wikimedia
                Commons:
              </p>
              <ul>
                {credits.map((c) => (
                  <li key={c.file}>
                    <strong>{c.file.split('/').pop().replace('.webp', '').replace(/-/g, ' ')}</strong>
                    {' — '}
                    <a href={c.source} target="_blank" rel="noopener noreferrer">{c.title}</a>
                    {c.author && <> by {c.author}</>}, {c.license}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
