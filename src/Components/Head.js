import React from "react"
import { Link, useHistory } from "react-router-dom";
const Head = () => {
   
    return(
        <div align="center" style={{backgroundColor: "lightblue"}} >
            <Link class="btn btn-success" to="/">Home</Link>
            <Link  className="btn btn-primary" to="/createuser">Register</Link> <b/>
            <Link class="btn btn-primary" to="/userlist">User List</Link>
           
            <Link class="btn btn-primary" to="/deliveryconlist">Delivery List </Link>
            
            <Link class="btn btn-primary" to="/productlist">Product List</Link>
      
            <Link class="btn btn-primary" to="/orderdetailslist">Order Deatils List</Link>
        
            <Link class="btn btn-primary" to="/orderlist">See All Delivery Requests</Link>
            <Link class="btn btn-info" to="/login">Login</Link>
           
        </div>

    )
}

export default Head;