import React from 'react';
import {menu} from '../data';
import '../css/style.css';

function Menu () {
  return (
    <div>
        <section className="menu" id="menu">
            <h1 className="heading">our <span>menu</span>
            </h1>
            <div className="box-container">
           { menu.map((item,index)=>(
            <div className="box">
                <img src={item.img} alt=''/>
                <h3>tasty and healthy</h3>
                <div className="price">
                    $15.99 <span>20.99</span>
                </div>
                <a href=''className='btn'>Most Liked
                </a>
            </div> 
            ))}
            </div>
        </section>
    </div>
  );
};

export default Menu;