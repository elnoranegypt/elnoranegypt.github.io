import { Award, Globe2, HeartHandshake, Leaf, Layers, ShieldCheck } from 'lucide-react';
import SectionHead from '../common/SectionHead.jsx';
import Reveal from '../common/Reveal.jsx';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: Award, title: 'Quality Commitment', color: '#F5A623',
    text: 'Premium-quality produce, carefully selected and handled with attention to quality at every step of the way.',
  },
  {
    icon: HeartHandshake, title: 'Customer Focus', color: '#E84B45',
    text: 'Customer focus is an integral part of our business — we aim to exceed customer and consumer expectations, professionally.',
  },
  {
    icon: ShieldCheck, title: 'International Standards', color: '#285900',
    text: 'Our products are subject to international certification and auditing standards, including GlobalG.A.P. and Fairtrade.',
  },
  {
    icon: Leaf, title: 'Sustainability', color: '#78A900',
    text: 'We promote food safety, sustainability and environmental protection as part of responsible production practices.',
  },
  {
    icon: Layers, title: 'Fresh & Frozen Selection', color: '#2F8FBF',
    text: 'One partner for fresh fruits, fresh vegetables and frozen fruits & vegetables — a fresh, day-picked range all year round.',
  },
  {
    icon: Globe2, title: 'International Market Experience', color: '#C9303A',
    text: 'Since 2013, serving importers, wholesalers, supermarkets, caterers and food processors across Europe, Africa, Asia and Arab countries.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <div className="dots why-dots" aria-hidden="true" />
      <div className="container">
        <SectionHead
          id="why-title"
          eyebrow="Why choose EL NORAN"
          title={<>A partner you can <em>rely on</em>, season after season.</>}
          lead="The values that guide how we select, handle and deliver produce to our international customers."
        />
        <div className="why-grid">
          {reasons.map(({ icon: Icon, title, text, color }, i) => (
            <Reveal key={title} className="why-card" delay={(i % 3) * 0.1} style={{ '--c': color }}>
              <span className="why-num">0{i + 1}</span>
              <span className="why-icon"><Icon size={28} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
