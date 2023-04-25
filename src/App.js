
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';

import Products from './components/Products';
import Signup from './components/Signup';
import Home from './components/Home';
import Product from './components/Product';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>} />
      {/* here for useparams the syntax is important /products/:product because from the begining we are using / so we need to mark it after the products also */}
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<CheckOut/>} />
    </Routes>
   <Footer/>
    </>
  );
}

export default App;
