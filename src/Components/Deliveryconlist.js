import React, {useState, useEffect} from "react";
import axios from "axios";
import DeliveryconPost from './DeliveryconPost';

const Deliveryconlist = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("deliverycon/list")
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
                    <th>Payment Price</th>
                    <th>Username</th>
                    <th>Delivery Status</th>
                    <th>Delivery Time</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.Ord_id}</td>
                    <td >{post.Pay_price}</td>
                    <td >{post.D_username}</td>
                    <td >{post.D_Status}</td>
                    <td >{post.D_time}</td>
                </tr>
                    ))}
            </table> }
         

                
        </div>
    )

}
export default Deliveryconlist;