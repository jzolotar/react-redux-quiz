import { StyledMenu } from './styles/Menu.styled';

const Menu = () => {
  return (
    <StyledMenu>
      <form>
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
