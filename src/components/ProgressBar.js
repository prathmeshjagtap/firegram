import React, { useEffect } from "react";
import UploadImages from "../hooks/UploadImages";
import { motion } from "framer-motion";

function ProgressBar({ File, setFile }) {
  const { Progress, url } = UploadImages(File);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: Progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
