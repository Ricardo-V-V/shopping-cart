import Card from './components/Card';

export default function Home({ products }) {
  const productList = products.map(product => {
      return (
        <Card key={product.id} {...product}/>
      );
  });

  return (
    <div className="cards container">
      {productList}
    </div>
  );
}
