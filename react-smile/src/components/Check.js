import React,{ Component } from "react";

class Check extends Component{

    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         men:[
    //             { name: 'Mehedi Hasan'},
    //         ]
    //     }
    // }

    state = {
        name: 'Mehedi hasan'
    }
    changeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.changeName} value={this.state.name}></input>
                <h1 class="text-danger">Hello { this.state.name }</h1>
                <button class="btn btn-success btn-sm">test</button>
            </div>          
        );
    }
}

export default Check