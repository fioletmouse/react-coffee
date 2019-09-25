import React from 'react';
import MainPage from '../start-page/MainPage';
import { HashRouter, Route } from 'react-router-dom'
import pages from './pagesList'

import CoffeeList from '../coffee-list/CoffeeList';
import Tools from '../tools/Tools';
import Blends from '../blends/Blends';
import Other from '../other/Other';

function App() {
  return (  
    <HashRouter>
      <Route exact path='/' render={() => ( <MainPage pages={pages}/> )} />
      <Route path='/tools' component={Tools}/>
      <Route path='/blends' component={Blends}/>
      <Route path='/recipes' component={CoffeeList}/>
      <Route path='/other' component={Other}/>
    </HashRouter>     
  );
}

export default App;
