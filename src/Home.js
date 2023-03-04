import Card from './components/Card';

export default function Home({ products, onAdd }) {
  const productList = products.map((product) => {
    return <Card key={product.id} {...product} onAdd={onAdd} />;
  });

  return <div className="cards container">{productList}</div>;
}
