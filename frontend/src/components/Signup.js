import React ,{useEffect} from "react";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
const Signup=()=>{
    const[name,setName]=useState("")
    const[password,setpassword]=useState("")
    const[email,setemail]=useState("")
    const navigate = useNavigate();
   
    useEffect(()=>{
        const a=localStorage.getItem('user');
        if(a){
             navigate('/')
        }
    })
    const collectdata=async ()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:7000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result))
        if(result)
            {
                navigate('/')
            }
    }
    return(
        <div className="input">
            <h1>Register</h1>
            <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter Name"/>
            <input className="inputbox" type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email"/>
            <input className="inputbox" type="text"value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="enter password"/>
            <button onClick={collectdata} className="button" type="button">Sign up</button>
        </div>
    )
};

export default Signup;