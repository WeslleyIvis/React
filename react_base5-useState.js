import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    console.log([...items]);
    setItems([...items, 'item ' + (contar + 1)]);
  }

  function diminuirValor() {
    setContar(contar - 1);
    setItems([...items, 'item ' + contar].pop);
  }

  return (
    <>
      <div>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
      <button onClick={handleClick}>{contar}</button>
      <button onClick={diminuirValor}>{contar}</button>
    </>
  );
};

export default App;
