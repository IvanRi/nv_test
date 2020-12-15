import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FavButton from "../../atoms/FavButton";

const ImageGalery = ({ image, liked, operationType, imgTitle, handleFav }) => {
  return (
    <ContentLayout>
      <img src={image} alt={imgTitle}></img>
      <div className="controls">
        <span className="operationTag">{operationType}</span>
        <FavButton liked={liked} onClick={handleFav} />
      </div>
    </ContentLayout>
  );
};

ImageGalery.propTypes = {
  image: PropTypes.string,
  liked: PropTypes.bool,
  operationType: PropTypes.string,
  imgTitle: PropTypes.string,
  handleFav: PropTypes.func,
};

const ContentLayout = styled.div`
  max-height: 12rem;
  overflow: hidden;
  position: relative;

  .operationTag {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
  }

  .controls {
    position: absolute;
    top: 0;
    background-color: transparent;
    width: 100%;
    padding: 0.7rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

export default ImageGalery;
