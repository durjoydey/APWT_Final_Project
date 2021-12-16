import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link class="btn btn-primary" to="/createuser">Create User</Link>
            <Link class="btn btn-primary" to="/userlist">User List</Link>
            <Link class="btn btn-primary" to="/deliveryconadd">Add Delivery</Link>
            <Link class="btn btn-primary" to="/deliveryconlist">Delivery List </Link>
            <Link class="btn btn-primary" to="/productadd">Add Product</Link>
            <Link class="btn btn-primary" to="/productlist">Product List</Link>
            <Link class="btn btn-primary" to="/orderdeatiladd">Add Order Deatils</Link>
            <Link class="btn btn-primary" to="/orderdetailslist">Order Deatils List</Link>
            <Link class="btn btn-primary" to="/orderadd">Add Order</Link>
            <Link class="btn btn-primary" to="/orderlist">See All Delivery Requests</Link>
            <Link class="btn btn-primary" to="/login">Login</Link>
        </div>

    )
}

export default Head;