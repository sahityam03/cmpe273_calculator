import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


import {calcEqual1} from "../actions/index";

class CalculatorEqual extends Component {

    render() {

               

        return (
        	<div>
            
                   <div className="row">
                   		<div >
                         <button
                                type = "button"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.calcEqual1();
                                }}
                            >'='</button>
                        </div>
                    </div>
            </div>
            
        );
    }
}


function mapDispatchToProps(dispatch) {
   return {
       calcEqual1 : () => dispatch(calcEqual1())
    };
}

export default connect(null, mapDispatchToProps)(CalculatorEqual);