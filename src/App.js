import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Home';
import Cart from './Cart';
import SharedLayout from './components/SharedLayout';
import data from './data.json';

export default function App() {
  const [productData, setProductData] = useState(
    data.products.map((product) => {
      return {
        ...product,
        buyQty: 0,
      };
    })
  );

  console.log(productData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home products={productData} />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
