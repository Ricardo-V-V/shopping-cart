import MyCart from './components/MyCart';
import OrderSummary from './components/OrderSummary';

export default function Cart({ cartList, subtotal, onAdd, onSubstract }) {
  return (
    <div className="cart container">
      <MyCart cartList={cartList} onAdd={onAdd} onSubstract={onSubstract} />
      <OrderSummary subtotal={subtotal} />
    </div>
  );
}
