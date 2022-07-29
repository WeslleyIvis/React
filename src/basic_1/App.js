import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from '../Produtos';

const { pathname } = window.location;
console.log(pathname);

const App = () => {
  if (pathname === '/Produtos') {
    return (
      <>
        <Header />
        <Produtos />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }


};

export default App;
