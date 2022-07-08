import apiUtil from '../util/apiUtil';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoSuccessDto } from '../dto/kakaoResponseDto';

/**
 * 카카오톡 로그인 리다이렉트 View
 * @constructor
 */
const KakaoRedirectView = () => {
  const [code, setCode] = useState(queryString.parse(window.location.search).code);
  const [token, setToken] = useState('');
  const history = useNavigate();

  const getToken = async () => {
    const payload = queryString.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_API_KEY,
      code: queryString.parse(window.location.search).code,
      client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
    });

    if (token === '') {
      try {
        const data = await apiUtil.post<kakaoSuccessDto>(
          'https://kauth.kakao.com/oauth/token',
          payload,
        );
        alert('Back End 넘겨줘야 함 : ' + data.access_token);
        history(-1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  return <></>;
};

export default KakaoRedirectView;
