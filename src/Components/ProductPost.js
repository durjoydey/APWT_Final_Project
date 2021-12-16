import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>id: {props.id}<b/></span>
                <span>Product Id: {props.P_id}<b/></span>
                <span>Product Name: {props.P_name}<b/></span>
                <span>Product Price: {props.P_price}<b/></span>
                <span>Product Category: {props.P_categories}<b/></span>
                <span>Product Quantity: {props.P_quantity}<b/></span>
                <span>Product Details: {props.P_details}<b/></span>
                <span>Product Image 1: {props.P_img1}<b/></span>
                <span>Product Image 2: {props.P_img2}<b/></span>
                <span>Product Image 3: {props.P_img3}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;