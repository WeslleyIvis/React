import React from 'react';
import Header from './Header';

const Titulo = ({ cor, text, children }) => {
  return <h1 style={{ color: cor }}>{text}, {children}</h1>;
};

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <>
      <Titulo cor="blue" text="I make one site" ><p>Only p</p></Titulo>
      <button onClick={handleClick} onMouseMove={handleClick}>
        Clique
      </button>
      <Header />
    </>
  );
};

export default App;
