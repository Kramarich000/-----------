import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-900 rounded-t-3xl flex items-center justify-center !text-emerald-100 !p-4 shadow-lg"
    >
      © 2025 Vinyl Shop. Все права защищены.
    </motion.footer>
  );
}
