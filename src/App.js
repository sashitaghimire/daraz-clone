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
import { useStateValue } from './StateProvider';


function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
    {!user ?(
        <Login />
      ):(
        <>
    <Header />

    <div className="app_body">
      
      <Navbar />
      <Banner />
      <Services />
      <FlashSale />
      <PersonalizedProducts />
      <Footer/>
    
    </div>
    </>
      )}

    </div>
  );
}

export default App;
