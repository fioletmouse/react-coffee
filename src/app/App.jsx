import React from 'react';
import Header from '../header/Header';
import CoffeeList from '../coffee-list/CoffeeList';
import Coffee from '../coffee-article/Coffee';
import SettingModal from '../global-settings/SettingModal'; 
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <HashRouter>
        <Route exact path='/' component={CoffeeList}/>
        <Route path='/:name' component={Coffee}/>
      </HashRouter>     
      <SettingModal /> 
    </div>
  );
}

export default App;
