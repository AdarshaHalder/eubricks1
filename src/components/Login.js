import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./login.css"
import pdt1 from "./Images/Rectangle 1.png"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("https://todoadarsh12.onrender.com/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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
        // <div className="login">
 
        //      <h1>Login</h1> 

        //      <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
        //         <input type="submit" onClick={submit} />

        //     </form> 
            

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/signup">Signup Page</Link>

        // </div>
        <div className="bg-blue-400 h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: '500px'}}>
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">
                Welcome &#10;&#13; to proton plus
                </h1>
                <div className="w-full mt-4">
           
                  <form className="form-horizontal w-3/4 mx-auto" method="POST" action="post">
                    <div className="flex flex-col mt-4">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                    </div>
                    <div className="flex flex-col mt-4">
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                    </div>
                    <div className="flex items-center mt-4">
                      <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                    </div>
                    <div className="flex flex-col mt-8">
                    <input type="submit" onClick={submit} />
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                      Forgot Your Password?

                    </a>
                    <br />
          <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{background: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
          </div>
          &nbsp;&nbsp;&nbsp;</div>
      </div>
    )
}

export default Login