import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Leaf, MessageCircle, Snowflake, Sun } from 'lucide-react';
import Typewriter from '../common/Typewriter.jsx';
import { asset } from '../../utils/asset.js';
import { products } from '../../data/products.js';
import './Hero.css';

const headline = [
  { text: 'From', em: false },
  { text: 'Egypt’s', em: false },
  { text: 'Finest', em: true },
  { text: 'Harvest', em: true },
  { text: 'to', em: false },
  { text: 'the', em: false },
  { text: 'World.', em: false },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax for the visual composition
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const layer = (depth) => ({
    x: useTransform(sx, (v) => v * depth),
    y: useTransform(sy, (v) => v * depth),
  });
  const l1 = layer(18), l2 = layer(-26), l3 = layer(34), l4 = layer(-14);

  const onMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="home" className="hero" ref={ref} onMouseMove={onMove} aria-labelledby="hero-title">
      <motion.div className="hero-bg" style={{ y: bgY }} aria-hidden="true">
        <img src={asset('images/backgrounds/vineyard-field.webp')} alt="" fetchpriority="high" />
      </motion.div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow g1" aria-hidden="true" />
      <div className="hero-glow g2" aria-hidden="true" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: fade }}>
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="pulse" /> Egyptian Agricultural Exporter &middot; Since 2013
          </motion.span>

          <h1 id="hero-title" className="hero-title">
            {headline.map((w, i) => (
              <span className="word-wrap" key={i}>
                <motion.span
                  className={w.em ? 'word em' : 'word'}
                  initial={{ y: '110%', rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 1.0 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w.text}
                </motion.span>{' '}
              </span>
            ))}
          </h1>

          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.7 }}>
            Premium Fresh &amp; Frozen Fruits and Vegetables, Carefully Selected for Global Markets.
          </motion.p>

          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0, duration: 0.7 }}>
            <a href="#products" className="btn btn-sun">
              Explore Our Products <ArrowRight size={18} className="arrow" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              <MessageCircle size={18} /> Get in Touch
            </a>
          </motion.div>

          <motion.ul className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.8 }}>
            <li><Sun size={16} /> Fresh produce</li>
            <li><Snowflake size={16} /> Frozen range</li>
            <li><Leaf size={16} /> GlobalG.A.P. &middot;Fairtrade standards</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="orbit-ring" style={l4}>
            <svg viewBox="0 0 200 200" className="ring-text">
              <defs>
                <path id="ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text>
                <textPath href="#ring-path" startOffset="0">
                  FRESH &#8226; FROZEN &#8226; FROM EGYPT &#8226; TO THE WORLD &#8226; EL NORAN &#8226;
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div className="hv-main" style={l1}>
            <img src={asset('images/backgrounds/orange-tree.webp')} alt="" />
          </motion.div>
          <motion.div className="hv-bubble b1" style={l2}>
            <img src={asset('images/backgrounds/strawberry-harvest.webp')} alt="" />
          </motion.div>
          <motion.div className="hv-bubble b2" style={l3}>
            <img src={asset('images/backgrounds/tomatoes-vine.webp')} alt="" />
          </motion.div>
          <motion.div className="hv-bubble b3" style={l2}>
            <img src={asset('images/backgrounds/frozen-selection.webp')} alt="" />
          </motion.div>
          <motion.img className="hv-cutout c1" src={asset('images/backgrounds/citrus-cutout.webp')} alt="" style={l3} />

          <motion.div className="hv-card k1" style={l4}>
            <strong>{products.length}</strong>
            <span>products in<br />our catalogue</span>
          </motion.div>
          <motion.div className="hv-card k2" style={l1}>
            <span className="flag" />
            <span>Cairo, Egypt<br /><small>Est. 2013</small></span>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span className="mouse"><span /></span>
        <ChevronDown size={18} />
      </a>

      <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
