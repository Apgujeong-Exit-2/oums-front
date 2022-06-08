import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import apiUtil from '../util/apiUtil';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../util/cookieUtil';

/**
 * Test 1 Page View
 * @param props
 * @constructor
 */
const TestView = (props: any) => {
  useEffect(() => {
    console.log('Test View Use Effect 실행');
  }, []);

  const [inputCookie, setInputCookie] = useState<string>('');
  const [currentCookie, setCurrentCookie] = useState('');

  const [getApiUrl, setGetApiUrl] = useState('');
  const [responseGetData, setResponseGetData] = useState('');

  const [postApiUrl, setPostApiUrl] = useState('');
  const [responsePostData, setResponsePostData] = useState('');

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
        const getResponse = await apiUtil.get(getApiUrl);
        setResponseGetData(getResponse.data);
        break;
      case 'post':
        const postResponse = await apiUtil.post(postApiUrl, { test: 'test' });
        setResponsePostData(postResponse.data);
        break;
    }
  };

  return (
    <Container>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>쿠키 값 저장하기</InputGroup.Text>
        <FormControl
          placeholder='저장할 쿠키값 (키는 testCookie)'
          onChange={(event) => {
            setInputCookie(event.target.value);
          }}
        />
        <InputGroup.Text>저장된 쿠키 값 : {currentCookie}</InputGroup.Text>
        <Button onClick={onClickSaveCookieHandler}>저장</Button>
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <FormControl
          placeholder='GET API 호출 경로'
          onChange={(event) => onChangeApiUrlEvent(event.target.value, 'get')}
        />
        <InputGroup.Text>호출된 Data : {responseGetData}</InputGroup.Text>
        <Button onClick={() => onClickApiHandler('get')}>호출</Button>
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <FormControl
          placeholder='POST API 호출 경로'
          onChange={(event) => onChangeApiUrlEvent(event.target.value, 'post')}
        />
        <InputGroup.Text>호출된 Data : {responsePostData}</InputGroup.Text>
        <Button onClick={() => onClickApiHandler('post')}>호출</Button>
      </InputGroup>
    </Container>
  );
};

export default TestView;
