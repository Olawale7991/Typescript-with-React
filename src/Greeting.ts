import React from 'react';

// Step 2: Define the props interface
interface GreetingProps {
    name: string; // 'name' should be a string
}

// Step 3: Annotate the component with the props type
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
    return <div>Hello, {name}!</div>;
};

export default Greeting;
