import React from "react";
import "./App.css";
import DisplayImage from "./components/DisplayImage";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <DisplayImage />
    </div>
  );
}

export default App;
