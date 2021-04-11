import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'nes.css/css/nes.min.css';
import '../src/index.css';

import Header from './components/Header';
import GoodsTable from './components/GoodsTable';
import Cart from './components/Cart/Cart';

import foodData from './components/GoodsFood/foodData';
import ringsData from './components/GoodsRings/ringsData';
import toolsData from './components/GoodsTools/toolsData';

function App() {
  return (
    <div>
      <Header />
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <GoodsTable food={foodData} rings={ringsData} tools={toolsData} />
            </Route>
            <Route path="/modal">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
