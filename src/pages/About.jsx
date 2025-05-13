import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex text-center flex-col justify-center items-center "
    >
      <h2 className="!text-6xl">О нас</h2>
      <p className="!text-4xl !mb-10">
        Мы — онлайн-магазин виниловых пластинок, работающий с 2020 года.
      </p>
      <p className="!text-4xl">Контакты: vinylshop@example.com</p>
    </motion.section>
  );
}
