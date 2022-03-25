import { StyledMenu } from './styles/Menu.styled';
import { getQuestions } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;

const Menu = () => {
  const dispatch = useDispatch();

  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [category, setCategory] = useState(21);
  const [difficulty, setDifficulty] = useState('easy');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    console.log(numberOfQuestions, category, difficulty);
    console.log(url);
    dispatch(getQuestions(url));
  };

  const onChangeHandlerNumberOfQuestions = (e) => {
    setNumberOfQuestions(e.target.value);
  };

  const onChangeHandlerCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeHandlerDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  return (
    <StyledMenu>
      <form onSubmit={onSubmitHandler}>
        <h1>Setup Quiz</h1>
        <div>
          <label>Number of Questions</label>
          <select onChange={onChangeHandlerNumberOfQuestions}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>
        </div>

        <div>
          <label>Category</label>
          <select onChange={onChangeHandlerCategory}>
            <option value='21'>Sports</option>
            <option value='35'>Music</option>
            <option value='25'>Science</option>
          </select>
        </div>

        <div>
          <label>Difficulty</label>
          <select onChange={onChangeHandlerDifficulty}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>

        <button type='submit'>Start</button>
      </form>
    </StyledMenu>
  );
};

export default Menu;
