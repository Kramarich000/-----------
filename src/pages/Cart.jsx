import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.section
      className="max-w-4xl mx-auto p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="!text-4xl font-bold !mb-6">🛒 Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-emerald-300 !text-3xl">Ваша корзина пуста.</p>
      ) : (
        <>
          <ul className="space-y-4 flex gap-4">
            {cartItems.map((item) => (
              <motion.li
                key={item.id}
                className="flex flex-col items-center bg-emerald-900 !p-4 rounded-lg shadow"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="!text-2xl font-semibold">{item.title}</h3>
                  <p className="!text-lg text-emerald-300">{item.artist}</p>
                  <p className="text-yellow-400 text-4xl">★ {item.rating}</p>
                  <p className="font-bold text-emerald-200">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-danger !text-2xl"
                >
                  Удалить
                </button>
              </motion.li>
            ))}
          </ul>
          <div className="!mt-8 text-right">
            <p className="!text-2xl font-bold">
              Итого: <span className="text-green-400">${total}</span>
            </p>
            <motion.button
              className="btn-success !mt-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Оформить заказ
            </motion.button>
          </div>
        </>
      )}
    </motion.section>
  );
}
