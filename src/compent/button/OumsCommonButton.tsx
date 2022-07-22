import { Button } from 'react-bootstrap';
import css from './OumsCommonButton.module.css';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const OumsCommonButton = (props: IProps) => {
  return (
    <Button variant={''} className={css.root} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default OumsCommonButton;
