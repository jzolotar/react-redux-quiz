import { Fragment } from 'react';
import { StyledModal, StyledModalOverlay } from './styles/Modal.styled';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../store';

const Modal = () => {
  //states/
  const correctAnswers = useSelector((state) => state.correct);
  const numOfQuestions = useSelector((state) => state.questions.length);

  //dispatch
  const dispatch = useDispatch();

  //count %
  const percentageRatio = ((correctAnswers / numOfQuestions) * 100).toFixed();

  const onClickHandler = () => {
    console.log('click');
    dispatch(resetQuiz());
  };
  return (
    <Fragment>
      <StyledModal>
        <div>
          <h2>Congratulation</h2>
          <p>
            You answered <span>{percentageRatio}%</span> of questions correctly
          </p>
          <button onClick={onClickHandler}>Play again</button>
        </div>
      </StyledModal>
      <StyledModalOverlay />
    </Fragment>
  );
};

export default Modal;
