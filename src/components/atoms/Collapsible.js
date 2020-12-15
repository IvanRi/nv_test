import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = () => setIsOpen(!isOpen);

  return (
    <ContentLayout isOpen={isOpen}>
      <div className="header" onClick={handleCollapse}>
        <h3>{title}</h3>
        {isOpen ? (
          <MdKeyboardArrowUp className="arrowIcon" />
        ) : (
          <MdKeyboardArrowDown className="arrowIcon" />
        )}
      </div>
      {children}
    </ContentLayout>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

const ContentLayout = styled.div`
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "fit-content" : "2.2rem")};
  margin: 1rem 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.8rem 0;
    border-top: 1px solid lightgrey;
  }
  .arrowIcon {
    font-size: 1.5rem;
    color: grey;
  }
`;

export default Collapsible;
