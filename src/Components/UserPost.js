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
                <span>User Name: {props.U_name}<b/></span>
                <span>User phone number: {props.U_phone}<b/></span>
                <span>User address: {props.U_address}<b/></span>
                <span>User username: {props.U_username}<b/></span>
                <span>User email: {props.U_email}<b/></span>
                <span>User password: {props.U_password}<b/></span>
                <span>Usertype: {props.Usertype}<b/></span>
                <span>User profile image: {props.U_profileimg}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;