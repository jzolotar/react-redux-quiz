import { Fragment } from 'react';
import Menu from './components/Menu';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Menu />
    </Fragment>
  );
}

export default App;
