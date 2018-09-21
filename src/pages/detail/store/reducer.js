// import * as constants from './constants';
/**
 * immutable.js;
 * facebook开发的 
 * immutable对象
 */
import { fromJS } from 'immutable';
// import * as constants from './constants';

const defaultState = fromJS({
    title:'123',
    content:'nsndsnjffff'
});

export default(state = defaultState,action) =>{
    switch(action.type){
        
        default:
            return state;
    }
}