import { Container, FormControl, InputGroup } from 'react-bootstrap';
import apiUtil from '../util/apiUtil';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../util/cookieUtil';
import { IDemoPostRequest, IDemoPostResponse } from '../dto/DemoDto';
import LoginModal from '../compent/modal/LoginModal';
import useModal from '../hook/useModal';
import OumsCommonButton from '../compent/button/OumsCommonButton';
import KakaoLoginButton from '../compent/button/KakaoLoginButton';

/**
 * Test 1 Page View
 * @param props
 * @constructor
 */
const TestView = (props: any) => {
  const [inputCookie, setInputCookie] = useState<string>('테스트 쿠키');
  const [currentCookie, setCurrentCookie] = useState('');

  const [getApiUrl, setGetApiUrl] = useState('demo');
  const [responseGetData, setResponseGetData] = useState('');

  const [postApiUrl, setPostApiUrl] = useState('demo/post');
  const [responsePostData, setResponsePostData] = useState<IDemoPostResponse>({
    title: '',
    content: '',
  });
  const { modalOpen, modalClose } = useModal();

  // 쿠키 저장 이벤트
  const onClickSaveCookieHandler = () => {
    setCookie('testCookie', inputCookie);
    setCurrentCookie(getCookie('testCookie'));
  };

  // api url input change event
  const onChangeApiUrlEvent = (url: string, type: string) => {
    switch (type) {
      case 'get':
        setGetApiUrl(url);
        break;
      case 'post':
        setPostApiUrl(url);
        break;
    }
  };

  // API 호출 클릭 이벤트
  const onClickApiHandler = async (type: string) => {
    switch (type) {
      case 'get':
        const getData = await apiUtil.get<string>(getApiUrl);
        setResponseGetData(getData);
        break;
      case 'post':
        const postReq: IDemoPostRequest = { title: '테스트 제목', content: '테스트 내용' };
        const postData = await apiUtil.post<IDemoPostResponse>(postApiUrl, postReq);
        setResponsePostData(postData);
        break;
    }
  };

  useEffect(() => {
    console.log('Test View Use Effect 실행');
  }, []);

  return (
    <Container>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>쿠키 값 저장하기</InputGroup.Text>
        <FormControl
          placeholder='저장할 쿠키값 (키는 testCookie)'
          onChange={(event) => {
            setInputCookie(event.target.value);
          }}
          value={inputCookie}
        />
        <InputGroup.Text>저장된 쿠키 값 : {currentCookie}</InputGroup.Text>
        <OumsCommonButton text={'저장'} onClick={onClickSaveCookieHandler} />
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <FormControl
          placeholder='GET API 호출 경로'
          onChange={(event) => onChangeApiUrlEvent(event.target.value, 'get')}
          value={getApiUrl}
        />
        <InputGroup.Text>호출된 Data : {responseGetData}</InputGroup.Text>
        <OumsCommonButton text={'저장'} onClick={() => onClickApiHandler('get')} />
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <FormControl
          placeholder='POST API 호출 경로'
          onChange={(event) => onChangeApiUrlEvent(event.target.value, 'post')}
          value={postApiUrl}
        />
        <InputGroup.Text>
          {responsePostData.title + ' : ' + responsePostData.content}
        </InputGroup.Text>
        <OumsCommonButton text={'호출'} onClick={() => onClickApiHandler('post')} />
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <OumsCommonButton text={'로그인 팝업 호출'} onClick={() => modalOpen(<LoginModal />)} />
      </InputGroup>

      <InputGroup className='mb-3'>
        <KakaoLoginButton />
      </InputGroup>
    </Container>
  );
};

export default TestView;
