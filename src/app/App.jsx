import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/MainPage';
import pages from './pagesList';

import Blends from '../blends/Blends';
import CoffeeList from '../coffee-list/CoffeeList';
import Dict from '../dict/Dict';
import Tools from '../tools/Tools';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage pages={pages} />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/blends" element={<Blends />} />
      <Route path="/recipes" element={<CoffeeList />} />
      <Route path="/dict" element={<Dict />} />
    </Routes>
  );
}

export default App;
