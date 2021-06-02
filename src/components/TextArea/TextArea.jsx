import React from "react";
import { Field } from "formik";
import { Container } from "./styles";

const TextArea = ({
  label,
  name,
  as,
  type = "text",
  placeholder = "Digite ....",
  error,
}) => {
  return (
    <Container error={error}>
      <p>{label}</p>

      <Field type={type} as={as} name={name} placeholder={placeholder} />

      {error && <p>{error}</p>}
    </Container>
  );
};

export default TextArea;
