import { Container, Nav, Navbar } from 'react-bootstrap';
import css from './AppNavBar.module.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import KakaoLoginButton from '../button/KakaoLoginButton';

const AppNavBar = () => {
  return (
    <>
      <Navbar fixed='top' className={css.root}>
        <Container fluid className={css.mainContainer}>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            <Logo />
          </Navbar.Brand>
          <Nav className='justify-content-end'>
            <Nav.Link as={Link} to={PathVariable.ADD_PARTY_PATH}>
              파티추가
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MY_PARTY_PATH}>
              MY파티
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.GUIDE_PATH}>
              가이드
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH}>
              개발 테스트
            </Nav.Link>
            <KakaoLoginButton />
          </Nav>
        </Container>
      </Navbar>
      <Navbar fixed='top' className={css.subRoot}>
        <Container fluid className={css.mainContainer}>
          <Nav className='justify-content-end'>
            <Nav.Link as={Link} to={PathVariable.ADD_PARTY_PATH} className={'sub-nav-link'}>
              파티추가
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MY_PARTY_PATH} className={'sub-nav-link'}>
              MY파티
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.GUIDE_PATH} className={'sub-nav-link'}>
              가이드
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH} className={'sub-nav-link'}>
              개발 테스트
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
