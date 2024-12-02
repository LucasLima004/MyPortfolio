import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 75vh;
    display: flex;
    align-items: center;
`;

export const MenuContainer = styled.div`
    width: 70%;
    height: 50%;
    background-color: #222222;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);    
    justify-items: center;
    align-items: center;
`;

export const IconsContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SelectedProject = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextSelected = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem;
    text-align: center;
`;

export const ProjectsIcon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3250;
    cursor: pointer;
`;

export const ImageContent = styled.div<{ color: string }>`
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        fill: ${(props) => props.color};
        width: 90%;
        height: 90%;
    }
`;

export const Button = styled.button`
    border: 1px solid rgba(10, 180, 180, 1);
    background: rgba(20, 20, 20, 0.6);
    font-size: 18px;
    color: white;
    margin-top: 20px;
    padding: 10px 50px;
    cursor: pointer;
    transition: 0.4s;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        background: rgba(20, 20, 20, 0.8);
        padding: 10px 80px;
    }
`;