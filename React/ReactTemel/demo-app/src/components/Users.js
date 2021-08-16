import {Link ,Switch,Route,useRouteMatch} from"react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import User from "./User"

function Users(){

    const [users,setUsers] = useState([])
    const [load,setLoad] = useState(true)

    const { path, url } = useRouteMatch();
    console.log(path,url)


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
                        <Link to={`${url}/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
        
        <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>
        </Route>
      </Switch>
             
       
        </>
    )
}


export default Users;