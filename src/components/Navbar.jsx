import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Rocket } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'products', label: 'Products' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
    const onScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${atTop ? 'bg-transparent' : 'backdrop-blur-md bg-white/70 dark:bg-neutral-900/60'} border-b ${atTop ? 'border-transparent' : 'border-black/10 dark:border-white/10'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#f19d4b] via-[#687fe5] to-[#686b93] flex items-center justify-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-neutral-900 dark:text-white">S V IT Hub</span>
            <span className="text-xs text-neutral-600 dark:text-neutral-300">Code. Create. Connect.</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => handleNav(l.id)} className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition">
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-200">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md border-t border-black/10 dark:border-white/10">
          {links.map((l) => (
            <button key={l.id} onClick={() => handleNav(l.id)} className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
