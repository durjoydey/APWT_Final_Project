import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductPost from './ProductPost';

const ProductList = ()=>{
    const [posts, setPosts] = useState([]);
    const PostStyle={
        backgroundColor: "pink",
        color:"black",
        padding: "10px",
    }

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
            { <table style={{backgroundColor: "lightblue"}} align="center">
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Categories</th>
                    <th>Product Quantity</th>
                    <th>Product Details</th>
                    <th>Product Image1</th>
                    <th>Product Image2</th>
                    <th>Product Image3</th>
                </tr>
                {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.P_id}</td>
                    <td >{post.P_name}</td>
                    <td >{post.P_price}</td>
                    <td >{post.P_categories}</td>
                    <td >{post.P_quantity}</td>
                    <td >{post.P_details}</td>
                    <td >{post.P_img1}</td>
                    <td >{post.P_img2}</td>
                    <td >{post. P_img3}</td>
                </tr>
                    ))}
            </table> }
          

                
        </div>
    )

}
export default ProductList;