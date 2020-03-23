import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    
});


export default (state = defaultState,action) => {
    switch(action.type){
        // case constants.SEARCH_FOCUS:
        // return state.set('focused',true);
        default:return state;
    }  
}