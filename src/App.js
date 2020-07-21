import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';
import ToastContainer from './styles/toast';

import store from './store/';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;
