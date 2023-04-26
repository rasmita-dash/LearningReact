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