import React, { Component } from 'react';
import Display from './Display';
import Panel from './Panel';

class Clock extends Component {

    constructor() {
        super();
        console.log('Constructor');
        this.state = {
            date: new Date(),
            isDateVisible: true
        };
        
        this.toggleDate = this.toggleDate.bind(this);
    }

    componentDidMount() {
        console.log('Mounted the components');
        this.startTime();
    }

    componentWillUnmount() {
        console.log('Will Unmount the component');
        clearInterval(this.timer);
    }

    startTime() {   
        console.log('Start Timer');
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }   
    
    toggleDate() {
        console.log('toggle date');
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
    }

    render() {
        return (
            <div>
                <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
                <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
            </div>
        );
    }
}

export default Clock;