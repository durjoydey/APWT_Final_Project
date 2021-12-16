import React from "react"
function User(props){

    return(
        <div>
            <p>User Name: <b> {props.name} </b>, ID:<b> {props.id}</b>, Address:<b> {props.address}</b> </p>
        </div>

    )
}

export default User;