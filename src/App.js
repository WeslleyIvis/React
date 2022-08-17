import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  function randleClick() {
    setContar(contar + 1);
  }

  const produtos = [
    {
      id: 1,
      bgColor: '#8de799',
      produto: 'Notbook',
      marca: 'Samsung',
      tela: '25 Polegadas',
      processador: 'i7',
      placaVideo: 'rtx 3080',
      memoria: '32gb',
      img: 'https://images-americanas.b2w.io/spacey/acom/2022/07/20/notebook-i3-67245203da3f.png',
    },
    {
      id: 2,
      bgColor: '#63baec',
      produto: 'celular',
      marca: 'Xiaomi',
      tela: '18 Polegadas',
      processador: 'SnapDragon',
      memoria: '8gb',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
      img: 'https://www.notebookcheck.info/uploads/tx_nbc2/Xiaomi12.JPG',
    },
  ];

  return (
    <div>
      Produtos:{' '}
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{
            padding: '1em 1em 5em',
            margin: '30px 0',
            background: produto.bgColor,
            color: 'white',
          }}
        >
          <h2>{produto.produto}</h2>
          <ul
            style={{
              color: '#414141',
              listStyle: 'none',
            }}
          >
            <li>{produto.marca}</li>
            <li>{produto.tela}</li>
            <li>{produto.memoria}</li>
            <li>{produto.processador}</li>
            <li>
              <img
                style={{ width: '250px' }}
                src={produto.img}
                alt={produto.img}
              />
            </li>
          </ul>
          <button onClick={randleClick}>{contar}</button>
        </div>
      ))}
    </div>
  );
};

export default App;
