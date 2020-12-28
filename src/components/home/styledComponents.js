import styled from 'styled-components';

export const HomeMainContainer = styled.div`
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const Form = styled.form`
    width: 40%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 3px;
    height: 1.5rem;
    text-align: center;
`;

export const Button = styled.button`
    background-color: #2D4EBF;
    border: none;
    color: white;
    border-radius: 3px;
    height: 1.5rem
`;