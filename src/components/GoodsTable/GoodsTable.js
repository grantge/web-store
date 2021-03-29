import React from 'react';

import './GoodsTable.css';
import GoodsFood from '../GoodsFood';
import GoodsTools from '../GoodsTools';
import GoodsRings from '../GoodsRings';

function GoodsTable() {
  return (
    <div>
      <GoodsFood />
      <GoodsTools />
      <GoodsRings />
    </div>
  );
}

export default GoodsTable;
