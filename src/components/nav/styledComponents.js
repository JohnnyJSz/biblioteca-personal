import styled from "styled-components";

export const NavContainer = styled.div`
    margin-left: 200px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  a {
    text-decoration: none;
    margin: 0 20px 0 20px;
  }

  .active {
    color: green;
  }
`;
