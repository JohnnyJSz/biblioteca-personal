import styled from "styled-components";
import { Field } from "formik";
import { responsive } from "../../../UI/responsive/responsive";

export const Container = styled.div`
  padding: 1rem;

  @media ${responsive.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const MyField = styled(Field)`
  padding: 8px;
  width: 48vmax;
  height: 2rem;
  background-color: whitesmoke;
  outline: none;
  border-style: none;
  font-size: medium;
  border-radius: 5px;

  @media ${responsive.tabletL} {
    width: 47vmax;
  }

  @media ${responsive.tablet} {
    width: 46vmax;
  }

  @media (max-width: 590px) {
    width: 45vmax;
  }

  @media ${responsive.mobileL} {
    width: 42vmax;
  }

  @media ${responsive.mobileM} {
    width: 40vmax;
  }
`;
