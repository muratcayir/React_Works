import {useState} from "react"
import "./search.scss"
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=g9J97RaYrQz7meKKDLo5q9soNy7NkcwI&limit=30&offset=0&q=";//Verilerimizin alınacağı api adresi sabite atanıyor


function Search() {

    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
  
  

  
  const handleSubmit = async e => {
    
    e.preventDefault();
  
    await  fetch(GIPHY_API+search)//fetch kullanılarak kaynaktan veriler alınıyor
      
    .then((res)=>{return res.json();})//Veriler Json veri tipine çevriliyor
      
    .then((result)=>{ setGifs(result.data.map((gif)=>{return gif.images.fixed_height.url;}))})//Gifler map fonksiyonu yardımı ile alınıyor
      
    .catch((err)=>console.log(err))
      
      };
  
  
  
      return (
        <div>
  
        
    <div className="container">
      
        <div className="search-button">  
              <input  
              value={search}
              onChange={(e)=>setSearch(e.target.value)} // İnput alanımıza girilen ifadeyi yakalıyoruz
              type="search" 
              placeholder="Search" />
              <button 
              type="submit" 
              onClick={handleSubmit} //butona tıklanıldığında çalışacak fonksiyonumuzu atadık
              className="btn">
              <i className="search-icon fas fa-search"></i>
             </button>
        </div>
      
    </div>
    <div>
      
      </div>
    <div className="result">
              <div className="list">
              {
                  gifs.map((gif)=>{
                    return (//Gifler listeleniyor
                      <div className="item">
                        <img src={gif} alt=""/>  
                      </div>
                    )
                  })
                }
              </div>
            
        </div>
    </div>
      )
}

export default Search;