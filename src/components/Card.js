import { useState } from 'react';

export default function Card({ id, name, url1, url2, price, onAdd }) {
  const [activeImg, setActiveImg] = useState(url1);

  return (
    <div className="card" onClick={() => onAdd(id)}>
      <img
        src={activeImg}
        alt={name}
        className="card__img"
        onMouseEnter={() => setActiveImg(url2)}
        onMouseLeave={() => setActiveImg(url1)}
      />
      <h5 className="card__title">{name}</h5>
      <p className="card__price">${price}</p>
      <button className="btn btn--outline">Add to Cart</button>
    </div>
  );
}
