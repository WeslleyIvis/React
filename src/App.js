import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'senha',
    type: 'password',
  },
];

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function handleClick({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form>
      {formFields.map(({ label, id, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} />
        </div>
      ))}
    </form>
  );
};

export default App;
