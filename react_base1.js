import React from 'react';

const App = () => {
  const random = Math.random();
  const ativo = true;
  const carro = {
    portas: '4',
    cor: 'Azul',
    rodas: '4',
    Janelas: '6',
  };
  const lista = [1, 2, 3, 4, 5, 6];

  const tStyle = {
    color: 'green',
    fontSize: '2em',
  };

  const nome = (sobrenome) => {
    return `weslley ${sobrenome}`;
  };

  return (
    <>
      <div className={ativo ? 'ativo' : 'inativo'}>
        {(random * 1000) / 50}, {lista}
      </div>
      <p>{nome('ivis')}</p>
      <p style={{ color: 'blue', fontSize: '2em' }}>Green</p>
      <p style={tStyle}>{carro.cor}</p>
    </>
  );
};

export default App;
