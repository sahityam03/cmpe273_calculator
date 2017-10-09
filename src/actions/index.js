
import {store} from '../index.js';
import fetch from 'isomorphic-fetch';
export const ADD_TOCALC = 'ADD_TOCALC';
export const CLEAR_FROMCALC = 'CLEAR_FROMCALC';
export const CALC_EQUAL = 'CALC_EQUAL';
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};



export function addToCalc(item) {
	

    return {
        type : ADD_TOCALC,
        item                                // this is same as newItem : newItem in ES6
    }
}

export function clearCalc(item) {
    return {
        type : CLEAR_FROMCALC
        
    }
}
export function calcEqual(item) {
    console.log("this is in actoins and testing" + JSON.stringify(store.getState()));
    return {
        type : CALC_EQUAL,
        item
        
    }
}


export function calcEqual1() {
    console.log(JSON.stringify(this));
  return dispatch => {
    
    return fetch(`${api}/user/doEval`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(store.getState())
    })
      .then(res => { return res.json(); })
      .then(res2 => dispatch(calcEqual(res2.expre)))
        
 }
}

  
