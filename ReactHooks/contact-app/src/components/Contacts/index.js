import {useState,useEffect}from "react";

import "./styles.css"
import List from "./List"
import Form from "./Form";

function Contacts(){

    const [contacts,setContacts] = useState([
        {fullname:"murat",
    phone_number:"12345"},
        {fullname:"taha",
    phone_number:"12345"},
        {fullname:"ömer",
    phone_number:"12345"}
    ]);

   useEffect(()=>{
console.log(contacts)
   },[contacts])    
 
    return(

        <div id="container">
            <List contacts={contacts}/>
            <Form  addContact = {setContacts} contacts={contacts}/>
        </div>
    )
}


export default Contacts;