import { Button } from 'react-bootstrap';
import KakaoApiPathVariable from '../../consts/KakaoApiPathVariable';
import React from 'react';
import { ButtonVariant } from 'react-bootstrap/types';

interface Props {
  style?: React.CSSProperties;
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
  text: string;
}

const KakaoLoginButton = (props: Props) => {
  console.log(props.style);
  // 카카오톡 로그인 버튼 클릭 이벤트
  const onClickKakaoLoginButtonHandler = () => {
    window.location.href = KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH;
  };

  return (
    <Button
      onClick={onClickKakaoLoginButtonHandler}
      size={'sm'}
      variant={props.variant}
      style={
        props.style === undefined ? { backgroundColor: '#53E3AC', borderColor: '#53E3AC' } : {}
      }
    >
      {props.text}
    </Button>
  );
};

export default KakaoLoginButton;
