import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import KakaoLoginButton from '../button/KakaoLoginButton';

const AppNavBar = () => {
  return (
    <>
      <Navbar fixed='top' className='main-nav-bar'>
        {/* PC용 메인 네비게이션 */}
        <Container fluid className='main-nav-container'>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            <Logo />
          </Navbar.Brand>
          <Nav className='justify-content-end'>
            <Nav.Link as={Link} to={PathVariable.ADD_PARTY_PATH} className='main-nav-link'>
              파티추가
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MY_PARTY_PATH} className='main-nav-link'>
              MY파티
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.GUIDE_PATH} className='main-nav-link'>
              가이드
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH} className='main-nav-link'>
              개발 테스트
            </Nav.Link>
            <KakaoLoginButton text={'로그인'} />
          </Nav>
        </Container>
      </Navbar>
      <Navbar fixed='top' className='sub-nav-bar'>
        {/* 모바일용 서브 네비게이션 */}
        <Container fluid className='sub-nav-container'>
          <Nav className='justify-content-end'>
            <Nav.Link as={Link} to={PathVariable.ADD_PARTY_PATH} className='sub-nav-link'>
              파티추가
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.MY_PARTY_PATH} className='sub-nav-link'>
              MY파티
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.GUIDE_PATH} className='sub-nav-link'>
              가이드
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH} className='sub-nav-link'>
              개발 테스트
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
