import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ThemeProvider from './context/ThemeContext';
import ToastProvider from './context/ToastContext';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import NotFound from './components/pages/notfound/NotFound';
import ItemListContainer from './components/pages/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/pages/item-detail-container/ItemDetailContainer';
import Cart from './components/pages/cart/cart';  
import Checkout from './components/pages/checkout/checkout';
import Success from "./components/pages/success/Success";


function App() {
  return (
    <CartProvider>
      <ThemeProvider>    
        <ToastProvider>
          <BrowserRouter>
            <Navbar />
            <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/itemlist" element={<ItemListContainer/>}/>
              <Route path="/itemdetail/:productId" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<NotFound />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            </div>
            <Footer/>
          </BrowserRouter>
        </ToastProvider>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
