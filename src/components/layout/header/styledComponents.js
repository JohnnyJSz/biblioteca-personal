import styled from "styled-components";
import { responsive } from "../../UI/responsive/responsive";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c5c5c5;
  position: fixed;
  width: 100vw;
  height: 10vh;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);
  z-index: 2;

  .iconAuth {
    width: 15%;
    height: 8vh;
    margin: 0 0 0 1.5rem;
  }
  .iconNoAuth {
    width: 15%;
    height: 8vh;
  }

  .iconAuth_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .iconNoAuth_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${responsive.tabletL} {
    .iconAuth {
      margin: 0 0 0 1.5rem;
    }
  }

  @media ${responsive.tablet} {
    .iconAuth {
      margin: 0 0 0 1.5rem;
    }
  }

  @media (max-width: 590px) {
    justify-content: center;
    .iconAuth {
      display: none;
    }
    .iconAuth_img {
      display: none;
    }

    .iconNoAuth {
      width: 15%;
      height: 8vh;
      margin: 0 0 0 1.5rem;
    }
  }

  @media ${responsive.mobileL} {
    justify-content: center;
    .iconAuth {
      display: none;
    }
    .iconAuth_img {
      display: none;
    }

    .iconNoAuth {
      width: 15%;
      height: 8vh;
      margin: 0 0 0 1.5rem;
    }
  }

  @media ${responsive.mobileM} {
    justify-content: center;
    .iconAuth {
      display: none;
    }
    .iconAuth_img {
      display: none;
    }

    .iconNoAuth {
      width: 15%;
      height: 8vh;
      margin: 0 0 0 1.5rem;
    }
  }
`;
