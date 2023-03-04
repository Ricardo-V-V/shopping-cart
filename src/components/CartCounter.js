export default function CartCounter({ id, buyQty, onAdd, onSubstract }) {
  return (
    <div className="cart-counter">
      <button className="cart-counter__btn" onClick={() => onSubstract(id)}>
        -
      </button>
      <div className="cart-counter__qty">{buyQty}</div>
      <button className="cart-counter__btn" onClick={() => onAdd(id)}>
        +
      </button>
    </div>
  );
}
