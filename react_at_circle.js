import React from 'react';
import '../src/style.css';

const App = () => {
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
