import React, { useState } from 'react';
import { Container, InfiniteProgressBar, Item, Percentage, ProgressWrapper, Title, TitleContaner } from './style';

interface ProgressBarProps {
  title: string;
  percentage: number;
  text: string
}

export const SkillBar: React.FC<ProgressBarProps> = ({ title, percentage, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Container>
      <Item
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <span>{text}</span>
        ) : (
          <>
            <TitleContaner>
              <Title>{title}</Title>
              <Percentage>{percentage}%</Percentage>
            </TitleContaner>
            <ProgressWrapper>
              <InfiniteProgressBar width={percentage} />
            </ProgressWrapper>
          </>
        )}
      </Item>
    </Container>
  );
};
