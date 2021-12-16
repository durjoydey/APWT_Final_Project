import React, {useState, useEffect} from "react";
import axios from "axios";
import OrderPost from './OrderPost';

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
                    <OrderPost id={post.id}  O_id={post.O_id} user_id={post.user_id} U_username={post.U_username} P_tprice={post.P_tprice} Paymenttype={post.Paymenttype} O_status={post.O_status} key={post.id}></OrderPost>


                ))
            }

                
        </div>
    )

}
export default Orderlist;