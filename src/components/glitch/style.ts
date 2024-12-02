import styled, { keyframes } from 'styled-components';

const stackAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }
`;

const glitchAnimation = keyframes`
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 100% {  
    text-shadow: none; 
    transform: none; 
  }
`;

interface StackSpanProps {
  stacks: number;
  index: number;
}

const Stack = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
`;

const StackSpan = styled.span<StackSpanProps>`
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 4rem;
  --stack-height: calc(100% / ${(props) => props.stacks} - 1px);
  --inverse-index: calc(calc(${(props) => props.stacks} - 1) - ${(props) => props.index});
  --clip-top: calc(var(--stack-height) * ${(props) => props.index});
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: ${stackAnimation} 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(${(props) => props.index} * 120ms), ${glitchAnimation} 2s ease infinite 2s alternate-reverse;

  &:nth-child(odd) {
    --glitch-translate: 8px;
  }

  &:nth-child(even) {
    --glitch-translate: -8px;
  }
`;

export { Stack, StackSpan };
