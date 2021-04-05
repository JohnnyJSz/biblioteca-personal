import styled from "styled-components";
import { responsive } from "../../../UI/responsive/responsive";

export const Container = styled.div`
  padding: 1rem;

  & .textarea {
    padding: 8px;
    width: 48vmax;
    height: 10rem;
    background-color: whitesmoke;
    outline: none;
    border-style: none;
    resize: none;
    font-style: italic;
    font-size: large;
    border-radius: 5px;
  }

  @media ${responsive.tabletL} {
    & .textarea {
      width: 47vmax;
    }
  }

  @media ${responsive.tablet} {
    & .textarea {
      width: 46vmax;
    }
  }

  @media (max-width: 590px) {
    & .textarea {
      width: 45vmax;
      height: 16rem;
    }
  }

  @media ${responsive.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .textarea {
      width: 42vmax;
      height: 14rem;
    }
  }

  @media ${responsive.mobileM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .textarea {
      width: 40vmax;
      height: 12rem;
    }
  }
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;
