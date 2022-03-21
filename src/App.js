import { Fragment } from 'react';
import Menu from './components/Menu';
import Modal from './components/Modal';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {/* <Modal /> */}
      <Menu />
    </Fragment>
  );
}

export default App;
