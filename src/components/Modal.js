import { Fragment } from 'react';
import { StyledModal, StyledModalOverlay } from './styles/Modal.styled';

const Modal = () => {
  return (
    <Fragment>
      <StyledModal>
        <div>
          <h2>Congratulation</h2>
          <p>
            You answered <span>0%</span> of questions correctly
          </p>
          <button>Play again</button>
        </div>
      </StyledModal>
      <StyledModalOverlay />
    </Fragment>
  );
};

export default Modal;
