/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Formik, Form } from "formik";

export const X = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// export const MyFormik = styled(Formik)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 50vw;
  height: 100%;
  padding: 1rem;
  background-color: #E6E6E6;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  font-size: 120%;
  font-weight: bold;
  outline: none;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
`;
