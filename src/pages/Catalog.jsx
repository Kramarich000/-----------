import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

import Rating from '../components/Rating';

import abbeyRoad from '../assets/vinyls/abbey-road.jpg';
import thriller from '../assets/vinyls/thriller.jpg';
import kindOfBlue from '../assets/vinyls/kind-of-blue.jpg';

const vinyls = [
  {
    id: 1,
    title: 'Abbey Road',
    artist: 'The Beatles',
    genre: 'Rock',
    rating: 4.9,
    price: 35,
    image: abbeyRoad,
  },
  {
    id: 2,
    title: 'Thriller',
    artist: 'Michael Jackson',
    genre: 'Pop',
    rating: 4.8,
    price: 30,
    image: thriller,
  },
  {
    id: 3,
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    genre: 'Jazz',
    rating: 4.7,
    price: 28,
    image: kindOfBlue,
  },
];

export default function Catalog({ notify }) {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const { addToCart } = useCart();
  const [items, setItems] = useState(vinyls);

  const filtered = items
    .filter((v) => !filter || v.genre === filter)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

  const handleAdd = (v) => {
    addToCart(v);
    notify(`"${v.title}" добавлен в корзину`);
  };

  const handleRate = (id, newRating) => {
    setItems((prev) =>
      prev.map((v) => (v.id === id ? { ...v, rating: newRating } : v)),
    );
  };

  return (
    <div>
      <h2 className="!text-3xl text-center font-bold mb-4 animate-fadeIn">
        Каталог пластинок
      </h2>

      <div className="flex flex-wrap gap-4 !m-6 items-center justify-center text-[20px]">
        <label>Фильтр по жанру:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option className="bg-[rgb(31,39,37)]" value="">
            Все
          </option>
          <option className="bg-[rgb(31,39,37)]" value="Rock">
            Rock
          </option>
          <option className="bg-[rgb(31,39,37)]" value="Pop">
            Pop
          </option>
          <option className="bg-[rgb(31,39,37)]" value="Jazz">
            Jazz
          </option>
        </select>

        <label>Сортировка:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option className="bg-[rgb(31,39,37)]" value="">
            ---
          </option>
          <option className="bg-[rgb(31,39,37)]" value="rating">
            По рейтингу
          </option>
          <option className="bg-[rgb(31,39,37)]" value="price">
            По цене
          </option>
        </select>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <motion.li
            key={v.id}
            className="bg-emerald-800 p-4 rounded-lg shadow-lg flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'tween', stiffness: 200 }}
          >
            <img
              src={v.image}
              alt={v.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <div className="!m-4 flex flex-col gap-4">
              <h3 className="!text-2xl font-semibold">{v.title}</h3>
              <p className="!text-xl text-emerald-300">{v.artist}</p>
              <div className="my-2">
                <Rating
                  value={v.rating}
                  max={5}
                  onRate={(newVal) => handleRate(v.id, newVal)}
                />
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-yellow-400 text-4xl">★ {v.rating}</span>
                <span className="font-bold text-3xl">${v.price}</span>
              </div>
            </div>
            <button
              onClick={() => handleAdd(v)}
              className="btn-primary animate-fadeIn mt-4"
            >
              В корзину
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
