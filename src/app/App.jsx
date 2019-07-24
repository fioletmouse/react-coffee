import React from 'react';
import Header from '../header/Header';
import CoffeeList from '../coffee-list/CoffeeList';
import Coffee from '../coffee-article/Coffee';
import SettingModal from '../global-settings/SettingModal'; 
import { HashRouter, Route } from 'react-router-dom'
import AppProvider from '../services/global-context/AppProvider'

function App() {
  return (
    <div className="col-12">
      <AppProvider> 
        <Header/>
        <HashRouter>
          <Route exact path='/' component={CoffeeList}/>
          <Route path='/:name' component={Coffee}/>
        </HashRouter>  
        <SettingModal />    
      </AppProvider>       
    </div>
  );
}

export default App;
