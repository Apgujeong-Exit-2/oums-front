import { Button } from 'react-bootstrap';
import css from './OumsCommonButton.module.css';
import React, { MouseEventHandler } from 'react';

interface IProps {
  onClick?: MouseEventHandler | undefined;
  size?: 'sm' | 'lg';
  style?: React.CSSProperties;
  text: string;
}

const OumsCommonButton = (props: IProps) => {
  return (
    <Button
      variant={''}
      style={props.style}
      size={props.size}
      className={css.root}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default OumsCommonButton;
