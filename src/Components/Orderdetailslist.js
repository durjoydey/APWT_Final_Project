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
            {/* <table>
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.med_name}</td>
                    <td >{post.med_details}</td>
                </tr>
                    ))}
            </table> */}
            {
                posts.map(post=>(
                    <OrderdetailsPost id={post.id}  order_id={post.order_id} P_name={post.P_name} P_price={post.P_price} P_categories={post.P_categories} P_quantity={post.P_quantity} P_tprice={post.P_tprice} P_size={post.P_size} U_username={post.U_username} key={post.id}></OrderdetailsPost>


                ))
            }

                
        </div>
    )

}
export default Orderdetailslist;