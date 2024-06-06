
import React  from "react";
import { useState } from "react";
const Addproduct=()=>{
    const[name,setname]=useState("")
    const[price,setprice]=useState("")
    const[brand,setbrand]=useState("")
    const[category,setcategory]=useState("")
    
   
    const addproduct=async ()=>{
        console.warn(name,price,brand,category);
        let result = await fetch('http://localhost:7000/add',{
            method:'post',
            body: JSON.stringify({name,price,brand,category}),
            headers:{
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.warn(result);
        
    }
    return(
        <div className="input">
            <h1>Add Products</h1>
            <input className="inputbox" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter Name"/>
            <input className="inputbox" type="text" value={price} onChange={(e)=>setprice(e.target.value)} placeholder="enter Price"/>
            <input className="inputbox" type="text"value={brand} onChange={(e)=>setbrand(e.target.value)} placeholder="enter Brand"/>
            <input className="inputbox" type="text"value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="enter Category"/>
            <button onClick={addproduct} className="button" type="button">Add Product</button>
        </div>
    )
};
 export default Addproduct; 