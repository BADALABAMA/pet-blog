import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="category" element={<CategoryPage />} />

          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
