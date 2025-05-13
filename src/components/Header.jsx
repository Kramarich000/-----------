import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const loc = useLocation().pathname;
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/catalog', label: 'Каталог' },
    { to: '/cart', label: 'Корзина' },
    { to: '/about', label: 'О нас' },
  ];

  return (
    <motion.header
      className="header-bg text-2xl rounded-b-4xl  flex items-center justify-center text-emerald-100 p-8 min-h-[4rem] mt-4 shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-10 items-center max-w-6xl mx-auto">
        <Link to="/">
          <motion.h1
            className="header-bg text-emerald-100 p-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            🎵 Vinyl Shop
          </motion.h1>
        </Link>
        <nav className="flex gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative after:absolute after:-bottom-1 after:left-0 after:w-full
                 after:h-[2px] after:bg-emerald-300 after:scale-x-0 after:transition-transform
                 hover:after:scale-x-100 ${
                   loc === to ? 'text-white' : 'text-emerald-200'
                 }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
