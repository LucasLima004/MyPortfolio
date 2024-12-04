import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

export const ContainerDescription = styled.div`
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    margin-top: 15%;
    background-color: ${Colors.darkGray};
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const DescriptionText = styled.div`
    text-align: center;
    margin: 0% 25% 0% 25%;
    font-size: 15px;

    @media (max-width: 768px) {
        margin: 0% 5% 2% 5%;
        font-size: 10px;
    }
`;
