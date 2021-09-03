import React from 'react'
import {useState}from 'react';

function State() {
    const [name ,setName] = useState("murat")
const [age,setAge]= useState(25)
const [friends,setFriends]=useState(["murat","taha"])
const [adress,setAdress] =useState({title:"elazig",zip:23000})
    return (
        <div>
                 <h1>selam {name}</h1>
     <h3>{age}</h3>
     <button onClick={()=>setName("kazım")}> Değiştir isim</button>
     <button onClick={()=>setAge(24)}>DEğiştir yas</button>
   
     <h3>Friends</h3>
      {friends.map((friends,index)=>( <div key={index} > {friends}</div>))}
     <button onClick={()=>setFriends([...friends,"kazım"])}>ekle friends</button>

     <h3>Adress</h3>
     <h3>{adress.title} --- {adress.zip}</h3>
     <button onClick={()=>setAdress({...adress,title:"bingol"})}>Adress change</button>
        </div>
    )
}

export default State
