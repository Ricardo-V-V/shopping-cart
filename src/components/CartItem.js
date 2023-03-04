import CartCounter from './CartCounter';

export default function CartItem({
  id,
  name,
  url1,
  price,
  buyQty,
  onAdd,
  onSubstract,
}) {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img className="cart-item__img" src={url1} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>${price}</p>
          <p>Size: Small</p>
          <CartCounter
            id={id}
            buyQty={buyQty}
            onAdd={onAdd}
            onSubstract={onSubstract}
          />
        </div>
      </div>
      <div className="cart-item__subtotal">
        <span>{buyQty * price}</span>
        <span>X</span>
      </div>
    </div>
  );
}
