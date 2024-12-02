import styled from 'styled-components';

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
    margin: 2rem 0 2rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ContainerAbout = styled.div`
    width: 50%;
    height:100%;
    overflow: hidden;
    padding-right: 2%;
`;

export const TransparentContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ContainerFooter = styled.div`
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    background-color: #222222;
    height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;