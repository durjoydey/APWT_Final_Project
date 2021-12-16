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
                <span>Order Id: {props.O_id}<b/></span>
                <span>User Id: {props.user_id}<b/></span>
                <span>User username: {props.U_username}<b/></span>
                <span>Product Total Price: {props.P_tprice}<b/></span>
                <span>Payment Type: {props.Paymenttype}<b/></span>
                <span>Order Status: {props.O_status}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;