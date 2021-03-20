import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 1);
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 1rem;
  background-color: #c1c1c1;
  border-radius: 10px;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 1);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 3px;
  height: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin: 20px 0;
  background-color: #2d4ebf;
  border: none;
  color: white;
  border-radius: 3px;
  height: 1.5rem;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 20px;
`;
