import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const DescriptionText = styled.div`
    text-align: center;
    padding: 2% 10% 6% 10%;
`;


export const Title = styled.h1`
    text-align: center;
    font-size: 20px;  
    font-weight: normal;
    word-wrap: break-word;
`;


export const Container = styled.div`
    margin: 2rem 0 .2rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 1477px) {
        margin: 2rem 0 2rem 0;
    }   

    @media (max-width: 768px) {
        margin: 2rem 0 0 0;
        flex-direction: column;
    }
`;

export const ContainerAbout = styled.div`
    width: 50%;
    height:100%;
    overflow: hidden;
    padding-right: 2%;
    @media (max-width: 768px) {
        padding-right: 0%;
        background-color: ${Colors.darkGray};
        width: 100%; 
    }
`;

export const TransparentContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        height: 70%;
    }
`;

export const ContainerFooter = styled.footer`
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    background-color: ${Colors.darkGray};
    height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        margin-top: 0rem;
        height: 10vh;
    }

    @media (max-width: 1440px) and (min-width: 769px) {
        margin-top: 3rem;
        height: 10vh;
    }

    @media (max-width: 2585px) and (min-width: 1500px) {
        margin-top: 20rem;
        height: 10vh;
    }
`;