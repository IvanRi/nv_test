import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children } = props;
  return <ContentLayout {...props}>{children}</ContentLayout>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.string,
};

Button.defaultProps = {
  type: "default",
};

const ContentLayout = styled.button`
  ${({ theme, type }) => theme.buttonVariants[type]}
  width: fit-content;
  padding: 0.4rem 0.6rem;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 0.3rem;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default Button;
