import CartIcon from '../icons/CartIcon';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header({ count }) {
  return (
    <header className="header">
      <div className="header__promo"></div>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <Link to="/cart">
          <div className="header__icon-box">
            <CartIcon />
            <span className="header__count">{count}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
