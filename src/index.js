import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Button = (props) => {
  return (<button onClick={props.reset}>RESET</button>);
};

const Hello = (props) => {
  if (props.name === "") {
    return (<h1></h1>);
  } else {
    return (<h1>Hello {props.name}</h1>);
  }
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button reset={reset} />
      <Hello name={name} />
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
