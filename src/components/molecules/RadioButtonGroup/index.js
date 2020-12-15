import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RadioButton from "../../atoms/RadioButton";

const RadioButtonGroup = ({ handleChange }) => {
  const [selected, setSelected] = useState("Todos");

  useEffect(() => {
    handleChange(selected);
  }, [selected, handleChange]);

  const compareSelected = (value) => selected === value;

  const handleSelected = (value) => setSelected(value);

  return (
    <ContentLayout>
      <RadioButton
        checked={compareSelected("Comprar")}
        label={"Comprar"}
        handleChecked={handleSelected}
      />
      <RadioButton
        checked={compareSelected("Alquilar")}
        label={"Alquilar"}
        handleChecked={handleSelected}
      />
      <RadioButton
        checked={compareSelected("Temporal")}
        label={"Temporal"}
        handleChecked={handleSelected}
      />
      <RadioButton
        checked={compareSelected("Todos")}
        label={"Todos"}
        handleChecked={handleSelected}
      />
    </ContentLayout>
  );
};

const ContentLayout = styled.div``;

export default RadioButtonGroup;
