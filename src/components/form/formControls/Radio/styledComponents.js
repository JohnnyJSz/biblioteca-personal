import styled from "styled-components";

export const MainContainer = styled.div`
  width: 46rem;
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const FieldContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InputContainer = styled.div`
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

export const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #b8b8b8;
  border-radius: 50%;
  background-clip: content-box;
  padding: 3px;
  outline: none;
  margin: auto 0;
  &:checked {
    background-color: #818181;
  }
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin: auto 0;
`;
