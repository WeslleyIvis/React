import React from 'react';

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const filtraValue = (value) => {
    return Number(value.replace('R$ ', ''));
  };

  return (
    <section>
      {produtos.map((item) =>
        filtraValue(item.preco) >= 1500 ? (
          <div key={item.id}>
            <h1>{item.nome}</h1>
            <p>{item.preco}</p>
            <ul>
              {item.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'White' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        ),
      )}
    </section>
  );
};

export default App;
