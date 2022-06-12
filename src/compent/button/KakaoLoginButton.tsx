import { Button } from 'react-bootstrap';
import KakaoApiPathVariable from '../../global/KakaoApiPathVariable';

const KakaoLoginButton = () => {
  // 카카오톡 로그인 버튼 클릭 이벤트
  const onClickKakaoLoginButtonHandler = () => {
    window.location.href = KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH;
  };

  return <Button onClick={onClickKakaoLoginButtonHandler}>Kakao Login</Button>;
};

export default KakaoLoginButton;
