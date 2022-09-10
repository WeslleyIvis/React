import React from 'react';
import '../src/style.css';

const App = () => {
  const dados = [
    {
      nome: 'Period',
      value: ['2016Q1', '2016Q2', '2016Q3', '2016Q4', '2017Q1'],
      bgColor: ['#e0e0e0'],
      borderTop: ['2px solid #a8a8a8'],
      classe: 'teste',
    },
    {
      nome: 'Android',
      value: ['83.4%', '87.6%', '86.8%', '81.4%', '85.0%'],
      bgColor: ['#e1f2c3'],
      borderTop: ['2px solid #80a048'],
      classe: '',
    },
    {
      nome: 'iOS',
      value: ['15.4%', '11.6%', '12.8%', '18.4%', '14.0%'],
      bgColor: ['#c6d8f1'],
      borderTop: ['2px solid #4068a0'],
      classe: '',
    },
    {
      nome: 'Windows Phone',
      value: ['0.8%', '0.4%', '0.3%', '0.2%', '0.1%'],
      bgColor: ['#dfd5ed'],
      borderTop: ['2px solid #4068a0'],
      classe: '',
    },
    {
      nome: 'Others',
      value: ['0.4%', '0.3%', '0.4%', '0.2%', '0.1%'],
      bgColor: ['#f1dcc9'],
      borderTop: ['2px solid #d88030'],
      classe: '',
    },
  ];

  return (
    <div className="grid">
      {dados.map(({ nome, value, bgColor, borderTop, classe }, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <h4
            style={{
              backgroundColor: bgColor,
              borderTop: borderTop,
              padding: '5px',
            }}
          >
            {nome}
          </h4>
          {value.map((valor, index) => (
            <p key={index} className={classe}>
              {valor}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
