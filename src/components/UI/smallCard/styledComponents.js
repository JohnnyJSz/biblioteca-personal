import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MyLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 10rem;
  height: 3rem;
  padding: .2px 0.5rem;
  margin: .2rem;
  background-color: ${props => props.success ? 'red' : '#6d6f6f'};
  color: whitesmoke;
  font-variant: small-caps;
  font-weight: bolder;
`;
