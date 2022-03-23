import { Fragment } from 'react';
import { StyledModal, StyledModalOverlay } from './styles/Modal.styled';
import { useSelector } from 'react-redux';

const Modal = () => {
  const correctAnswers = useSelector((state) => state.correct);
  const index = useSelector((state) => state.index);
  const percentageRatio = ((correctAnswers / index) * 100).toFixed();
  return (
    <Fragment>
      <StyledModal>
        <div>
          <h2>Congratulation</h2>
          <p>
            You answered <span>{percentageRatio}%</span> of questions correctly
          </p>
          <button>Play again</button>
        </div>
      </StyledModal>
      <StyledModalOverlay />
    </Fragment>
  );
};

export default Modal;
