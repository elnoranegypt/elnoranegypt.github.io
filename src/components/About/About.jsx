import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Globe2, ShieldCheck, Snowflake, Store, Truck, Utensils, Factory, ShoppingCart } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import { asset } from '../../utils/asset.js';
import './About.css';

const customers = [
  { icon: Truck, label: 'Importers' },
  { icon: Store, label: 'Wholesalers' },
  { icon: ShoppingCart, label: 'Supermarkets' },
  { icon: Utensils, label: 'Caterers' },
  { icon: Factory, label: 'Food Processing' },
];

const milestones = [
  { icon: Building2, title: 'Founded in 2013', text: 'Established in Cairo, Egypt, as an agricultural trade and export company.' },
  { icon: Snowflake, title: 'Fresh & frozen range', text: 'Fresh fruits, fresh vegetables and frozen fruits & vegetables in one catalogue.' },
  { icon: Globe2, title: 'International markets', text: 'Serving customers across Europe, Africa, Asia and Arab countries.' },
  { icon: ShieldCheck, title: 'Recognised standards', text: 'Products subject to GlobalG.A.P. and Fairtrade standards.' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const rot = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section id="about" className="section about" ref={ref} aria-labelledby="about-title">
      <div className="dots about-dots-1" aria-hidden="true" />
      <div className="container about-grid">
        <div className="about-visual">
          <motion.div className="av-main" style={{ y: y1 }}>
            <img src={asset('images/backgrounds/citrus-sorting.webp')} alt="Oranges moving along a sorting line" loading="lazy" />
          </motion.div>
          <motion.div className="av-secondary" style={{ y: y2 }}>
            <img src={asset('images/backgrounds/orange-orchard.webp')} alt="An orange orchard" loading="lazy" />
          </motion.div>
          <motion.img className="av-logo" src={asset('images/logo/elnoran-logo.png')} alt="" style={{ rotate: rot }} />
          <Reveal className="av-year" from="scale" delay={0.2}>
            <span>Est.</span>
            <strong>2013</strong>
            <span>Cairo &middot; Egypt</span>
          </Reveal>
        </div>

        <div className="about-copy">
          <Reveal>
            <span className="eyebrow">About EL NORAN</span>
            <h2 className="title" id="about-title">
              Egyptian roots, <em>global</em> reach.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              EL NORAN is an Egyptian company located in Cairo, established in 2013 and specialised in exporting
              premium-quality fresh and frozen agricultural products.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="about-text">
              We serve international markets across Europe, Africa, Asia and Arab countries, providing importers,
              wholesalers, supermarkets, caterers and food-processing companies with a diverse selection of fruits and
              vegetables. All year round, our clients receive a fresh, day-picked range — sourced and handled with
              attention to quality and international standards.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="about-text">
              Our business is built on quality, customer satisfaction, food safety, sustainability and reliable,
              long-term business relationships.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="about-customers">
            <h3>Who we serve</h3>
            <ul>
              {customers.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={18} /> {label}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <ol className="timeline">
          {milestones.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.12} className="tl-item">
              <span className="tl-icon"><Icon size={22} /></span>
              <span className="tl-step">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
