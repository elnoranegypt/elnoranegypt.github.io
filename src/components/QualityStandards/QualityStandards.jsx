import { CheckCircle2, ClipboardCheck, Leaf, Scale, ShieldCheck, Sprout } from 'lucide-react';
import SectionHead from '../common/SectionHead.jsx';
import Reveal from '../common/Reveal.jsx';
import './QualityStandards.css';

const standards = [
  { id: 'globalgap', name: 'GlobalG.A.P.', mark: 'G.A.P.', icon: Sprout, color: '#4E8A00', grad: 'linear-gradient(135deg, #A5C900, #285900)' },
  { id: 'fairtrade', name: 'Fairtrade', mark: 'FAIR', icon: Scale, color: '#E5821A', grad: 'linear-gradient(135deg, #F5A623, #E84B45)' },
];

const pillars = [
  { icon: ClipboardCheck, title: 'Quality assurance', text: 'Products of prime quality, selected and handled with care.' },
  { icon: ShieldCheck, title: 'Food safety', text: 'Food safety is promoted throughout our operations.' },
  { icon: Leaf, title: 'Sustainability', text: 'Committed to sustainability and environmental protection.' },
  { icon: CheckCircle2, title: 'Responsible production', text: 'Supporting responsible, ethical production practices.' },
];

export default function QualityStandards() {
  return (
    <section id="quality" className="section quality" aria-labelledby="quality-title">
      <span className="quality-watermark" aria-hidden="true">QUALITY</span>
      <div className="container">
        <SectionHead
          center
          id="quality-title"
          eyebrow="Quality & Standards"
          title={<>Quality you can <em>trust</em>, standards that matter.</>}
          lead="All our products are subject to international certification and auditing standards, including GlobalG.A.P. and Fairtrade — ensuring high quality, food safety and responsible production practices."
        />

        <div className="std-grid">
          {standards.map(({ id, name, mark, icon: Icon, color, grad }, i) => (
            <Reveal key={id} className="std-card" delay={i * 0.12} style={{ '--c': color, '--g': grad }}>
              <div className="std-seal" aria-hidden="true">
                <svg viewBox="0 0 120 120" className="std-seal-ring">
                  <defs>
                    <path id={`seal-${id}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                  </defs>
                  <text><textPath href={`#seal-${id}`}>{`${name.toUpperCase()} • STANDARD • ${name.toUpperCase()} • STANDARD •`}</textPath></text>
                </svg>
                <span className="std-seal-core">
                  <Icon size={26} />
                  <small>{mark}</small>
                </span>
              </div>
              <h3>{name}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal className="quality-pillars">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div className="qp" key={title}>
              <span className="qp-icon"><Icon size={22} /></span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <p className="quality-note">
          Standards as listed in the EL NORAN company profile. For documentation relating to a specific product or
          shipment, please contact our team.
        </p>
      </div>
    </section>
  );
}
