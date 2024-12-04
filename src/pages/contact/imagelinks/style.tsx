import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const SvgContainer = styled.div`
    width: 30px;
    height: 30px;
`;

export const Title = styled.h3`
    margin: 0;
    padding-left: 1rem;
    font-size: 16px;
    color: ${Colors.darkGray};
`;