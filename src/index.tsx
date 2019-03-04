import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import AppRouter from './App';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
