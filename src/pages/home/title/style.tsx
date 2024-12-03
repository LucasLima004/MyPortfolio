import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

export const TitleName = styled.h1`
    margin:0;
    color: ${Colors.lightGray}	;
    text-align: center;
    font-size: 2rem;
    padding-top: 15rem;

    
    
    @media (max-width: 768px) {
        padding-top: 1.5rem;
        font-size: 1rem;
    }
`;

export const TitleDescription = styled.h1`
    margin:0;
    text-align: center;
    padding-top:1rem;
    font-size: 6rem;   
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;