import React, { Component } from 'react';

// Step 1: Define the types for props and state
interface CounterProps {
    // No props for this component, so leaving it empty
}

interface CounterState {
    count: number; // 'count' should be a number
}

// Step 2: Annotate the class component with the types for props and state
class Counter extends Component<CounterProps, CounterState> { 
    // Step 3: Initialize state with type inference
    state: CounterState = {
        count: 0
    };

    // Step 4: Ensure the method uses the correct type
    increment = (): void => {
        this.setState({ count: this.state.count + 1 }); 
    }; 

    render() { 
        return (
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
}

export default Counter;
