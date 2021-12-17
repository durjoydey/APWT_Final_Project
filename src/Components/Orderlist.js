import React, {useState, useEffect} from "react";
import axios from "axios";
import OrderPost from './OrderPost';
import { Link } from "react-router-dom";

const Orderlist = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("myorder/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            { <table>
                <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Product Total Price</th>
                    <th>Payment Type</th>
                    <th>Order Status</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.O_id}</td>
                    <td >{post.user_id}</td>
                    <td >{post.U_username}</td>
                    <td >{post.P_tprice}</td>
                    <td >{post.Paymenttype}</td>
                    <td >{post.O_status}</td>
                    <td><Link to={`editorder/${post.id}`}>Change Status</Link></td>
                </tr>
                    ))}
            </table> }
          

                
        </div>
    )

}
export default Orderlist;