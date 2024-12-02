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
                            <Link to="/">Início</Link>
                        </Item>
                    </MenuItem>
                    
                    <MenuItem>
                        <Item>
                            <Link to="/skills">Skills</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/portfolio">Portfólio</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/about">Sobre</Link>
                        </Item>
                    </MenuItem>
                    <MenuItem>
                        <Item>
                            <Link to="/contact">Contato</Link>
                        </Item>
                    </MenuItem>
                </Menu>
            </Nav>
            <Link to="/">
                <Logo widthNumber={50} />
            </Link>
        </NavArea>
    );
}

export default NavMenu;