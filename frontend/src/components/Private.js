import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const Private=()=>{
    const a= localStorage.getItem('user');
    return a?<Outlet />:<Navigate to ="/signup" />
    
}
export default Private;