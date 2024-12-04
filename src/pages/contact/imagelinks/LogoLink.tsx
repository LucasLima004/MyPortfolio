import React from 'react';
import { Link } from 'react-router-dom';
import { Colors } from '../../../utils/Colors';
import { ImageWithTitleProps } from '../../../utils/Interfaces';
import { Container, SvgContainer, Title } from './style';

export const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ svg, title, link, color = Colors.black }) => {

  const svgWithColor = React.cloneElement(svg as React.ReactElement, {
    style: { fill: color }, 
  });

  return (
    <Link to={link} target='_blank' style={{ textDecoration: 'none' }}>
      <Container>
        <SvgContainer>{svgWithColor}</SvgContainer>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
};