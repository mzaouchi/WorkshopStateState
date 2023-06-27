import './App.css';
import React from 'react';
import Counter from './Components/Counter';

class App extends React.Component{

state={
      show : false,
      test:"Brahim"
    }
  
  render(){
    return(
      <div>
        <h1>Workshop State</h1>
        <button onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? "Hide" : "Show"}</button>
        {
          this.state.show &&  <Counter test={this.state.test}/>
        }
       
      </div>
    )
  }
}

export default App;
