import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 82px;
  text-align: left;
  width: 100%;

  textarea {
    border: 1px solid #e5e5e5;
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

  input {
    border: 1px solid ${(props) => (props.error ? "#E3052F" : "#e5e5e5")};
    border-radius: 4px;
    caret-color: grey;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    height: 40px;
    line-height: 24px;
    padding: 8px 12px;
    width: 100%;

    &::placeholder {
      color: #e5e5e5;
      font-family: "Kalam", sans-serif;
    }
  }
`;
