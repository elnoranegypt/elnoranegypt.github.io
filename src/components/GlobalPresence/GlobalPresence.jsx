import { motion } from 'framer-motion';
import { Globe2, MapPin, Plane, Ship } from 'lucide-react';
import SectionHead from '../common/SectionHead.jsx';
import Reveal from '../common/Reveal.jsx';
import mapData from '../../data/mapPins.json';
import { asset } from '../../utils/asset.js';
import './GlobalPresence.css';

const { width: W, height: H, pins } = mapData;

// Markets named in the company profile — region level only, no specific countries claimed.
const regions = [
  { id: 'europe', name: 'Europe', color: '#8FD3F0', text: 'Supplying fresh and frozen produce to markets across Europe.' },
  { id: 'africa', name: 'Africa', color: '#F5A623', text: 'Supplying fresh and frozen produce to markets across Africa.' },
  { id: 'asia', name: 'Asia', color: '#FF8A7A', text: 'Supplying fresh and frozen produce to markets across Asia.' },
  { id: 'arab', name: 'Arab Countries', color: '#A5C900', text: 'Supplying fresh and frozen produce to markets across Arab countries.' },
];

const arc = (a, b) => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  return `M${a.x},${a.y} Q${mx},${my - dist * 0.45} ${b.x},${b.y}`;
};
const pct = (p) => ({ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` });

export default function GlobalPresence() {
  const egypt = pins.egypt;
  return (
    <section id="markets" className="section markets" aria-labelledby="markets-title">
      <div className="container">
        <SectionHead
          center
          light
          id="markets-title"
          eyebrow="Global Presence"
          title={<>From Egypt to <em>international</em> markets.</>}
          lead="From our base in Cairo, EL NORAN serves customers across Europe, Africa, Asia and Arab countries."
        />

        <Reveal from="scale" className="map-wrap">
          <img className="map-dots" src={asset('images/backgrounds/world-dots.svg')} alt="" aria-hidden="true" loading="lazy" />
          <svg className="map-arcs" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
            <defs>
              <linearGradient id="arc-grad" x1="0" x2="1">
                <stop offset="0" stopColor="#F5A623" />
                <stop offset="1" stopColor="#E84B45" />
              </linearGradient>
            </defs>
            {regions.map((r, i) => {
              const d = arc(egypt, pins[r.id]);
              return (
                <g key={r.id}>
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#arc-grad)"
                    strokeWidth="0.45"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.6, delay: 0.4 + i * 0.3, ease: 'easeInOut' }}
                  />
                  <circle r="0.7" fill="#FFF8DC" className="arc-runner">
                    <animateMotion dur={`${3 + i * 0.4}s`} repeatCount="indefinite" path={d} begin={`${2 + i * 0.3}s`} />
                  </circle>
                </g>
              );
            })}
          </svg>

          <span className="map-pin origin" style={pct(egypt)}>
            <span className="pin-dot" />
            <span className="pin-label"><MapPin size={14} /> Cairo, Egypt</span>
          </span>
          {regions.map((r, i) => (
            <motion.span
              key={r.id}
              className={`map-pin region pin-${r.id}`}
              style={{ ...pct(pins[r.id]), '--c': r.color }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 + i * 0.3, type: 'spring', stiffness: 200, damping: 14 }}
            >
              <span className="pin-dot" />
              <span className="pin-label">{r.name}</span>
            </motion.span>
          ))}
        </Reveal>

        <div className="region-grid">
          {regions.map((r, i) => (
            <Reveal key={r.id} className="region-card" delay={i * 0.1} style={{ '--c': r.color }}>
              <span className="region-icon">{i % 2 ? <Ship size={20} /> : <Plane size={20} />}</span>
              <h3>{r.name}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="markets-note"><Globe2 size={15} /> Map shows market regions only and is illustrative.</p>
      </div>
    </section>
  );
}
