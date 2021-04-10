import styled from "styled-components";
import { responsive } from "../../UI/responsive/responsive";

export const Container = styled.div`
  height: auto;
  padding: 0vh 0vh 6vh 0vh;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
  margin: 1rem auto 0rem auto;
  width: 100%;
  max-width: 75vmax;
  background-color: #e2e2e2;
  border-radius: 15px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);

  p {
    font-size: 1.8rem;
  }

  @media ${responsive.tabletL} {
    p {
      font-size: 1.6rem;
    }
  }

  @media ${responsive.tablet} {
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 590px) {
    padding: 1.1rem;
    p {
      font-size: 1.4rem;
    }
  }

  @media ${responsive.mobileL} {
    padding: 0.8rem;
    p {
      font-size: 1.2rem;
    }
  }

  @media ${responsive.mobileM} {
    padding: 0.5rem;
    p {
      font-size: 1rem;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30rem;
  margin: 1rem auto 0rem auto;

  @media (max-width: 590px) {
    width: auto;
    flex-direction: column;
    align-items: center;
  }

  @media ${responsive.mobileL} {
    width: auto;
    flex-direction: column;
    align-items: center;
  }

  @media ${responsive.mobileM} {
    width: auto;
    flex-direction: column;
    align-items: center;
  }
`;
