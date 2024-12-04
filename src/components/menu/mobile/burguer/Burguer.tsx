import React from "react";
import { StyledBurger } from "./style";
import { BurgerProps } from "../../../../utils/Interfaces";

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};