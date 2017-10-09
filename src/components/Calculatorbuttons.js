import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import {addToCalc} from "../actions/index";

class Calculatorbuttons extends Component {

    render() {

        //const {item} = this.props;
        //console.log(" Props "+ JSON.stringify(this.props));
        

        return (
            <div>
                   <div className="row">

                       <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('1');
                                }}
                            >1</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('2');
                                }}
                            >2</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('3');
                                }}
                            >3</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('+');
                                }}
                            >'+'</button>
                        </div>
                    </div>
                    <div className="row">
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('4');
                                }}
                            >4</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('5');
                                }}
                            >5</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('6');
                                }}
                            >6</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('-');
                                }}
                            >'-'</button>
                        </div>
                    </div>
                    <div className="row">
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('7');
                                }}
                            >7</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('8');
                                }}
                            >8</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('9');
                                }}
                            >9</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('*');
                                }}
                            >'*'</button>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc(0);
                                }}
                            >0</button>
                        </div>
                        <div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.addToCalc('/');
                                }}
                            >'\/'</button>
                        </div> 
                    </div>
                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
   return {
       addToCalc : (item) => dispatch(addToCalc(item))
    };
}

export default connect(null, mapDispatchToProps)(Calculatorbuttons);    // Learn 'Currying' in functional programming
