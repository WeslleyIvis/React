import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  console.log(GlobalContext);
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar}{' '}
      <button onClick={() => global.adicionarUm()}>Add</button>
    </div>
  );
};

export default Produto;
