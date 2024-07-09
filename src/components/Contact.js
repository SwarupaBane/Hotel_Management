import React, { useEffect, useState } from "react"
import '../css/style.css';
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Contact  () {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/sign",{
                email,number
            })
            .then(res=>{
                if(res.data=="exist"){
                    //history("/",{state:{id:email}})
                   alert("User alredy filled contact form")
                }
                else if(res.data=="notexist"){
                   history("/",{state:{id:email}})
                   alert("Successful")
               

                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

  return (
    <div>
        <section className='contact' id='contact'>
            <h1 className='heading'>
                <span>contact us</span>
            </h1>
     <div className='row'>
          
            <form action="POST">
            <h3>get in touch</h3>

            <div className='inputBox'>
                <span className='fas fa-envelope'></span>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
            </div>

            <div className='inputBox'>
                <span className='fas fa-phone'></span>
                <input type="number" onChange={(e) => { setNumber(e.target.value) }} placeholder="Number"  />
            </div>
            <input type='submit' onClick={submit} value="contact now" className='btn'/>
           </form>
         </div>


            <br />

            <Link to="/">Home page</Link>
        </section>
    </div>


  );
};

export default Contact;