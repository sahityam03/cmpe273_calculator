import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calculatorbuttons from "./Calculatorbuttons";
import CalculatorClear from "./CalculatorClear";
import CalculatorEqual from "./CalculatorEqual";
import { Route, withRouter } from 'react-router-dom';

class CalculatorPage extends Component {
    
    

    render() {

        console.log("I am in calc page");
        console.log(" Props "+ JSON.stringify(this.props.expression2));
        

        return (
            <div className="container text-center">
            <div className="calcBG col-md-3 col-md-offset-4 text-center">
                <div className="row">
                   <small>calculator</small>
                </div>
                <div className="row">
                                          
                    <p> {this.props.expression2[0]}</p>
                    
                </div>
                
                <div>
                {
                    <Calculatorbuttons/>
                       
                }
                </div>
                <div>
                {
                    <CalculatorClear/>
                }
                </div>
                <div>
                {
                    <CalculatorEqual/>
                }
                </div>
               
            </div>
            </div>             
        );
    }
}
function mapStateToProps(expression1) {
    console.log("map state to props : " + JSON.stringify(expression1));
    const expression2 = Object.keys(expression1).map((item) => (
            expression1[item]
    ));
    return {expression2};
}
export default connect(mapStateToProps, null)(CalculatorPage);    
 