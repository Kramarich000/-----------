import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      className="text-4xl !p-10 rounded-4xl text-center mx-auto bg-amber-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Добро пожаловать в наш магазин виниловых пластинок!</h1>
      <p>Исследуйте коллекцию классических и современных винилов.</p>
    </motion.section>
  );
}
