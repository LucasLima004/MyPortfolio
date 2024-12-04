import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';

const $startColor = Colors.deepPurple;
const $endColor = Colors.grayPurple;

export const Container = styled.div`
  width: 100%;  
  max-width: 600px;
`;

export const ProgressWrapper = styled.div`
  padding: 0px 3px 1px 3px;
  display: flex;
  align-items: center; 
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
  width: 100%;  
`;

export const ProgressBarBase = styled.div<{ width: number }>`
  height: 5px;  
  background-color: ${Colors.rose};
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  width: ${props => props.width}%;  
`;

export const ProgressBar3 = styled(ProgressBarBase)`
  background-image: linear-gradient(
    to right,
    ${$startColor},  
    ${$endColor}  
  );
`;

export const InfiniteProgressBar = styled(ProgressBar3)`
  animation: colorAnimation 1s infinite;
`;

export const TitleContaner = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 18px;  
  font-weight: normal;
  word-wrap: break-word;
`;

export const Percentage = styled.p`
  margin-bottom: 10px;
  font-size: 18px;  
  font-weight: normal;
  word-wrap: break-word;
`;

export const colorAnimation = `
  0% {
    background-image: linear-gradient(
      to right,
      ${$startColor}, 
      ${$endColor}   
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      ${$startColor},
      ${$endColor}
    );
  }
`;

export const Item = styled.div`
  margin: 1rem;
  transition: box-shadow ease-in-out 0.6s, color ease-in-out 0.5s;
  width: 100%;
  aspect-ratio: 6 / 1;
  text-align: center;
  cursor: pointer;
  display: grid;
  color: white;
  position: relative;
  
  span {
    width: 100%;
    display: block;
    user-select: none;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    box-shadow: 0px 0px 15px 6px rgba(0, 0, 0, 0.8);
    
    span {
      font-size: 10px;
      opacity: 1;
    }
  }
`;