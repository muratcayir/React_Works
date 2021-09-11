import axios from "axios";
import { useState,useEffect } from "react";

export default function Axios() {


    const [data,setData]=useState([])

    useEffect(() => {
       
       const veri =  axios.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BLg7E7ToUiOXpTLzGzZm7Vk413Tc76dN&limit=5")
        
       
       .then(result=>{setData(result.data.map((gif)=>{return gif.images.fixed_height.url;}))})
        
        
        .catch(err=>console.log(err))

        console.log(veri)

    }, [])

   

    return (
        <div className="list">
        {
                  data.map((gif)=>{
                    return (//Gifler listeleniyor
                      <div className="item">
                        <img src={gif} alt=""/>  
                      </div>
                    )
                  })
                }
        </div>
    )
}
