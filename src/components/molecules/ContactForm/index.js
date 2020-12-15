import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import FormError from "../../atoms/FormError";
import {
  validateEmail,
  validateRepeatContact,
} from "../../../utils/validationsHelper";
import { LSSaveContactData } from "../../../services/localStorageHelper";

const ContactForm = ({ post_id, onSuccess }) => {
  const [errorList, setErrorList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorList([]);
    const errors = [];

    const nombre = event.target[0].value;
    const telefono = event.target[1].value;
    const email = event.target[2].value;

    //validations
    !validateEmail(email) && errors.push("Formato de email incorrecto");
    validateRepeatContact(email, post_id) &&
      errors.push("El email ya consulto por esta publicacion");

    const newContact = {
      nombre,
      telefono,
      email,
      post_id,
    };

    return errors.length ? setErrorList(errors) : sendData(newContact);
  };

  const sendData = (newContact) => {
    LSSaveContactData(newContact);
    return onSuccess();
  };

  return (
    <ContentLayout onSubmit={handleSubmit}>
      {errorList.length ? <FormError messageList={errorList} /> : null}
      <Input className="inputLayout" placeholder="Nombre" />
      <Input className="inputLayout" placeholder="Telefono" />
      <Input className="inputLayout" placeholder="Email" />
      <Button className="sendButton" type="primary">
        Enviar
      </Button>
    </ContentLayout>
  );
};

const ContentLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .sendButton {
    padding: 0.7rem 1.2rem;
  }

  .inputLayout {
    width: 95%;
    margin-bottom: 0.5rem;
  }
`;

export default ContactForm;
