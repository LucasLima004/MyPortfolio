import React from 'react';
import { ImageContent, ImageContainer } from './style';

interface HoverImageComponentProps {
  imageSrc: string;
}

const HoverImageComponent: React.FC<HoverImageComponentProps> = ({ imageSrc }) => {
  return (
    <ImageContainer>
      <ImageContent
        src={imageSrc}
      />
    </ImageContainer>
  );
};

export default HoverImageComponent;
