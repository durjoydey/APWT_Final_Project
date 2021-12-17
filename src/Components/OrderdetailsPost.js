import React from "react";

const Post = (props)=>{

    const PostStyle={
            backgroundColor: "Blue",
            color:"Pink",
            padding: "15px",
    }

    return (
            <div style={PostStyle}>
                <span>id: {props.id}<b/></span>
                <span>Order Id: {props.order_id}<b/></span>
                <span>Product Name: {props.P_name}<b/></span>
                <span>Product Price: {props.P_price}<b/></span>
                <span>Product Category: {props.P_categories}<b/></span>
                <span>Product Quantity: {props.P_quantity}<b/></span>
                <span>Product Total Price: {props.P_tprice}<b/></span>
                <span>Product Size: {props.P_size}<b/></span>
                <span>Username: {props.U_username}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;