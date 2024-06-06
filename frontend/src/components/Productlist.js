import React ,{useState, useEffect}from "react";
import {Link} from 'react-router-dom';
const Productlist=()=>{
    const [products , setproducts]= useState([]);

    useEffect(()=>{
          getproducts();
    })
    const getproducts= async()=>{
        let result = await fetch('http://localhost:7000/product');
        result = await result.json();
        setproducts(result);
    }
    const deleteproduct= async (id)=>{
        console.warn(id)
        let result = await fetch(`http://localhost:7000/product/${id}`,{
            method:'Delete'
            
    });
    result = await result.json();
    console.warn(result)
    if(result){
        getproducts();
    }
    
}
    return(
        <div className="productlist">
            <h1>Products</h1>
            <ul className="headings">
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Brand</li>
                <li>Category</li>
                <li>Operations</li>
            </ul>
            
            {
                products.map((item , index)=>
            <ul key={item._id}>
                <li>{index + 1 } </li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.brand}</li>
                <li>{item.category}</li>
                <li><button className="buttond" onClick={()=>deleteproduct(item._id)}>Delete</button>
                <Link to ={"/Update/"+ item._id}>Update</Link></li>
            </ul>
                )
            }
        </div>
    )
}
export default Productlist;