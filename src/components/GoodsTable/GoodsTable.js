import React from 'react';

import './GoodsTable.css';
import GoodsFood from '../GoodsFood';
import GoodsTools from '../GoodsTools';
import GoodsRings from '../GoodsRings';

function GoodsTable(props) {
  return (
    <div>
      <GoodsFood foodArray={props.food} />
      <GoodsTools toolsArray={props.tools} />
      <GoodsRings ringsArray={props.rings} />
    </div>
  );
}

export default GoodsTable;
