import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.section
      className="max-w-4xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">🛒 Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-emerald-300">Ваша корзина пуста.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <motion.li
                key={item.id}
                className="flex items-center bg-emerald-900 p-4 rounded-lg shadow"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-emerald-300">{item.artist}</p>
                  <p className="text-yellow-400">★ {item.rating}</p>
                  <p className="font-bold text-emerald-200">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-danger"
                >
                  Удалить
                </button>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <p className="text-xl font-bold">
              Итого: <span className="text-green-400">${total}</span>
            </p>
            <motion.button
              className="btn-success mt-4"
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
