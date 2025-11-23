import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import NotFound from './components/pages/notfound/NotFound';
import ItemListContainer from './components/pages/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/pages/item-detail-container/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/itemlist" element={<ItemListContainer/>}/>
        <Route path="/itemdetail/:productId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
