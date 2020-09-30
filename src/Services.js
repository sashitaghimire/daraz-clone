import React from 'react';
import {Button} from "@material-ui/core";
import './Services.css';

function Services() {
    return (
        
            <div className="services">
                <Button >
                    <img className="services__img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1FpRrWlr0gK0jSZFnXXbRRXXa.jpg" alt=""/>
                     DarazMall</Button>
                <Button >
                    <img className="services__img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1nrY3Wlr0gK0jSZFnXXbRRXXa.png" alt=""/>
                     DMart</Button>
                <Button >
                    <img className="services__img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1hGBrWlr0gK0jSZFnXXbRRXXa.jpg" alt=""/> 
                    Recharge & eStore</Button>
                <Button >
                    <img className="services__img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1jKhsWlr0gK0jSZFnXXbRRXXa.jpg" alt=""/> 
                    GlobalCollection</Button>
                <Button>
                    <img className="services__img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1EepsWlr0gK0jSZFnXXbRRXXa.jpg" alt=""/> 
                    Daraz Quizzes</Button>
        </div>
    )
}

export default Services;
