import {Link} from"react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"

function Users(){

    const [users,setUsers] = useState([])
    const [load,setLoad] = useState(true)


useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/")
    .then((res)=>setUsers(res.data))
    .finally(()=>setLoad(false))
}, [])
    return(
        <>
         <h2>Users</h2>
         {
            load&&<div>Loading...</div>
         }
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
       
             
       
        </>
    )
}


export default Users;