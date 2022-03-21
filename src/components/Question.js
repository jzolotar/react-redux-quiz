import { Fragment } from 'react';
import { StyledQuestion } from './styles/Question.styled';

const Question = () => {
  return (
    <StyledQuestion>
      <p>Correct Answers: 0/0</p>
      <h1>In golf, what name is given to a hole score of two under par?</h1>
      <button className='answer'>Birdie</button>
      <button className='answer'>Eagle</button>
      <button className='answer'>Albatross</button>
      <button className='answer'>Bogey</button>
      <button className='next'>Next Question</button>
    </StyledQuestion>
  );
};

export default Question;
