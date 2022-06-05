import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import apiUtil from '../../util/apiUtil';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../util/cookieUtil';

const TestView = (props: any) => {
  useEffect(() => {
    console.log('Test View Use Effect 실행');
  }, []);

  const [inputCookie, setInputCookie] = useState('');
  const [currentCookie, setCurrentCookie] = useState('');

  const [apiUrl, setApiUrl] = useState('');
  const [currentApiData, setCurrentApiData] = useState('');

  // 쿠키 저장 이벤트
  const onClickSaveCookieHandler = () => {
    setCookie('testCookie', inputCookie);
    setCurrentCookie(getCookie('testCookie'));
  };

  // API 호출 클릭 이벤트
  const onClickGetApiHandler = async () => {
    let data = await apiUtil.get(apiUrl);
    setCurrentApiData(data.data);
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
          placeholder='API 호출 경로'
          onChange={(event) => {
            setApiUrl(event.target.value);
          }}
        />
        <InputGroup.Text>호출된 Data : {currentApiData}</InputGroup.Text>
        <Button onClick={onClickGetApiHandler}>호출</Button>
      </InputGroup>
    </Container>
  );
};

export default TestView;
