import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchVideos, requestVideos, selectVideo } from './reducers';
import App from './components/App';

const rootReducer = combineReducers({
  searchVideos,
  requestVideos,
  selectVideo
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
