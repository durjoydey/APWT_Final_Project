import React, {useState, useEffect} from "react";
import axios from "axios";
import OrderdetailsPost from './OrderdetailsPost';

const Orderdetailslist = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("orderdetail/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
            
        });
    },[]);

    return(
        <div>
            {<table>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Catgegories</th>
                    <th>Product Quantity</th>
                    <th>Product Total Price</th>
                    <th>Product size</th>
                    <th>Username</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.order_id}</td>
                    <td >{post.P_name}</td>
                    <td >{post.P_price}</td>
                    <td >{post.P_categories}</td>
                    <td >{post.P_quantity}</td>
                    <td >{post.P_tprice}</td>
                    <td >{post. P_size}</td>
                    <td >{post.U_username}</td>
                </tr>
                    ))}
            </table> }
           
                
        </div>
    )

}
export default Orderdetailslist;