import { Fragment } from 'react';
import { StyledModal, StyledModalOverlay } from './styles/Modal.styled';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../store';

const Modal = () => {
  //states/
  const correctAnswers = useSelector((state) => state.correct);
  const numOfQuestions = useSelector((state) => state.questions.length);
  const error = useSelector((state) => state.error);

  //dispatch
  const dispatch = useDispatch();

  //count %
  const percentageRatio = ((correctAnswers / numOfQuestions) * 100).toFixed();

  const onClickHandler = () => {
    dispatch(resetQuiz());
  };

  const noErrorContent = (
    <div>
      <h2>Congratulation</h2>
      <p>
        You answered <span>{percentageRatio}%</span> of questions correctly
      </p>
      <button onClick={onClickHandler}>Play again</button>
    </div>
  );
  const errorContent = (
    <div>
      <h2>Error occured</h2>
      <p>{error.msg}</p>
      <button onClick={onClickHandler}>Try again</button>
    </div>
  );
  return (
    <Fragment>
      <StyledModal>{error.status ? errorContent : noErrorContent}</StyledModal>
      <StyledModalOverlay />
    </Fragment>
  );
};

export default Modal;
