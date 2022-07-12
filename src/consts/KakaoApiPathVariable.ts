const KakaoApiPathVariable = {
  /* auth 키 얻기 */
  KAKAO_AUTHORIZE_PATH: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_FRONT_PORT_PATH}${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`,
};

export default KakaoApiPathVariable;
