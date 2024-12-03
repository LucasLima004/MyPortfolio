import styled from "styled-components";
import { Colors } from "../../utils/Colors";


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
        padding: 3%;
        height: 100%;
    }
`;