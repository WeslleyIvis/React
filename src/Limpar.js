import React from 'react';
import { GlobalContext } from './UserContext';

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>limpar</button>;
};

export default Limpar;
