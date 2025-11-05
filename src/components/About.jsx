import { motion } from 'framer-motion';

const founders = [
  {
    name: 'S. Verma',
    role: 'Managing Partner & CTO',
    bio: 'Architects scalable platforms and leads technology strategy across products.',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'A. Shah',
    role: 'Partner & Head of Delivery',
    bio: 'Drives end‑to‑end execution with a focus on quality, timelines, and client success.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'V. Iyer',
    role: 'Partner & Head of Product',
    bio: 'Balances UX and business goals to ship delightful, impactful experiences.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(241,157,75,0.15),transparent),radial-gradient(400px_200px_at_90%_80%,rgba(104,127,229,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            About S V IT Hub
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            We are a partnership firm founded by three builders obsessed with innovation, quality, integrity, and trust. Together, we engineer products that empower teams to move faster.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {founders.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md hover:shadow-xl transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{f.name}</h3>
                <p className="text-sm text-[#687fe5] font-medium">{f.role}</p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{f.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
