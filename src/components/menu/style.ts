import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const Item = styled.span`
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(90deg, ${Colors.rose}, ${Colors.deepGray});
    background-clip: text;
    -webkit-background-clip: text;
    color: ${Colors.white};
    transition: background 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, ${Colors.lightPink} 0%, ${Colors.skyBlue} 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    & * {
        font-size: inherit;
        font-weight: inherit;
        background: inherit;
        background-clip: inherit;
        -webkit-background-clip: inherit;
        color: inherit;
        transition: inherit;
        text-decoration: none;

        &:hover {
            background: inherit;
            background-clip: inherit;
            -webkit-background-clip: inherit;
            color: inherit;
        }
    }
`;

export const Nav = styled.nav`
    width:100%;
    padding-left:2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
`;

export const Menu = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MenuItem = styled.li`
    margin-right: 30px;
    height:100%;
`;
    
export const NavArea = styled.div`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.4),
        ${Colors.deepBlue}
    );
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
`;
