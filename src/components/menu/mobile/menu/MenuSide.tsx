import React from "react";
import { Link } from "react-router-dom";
import { BurgerProps } from "../../../../utils/Interfaces";
import { StyledMenu } from "./style";

export const Menu: React.FC<BurgerProps> = ({ open, setOpen }) => {
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