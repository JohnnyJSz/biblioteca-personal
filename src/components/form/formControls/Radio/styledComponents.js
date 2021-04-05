import styled from "styled-components";
import { responsive } from "../../../UI/responsive/responsive";

export const MainContainer = styled.div`
  width: 49.5vmax;
  padding: 1rem;

  @media ${responsive.tabletL} {
    width: 48.5vmax;
  }

  @media ${responsive.tablet} {
    width: 47.5vmax;
  }

  @media (max-width: 590px) {
    width: 46.5vmax;
  }

  @media ${responsive.mobileL} {
    width: 43.5vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    width: 41.5vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const FieldContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${responsive.mobileL} {
    width: 43.5vmax;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    width: 40vmax;
    flex-direction: column;
    align-items: center;
  }
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
