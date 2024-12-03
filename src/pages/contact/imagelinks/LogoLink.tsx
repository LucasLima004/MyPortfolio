import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../utils/Colors';

interface ImageWithTitleProps {
  svg: React.ReactNode; // Recebe o SVG como um nó React
  title: string;
  link: string;
  color?: string; // Cor opcional
}

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SvgContainer = styled.div`
  width: 30px;
  height: 30px;
`;

const Title = styled.h3`
  margin: 0;
  padding-left: 1rem;
  font-size: 16px;
  color: ${Colors.darkGray};
`;

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ svg, title, link, color = Colors.black }) => {

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

export default ImageWithTitle;
