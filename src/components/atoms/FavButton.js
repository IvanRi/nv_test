import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavButton = (props) => {
  const { liked } = props;

  return (
    <ContentLayout {...props}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart className="liked" />}
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  background-color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ liked }) => (liked ? "#ff0000ab" : "grey")};
  svg {
    font-size: 1.4rem;
  }
`;

export default FavButton;
