import React from "react";
import { Container, Box, Text } from "./styles";

const TimeLine = ({ company, office, inicialDate, endDate, description }) => {
  return (
    <Container>
      <Box>
        <h1>V</h1>
      </Box>

      <Text>
        <h2>{company}</h2>

        <h3>{office}</h3>

        <small>
          {inicialDate} - {endDate ?? "até o momento"}
        </small>

        <p>{description}</p>
      </Text>
    </Container>
  );
};

export default TimeLine;
