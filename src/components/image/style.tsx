import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 30%; 
  height: 30%; 
  border-radius: 10px;

  &:hover img {
    transform: scale(1.1); 
    filter: brightness(0.7);
  }
`;

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  scale: 1.2;
  object-fit: cover; 
  transition: transform 0.3s ease, filter 0.3s ease; 
`;
