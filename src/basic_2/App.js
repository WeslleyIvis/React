import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <div>
        <div>{modal ? 'Modal aberto' : ''}</div>
        <ButtonModal setModal={setModal} />
        <Modal setModal={setModal} modal={modal} />
      </div>
    </>
  );
};

export default App;
