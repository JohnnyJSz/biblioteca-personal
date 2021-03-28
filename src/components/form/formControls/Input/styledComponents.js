import styled from 'styled-components';
import { Field } from "formik";

export const Container = styled.div`
    padding: 1rem;
`;

export const Label = styled.div`
    margin-bottom: .5rem;
    font-weight: bolder;
`;

export const MyField = styled(Field)`
    padding: 8px;
    width: 45rem;
    height: 1.5rem;
    background-color: whitesmoke;
    outline: none;
    border-style: none;
    font-size: medium;
    border-radius: 5px;
`;
