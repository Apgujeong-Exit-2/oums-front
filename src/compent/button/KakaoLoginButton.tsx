import { Button } from 'react-bootstrap';
import KakaoApiPathVariable from '../../consts/KakaoApiPathVariable';

const KakaoLoginButton = () => {
  // 카카오톡 로그인 버튼 클릭 이벤트
  const onClickKakaoLoginButtonHandler = () => {
    window.location.href = KakaoApiPathVariable.KAKAO_AUTHORIZE_PATH;
  };

  return (
    <Button
      onClick={onClickKakaoLoginButtonHandler}
      size='sm'
      variant='light'
      style={{ fontWeight: 'bold' }}
    >
      로그인
    </Button>
  );
};

export default KakaoLoginButton;
