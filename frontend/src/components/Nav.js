import React from "react";
import {Link , useNavigate} from 'react-router-dom';

const Nav=()=>{
    const a= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('./signup')
    }
    return(
        <div>
        { a?<ul className="nav-ul">
        <li><Link to ="/">Products</Link> </li>
        <li><Link to ="/add">Add Product</Link> </li>
        <li><Link to ="/Update/:id">Update </Link> </li>
        <li><Link to ="/profile">Profile</Link> </li>
        <li><Link onClick={logout}  to ="/signup">Logout</Link></li>      
        </ul> 
        :
        <ul className="nav-ul nav-right" >
            <li><Link to ="/Signup">Signup</Link> </li>
         <li><Link to ="/Login">Login</Link> </li>
        </ul>
         }
        </div>
    )

}
export default Nav;