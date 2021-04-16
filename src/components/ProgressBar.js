import React, { useEffect } from "react";
import UploadImages from "../hooks/UploadImages";

function ProgressBar({ File, setFile }) {
  const { progress, url } = UploadImages(File);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
}

export default ProgressBar;
