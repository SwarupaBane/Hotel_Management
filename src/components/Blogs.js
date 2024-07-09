import React from 'react';
import {blog} from "../data";


function Blogs  () {
  return (
    <>
    <section className='blogs' id="blogs">
        <h1 className='heading'>Our <span>Blogs</span>
        </h1>
        <div className='box-container'>
            {blog.map((item,index)=>(
                <div className='box' key={index}>
                    <div className='image'>
                        <img src={item.img} alt=''></img>
                    </div>
                    <div className='content'>
                        <a href='#' className='title'>
                            tasty and refreshing spices
                        </a>
                        <span>by admin / 21st may,2022</span>
                        <p>
                        Variety of recipes and cooking-related articles with a focus on thoughtful and stylish living. Many recipes have flavorful twists, and the site offers unique kitchenware for sale.
                        </p>
                        <a href='#' className='btn'>read more</a>
                    </div>
                </div>
            ))}
        </div>
        </section>
        </>
  );
};

export default Blogs;