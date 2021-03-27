import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  & .textarea {
    padding: 8px;
    width: 45rem;
    height: 10rem;
    background-color: whitesmoke;
    outline: none;
    border-style: none;
    resize: none;
    font-style: italic;
    font-size: large;
  }
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

