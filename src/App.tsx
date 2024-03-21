import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import FormPage from './pages/FormPage';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="category" element={<CategoryPage />} />

          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
