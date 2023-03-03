export default function Card({ id, name, url1, url2, price }) {
  return (
    <div className="card">
      <img src={url1} alt={name} className="card__img" />
      <h5 className="card__title">{name}</h5>
      <p className="card__price">${price}</p>
      <button className="btn btn--outline card__btn">Add to Cart</button>
    </div>
  );
}
