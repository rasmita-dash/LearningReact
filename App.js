import React from 'react';
import ReactDOM from 'react-dom';

const heading= React.createElement("h1",{}, "Hello From React");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{/* <div id= "parent">
    <div id="child">
        <h1>nested element!</h1>
    </div>
</div> */}

const parent =  React.createElement("div",{id:"parent"},
                                        React.createElement("div", {'id': 'child'},
                                                                React.createElement('h1',{},"nested h1 element")));

root.render(parent);

// JSX
const jsxHeading= <h1 id = 'header'>heading from JSX</h1>;
root.render(jsxHeading);

// Functional Component
const HeadingComponent = () =>{
    return <h1> Functional component</h1>
}
//HeadingComponent = () => <h1>Functional componet </h1>
root.render(<HeadingComponent/>)

// Component Composition
const ParagraphComponment =() =>{
    return <p>
        <HeadingComponent/>
        <label>A Javascript function that returns JSX or React element.</label>
    </p>
}
root.render(<ParagraphComponment/>)

// Any javascript code can be injected inside JSX within {}
// Functional components are js functions. so they can be invoked in functional component
const test=1000;
const JSInFunctionalComponent= ()=>{
    return <p> JS in Functional Component<br/>
        {1000}<br/>
        {78*45}
        {console.log("logging test from Functional component")}
        {ParagraphComponment()} 
    </p>
}
root.render(<JSInFunctionalComponent/>)

