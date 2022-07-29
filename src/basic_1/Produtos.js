import React from 'react';
import { Titulo } from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      key={nome}
      style={{ border: '1px solid', margin: '1rem', padding: '1em' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

const Produtos = () => {
  return (
    <div>
      <Titulo text="Produtos" color="yellow"></Titulo>
      {produtos.map((nome, propriedades) => Produto(nome, propriedades))}
    </div>
  );
};

export default Produtos;
