import {takeLatest, all, select} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';
import {takeLast, head} from 'ramda';

const locationChangeSaga = function*() {
    const route = yield select((state) => head(takeLast(1, state.routerHistory)));
    //Fetch data based on pathname and isFirstRenderging instead of ComponentDidMount
    console.log(route, 'route');
};

const commonSaga = function*() {
    yield all([takeLatest(LOCATION_CHANGE, locationChangeSaga)]);
  };

export default commonSaga;
