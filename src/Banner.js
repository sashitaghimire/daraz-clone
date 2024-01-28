import React from 'react';
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';


function Banner() {
    return (
        <div className="banner">
            <div className="banner__category">
            <List className="bannerCategory__list" >
            <ListItemText>Electronic Accessories</ListItemText>
            <ListItemText>Electronic Devices</ListItemText>
            <ListItemText>Health & Beauty</ListItemText>
            <ListItemText>TV & Home Appliances</ListItemText>
            <ListItemText> Home & Lifestyle</ListItemText>
            <ListItemText>Groceries & Pets</ListItemText>
            <ListItemText>Sports & Outdoor</ListItemText>
            <ListItemText>Babies & Toys</ListItemText>
            <ListItemText>Men's Fashion</ListItemText>
            <ListItemText>Women's Fashion</ListItemText>
            <ListItemText>Watches & Accessories</ListItemText>
            <ListItemText>Automotive & Motorbike</ListItemText>
                </List>
            </div>
            <Carousel className="image__carousel"showArrows={false} showStatus={false} showThumbs={false} selectedItem={false} showIndicators ={true} infiniteLoop autoPlay={true}>
            <div className="image__carousels">
            <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1QUn2Wlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg" alt=""/>
            </div>
                <div   className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18bZYWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg" alt="" />
                    
                </div>
                <div  className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ZKm_iCslXu8jSZFuXXXg7FXa.jpg_2200x2200Q100.jpg_.webp" alt="" />
                    
                </div>
                <div   className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1rgiuWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp" alt="" />
                    
                </div>
                <div   className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1IepVWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp" alt="" />
                    
                </div>
                <div className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12xhVWlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp" alt=""/>

                </div>
                <div className="image__carousels">
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1cmG5Wlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp" alt=""/>

                </div>
            </Carousel>
        </div>
    )
}

export default Banner;
