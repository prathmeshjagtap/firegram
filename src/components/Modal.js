import React from "react";
import { motion } from "framer-motion";

function Modal({ Selected, setSelected }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        src={Selected}
        alt="Enlaged Pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
