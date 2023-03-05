import MyCart from './components/MyCart';
import OrderSummary from './components/OrderSummary';

export default function Cart({
  cartList,
  subtotal,
  onAdd,
  onSubstract,
  onRemove,
}) {
  return (
    <div className="cart container">
      <MyCart
        cartList={cartList}
        onAdd={onAdd}
        onSubstract={onSubstract}
        onRemove={onRemove}
      />
      <OrderSummary subtotal={subtotal} />
    </div>
  );
}
