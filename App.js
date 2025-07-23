import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id : "parent"},
  [  React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "hello i am child" ), 
        React.createElement("h2", {}, "hello h2 i am child" )
    ]),
      React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "hello i am child" ), 
        React.createElement("h2", {}, "hello h2 i am child" )
    ])]
 );

console.log(parent);


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);