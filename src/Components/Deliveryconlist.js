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
                    <DeliveryconPost id={post.id}  Ord_id={post.Ord_id} Pay_price={post.Pay_price} D_username={post.D_username} D_Status={post.D_Status} D_time={post.D_time} key={post.id}></DeliveryconPost>


                ))
            }

                
        </div>
    )

}
export default Deliveryconlist;