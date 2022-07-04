import { Button } from 'react-bootstrap';
import KakaoApiPathVariable from '../../consts/KakaoApiPathVariable';

interface props {
  style?: object;
  variant?: string;
  text: string;
}

const KakaoLoginButton = (props: props) => {
  // 카카오톡 로그인 버튼 클릭 이벤트
  const onClickKakaoLoginButtonHandler = () => {
    window.location.href = KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH;
  };

  return (
    <Button
      onClick={onClickKakaoLoginButtonHandler}
      size={'sm'}
      variant={props.variant}
      style={props.style}
    >
      {props.text}
    </Button>
  );
};

export default KakaoLoginButton;
