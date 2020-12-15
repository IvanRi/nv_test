import React from "react";
import styled from "styled-components";
import Paper from "../../atoms/Paper";
import ImageGalery from "../ImageGalery";
import { parsePriceAmount } from "../../../utils/currencyHelpers";
import Description from "./Description";
import {
  LSSaveLikePost,
  LSRemoveLikePost,
} from "../../../services/localStorageHelper";

const Publication = ({ post, handleContact, liked, getLikedPosts }) => {
  const {
    publication_plan,
    posting_picture,
    title,
    posting_prices,
    posting_location,
    posting_description,
    publish_date,
    posting_id,
    operation_type,
  } = post;
  const { price, expenses } = posting_prices[0];

  const handleFav = () => {
    liked ? LSRemoveLikePost(posting_id) : LSSaveLikePost(posting_id);
    getLikedPosts();
  };

  return (
    <Paper>
      <ContentLayout plan={publication_plan}>
        <div className="carousel">
          <ImageGalery
            image={posting_picture}
            imgTitle={title}
            operationType={operation_type.operation_type_name}
            liked={liked}
            handleFav={handleFav}
          />
          <div className="priceContainer">
            <div className="price">
              {parsePriceAmount(price.amount, price.currency)}
            </div>
            {expenses && (
              <div className="expenses">
                <span>
                  {parsePriceAmount(expenses.amount, expenses.currency)}
                </span>
                <span>Expensas</span>
              </div>
            )}
          </div>
        </div>
        <div className="description">
          <Description
            title={title}
            location={posting_location}
            description={posting_description}
            publishDate={publish_date}
            publicationId={posting_id}
            handleContact={handleContact}
          />
        </div>
      </ContentLayout>
    </Paper>
  );
};

const ContentLayout = styled.div`
  display: flex;
  height: 17rem;
  ${({ theme, plan }) => theme.publicationVariants[plan]};

  section {
    margin: 0;
  }

  .priceContainer {
    box-sizing: border-box;
    margin: 1rem 0;
    border-right: 2px solid lightgrey;
    height: 3rem;
    padding: 0 1rem;
  }

  .price {
    font-size: 1.4rem;
    font-weight: bold;
    span {
      margin-right: 0.5rem;
    }
  }

  .expenses {
    margin-top: 1rem;
    span {
      margin-right: 0.3rem;
    }
  }

  .carousel {
    width: ${({ plan }) => (plan === "SUPERHIGHLIGHTED" ? "40%" : "35%")};
  }

  .description {
    width: ${({ plan }) => (plan === "SUPERHIGHLIGHTED" ? "60%" : "65%")};
  }
`;

export default Publication;
