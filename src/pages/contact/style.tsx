import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2.5%;
    width: 100%;
    height: 70vh;
    display: flex;

    @media (max-width: 768px) {
        height:100%;
        flex-direction: column;
    }
`;

export const ContactContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        padding: 1rem 0 1rem 0;
        width: 100%;
    }
`;

export const TransparentContainer = styled.div`
    padding: 2rem;
    text-align: center;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        background-color: #2d3250;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

export const Line = styled.div`
    height: 3rem;
    width:2px;
    background-color: #2d3250;

    
    @media (max-width: 768px) {
        background-color: #acacac;
    }
`;

export const TextContent = styled.p`
    font-size:1rem;
`;

export const ContactWithMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Phone = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
`;

export const PhoneNumber = styled.div`
    padding: 1rem;
    font-size: 15px;
    font-weight: bolder;
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
`;