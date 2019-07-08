import React from 'react';
import Header from '../header/Header';
import CoffeeList from '../coffee-list/CoffeeList';
import Coffee from '../coffee-article/Coffee';
import Settings from '../global-settings/Settings'; 
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <HashRouter>
        <Route exact path='/' component={CoffeeList}/>
        <Route path='/:name' component={Coffee}/>
      </HashRouter>     
      <Settings /> 
    </div>
  );
}

export default App;
