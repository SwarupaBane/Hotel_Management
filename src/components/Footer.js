import React from 'react'
import '../css/Footer.css'

function Footer () {
  return (
    <>
    <section className='footer'>
<div className='share'>
    <a href='#'className='fas fa-facebook-f'></a>
    <a href='#'className='fas fa-twitter'></a>
    <a href='#'className='fas fa-instagram'></a>
    <a href='#'className='fas fa-pinterest'></a>
    <a href='#'className='fas fa-linkedin'></a>
</div>
<div className='links'>
    <a href='#'>home</a>
    <a href='#'>about us</a>
    <a href='#'>menu</a>
    <a href='#'>products</a>
    <a href='#'>review</a>
    <a href='#'>contact</a>
    <a href='#'>blogs</a>

</div>
<div className='credit'>
    created by <span>coding circulate</span>
</div>
    </section>
    </>
  );
};

export default Footer;