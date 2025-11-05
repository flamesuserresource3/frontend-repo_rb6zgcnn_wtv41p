import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe2, BarChart3, Briefcase, Star, BadgeCheck, Mail, MapPin, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const services = [
  { icon: Code2, title: 'Software Development', desc: 'Robust, secure, and scalable systems tailored to your business.' },
  { icon: Globe2, title: 'Web App Development', desc: 'Modern, responsive web apps with stellar UX and performance.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross‑platform apps that users love to use.' },
  { icon: BarChart3, title: 'Custom ERP Systems', desc: 'Streamline operations with data‑driven ERP built for scale.' },
  { icon: Briefcase, title: 'IT Consulting', desc: 'Strategic guidance to transform technology into advantage.' },
];

const projects = [
  {
    title: 'ERP Windows System',
    stack: ['.NET', 'SQL Server', 'WPF'],
    desc: 'A robust desktop ERP platform powering finance, inventory, and workflows.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Attendance Management App',
    stack: ['Flutter', 'Firebase'],
    desc: 'HRM mobile app for time tracking, leave management, and analytics.',
    img: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?q=80&w=1200&auto=format&fit=crop',
  },
];

const products = [
  {
    name: 'NovaDesk',
    features: ['Unified dashboard', 'Modular plugins', 'SSO ready'],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'PulseHR',
    features: ['Geo‑fencing', 'Shift planner', 'Smart approvals'],
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
  },
];

const testimonials = [
  { name: 'Priya N.', company: 'Nimbus Foods', rating: 5, text: 'Their ERP transformed our operations. Exceptional attention to detail!', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
  { name: 'Arjun M.', company: 'Vertex Labs', rating: 5, text: 'World‑class web app, shipped on time. Great communication.', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop' },
  { name: 'Emily R.', company: 'Horizon Health', rating: 4, text: 'Mobile rollout was smooth and the UX is delightful.', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop' },
];

export default function Sections() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      {/* Services */}
      <section id="services" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_20%_10%,rgba(104,127,229,0.12),transparent),radial-gradient(400px_200px_at_80%_90%,rgba(241,157,75,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Services</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">End‑to‑end capabilities across design, development, and delivery.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md hover:shadow-xl hover:-translate-y-0.5 transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#f19d4b] to-[#687fe5] grid place-items-center text-white shadow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-neutral-900 dark:text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Projects</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">A few highlights brought to life with our partners.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#687fe5]/10 text-[#687fe5] dark:bg-white/10 dark:text-white">{t}</span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-neutral-700 dark:text-neutral-300">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Products</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Purpose‑built internal tools ready for your org.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((pr, i) => (
              <motion.div key={pr.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={pr.img} alt={pr.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{pr.name}</h3>
                  <ul className="mt-2 space-y-1 text-neutral-700 dark:text-neutral-300">
                    {pr.features.map((f) => (
                      <li key={f} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#f19d4b]" /> {f}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a href="#contact" className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#f19d4b] to-[#687fe5] text-white font-medium shadow hover:shadow-lg">Request Demo</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Client Testimonials</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">What partners say about working with us.</p>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="min-w-[320px] max-w-sm p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">{t.company}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[#f8b84e]">
                    {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">“{t.text}”</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Let’s build something great</h2>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">Share your goals—our team will reach out within one business day.</p>

              <div className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-[#687fe5]" /> hello@svithub.com</p>
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-[#687fe5]" /> +91 98765 43210</p>
                <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-[#687fe5]" /> Mumbai, IN</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Linkedin className="h-5 w-5" /></a>
                <a aria-label="GitHub" href="#" className="p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Github className="h-5 w-5" /></a>
                <a aria-label="Instagram" href="#" className="p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161085269!2d72.74109905!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630476614ab%3A0x1b9a56c06d9b0b6d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="240" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <form className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50 backdrop-blur">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                  <input id="name" type="text" required className="mt-1 w-full rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#687fe5]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                  <input id="email" type="email" required className="mt-1 w-full rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#687fe5]" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea id="message" rows={5} required className="mt-1 w-full rounded-lg bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#687fe5]"></textarea>
              </div>
              <button type="submit" onClick={(e) => { e.preventDefault(); alert('Thanks! We\'ll reach out shortly.'); }} className="mt-4 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#687fe5] to-[#686b93] hover:opacity-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          <p>© {new Date().getFullYear()} S V IT Hub · Code. Create. Connect.</p>
          <nav className="flex items-center gap-4">
            <a href="#home" className="hover:text-neutral-900 dark:hover:text-white">Home</a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
            <a href="#services" className="hover:text-neutral-900 dark:hover:text-white">Services</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
