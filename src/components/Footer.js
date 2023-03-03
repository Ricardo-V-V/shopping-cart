import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="container">
          <Link className="footer__link" to="/cart">
            Shopping Cart
          </Link>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>Created by Rircardo Villalobos</p>
        </div>
      </div>
    </footer>
  );
}
