import React from 'react'
import {useState} from "react"

const defaultItems=[{name:"Adım Murat"},{name:"Adım Ömer"},{name:"Adım Taha"}]
export default function Todo(){

const [text,setText]=useState()
const [items,setItems]=useState(defaultItems)

const addItems=()=>{
    setItems((prev)=>[...prev,{name:text}])
}
    return (
        <div>
            <label>Text
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </label>
           
            <button onClick={addItems}>Add</button>
            {
                items.map((item,key)=>
                    <div key={key}>{item.name}</div>
                )
            }
        </div>
    )
}
