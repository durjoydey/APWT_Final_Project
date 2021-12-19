import React, {useState, useEffect} from "react";
import axios from "axios";


function Createuser() {
  const [inputs, setInputs] = useState({
    Name:"",Phone:"",Address:"",Username:"",Email:"",Password:"",Usertype:"Deliveryman",Profileimg:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("user/create",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);
        window.location='/userlist';
    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <form  align="center" onSubmit={handleSubmit}>
<h1 style={{backgroundColor: "lightblue"}}>Resgistration</h1>

      <div>
     <b> Name:</b>
      <input type="text" name="Name" value={inputs.Name} placeholder="Name" onChange={handleChange} />

      </div>
      <div>
        
      <b>Phone Number:</b>
      <input type="text" name="Phone" value={inputs.Phone} placeholder="Phone" onChange={handleChange} />

      </div>
     
      <div>
      <b>Address:</b>
      <input type="text" name="Address" value={inputs.Address} placeholder="Address" onChange={handleChange} />

      </div>
     
      <div>
     <b>Username:</b>
      <input type="text" name="Username" value={inputs.Username} placeholder="Username" onChange={handleChange} />

      </div>
     
      <div>
      <b>Email:</b>
      <input type="text" name="Email" value={inputs.Email} placeholder="Email" onChange={handleChange} />

      </div>
     
      <div>
     <b> Password:</b>
      <input type="text" name="Password" value={inputs.Password} placeholder="Password" onChange={handleChange} />

      </div>
    
      <div>
      <b>Usertype:</b>
      <input type="text" name="Usertype" value={inputs.Usertype} placeholder="Usertype" onChange={handleChange} />

      </div>

      <div>
      <b>Profile Picture:</b>
      <input type="text" name="Profileimg" value={inputs.Profileimg} placeholder="Profileimg" onChange={handleChange} />

      </div>


    



       <input type="submit" />
    </form>
  )
}






export default Createuser;