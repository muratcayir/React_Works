import React from 'react';

class Collapse extends React.Component {
    
    constructor(){
        super()

        this.state={
            showContent:true
        }

        // this.showMore=this.showMore.bind(this)
      }
  
    //    showMore (){
    //        this.setState({showContent:!this.state.showContent})
    //       console.log(this)
    //     }

        showMore= ()=>
        {
            this.setState({showContent:!this.state.showContent})
        }

    render(){
 
        return (
            <div>
            <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
            </button>
            {
                this.state.showContent ? (<div className="collapse show" 
                id={this.props.href}>
                {this.props.children}
                </div>) : null
            }
            
        </div>
        );
    }  
};

export default Collapse;