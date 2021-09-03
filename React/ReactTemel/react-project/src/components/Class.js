import React from 'react'

class ClassComponent extends React.Component{

 state={
      yas:25     
       }

 

render(){
    return(
        <div className="box">

            {/* <p>Name :{this.state.name}</p>
            <button  onClick={()=>this.dataChange()}>Name</button> */}
            
            <button  onClick={()=>this.setState({Yas :this.state.yas + 1})}>yas arttır</button>
            <p>yas:{this.state.yas}</p>
        </div>
    )
}
}

export default ClassComponent;