import React, { useState, useEffect } from 'react';
import { Item, Menu, MenuItem, Nav, NavArea } from './style';
import Logo from '../logo';
import { Link } from 'react-router-dom';
import Burger from './burguer/Burguer';
import MenuSide from './burguer/MenuSide';

const NavMenu: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavArea>
      <Nav>
        {isMobile && <>
          <Burger open={open} setOpen={setOpen} />
          <MenuSide open={open} setOpen={setOpen}/>
        </>}

        {!isMobile && (
          <Menu>
            <MenuItem>
              <Item>
                <Link to="/MyPortfolio" onClick={() => setOpen(false)}>
                  Início
                </Link>
              </Item>
            </MenuItem>

            <MenuItem>
              <Item>
                <Link to="/MyPortfolio/skills" onClick={() => setOpen(false)}>
                  Skills
                </Link>
              </Item>
            </MenuItem>
            <MenuItem>
              <Item>
                <Link to="/MyPortfolio/portfolio" onClick={() => setOpen(false)}>
                  Portfólio
                </Link>
              </Item>
            </MenuItem>
            <MenuItem>
              <Item>
                <Link to="/MyPortfolio/about" onClick={() => setOpen(false)}>
                  Sobre
                </Link>
              </Item>
            </MenuItem>
            <MenuItem>
              <Item>
                <Link to="/MyPortfolio/contact" onClick={() => setOpen(false)}>
                  Contato
                </Link>
              </Item>
            </MenuItem>
          </Menu>
        )}
      </Nav>
      <Link to="/MyPortfolio">
        <Logo widthNumber={50} />
      </Link>
    </NavArea>
  );
};

export default NavMenu;
