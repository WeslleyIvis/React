import React from 'react';
import { GlobalContext } from './UserContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  console.log(dados);
  if (dados === null) return null;
  return (
    <div>
      Produto{' '}
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
