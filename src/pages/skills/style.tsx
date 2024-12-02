import styled from 'styled-components';

export const DescriptionText = styled.p`
    margin: 2 rem;
    text-align: center;
    padding: 0% 10% 2% 10%;
`;


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2d3250;
    display: flex;

    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    padding-top:10px;
    text-align: center;
    margin-bottom: 10px;
    font-size: 30px;  
    font-weight: normal;
    word-wrap: break-word;
`;

export const ContainerFrontSkill = styled.div`
    width: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerBackSkill = styled.div`
    background-color: #222222;
    width: 50%;
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerSkill = styled.div`
    width: 60%;
    padding-bottom: 2rem;
`;