import React from 'react';
import './Products.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function Products({image,description, price,rating}) {
    return (
        <div className="products">
             <img src={image} alt=""/>
            <div className="products__info">
            <p>{description}</p>
            <p className="products__">
                {price}
            </p>
            <div className="products__rating">
                {
                    Array(rating).fill().map((_)=>(
                        <p><StarRateIcon className="rating__icon"/></p>
                    ))
                }
            </div>
            
            </div>
        </div>
    )
}

export default Products;
