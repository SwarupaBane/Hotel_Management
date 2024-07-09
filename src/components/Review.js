import React from 'react';
import {review} from '../data';
//import quoteImage from "../images/quoteImage.png";
import '../css/style.css';

function Review () {
  return (
    <div>
        <section className='review'>
            <h1 className='heading'>customer's<span> Review</span>
            </h1>
            <div className='box-container'>
                {
                    review.map((item,index)=>(
                        <div className='box'>
                           {/* <img src={quoteImage} alt='' className='quote'/> */}
                            <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.
                            </p>
                            <img src={item.img} alt='' className='user'/>
                            <h3>jackson</h3>
                            <div className='stars'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                            </div>
                        </div>
                    
                    ))
                }
            </div>
        </section>
    </div>
  );
};

export default Review;