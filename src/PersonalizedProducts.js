import React from 'react';
import Products from './Products';
import './PersonalizedProducts.css';


function PersonalizedProducts() {
    return (
        <div className="personalizedProducts">
            <h4>Just for you</h4>
            <div className="personalizedProducts__row">
            <Products
            image="https://static-01.daraz.com.np/p/8f52113d1ef26e183e8ba330e3d1efb4.jpg"
            description="Casio Sheen Women's Watch"
            price="Rs 20,000"
            rating={3}
            />
            <Products
            image="https://static-01.daraz.com.np/p/ec8873f5ba0678b307c095a022e7f226.jpg"
            description="Yasuda smart led TV-black"
            price="Rs 68,000"
            rating={5}
            />
            <Products
            image="https://static-01.daraz.com.np/p/7fecf5de50e1ac15e5402d23450cf5b1.jpg"
            description="Fawless Epliator Wax Finishing"
            price="Rs 700"
            rating={2}
            />
            <Products
            image="https://static-01.daraz.com.np/p/7b030fabdd96683e04f43854a2e976a3.jpg"
            description="Samsung Galaxy Note 10"
            price="Rs 129,599"
            rating={4}
            />
            <Products
            image="https://static-01.daraz.com.np/p/ec88d9662889480f8a74dd00749d9aa1.jpg"
            description="Aamayra Fashion House Orange Kurti"
            price="Rs 3,000"
            rating={5}
            />
            <Products
            image="https://static-01.daraz.com.np/p/55da6eea4921294226272100ea8c47f9.png"
            description="OnePlus 8 Pro"
            price="Rs 110,000"
            rating={3}
            />
            </div>
            <div className="personalizedProducts__row">
            <Products
            image="https://static-01.daraz.com.np/p/aab7c8e5db7b4155827a81e57702ba1e.jpg_400x400q75-product.jpg_.webp"
            description="Color Drawing Magnetic Board"
            price="Rs 399"
            rating={3}
            />
            <Products
            image="https://static-01.daraz.com.np/p/4ab9e5a487400f03e4026e3946a23ed8.jpg_400x400q75-product.jpg_.webp"
            description="Omega 10 litre Oven"
            price="Rs 3,950"
            rating={5}
            />
            <Products
            image="https://static-01.daraz.com.np/p/721755d1f7c2ac87942959c7914a8ee1.jpg_400x400q75-product.jpg_.webp"
            description="Summer Men Wind Cheater"
            price="Rs 1,150"
            rating={2}
            />
            <Products
            image="https://static-01.daraz.com.np/p/6e9fbb9350bde64cdba4eefe3fe234b0.jpg_400x400q75-product.jpg_.webp"
            description="Nestle Kitkat Chuncky Red"
            price="Rs 95"
            rating={5}
            />
            <Products
            image="https://static-01.daraz.com.np/p/b889a966738666a1970afc627b983acb.jpg_400x400q75-product.jpg_.webp"
            description="LG 8.0 KG Washing Machine"
            price="Rs 82,000"
            rating={5}
            />
            <Products
            image="https://static-01.daraz.com.np/p/5e1ae62255418c5e9859a88511c2a92a.jpg_400x400q75-product.jpg_.webp"
            description="To kill a mocking bird by Harper Lee"
            price="Rs 640"
            rating={3}
            />
            </div>
            <button >Load More</button>

        </div>
    )
}

export default PersonalizedProducts;
