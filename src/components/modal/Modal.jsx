import PropTypes from "prop-types";
import "./modal.scss";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};
Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};
export const ModalContent = (props) => {
  const contentRef = useRef();
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="icon__close">
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </div>
    </div>
  );
};
ModalContent.propTypes = {
  onClose: PropTypes.func,
};
export default Modal;
