import { CalendarCheck, Globe2, ShieldCheck, Snowflake, Sprout } from 'lucide-react';
import useCountUp from '../../hooks/useCountUp.js';
import Reveal from '../common/Reveal.jsx';
import { products } from '../../data/products.js';
import { company } from '../../config/site.js';
import { asset } from '../../utils/asset.js';
import './Statistics.css';

// Every figure below comes directly from the company profile — no invented metrics.
const fresh = products.filter((p) => p.category !== 'frozen').length;
const frozen = products.filter((p) => p.category === 'frozen').length;

const stats = [
  { icon: CalendarCheck, value: company.founded, from: 1990, label: 'Established', note: 'Cairo, Egypt', color: '#F5A623' },
  { icon: Sprout, value: fresh, label: 'Fresh Products', note: 'Fruits & vegetables', color: '#A5C900' },
  { icon: Snowflake, value: frozen, label: 'Frozen Products', note: 'Fruits & vegetables', color: '#8FD3F0' },
  { icon: Globe2, value: company.markets.length, label: 'Market Regions', note: 'Europe · Africa · Asia · Arab', color: '#FF8A7A' },
  { icon: ShieldCheck, value: company.standards.length, label: 'Quality Standards', note: 'GlobalG.A.P. · Fairtrade', color: '#FFD36B' },
];

function Stat({ icon: Icon, value, from = 0, label, note, color, delay }) {
  const [ref, n] = useCountUp(value, { from });
  return (
    <Reveal className="stat" delay={delay} style={{ '--c': color }}>
      <span className="stat-icon"><Icon size={24} /></span>
      <strong ref={ref} className="stat-value" aria-label={String(value)}>{n}</strong>
      <span className="stat-label">{label}</span>
      <span className="stat-note">{note}</span>
    </Reveal>
  );
}

export default function Statistics() {
  return (
    <section className="stats" aria-label="EL NORAN at a glance">
      <div className="stats-bg" aria-hidden="true">
        <img src={asset('images/backgrounds/tractor-field.webp')} alt="" loading="lazy" />
      </div>
      <div className="container">
        <Reveal className="stats-intro">
          <span className="eyebrow">At a glance</span>
          <p>Year-round supply of fresh, day-picked and frozen produce — from Egypt to international buyers.</p>
        </Reveal>
        <div className="stats-grid">
          {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}
