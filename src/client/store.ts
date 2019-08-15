import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {mediaQueryTracker} from 'redux-mediaquery';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/';
import rootSaga from './sagas/';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'development' ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
export const history = createBrowserHistory();

const middleware = applyMiddleware(
  thunkMiddleware, 
  sagaMiddleware,
  routerMiddleware(history)
);
const store = composeEnhancers(middleware)(createStore)(rootReducer(history));

store.dispatch(mediaQueryTracker({
  desktop: 'screen and (min-width: 1001px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1000px)',
  phablet: 'screen and (min-width: 478px) and (max-width: 767px)',
  phone: 'screen and (max-width: 477px)'
}));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message from sw', (event) => {
    //store.dispatch(event.data);
    //console.log('message', event.data);
  });
}

sagaMiddleware.run(rootSaga);

export default store;