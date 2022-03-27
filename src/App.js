import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from './components/styles/Loader';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Question from './components/Question';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
  const showMenu = useSelector((state) => state.menu);
  const showQuiz = useSelector((state) => state.quiz);
  const showModal = useSelector((state) => state.modal);
  const showLoader = useSelector((state) => state.loading);
  return (
    <Fragment>
      <GlobalStyle />
      {showMenu && <Menu />}
      {showLoader && <Loader />}
      {showQuiz && <Question />}
      {showModal && <Modal />}
    </Fragment>
  );
}

export default App;
