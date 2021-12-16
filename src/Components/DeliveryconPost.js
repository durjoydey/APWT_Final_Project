import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "Blue",
        color:"Pink",
        padding: "15px",
    }

    return (
            <div style={PostStyle}>

                <span>Id: {props.id} <b/></span>
                <span>Order ID: {props.Ord_id}<b/></span>
                <span>Payment Price: {props.Pay_price}<b/></span>
                <span>Username: {props.D_username}<b/></span>
                <span>Delivary Status: {props.D_Status}<b/></span>
                <span>Delivery Time: {props.D_time}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;