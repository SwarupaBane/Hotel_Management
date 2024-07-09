import React from 'react';
import"./css/style.css";
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Product from './components/Product';
import Review from './components/Review';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Cart from './components/Cart';


function App() {
  return (
    <div>
      {/* <Navbar/>
       <Home/> 
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blogs/>
      <Footer/> */}

      <BrowserRouter>
      <Navbar></Navbar>
         <Routes>
           <Route path="home" element={<Home/>}></Route>
           <Route path="about" element={<About/>}></Route>
           <Route path="menu" element={<Menu/>}></Route>
           <Route path="product" element={<Product/>}></Route>
           <Route path="review" element={<Review/>}></Route>
           <Route path="contact" element={<Contact/>}></Route>
           <Route path="blogs" element={<Blogs/>}></Route>
           <Route path="cart" element={<Cart/>}></Route>


         </Routes>
         {/* <Footer/> */}
       </BrowserRouter>


    </div>
  );
};

export default App;
