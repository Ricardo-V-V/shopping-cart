import CartItem from './CartItem';

export default function MyCart({ cartList, onAdd, onSubstract }) {
  const itemsList = cartList.map((product) => {
    return (
      <CartItem
        key={product.id}
        {...product}
        onAdd={onAdd}
        onSubstract={onSubstract}
      />
    );
  });

  return (
    <div className="cart__items">
      <h3 className="cart__title">My Cart</h3>
      {itemsList.length > 0 ? (
        itemsList
      ) : (
        <p className="cart__empty">Your cart is empty</p>
      )}
    </div>
  );
}
