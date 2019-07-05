import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch ,Route} from 'react-router-dom'
import Showpage from './pages/shop/showpage.component';

const HatsPage =  ()=> {
  return (<div>
    <h1>
      HATS PAGE
    </h1>
  </div>)
};

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/hats' component={HatsPage}/>
        <Route  path='/shop' component={Showpage}/>
      </Switch>
    
    </div>
  );
}

export default App;
