import { StyledQuestion } from './styles/Question.styled';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, checkCorrect } from '../store';

const Question = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const index = useSelector((state) => state.index);
  const correct = useSelector((state) => state.correct);

  //current question

  const question = questions[index];
  console.log(question);
  console.log(index);
  const questionsList = [
    question.correct_answer,
    ...question.incorrect_answers,
  ];
  console.log(questionsList);

  //handler
  const onNextQuestionHandler = () => {
    dispatch(nextQuestion());
  };

  const onCheckIfCorrect = (answer) => {
    dispatch(checkCorrect(answer));
    dispatch(nextQuestion());
  };

  return (
    <StyledQuestion>
      <p>
        Correct Answers: {correct}/{index}
      </p>
      <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
      {questionsList.map((question, index) => (
        <button
          id={index}
          className='answer'
          onClick={() => onCheckIfCorrect(question)}
        >
          {question}
        </button>
      ))}
      {/* <button className='answer'>Birdie</button>
      <button className='answer'>Eagle</button>
      <button className='answer'>Albatross</button>
      <button className='answer'>Bogey</button> */}
      <button className='next' onClick={onNextQuestionHandler}>
        Next Question
      </button>
    </StyledQuestion>
  );
};

export default Question;
