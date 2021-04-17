import React from "react";

function Modal({ Selected, setSelected }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={Selected} alt="Enlaged Pic" />
    </div>
  );
}

export default Modal;
