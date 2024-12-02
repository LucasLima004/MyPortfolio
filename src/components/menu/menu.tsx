import { Menu, Item, MenuItem, Nav, NavArea } from './style';
import Logo from '../logo';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
    return (
        <NavArea>
            <Nav>
                <Menu>
                    <MenuItem>
                        <Item>
                            <Link to="/MyPortfolio">Início</Link>
                        </Item>
                    </MenuItem>
                    
                    <MenuItem>
                        <Item>
                            <Link to="/MyPortfolio/skills">Skills</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/MyPortfolio/portfolio">Portfólio</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/MyPortfolio/about">Sobre</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/MyPortfolio/contact">Contato</Link>
                        </Item>
                    </MenuItem>
                </Menu>
            </Nav>
            <Link to="/MyPortfolio">
                <Logo widthNumber={50} />
            </Link>
        </NavArea>
    );
}

export default NavMenu;