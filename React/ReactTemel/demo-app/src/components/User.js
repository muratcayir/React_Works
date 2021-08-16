import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react"
import axios from 'axios'



function User() {
   const [user,setUser] = useState({})
   const [load,setLoad] = useState(true)
   const { id } = useParams();
  

useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>setUser(res.data))
    .finally(()=>setLoad(false))
}, [id])
    return (
      <div>
        <h3>ID: {id}</h3>
        {load&&<div>Loading...</div>}
        {!load && <code>{JSON.stringify(user)}</code>}
        <Link to={`/users/${parseInt(id)+1}`}>Next User({parseInt(id)+1})</Link>
      </div>
    );
  }

export default User;