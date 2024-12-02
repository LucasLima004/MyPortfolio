import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledMenuProps {
  open: boolean;
}

const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
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
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/MyPortfolio" onClick={() => setOpen(false)}>
        Início
      </Link>
      <Link to="/MyPortfolio/skills" onClick={() => setOpen(false)}>
        Skills
      </Link>
      <Link to="/MyPortfolio/portfolio" onClick={() => setOpen(false)}>
        Portfólio
      </Link>
      <Link to="/MyPortfolio/about" onClick={() => setOpen(false)}>
        Sobre
      </Link>
      <Link to="/MyPortfolio/contact" onClick={() => setOpen(false)}>
        Contato
      </Link>
    </StyledMenu>
  );
};

export default Menu;
