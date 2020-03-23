import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as personalReducer } from '../pages/personal/store';
const reducer = combineReducers({
  home:homeReducer,
  personal:personalReducer
});

export default reducer;