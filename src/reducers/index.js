import {ADD_TOCALC, CLEAR_FROMCALC, CALC_EQUAL} from "../actions/index";
import * as API from '../api/API';
import { Route, withRouter } from 'react-router-dom';


// https://github.com/reactjs/react-redux/blob/d5bf492ee35ad1be8ffd5fa6be689cd74df3b41e/src/components/createConnect.js#L91
const initialState = { expre: ''};

const expression1 = (state = initialState, action) => {

    console.log("i am in reducers");
    switch (action.type) {
        case ADD_TOCALC :
          console.log("this is in case1" + action.item);
          var isOper = false;
          if(action.item === "+" || action.item === "-" || action.item === "*" || action.item === "\/"){
            isOper = true;
          }
          if(isOper && state.expre.length === 0){
            return state;
          } else {
            if((state.expre.slice(-1) === "+" || state.expre.slice(-1) === "-" ||
             state.expre.slice(-1) === "*" || state.expre.slice(-1) === "\/") && (isOper)){
              return {
                ...state,
                expre : state.expre.slice(0,-1) + action.item
              }
            } else {
                if ((state.expre.includes("+") || state.expre.includes("-") ||
                 state.expre.includes("*") || state.expre.includes("\/")) && (isOper)){
                  return state;
                }
                else {
                 return {
                     ...state,
                     expre : state.expre + action.item
                     //[action.item.menu] : {"price" : action.item.price , "qty" : Number(action.item.qty) + 1} 
                 };
              }
            }
         }

        case CLEAR_FROMCALC :
            return initialState;

        case CALC_EQUAL :
            console.log("I am in json object");
            console.log("trying to see data being sent" + state);
            //console.log("trying something" + res.expre);
            
           //var x;
            /*API.doEval(state)
            .then((res) => {
              console.log("this is res"+ JSON.stringify(res));
              console.log("trying something " + res);
               y= res.expre;
              console.log("this is y" + y);
                          
                  console.log("final check");
                  console.log("this is " + res.expre);
                   
                   
            
                
            });*/
            //console.log("this is y outside function " + y);
            return {
              ...state,
              expre: action.item
            };
            
            

        default :
            return initialState;

    }
};

export default expression1;
//export default orders;

