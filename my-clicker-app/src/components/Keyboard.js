import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_keyboard.scss';

export default class Keyboard extends Component {
	constructor(props) {
		super(props);
		this.incrementCount = this.incrementCount.bind(this);
		this.decrementCount = this.decrementCount.bind(this);
		this.resetCount = this.resetCount.bind(this);
	}
	
  
	incrementCount() {
		this.props.incrementCount()
	}
	
	decrementCount(){
		this.props.decrementCount()
	}
	
	resetCount(){
		this.props.resetCount()
	}
	
render() {
        return (
           <>
				<div className = "display-operands">
					<button className = "display display-operand" onClick={this.incrementCount}>+</button>
					<button className = "display display-operand" onClick={this.decrementCount}>-</button>
					<button className = "display display-operand" onClick={this.resetCount}>
						<img className= "display-reload" src="\reload.jpg" alt="Snow"/>
					</button>
				</div>
			</>
        );
    }
}

Keyboard.defaultProps = {
    incrementCount: () => {},
	decrementCount: () => {},
	resetCount: () => {}
};

Keyboard.propTypes = {
   incrementCount: PropTypes.func,
	decrementCount: PropTypes.func,
	resetCount: PropTypes.func
};