import { Button } from 'react-bootstrap';
import KakaoApiPathVariable from '../../consts/KakaoApiPathVariable';
import React from 'react';
import { ButtonVariant } from 'react-bootstrap/types';
import css from './KakaoLoginButton.module.css';

interface IProps {
  style?: React.CSSProperties;
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
  text: string;
}

const KakaoLoginButton = (props: IProps) => {
  // console.log(props.style);
  // 카카오톡 로그인 버튼 클릭 이벤트
  const onClickKakaoLoginButtonHandler = () => {
    window.location.href = KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH;
  };

  return (
    <Button
      onClick={onClickKakaoLoginButtonHandler}
      size={'sm'}
      variant={props.variant}
      style={props.style !== undefined ? props.style : {}}
      className={props.style === undefined ? css.button : ''}
    >
      {props.text}
    </Button>
  );
};

export default KakaoLoginButton;
