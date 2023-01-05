#Functional component 
import React from 'react';
import ReactDOM from 'react-dom/client';
    const Heading=()=>(
    <h1>
        Namaste Javascript
        </h1>
        );

        const Header=()=>{
            return(
                
            <div>
                <Heading />
            <h1>Namaste Functional component</h1>
            </div>
            );
        };

    const root=ReactDOM.createRoot(document.getElementById("container"));
    root.render(<Header/>);


