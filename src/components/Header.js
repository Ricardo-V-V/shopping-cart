import { Link } from 'react-router-dom';

export default function Header({ count }) {
  return (
    <header className="header">
      <div className="header__promo"></div>
      <div className="container">
        <Link to="/">
          <img
            src="https://placeholder.com/90x45"
            alt="logo"
            className="header__logo"
          />
        </Link>
        <Link to="/cart">
          <div className="header__icon-box">
            <img
              src="https://placeholder.com/24x24"
              alt="logo"
              className="header__icon"
            />
            <span className="header__count">{ count }</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
