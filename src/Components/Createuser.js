import React, {useState, useEffect} from "react";
import axios from "axios";



function Createuser() {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [usertype,setUsertype]=useState("");
    const [profileimg,setProfileimg]=useState("");

   function saveData()
   {
     let data={name,phone,address,username,email,password,usertype,profileimg}
   // console.warn(data);
     fetch("http://127.0.0.1:8000/api/user/create", {
       method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body:JSON.stringify(data)
     }).then((resp)=>{
       // console.warn("resp",resp);;
       resp.json().then((result)=>{
         console.warn("result",result)
       })
     })
   }
     return (
       <div className="App">
         <h1>POST API Example </h1>  
         <label>Name:  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input> </label> <br /> <br />
        <label>Phone: <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}></input> </label> <br /> <br />
        <label>Address: <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input> </label> <br /> <br />
        <label>UserName: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input> </label> <br /> <br />
        <label>Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input> </label> <br /> <br />
        <label>Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> </label> <br /> <br />
        <label>Usertype: <input type="text" value={usertype} onChange={(e)=>setUsertype(e.target.value)}></input> </label> <br /> <br />
        <label>profile img: <input type="text" value={profileimg} onChange={(e)=>setProfileimg(e.target.value)}></input> </label> <br /> <br />
         <button type="button" onClick={saveData} >Save New User</button>
       </div>
     );
   }


export default Createuser;