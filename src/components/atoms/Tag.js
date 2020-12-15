import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tag = ({ label }) => <ContentLayout>{label}</ContentLayout>;

Tag.propTypes = {
  label: PropTypes.string,
};

const ContentLayout = styled.div`
  background-color: #00000087;
  color: white;
  padding: 0.3rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.1rem;
  .deleteButton {
    margin-left: 0.3rem;
    cursor: pointer;
  }
`;

export default Tag;
