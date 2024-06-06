import React ,{useEffect , useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
const Update = ()=>{
    const[name,setname]=useState("")
    const[price,setprice]=useState("")
    const[brand,setbrand]=useState("")
    const[category,setcategory]=useState("")
    const params = useParams();
    const navigate= useNavigate();
    useEffect(()=>{
         
        getProductdetails();
    },[])
    const getProductdetails= async()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:7000/product/${params.id}`);
            result = await result.json();
            console.warn(result)
            setname(result.name);
            setprice(result.price);
            setbrand(result.brand);
            setcategory(result.category)
    }
   
    const updateproduct = async ()=>{
        console.warn(name,price,brand,category);
        let result = await fetch(`http://localhost:7000/product/${params.id}`,{
            method:'put',
            body: JSON.stringify({name,price,brand,category}),
            headers:{
                'Content-type':"Application/json"
            }
    });
            result = await result.json();
            console.warn(result)
            navigate('/')
        
    }
    return(
        <div className="input">
            <h1>Update Product</h1>
            <input  type= "text"  placeholder="enter Name"  className="inputbox" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input  type= "text"  placeholder="enter Price"  className="inputbox" value={price} onChange={(e)=>setprice(e.target.value)}/>
            <input  type= "text" placeholder="enter Brand"  className="inputbox"value={brand} onChange={(e)=>setbrand(e.target.value)}/>
            <input  type= "text" placeholder="enter Category"  className="inputbox"value={category} onChange={(e)=>setcategory(e.target.value)}/>
            <button onClick={ updateproduct }  type="button" className="button">Update Product</button>
        </div>
    )
};
 export default Update; 