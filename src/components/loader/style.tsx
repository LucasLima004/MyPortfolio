import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d3250;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const BlinkingSVG = styled.div`
  animation: ${blink} 1s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;
