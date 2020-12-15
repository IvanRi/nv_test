import React from "react";
import styled from "styled-components";
import { BiHistory } from "react-icons/bi";
import Button from "../../atoms/Button";
import { getDiffInDays } from "../../../utils/dateHelpers";

const Description = ({
  title,
  location,
  description,
  publishDate,
  handleContact,
  publicationId,
}) => {
  const { address, zone, city } = location;

  const onContact = () => {
    const contactData = { title, publicationId };
    handleContact(contactData);
  };

  return (
    <ContentLayout>
      <h4>{title}</h4>
      <h5>{[address, zone, city].join(", ")}</h5>
      <p>{description}</p>
      <div className="footer">
        <span className="history">
          <BiHistory /> Publicado hace{" "}
          {publishDate ? getDiffInDays(publishDate) : "-"} días
        </span>
        <Button className="contactButton" type="primary" onClick={onContact}>
          Contactar
        </Button>
      </div>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  padding: 1rem;
  position: relative;
  height: 100%;
  box-sizing: border-box;

  h4 {
    color: #009fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    height: 4rem;
    overflow: hidden;
    margin-top: 3rem;
  }

  .history {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
  }

  .contactButton {
    padding: 0.7rem 1.2rem;
  }

  .footer {
    position: absolute;
    bottom: 1.5rem;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Description;
