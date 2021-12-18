import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Edituser() {
  const {id} = useParams();
  const [inputs, setInputs] = useState({
    U_Name:"",U_phone:"",U_address:"",U_username:"",U_email:"",U_password:"",Usertype:"",U_profileimg:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(()=>{

    axios.get(`edituser/${id}`)
        .then(resp=>{
        console.log(resp.data);      
        setInputs(resp.data);
    }).catch(err=>{

        console.log(err);

        });

    },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("/updateuser/{id}",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);
window.location='/userlist';
    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
   Name:
      <input type="text" name="U_Name" value={inputs.U_Name} placeholder="Name" onChange={handleChange} />

      </div>
      <div>
        Phone Number:
     
      <input type="text" name="U_phone" value={inputs.U_phone} placeholder="Phone" onChange={handleChange} />

      </div>
     
      <div>
      Address:
      <input type="text" name="U_address" value={inputs.U_address} placeholder="Address" onChange={handleChange} />

      </div>
     
      <div>
      
      <input type="Hidden" name="U_username" value={inputs.U_username} placeholder="Username" onChange={handleChange} />

      </div>
     
      <div>
      Email:
      <input type="text" name="U_email" value={inputs.U_email} placeholder="Email" onChange={handleChange} />

      </div>
     
      <div>
   Password:
      <input type="text" name="U_password" value={inputs.U_password} placeholder="Password" onChange={handleChange} />
      </div>
   
      <div>
   
   <input type="Hidden" name="Usertype" value={inputs.Usertype} placeholder="Usertype" onChange={handleChange} />
   </div>
      
   <div>
   Profile Picture:
   <input type="text" name="U_profileimg" value={inputs.U_profileimg} placeholder="Profileimg" onChange={handleChange} />
   </div>



      <input type="submit" placeholder="Edit" />
    </form>
  )
}






export default  Edituser;