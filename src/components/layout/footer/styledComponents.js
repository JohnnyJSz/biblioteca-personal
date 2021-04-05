import styled from "styled-components";
import { responsive } from "../../UI/responsive/responsive";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100vw;
  position: fixed;
  top: 95vh;
  background-color: #c5c5c5;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.75);
  /* z-index: 2; */

  p {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }

  @media ${responsive.tabletL} {
    p {
      font-size: 1rem;
    }
  }

  @media ${responsive.tablet} {
    p {
      font-size: 0.9rem;
    }
  }

  @media ${responsive.mobileL} {
    p {
      font-size: 0.8rem;
    }
  }

  @media ${responsive.mobileM} {
    p {
      font-size: 0.7rem;
    }
  }
`;
