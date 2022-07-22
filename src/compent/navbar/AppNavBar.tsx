import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getMenuListData } from '../../service/MenuService';
import { IMenuResponse } from '../../dto/MenuDto';
import OumsCommonButton from '../button/OumsCommonButton';

// 메인 네비게이션 레이아웃
const NavbarLink = (props: { type: string; menuList: IMenuResponse[] }) => {
  const menu = props.menuList.map((data) => (
    <Nav.Link
      key={data.id}
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
      {props.type === 'main' && <OumsCommonButton size={'sm'} text={'로그인'} />}
    </Nav>
  );
};

// style={props.style !== undefined ? props.style : {}}
// className={props.style === undefined ? css.button : ''}

// 메인 네비게이션
const AppNavBar = () => {
  const menuList = useRecoilValue(getMenuListData);
  useEffect(() => {
    console.log('AppNavBar');
  }, []);
  return (
    <>
      <Navbar fixed='top' className='main-nav-bar'>
        <Container fluid className='main-nav-container'>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            <Logo />
          </Navbar.Brand>
          <NavbarLink type={'main'} menuList={menuList} />
        </Container>
      </Navbar>
      <Navbar fixed='top' className='sub-nav-bar'>
        <div className='sub-nav-container'>
          <NavbarLink type={'sub'} menuList={menuList} />
        </div>
      </Navbar>
    </>
  );
};

export default AppNavBar;
