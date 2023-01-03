import React from 'react';
import ReactDOM from 'react-dom/client';
    const heading1=React.createElement("h1",{
        id:"container",
    },"Its Working");

    const heading2=React.createElement("h2",{
        id:"container",

    },"heading toward Pracel");
    const container=React.createElement("div",{
        id:"container"
    },[heading1,heading2]);

    const root=ReactDOM.createRoot(document.getElementById("container"));
    root.render(container);
