import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#f7f7fb] dark:from-neutral-950 dark:to-neutral-900">
      <div className="absolute inset-0">{/* 3D scene */}
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(104,127,229,0.25)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(241,157,75,0.25)_0%,transparent_40%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
        >
          Next‑Gen IT Solutions for Visionary Brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto"
        >
          S V IT Hub crafts premium software, web, and mobile experiences that scale. From custom ERP to modern apps, we build with precision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#portfolio" className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#687fe5] to-[#686b93] shadow hover:shadow-lg transition">
            View Our Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl font-semibold text-[#687fe5] dark:text-white border border-[#687fe5]/40 dark:border-white/20 hover:bg-[#687fe5]/10 dark:hover:bg-white/10 transition">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
