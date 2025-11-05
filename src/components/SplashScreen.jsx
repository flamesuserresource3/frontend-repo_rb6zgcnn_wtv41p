import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-white dark:bg-neutral-950"
          role="dialog"
          aria-label="Loading"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#f19d4b] via-[#687fe5] to-[#686b93] shadow-2xl" />
            <motion.div
              className="mt-6 h-1 w-40 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden"
            >
              <motion.div className="h-full w-1/2 bg-[#687fe5]" initial={{ x: '-50%' }} animate={{ x: ['-50%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.div>
            <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">S V IT Hub — Code. Create. Connect.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
