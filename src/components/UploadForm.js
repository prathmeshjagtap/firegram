import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const submitForm = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={submitForm} />
          <span>+</span>
        </label>
        <div className="output">
          {Error && <div className="error">{Error}</div>}
          {File && <div>{File.name}</div>}
          {File && <ProgressBar File={File} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
