import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'nes.css/css/nes.min.css';
import '../src/index.css';

import Header from './components/Header';
import GoodsTable from './components/GoodsTable';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <GoodsTable />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
