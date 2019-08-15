import {combineReducers} from 'redux';
import {reducer as device} from 'redux-mediaquery';
import {reducer as form} from 'redux-form';
import { connectRouter } from 'connected-react-router';
import cssReducer from './css';


export default (history: any) => combineReducers({
  form,
  css: cssReducer,
  device,
  router: connectRouter(history),
});