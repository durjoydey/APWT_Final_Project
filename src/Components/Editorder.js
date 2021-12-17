import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Editorder() {
  const {id} = useParams();
  const [inputs, setInputs] = useState({
    O_id:"",user_id:"",U_username:"",P_tprice:"",Paymenttype:"",O_status:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(()=>{

    axios.get(`editorder/${id}`)
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
    axios.post("/updateorder/{id}",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);

    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
   
      <input type="Hidden" name="O_id" value={inputs.O_id} placeholder="Name" onChange={handleChange} />

      </div>
      <div>
        
     
      <input type="Hidden" name="user_id" value={inputs.user_id} placeholder="Phone" onChange={handleChange} />

      </div>
     
      <div>
      
      <input type="Hidden" name="U_username" value={inputs.U_username} placeholder="Address" onChange={handleChange} />

      </div>
     
      <div>
      
      <input type="Hidden" name="P_tprice" value={inputs.P_tprice} placeholder="Username" onChange={handleChange} />

      </div>
     
      <div>
      
      <input type="Hidden" name="Paymenttype" value={inputs.Paymenttype} placeholder="Email" onChange={handleChange} />

      </div>
     
      <div>
      Order Status:
      <select name="P_categories" onChange={handleChange} value={inputs.O_status}>
          <option value="">Choose...</option>
          <option value="Proccessing">Proccessing</option>
          <option value="Order has been accepted">Order has been accepted</option>
          <option value="2 days left">2 days left</option>
          <option value="1 day left">1 day left</option>
          <option value="2 hours away">2 hours away</option>
          <option value="10 minutes away">10 minutes away</option>
          <option value="2 minutes away">2 minutes away</option>
          <option value="Delivery Done">Delivery Done</option>    
               
</select>
      </div>
   
    
      




      <input type="submit" placeholder="Edit" />
    </form>
  )
}






export default Editorder;