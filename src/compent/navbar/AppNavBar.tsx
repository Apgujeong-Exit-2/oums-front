import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import KakaoLoginButton from '../button/KakaoLoginButton';
import React from 'react';

type menuType = {
  title: string;
  path: string;
};

// TODO : 추후 DB 에서?
const menuData: menuType[] = [
  { title: '파티 만들기', path: PathVariable.ADD_PARTY_PATH },
  { title: 'MY 파티', path: PathVariable.MY_PARTY_PATH },
  { title: '콘텐츠 검색', path: '' },
  { title: '이벤트', path: '' },
  { title: '가이드', path: PathVariable.GUIDE_PATH },
  { title: '개발 테스트', path: PathVariable.TEST_VIEW_PATH },
];

// Main Navbar 메뉴 링크
const MainNavbarLink = (props: { type: string }) => {
  const menu = menuData.map((data) => (
    <Nav.Link
      key={data.title}
      as={data.path !== '' ? Link : undefined}
      to={data.path}
      onClick={
        data.path !== ''
          ? undefined
          : () => {
              alert('개발중');
            }
      }
      className={props.type === 'main' ? 'main-nav-link' : 'sub-nav-link'}
    >
      {data.title}
    </Nav.Link>
  ));

  return (
    <Nav className='justify-content-end'>
      {menu}
      {props.type === 'main' && <KakaoLoginButton text={'로그인'} />}
    </Nav>
  );
};

const AppNavBar = () => {
  console.log('AppNavBar');

  return (
    <>
      <Navbar fixed='top' className='main-nav-bar'>
        <Container fluid className='main-nav-container'>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            <Logo />
          </Navbar.Brand>
          <MainNavbarLink type={'main'} />
        </Container>
      </Navbar>
      <Navbar fixed='top' className='sub-nav-bar'>
        <div className='sub-nav-container'>
          <MainNavbarLink type={'sub'} />
        </div>
      </Navbar>
    </>
  );
};

export default AppNavBar;
