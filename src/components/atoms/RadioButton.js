import React from "react";
import styled from "styled-components";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import PropTypes from "prop-types";

const RadioButton = ({ checked, label, handleChecked }) => {
  return (
    <ContentLayout>
      {checked ? (
        <MdRadioButtonChecked className="radioButton checked" />
      ) : (
        <MdRadioButtonUnchecked
          className="radioButton"
          onClick={() => handleChecked(label)}
        />
      )}
      {label}
    </ContentLayout>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  handleChecked: PropTypes.func,
};

RadioButton.defaultProps = {
  handleChecked: () => {},
};

const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  font-size: 0.9rem;

  .radioButton {
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0.2rem;
    color: lightgrey;
  }

  .checked {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export default RadioButton;
