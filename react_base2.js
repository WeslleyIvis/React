import React from 'react';

const App = () => {
  const filmes = {
    anoXIX: ['Star wars', 'Sniper americano', 'Lula vs Bolsinha'],
    anoXX: [
      { carro: 'Corsa', preco: 'R$ 500' },
      { carro: 'Uno 1 Porta', preco: 'R$ 1500' },
      { carro: 'Sandeiro', preco: 'R$ 250' },
    ],
  };

  const carros = filmes.anoXX.map((item) => item.carro);
  console.log(carros);

  return (
    <>
    <ul>
      {filmes.anoXIX.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
      <ul>
        {filmes.anoXX.map(({carro, preco}) => (
          <li
            key={carro}
          >{`Carro: ${carro} -- preco: ${preco}`}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
