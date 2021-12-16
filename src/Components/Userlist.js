import React, {useState, useEffect} from "react";
import axios from "axios";
import UserPost from './UserPost';

const Userlist = ()=>{
    const [posts, setPosts] = useState([]);

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
                    <UserPost id={post.id}  U_name={post.U_Name}  U_phone={post.U_phone} U_address={post.U_address} U_username={post.U_username} U_email={post.U_email} U_password={post.U_password} Usertype={post.Usertype} U_profileimg={post.U_profileimg}   key={post.id}></UserPost>


                ))
            }

                
        </div>
    )

}
export default  Userlist ;