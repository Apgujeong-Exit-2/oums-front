import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import apiUtil from '../util/apiUtil';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../util/cookieUtil';
import { DemoPostRequest, DemoPostResponse } from '../dto/DemoDto';
import { motion } from 'framer-motion';

/**
 * Test 1 Page View
 * @param props
 * @constructor
 */
const TestView = (props: any) => {
  useEffect(() => {
    console.log('Test View Use Effect 실행');
  }, []);

  const [inputCookie, setInputCookie] = useState<string>('테스트 쿠키');
  const [currentCookie, setCurrentCookie] = useState('');

  const [getApiUrl, setGetApiUrl] = useState('demo');
  const [responseGetData, setResponseGetData] = useState('');

  const [postApiUrl, setPostApiUrl] = useState('demo/post');
  const [responsePostData, setResponsePostData] = useState<DemoPostResponse>({
    title: '',
    content: '',
  });

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
        const postReq: DemoPostRequest = { title: '테스트 제목', content: '테스트 내용' };
        const postData = await apiUtil.post<DemoPostResponse>(postApiUrl, postReq);
        setResponsePostData(postData);
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
          value={inputCookie}
        />
        <InputGroup.Text>저장된 쿠키 값 : {currentCookie}</InputGroup.Text>
        <Button onClick={onClickSaveCookieHandler}>저장</Button>
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>API 호출하기</InputGroup.Text>
        <FormControl
          placeholder='GET API 호출 경로'
          onChange={(event) => onChangeApiUrlEvent(event.target.value, 'get')}
          value={getApiUrl}
        />
        <InputGroup.Text>호출된 Data : {responseGetData}</InputGroup.Text>
        <Button onClick={() => onClickApiHandler('get')}>호출</Button>
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
        <Button onClick={() => onClickApiHandler('post')}>호출</Button>
      </InputGroup>
    </Container>
  );
};

export default TestView;
