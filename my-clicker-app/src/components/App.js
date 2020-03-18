import React, { Component } from 'react';
import logo from '../logo.svg';
import Keyboard from './Keyboard';
import Header from './Header';
import '../styles/components/App.css';

export default class App extends Component {
	constructor(){
        super();

		this.incrementCount = this.incrementCount.bind(this)
		this.decrementCount = this.decrementCount.bind(this)
		this.resetCount = this.resetCount.bind(this)
		this.state = {
            title: 'React Timer',
			result: 0
        };
    }
	incrementCount() {
		this.setState((prevState) => ({ result: prevState.result + 1}));
	}
	
	decrementCount() {
		this.setState((prevState) => ({ result: prevState.result - 1}));
	}
	
	resetCount() {
		this.setState((prevState) => ({ result: 0}));
	}
	render() {
        return (
            <div className = "app.display">
                <Header title={this.state.result}/>
                <div>
                  <Keyboard incrementCount ={this.incrementCount} decrementCount={this.decrementCount} resetCount = {this.resetCount}/>
                </div>
            </div>
        );
    }
}