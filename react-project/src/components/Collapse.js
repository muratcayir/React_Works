import React from 'react';

class Collapse extends React.Component {
    
    constructor(){
        super()

        this.state={
            showContent:true
        }
      }
    
    render(){
 
        return (
            <div>
            <a className="btn btn-primary w-100">
                    Link with href
            </a>
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