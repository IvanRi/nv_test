import React from "react";
import styled from "styled-components";

const Paper = ({ children }) => <ContentLayout>{children}</ContentLayout>;

const ContentLayout = styled.div`
  background-color: white;
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.palette.shadow};
  overflow: hidden;
  margin-bottom: 1rem;
`;

export default Paper;
