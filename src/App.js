import React, { useState } from "react";
import "./App.css";
import DisplayImage from "./components/DisplayImage";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [Selected, setSelected] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <DisplayImage setSelected={setSelected} />
      {Selected && <Modal Selected={Selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
