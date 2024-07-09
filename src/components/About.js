import React from 'react';
import bread from "../images/bread.jpg";
import '../css/style.css';


function About (){
  return (
    <div>
        <section className="about" id="about">
            <h1 className="heading">
                <span>about </span>us
            </h1>
            <div className="row">
                <div className="image">
                    <img src={bread} alt=" "/>
                </div>
                <div className="content">
                    <h3>What Makes Our Food Special?</h3>
                    <p>
                    Our food is special because it's crafted with passion, authenticity, and care. Every dish we create is a
                    reflection of our commitment to quality ingredients, innovative recipes, and culinary expertise.
                    
                    </p>
                    <p>
                    From farm-fresh produce to locally sourced meats and spices from around the globe, we carefully select each component to ensure an unforgettable dining experience.
                    </p>
                    <a href="#" className="btn">Lern More</a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default About;