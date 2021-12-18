import React, {useState, useEffect} from "react";
import axios from "axios";
import DeliveryconPost from './DeliveryconPost';

const Deliveryconlist = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "pink",
        color:"blcak",
        padding: "10px",
    }

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
             <table style={{backgroundColor: "lightblue"}} align="center">
                <tr>
                    <th>Order ID </th> <b/>
                    <th>Payment Price </th> <b/>
                    <th>Delivery Username</th> <b/>
                    <th>Delivery Status</th> <b/>
                    <th>Delivery Time </th> <b/>

                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.Ord_id}</td> <b/>
                    <td >{post.Pay_price}</td> <b/>
                    <td >{post.D_username}</td> <b/>
                    <td >{post.D_Status}</td> <b/>
                    <td >{post.D_time}</td> <b/>
                  
                </tr>
                    ))}
            </table> 
         

                
        </div>
    )

}
export default Deliveryconlist;