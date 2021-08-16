import React from "react";
import Login from "./Login";

const IsLogedIn = false;

function App() {
  return (
    <div className="container">
      {IsLogedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
