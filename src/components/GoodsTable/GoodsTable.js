import React from 'react';

import './GoodsTable.css';
import GoodsFood from '../GoodsFood';
import GoodsTools from '../GoodsTools';

function GoodsTable() {
  return (
    <div>
      <GoodsFood />
      <GoodsTools />
    </div>
  );
}

export default GoodsTable;
