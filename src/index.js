import React from 'react';
import ReactDOM from 'react-dom';
import 'nes.css/css/nes.min.css';
import '../src/index.css';

import Header from '../src/components/Header';
import GoodsTable from './components/GoodsTable';

function App() {
  return (
    <div>
      <Header />
      <GoodsTable />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
