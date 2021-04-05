import styled from "styled-components";
import { responsive } from "../UI/responsive/responsive";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1.75rem 0 0;
  

  @media ${responsive.tabletL} {
    margin: 0 1.5rem 0 0;
  }

  @media ${responsive.tablet} {
    width: 85%;
    margin: 0 1rem 0 0;
  }

  @media (max-width: 590px) {
    width: 100%;
    margin: auto;
  }

  @media ${responsive.mobileL} {
    width: 100%;
    margin: auto;
  }

  @media ${responsive.mobileM} {
    width: 100%;
    margin: auto;
  }
`;

export const Ul = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  color: #2f2f33;
  font-size: larger;
  font-weight: 600;

  a {
    text-decoration: none;
    margin: 0 1.6rem;
  }

  .active {
    font-weight: 900;
    color: #1c3065;
  }

  @media ${responsive.tabletL} {
    font-size: large;
    font-weight: 500;
    a {
      margin: 0 1.4rem;  
    }
    .active {
      font-weight: 800;
    }
  }

  @media ${responsive.tablet} {
    font-size: medium;
    font-weight: 500;
    a {
      margin: 0 1.2rem;
    }
    .active {
      font-weight: 700;
    }
  }
  
  @media (max-width: 590px) {
    font-size: medium;
    font-weight: 500;
    a {
      margin: 0 1rem;
    }
    .active {
      font-weight: 700;
    }
  }

  @media ${responsive.mobileL} {
    font-size: small;
    font-weight: 400;
    a {
      margin: 0 .8rem;
    }
    .active {
      font-weight: 600;
    }
  }

  @media ${responsive.mobileM} {
    font-size: smaller;
    font-weight: 300;
    a {
      margin: 0 .4rem;
    }
    .active {
      font-weight: 500;
    }
  }
`;
