import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import KakaoLoginButton from '../button/KakaoLoginButton';
import classes from './AppNavBar.module.css';
import Logo from './Logo';

const AppNavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            <Logo />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={PathVariable.MAIN_VIEW_PATH}>
              홈
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MAIN_VIEW_PATH}>
              파티추가
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MAIN_VIEW_PATH}>
              MY파티
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MAIN_VIEW_PATH}>
              가이드
            </Nav.Link>
            <KakaoLoginButton text={'로그인'} variant={'light'} style={{ fontWeight: 'bold' }} />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
