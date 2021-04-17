import React, { useEffect } from "react";
import UploadImages from "../hooks/UploadImages";

function ProgressBar({ File, setFile }) {
  const { Progress, url } = UploadImages(File);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: Progress + "%" }}></div>;
}

export default ProgressBar;
