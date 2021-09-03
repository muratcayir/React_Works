import {useState} from "react"
import "./search.scss"
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=g9J97RaYrQz7meKKDLo5q9soNy7NkcwI&limit=30&offset=0&q=";//Verilerimizin alınacağı api adresi sabite atanıyor


function Search() {

    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loadingState, setLoadingState] =useState(false);
  
  
  const renderError = ()=>{// Aranan gifler herhangi bir sebepten dolayı yüklenemez ise hata mesajı veriliyor.
    if (isError) {
      return (
        <div>
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  }
  
  const handleSubmit = async e => {
    
    e.preventDefault();
  
    if(search.length > 0){ //Eğer search boş değilse aşağıda ki işlemler yapılıyor
     
      setIsError(false);//Hata olmadığı için false değeri atanıyor
     
      setLoadingState(true);//Gifler yüklenirken beklenilmesi gerekildiğine dair loading bilgisi gösteriliyor

      await  fetch(GIPHY_API+search)//fetch kullanılarak kaynaktan veriler alınıyor
      
     .then((res)=>{
        setLoadingState(false);
        return res.json();})//Veriler Json veri tipine çevriliyor
      
      .then((result)=>{
        setGifs(result.data.map((gif)=>{return gif.images.fixed_height.url;}))})//Gifler map fonksiyonu yardımı ile alınıyor
      
      .catch(()=>{
        setLoadingState(false);
        setIsError(true);//Hata olduğu için true değeri atanıyor
        setTimeout(() => setIsError(false), 4000);})//Hata mesajı 4 sn boyunca gösteriliyor
      
      }};
  
  
  
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
      {renderError()}{/* Hata olması halinde hata mesajı veriliyor */}
      </div>
    <div className="result">
          {
            (loadingState) ? (//Loading bilgisi ekranda gösteriliyor
              <div className="loading">
                    <div className="loader">   
                    </div>
              </div>
            ) : (
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
            )
          }
        </div>
    </div>
      )
}

export default Search;
