import { FaStar } from 'react-icons/fa';  // npm install react-icons

export default function Rating({ value = 0, max = 5, onRate }) {
  // value — текущее число звёзд (может быть дробным)
  // onRate(newValue) — вызывается при клике на звезду

  return (
    <div className="flex space-x-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        return (
          <FaStar
            key={i}
            className={`
              cursor-pointer
              ${value >= starValue ? 'text-yellow-400' : 'text-emerald-700'}
              hover:text-yellow-300
              transition
            `}
            onClick={() => onRate(starValue)}
          />
        );
      })}
    </div>
  );
}
