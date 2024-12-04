import styled from "styled-components";
import { Colors } from "../../../../utils/Colors";
import { StyledBurgerProps } from "../../../../utils/Interfaces";

export const StyledMenu = styled.nav<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Colors.light};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh; 
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9999; 

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${Colors.darkBlue};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${Colors.purple};
    }
  }
`;
