import { Fragment } from 'react';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Question from './components/Question';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {/* <Modal /> */}
      <Menu />
      {/* <Question /> */}
    </Fragment>
  );
}

export default App;
