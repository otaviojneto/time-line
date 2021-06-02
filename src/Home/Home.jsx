import React, { useState } from "react";
import { Box, Btn, Container, Row, Footer } from "./styles";
import { Formik, Form } from "formik";

import validationSchema from "./validationSchema";
import { TextArea, TextField, TimeLine } from "../components";

const Home = (initialValues, onSubmit) => {
  const [experience, setIsExperience] = useState(false);
  const onSave = (data) => onSubmit(data);

  return (
    <Container>
      <h1>Professional Experiences</h1>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => onSave(values)}
        >
          {({ handleSubmit, errors }) => (
            <Form>
              <Row>
                <TextField
                  label="Nome da Empresa"
                  name="companyName"
                  error={errors.companyName}
                />

                <TextField label="Cargo" name="office" error={errors.office} />
              </Row>

              <Row>
                <TextField
                  label="Data de Inicio"
                  name="startDate"
                  error={errors.startDate}
                />

                <TextField
                  label="Termino"
                  name="endDate"
                  error={errors.endDate}
                />
              </Row>

              <TextArea
                textArea
                label="Descrição"
                as="textarea"
                name="description"
                error={errors.description}
              />

              <Footer>
                <Btn type="submit">Limpar</Btn>

                <Btn primary onClick={() => handleSubmit(experience)}>
                  Salvar
                </Btn>
              </Footer>
            </Form>
          )}
        </Formik>
      </Box>

      {/* {experience.map((item) => (
        <TimeLine
          company={item.companyName}
          office={item.office}
          inicialDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      ))} */}
    </Container>
  );
};

export default Home;
