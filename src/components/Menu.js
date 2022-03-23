import { StyledMenu } from './styles/Menu.styled';
import { getQuestions } from '../store';
import { useDispatch } from 'react-redux';

const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;

const Menu = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getQuestions());
  };
  return (
    <StyledMenu>
      <form onSubmit={onSubmitHandler}>
        <h1>Setup Quiz</h1>
        <div>
          <label>Number of Questions</label>
          <select name='' id=''>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>
        </div>

        <div>
          <label>Category</label>
          <select name='' id=''>
            <option value=''>Sports</option>
            <option value=''>Music</option>
            <option value=''>Science</option>
          </select>
        </div>

        <div>
          <label>Difficulty</label>
          <select name='' id=''>
            <option value=''>Easy</option>
            <option value=''>Medium</option>
            <option value=''>Hard</option>
          </select>
        </div>

        <button type='submit'>Start</button>
      </form>
    </StyledMenu>
  );
};

export default Menu;
