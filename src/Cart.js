import MyCart from './components/MyCart';
import OrderSummary from './components/OrderSummary';
import badge from './img/secure-badge.png';

export default function Cart({
  cartList,
  subtotal,
  onAdd,
  onSubstract,
  onRemove,
}) {
  return (
    <div className="cart-container">
      <div className="cart">
        <MyCart
          cartList={cartList}
          onAdd={onAdd}
          onSubstract={onSubstract}
          onRemove={onRemove}
        />
        <OrderSummary subtotal={subtotal} />
      </div>
      <div>
        <img className="cart__badge" src={badge} alt="secure transaction" />
      </div>
    </div>
  );
}
