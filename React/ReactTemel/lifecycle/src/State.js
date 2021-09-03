import {useState} from "react"

function State() {

    // const [name,setName] = useState("Murat")
    // const [job,setJob] = useState("Engineer")
    // const [number,setNumber] = useState([1,2,3,4,5,6,7,8,23])
    const [form,setForm] = useState({name:"",surname:""})


    const onChangeInput= (e)=>{

        setForm({...form,[e.target.name]:e.target.value})
    }
    return (
        <div>
            {/* <h1>{name}</h1>
            <button onClick={()=>setName("Mehmet")}>Name</button>
            <h1>{job}</h1>
            <button onClick={()=>setJob("Doctor")}>Engineer</button>
            {
                number.map((number,index)=>(<ul key={index}>
                    <li>
                   {number}
                    </li>
                </ul>))
            }

          <button onClick={()=>setNumber([...number,(45)])}>Engineer</button> */}

          Name <br/>
          <input name="name" value={form.name} onChange={onChangeInput}/>
          <br/>
          <br/>
        </div>
    )
}

export default State
