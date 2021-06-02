import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-bottom: 26px;

  input {
    border: 1px solid ${(props) => (props.error ? "#E3052F" : "#e5e5e5")};
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    height: 120px;
    line-height: 20px;
    padding: 0 8px;
    width: 100%;

    &::placeholder {
      color: #e5e5e5;
      font-family: "Kalam", sans-serif;
    }
  }

  textarea {
    border: 1px solid ${(props) => (props.error ? "#E3052F" : "#e5e5e5")};
    border-radius: 4px;
    font-size: 20px;
    height: 120px;
    line-height: 20px;
    padding: 8px;
    width: 100%;

    &::placeholder {
      color: #e5e5e5;
    }
  }

  p {
    color: ${(props) => (props.error ? "#E3052F" : "#4d4d4d")};
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
