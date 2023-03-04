export default function OrderSummary({ subtotal }) {
  return (
    <div className="cart__summary">
      <h3 className="cart__title">Order Summary</h3>
      <div className="cart__subtotal">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <button className="btn btn--primary">Checkout</button>
    </div>
  );
}
