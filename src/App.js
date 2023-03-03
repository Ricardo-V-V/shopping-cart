import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';
import SharedLayout from './components/SharedLayout';


function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<SharedLayout />} >
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
   </Routes>
  </BrowserRouter>
  
  );
}

export default App;
