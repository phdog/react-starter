import {takeLast} from 'ramda';
import {LOCATION_CHANGE} from 'connected-react-router';

const initialState: Array<any> = [];

const router = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      const locations = [...state, action.payload];
      const prevLocation = takeLast(2, locations);
      return prevLocation;
    default:
      return state;
  }
};

export default router;