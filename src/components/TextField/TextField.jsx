import React from "react";
import { Field } from "formik";
import { Container } from "./styles";

const TextField = ({
  label,
  name,
  type = "text",
  placeholder = "Digite ....",
  error,
}) => {
  console.log("error", error);
  return (
    <Container error={error}>
      <p>{label}</p>

      <Field type={type} name={name} placeholder={placeholder} />

      {error && <p>{error}</p>}
    </Container>
  );
};

export default TextField;
