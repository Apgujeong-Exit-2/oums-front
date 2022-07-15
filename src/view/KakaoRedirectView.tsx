import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiUtil from '../util/apiUtil';

/**
 * 카카오톡 로그인 리다이렉트 View
 * @constructor
 */
const KakaoRedirectView = () => {
  const [code] = useState(queryString.parse(window.location.search).code);
  const history = useNavigate();

  const getToken = async () => {
    try {
      const api = await apiUtil.get(`${process.env.REACT_APP_KAKAO_REDIRECT_URL}?code=${code}`);
      console.log(api);
      // TODO : 카카오 로그인 작업
      // - Back 작업 완료되면 DTO 작업
      // - 화면 이동 (history)
    } catch (e) {
      console.log('통신 오류');
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  return <></>;
};

export default KakaoRedirectView;
