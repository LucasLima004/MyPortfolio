import React from 'react';
import { ImageContent, ImageContainer } from './style';

interface HoverImageComponentProps {
  imageSrc: string;
}

export const HoverImageComponent: React.FC<HoverImageComponentProps> = ({ imageSrc }) => {
  return (
    <ImageContainer>
      <ImageContent
        src={imageSrc}
      />
    </ImageContainer>
  );
};