import './FlashSale.css';
import React, {useState,useRef,useEffect} from 'react';
import {Button} from "@material-ui/core";


function FlashSale({}) {
    const[timerDays,setTimerDays] = useState('00');
   const [timerHours,setTimerHours] = useState('00');
   const [timerMinutes,setTimerMinutes] = useState('00');
   const [timerSeconds,setTimerSeconds] = useState('00');

   let interval = useRef();
   const startTimer = ()=>{

       const countdownDate = new Date("October 29, 2020 00:00:00").getTime();
       interval = setInterval(()=>{
           const now = new Date().getTime();
           const distance = countdownDate - now;


           const days = Math.floor(distance /(1000 * 60 * 60*24));
           const hours = Math.floor((distance %(1000 *60 * 60 *24 )/(1000 * 60 * 60)));
           const minutes = Math.floor((distance %(1000 *60 * 60)/(1000 * 60)));
           const seconds = Math.floor((distance %(1000 *60))/1000);

           if(distance <0){
               clearInterval(interval.current);

           }
           else{
               setTimerDays(days);
               setTimerHours(hours);
               setTimerMinutes(minutes);
               setTimerSeconds(seconds);
           }
       },1000)
   };
   useEffect(() => {
       startTimer();
       return()=>{
           clearInterval(interval.current);
       };
   },)

   
    return (
        <div className="flashSale">
            <h3>Flash Sale</h3>
            <div className="flashSale__container">
                <p className="flashSale__p">On Sale Now</p>
                <p >Ending in</p>
                <div className="countdown">
                    <button>{timerDays}</button>
                    <p>:</p>
                    <button>{timerHours}</button>
                    <p>:</p>
                    <button>{timerMinutes}</button>
                    <p>:</p>
                    <button>{timerSeconds}</button>
                </div>
                <Button className="flashSale__btn" variant="outlined">Shop More</Button>
            </div>
            <hr/>
            <div className="flashSale__product">
            <div className="product" >
                <img src="https://static-01.daraz.com.np/p/mdc/cd1d8e16bc077f40c7cda6df3397686b.jpg" alt=""/>
                <p>3 in 1 set ladies bag</p>
                <p className="rupees">Rs 900</p>
            </div>
            <div className="product" >
                <img src="https://static-01.daraz.com.np/p/8d4fc14d5794b6c4463960802c3e2874.png" alt=""/>
                <p>3 in 1 pro-gemeni rechargeable</p>
                <p className="rupees">Rs 900</p>
            </div>
            <div className="product" >
                <img src="https://static-01.daraz.com.np/p/393c5ee45c1bf8bcafd4f6562ed9393f.jpg" alt=""/>
                <p>Magic Silicon dishwasher</p>
                <p className="rupees">Rs 377</p>
            </div >
            <div className="product" >
                <img src="https://static-01.daraz.com.np/original/5bd23089fc851a70ff4efabaee07e792.jpg_400x400q75.jpg_.webp" alt=""/>
                <p>Colorful fidget spinner</p>
                <p className="rupees">Rs 119</p>
            </div>
            <div className="product" >
                <img src="https://static-01.daraz.com.np/p/27b7e2d08e666b9d356739f218991b87.jpg" alt=""/>
                <p>Natural Teeth Whitening</p>
                <p className="rupees">Rs 275</p>
            </div>
            <div className="product" >
                <img src="https://static-01.daraz.com.np/p/c78dc7c60c558cdbaca33c11b22b38ab.jpg" alt=""/>
                <p>Cooper handi set</p>
                <p className="rupees">Rs 1,425</p>
            </div>
            
            </div>
        </div>
    )
}

export default FlashSale;
