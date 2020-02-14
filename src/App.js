import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
// import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import TableBuilder from './container/TableBuilder/TableBuilder';

class App extends Component{
  render () {
    return(
      <div>
        <Layout>
          {/* <BurgerBuilder/> */}
          <TableBuilder/>
        </Layout>
      </div>    
    )
   }
}


export default App;
