import React from "react";
 import PropTypes from "prop-types"  
function User ({name,age,isLoggedIn,friends,adress}){
  
    return(

        
     <React.Fragment>
     <p>{isLoggedIn ? ` Benim adım ${name} yaşım ${age}  `:"giriş yapınız"}</p>
  {
    friends  &&  friends.map((friends,index )=> (

          <div key={index}>
              {index} - {friends}
          </div>
      ))
  }

  
      {adress.title}-{adress.no}
  
     </React.Fragment>

    )
}


User.propTypes ={
    name:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    friends:PropTypes.array.isRequired,
    adress:PropTypes.shape({
      title:PropTypes.string,
      no:PropTypes.number  
    })
}

User.defaultProps = {
    name:"undifined",
    age:"undifined"
}

export default User;