import React from 'react';
import '../src/style.css';

const App = () => {
  const teste = [
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

  const [circle, setCircle] = React.useState([]);
  const [callCircle, setCallCircle] = React.useState([]);

  function getCordenates(e) {
    const { clientX, clientY } = e;

    setCircle([...circle, { clientX, clientY }]);
  }

  function popItem() {
    const newClickedPoint = [...circle];
    const point = newClickedPoint.pop();
    setCircle(newClickedPoint);
    if (!point) return;

    setCallCircle([...callCircle, point]);
  }

  function stackPoint() {
    const callPointer = [...callCircle];
    const point = callPointer.pop();
    setCallCircle(callPointer);

    setCircle([...circle, point]);
  }

  return (
    <>
      <button disabled={callCircle.length < 1} onClick={stackPoint}>
        PUSH
      </button>
      <button disabled={circle.length === 0} onClick={popItem}>
        POP
      </button>
      <div style={{ width: '100vw', height: '100vh' }} onClick={getCordenates}>
        {circle.map((circle, index) => {
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: circle.clientY - 5,
                left: circle.clientX - 5,
                background: 'Red',
                borderRadius: '50%',
                height: '10px',
                width: '10px',
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default App;
