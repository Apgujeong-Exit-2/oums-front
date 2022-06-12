import apiUtil from '../../util/apiUtil';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

const KakaoRedirectView = (props: any) => {
  const [code, setCode] = useState(queryString.parse(window.location.search).code);
  const [token, setToken] = useState('');

  const getToken = async () => {
    const payload = queryString.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_API_KEY,
      redirect_url: process.env.REACT_APP_KAKAO_REDIRECT_URL,
      code: queryString.parse(window.location.search).code,
      client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
    });

    if (token === '') {
      console.log(token);
      const { data } = await apiUtil.post('https://kauth.kakao.com/oauth/token', payload);
      setToken(data.access_token);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    getToken();
  }, [code]);

  return <>{token}</>;
};

export default KakaoRedirectView;
