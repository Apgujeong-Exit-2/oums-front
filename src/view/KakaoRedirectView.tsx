import apiUtil from '../util/apiUtil';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

/**
 * 카카오톡 로그인 리다이렉트 View
 * @constructor
 */
const KakaoRedirectView = () => {
  const [code, setCode] = useState(queryString.parse(window.location.search).code);
  const [token, setToken] = useState('');

  const getToken = async () => {
    const payload = queryString.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_API_KEY,
      code: queryString.parse(window.location.search).code,
      client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
    });

    if (token === '') {
      const { data } = await apiUtil.post('https://kauth.kakao.com/oauth/token', payload);
      setToken(data.access_token);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  return <>{token}</>;
};

export default KakaoRedirectView;
