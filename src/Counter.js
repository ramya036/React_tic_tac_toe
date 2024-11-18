import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        // Initialize the state with count set to 5
        this.state = {
            count: 5
        };
    }

    // Increment the count state by 1
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div className="counter">
                {/* Display the current value of count */}
                <div>{this.state.count}</div>

                {/* Add a button that increments the count when clicked */}
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
}

export default Counter;
