import React from "react";
import styled from "styled-components";

const Input = (props) => <ContentLayout {...props}></ContentLayout>;

const ContentLayout = styled.input`
  border: 2px solid #e2e1e1;
  padding: 0.6rem;
  width: 100%;
  border-radius: 0.3rem;
  :focus {
    outline: none;
  }
`;

export default Input;
