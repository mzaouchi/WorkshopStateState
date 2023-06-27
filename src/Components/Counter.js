import React from "react"

class Counter extends React.Component{
    constructor(props){
        super()
        this.state={
            count : 0,
            textP : ''
        }
        console.log("Initialisation")
        // console.log(this);
    }
    increment=()=> this.setState({count : this.state.count + 1})
   decrement=()=> this.state.count >0 && this.setState({count : this.state.count -1})
   componentDidMount(){
    // console.log("Mount")
    document.title = "Hi"
   }

componentWillUnmount(){
    // console.log("Unmount")
    document.title = 'Bye'
}

componentDidUpdate(){
    document.title = this.state.count
    console.log('Update')
}
   render(){
        console.log("Render")
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input value={this.state.textP} type="text" onChange={(e)=>this.setState({textP : e.target.value})}/>
                <input value={this.state.textP} type="text" onChange={(e)=>this.setState({textP : e.target.value})}/>
                <h3>{this.state.textP}</h3>
                <h4>{this.props.test}</h4>
            </div>
        )
    }
}

export default Counter