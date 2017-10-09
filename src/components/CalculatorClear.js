import React, {Component} from 'react';
import {connect} from 'react-redux';

import {clearCalc} from "../actions/index";

class CalculatorClear extends Component {

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
                                    this.props.clearCalc();
                                }}
                            >C</button>
                        </div>
                    </div>
            </div>
            
        );
    }
}
function mapDispatchToProps(dispatch) {
   return {
       clearCalc : () => dispatch(clearCalc())
    };
}

export default connect(null, mapDispatchToProps)(CalculatorClear);