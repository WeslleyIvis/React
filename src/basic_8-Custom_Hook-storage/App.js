import React from 'react';
import useLocalStorage from './UseLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleclick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <button onClick={handleclick}>Inuyashiky</button>
      <button onClick={handleclick}>Tate no Yusha</button>
    </div>
  );
};

export default App;
