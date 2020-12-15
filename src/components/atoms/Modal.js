import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ContentLayout key={isOpen} isOpen={isOpen}>
      <div className="container">
        <MdCancel onClick={onClose} />
        {children}
      </div>
    </ContentLayout>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
  isOpen: false,
};

const ContentLayout = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000085;
  z-index: 1;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    right: 0;
    top: 0;
    color: lightgrey;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  .container {
    position: relative;
    background-color: white;
    height: fit-content;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    width: 30rem;
    padding-top: 2rem;
  }
`;

export default Modal;
