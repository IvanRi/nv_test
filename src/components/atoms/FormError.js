import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormError = ({ messageList }) => {
  return (
    <ContentLayout>
      <h6>Han ocurrido los siguientes errores: </h6>
      {messageList.map((msg, i) => (
        <span key={i}>{"- " + msg}</span>
      ))}
    </ContentLayout>
  );
};

FormError.propTypes = {
  placeholder: PropTypes.string,
};

const ContentLayout = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 0.3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  color: #4a4a4a;
  background-color: #ff000057;
  font-size: 0.9rem;

  h6 {
    font-weight: bold;
  }
`;

export default FormError;
