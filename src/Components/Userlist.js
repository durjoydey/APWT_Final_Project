import React, {useState, useEffect} from "react";
import axios from "axios";
import UserPost from './UserPost';
import { Link } from "react-router-dom";
const Userlist = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "pink",
        color:"black",
        padding: "10px",
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/user/list")
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
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Usertype</th>
                    <th>Image</th>
                </tr>
                {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.U_Name}</td>
                    <td >{post.U_phone}</td>
                    <td >{post.U_address}</td>
                    <td >{post.U_username}</td>
                    <td >{post.U_email}</td>
                    <td >{post. U_password}</td>
                    <td >{post.Usertype}</td>
                    <td >{post. U_profileimg}</td>
                    <td><Link to={`edituser/${post.id}`}>Update Profile</Link></td>
                </tr>
                    ))}
            </table> }
          

                
        </div>
    )

}
export default  Userlist ;