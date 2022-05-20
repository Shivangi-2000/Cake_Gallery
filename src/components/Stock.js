import { Component } from "react";

class Stock extends Component{
    likes = 100
    constructor(){  // component is in creation mode
        super() // to call base class constructor
        this.state = {  // initialising the state of component
            price:100,
            likes:100
        }
        
    }

    like = ()=>{
        this.setState({
            likes : this.state.likes+1
        })
    }
    componentDidUpdate(){
       alert("Updated")
    }

    componentDidMount(){ // successfully created inside DOM
      alert()
    }

    componentWillUnmount(){

    }

    render(){   // providing by component class
        return (    // return html/JSX
            <div>
                LiKES :{this.state.likes}
                Stock Price : {this.state.price}
                <button onClick={this.like} className="btn btn-primary">Like</button>
            </div>
        )
    }
}

export default Stock