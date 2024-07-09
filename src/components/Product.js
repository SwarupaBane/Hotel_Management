import React from 'react';
import {product} from '../data';
import '../css/style.css';


function Product  () {
  return (
    <div>
        <section className="products" id="products">
            <h1 className="heading">
                our<span> products</span>
            </h1>
            <div className='box-container'> 
              {product.map((item,index)=>(
                 <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fas fa-shopping-cart'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div> 

                    <div className='image'>
                        <img src={item.img} alt=''></img>
                    </div>

                    <div className='content'>
                        <h3>fresh food</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                        </div>
                        <div className="price">
                            $15.99 <span>$22.99</span>
                        </div>
                    </div>
                    </div>
              ))}
            </div>
        </section>
    </div>
  );
};

export default Product;