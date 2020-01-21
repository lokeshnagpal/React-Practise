import React from 'react';
import './App.css';
import Counter  from './container/Counter';

class App extends Counter{
  render(){
    return(
      <div className="App">
        <Counter/>
      </div>
    )
   }
}



export default App;
