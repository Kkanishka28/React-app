import React,{Component} from 'react';
class Statec extends Component{
    constructor(){
        super();
        this.state={
            data:"kannu"
        }
    }
 apple(){
    this.setState({data:"kanishka"})
}
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update me</button>
            </div>
        )
    }
}
export default  Statec;