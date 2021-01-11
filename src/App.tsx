import * as React from "react";
import "./App.css";

import Albums from "./components/Albums";
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">
      <h2>This is an application with Redux!</h2>
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
