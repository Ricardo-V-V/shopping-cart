import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Home';
import Cart from './Cart';
import SharedLayout from './components/SharedLayout';
import data from './data.json';

export default function App() {
  const [productData, setProductData] = useState(data.products);

  const cartList =
    productData.filter((product) => {
      return product.buyQty > 0;
    }) || [];

  const count = cartList.reduce((a, b) => {
    return a + b.buyQty;
  }, 0);

  const subtotal = cartList.reduce((a, b) => {
    return a + b.price * b.buyQty;
  }, 0);

  function handleAdd(id) {
    setProductData((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            buyQty: product.buyQty + 1,
          };
        } else {
          return product;
        }
      });
    });
  }

  function handleSubstract(id) {
    setProductData((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            buyQty: product.buyQty - 1,
          };
        } else {
          return product;
        }
      });
    });
  }

  function handleRemove(id) {
    setProductData((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            buyQty: 0,
          };
        } else {
          return product;
        }
      });
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout count={count} />}>
          <Route
            index
            element={
              <Home
                products={productData}
                onAdd={handleAdd}
                onSubstract={handleSubstract}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartList={cartList}
                subtotal={subtotal}
                onAdd={handleAdd}
                onSubstract={handleSubstract}
                onRemove={handleRemove}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
