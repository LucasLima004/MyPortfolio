import React from 'react';
import { Stack, StackSpan } from './style';

interface StackProperty{
    text?: string;
    children?: React.ReactNode;
}

export default function glitch(props: StackProperty){
  return (
    <Stack>
        <StackSpan index={0} stacks={3}>{props.text ? props.text : props.children}</StackSpan>
        <StackSpan index={1} stacks={3}>{props.text ? props.text : props.children}</StackSpan>
        <StackSpan index={2} stacks={3}>{props.text ? props.text : props.children}</StackSpan>
    </Stack>
  );
};

