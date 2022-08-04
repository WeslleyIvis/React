import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProdutos] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProdutos(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleProduto({ target }) {
    setProdutos(target.innerText);
  }

  return (
    <div>
      <h1>Preferências: {produto}</h1>
      <button onClick={handleProduto} style={{ margin: '.5em' }}>
        notebook
      </button>
      <button onClick={handleProduto} style={{ margin: '.5em' }}>
        tablet
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
