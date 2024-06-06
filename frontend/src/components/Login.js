import React  from "react";
import { useNavigate  } from "react-router-dom";

const Login = ()=>{
    const [email,setemail]= React.useState('');
    const [password,setpassword]= React.useState('');
    const navigate = useNavigate();
   
    const handleLogin= async ()=>{
        console.warn("email,password" , email,password)
        let result = await fetch('http://localhost:7000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
    });
    result = await result.json();
    console.warn(result)
    if(result.name){
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/")
    }
    else{
        
        alert("please enter correct details")
    }
}
    return(
        <div className="login">
            <h1>Login</h1>
            <input  type="text" className="inputbox"  placeholder="enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
            <input  type="text" className="inputbox"  placeholder="enter password"value={password} onChange={(e)=>setpassword(e.target.value)} /> 
            <button onClick={handleLogin} className="button" type="button">Login</button>
        </div>
    )
}
export default Login