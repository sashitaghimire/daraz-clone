import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import Services from './Services';
import FlashSale from './FlashSale';
import PersonalizedProducts from './PersonalizedProducts';
import Footer from './Footer';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <Services />
      <FlashSale />
      <PersonalizedProducts />
      <Footer/>
      <Login/>


    </div>
  );
}

export default App;
