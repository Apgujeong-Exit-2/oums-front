import css from './KakaoLoginButton.module.css';
import { Button } from 'react-bootstrap';
import GapDiv from '../ui/GapDiv';
import React from 'react';
import KakaoApiPathVariable from '../../consts/KakaoApiPathVariable';

interface IProps {
  style?: React.CSSProperties;
}

const KakaoLoginButton = (props: IProps) => {
  return (
    <Button
      variant={''}
      className={css.root}
      style={props.style}
      href={KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH}
    >
      <img src='img/kakao_Logo.png' className={css.buttonImg} />
      <GapDiv width={4} />
      카카오로 계속하기
    </Button>
  );
};

export default KakaoLoginButton;
