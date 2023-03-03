import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <section className="page-container">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
