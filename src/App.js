import React from 'react';
import Produto from './Produto';
import Limpar from './Limpar';
import { GlobalStorage } from './UserContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto></Produto>
      <Limpar></Limpar>
    </GlobalStorage>
  );
};

export default App;
