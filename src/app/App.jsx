import React from 'react';
import Header from '../header/Header';
import CoffeeList from '../coffee-list/CoffeeList';
import Coffee from '../coffee-article/Coffee';
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="col-12">
      <Header/>
      <HashRouter>
        <Route exact path='/' component={CoffeeList}/>
        <Route path='/:name' component={Coffee}/>
      </HashRouter>     
    </div>
  );
}

export default App;
