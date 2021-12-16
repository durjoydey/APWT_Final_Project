import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductPost from './ProductPost';

const ProductList = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("product/list")
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
                    <ProductPost id={post.id}  P_id={post.P_id} P_name={post.P_name} P_price={post.P_price} P_categories={post.P_categories} P_quantity={post.P_quantity} P_details={post.P_details} P_img1={post.P_img1} P_img2={post.P_img2} P_img3={post.P_img3} key={post.id}></ProductPost>


                ))
            }

                
        </div>
    )

}
export default ProductList;