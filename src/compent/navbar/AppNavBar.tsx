import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PathVariable from '../../consts/PathVariable';
import KakaoLoginButton from '../button/KakaoLoginButton';
import classes from './AppNavBar.module.css';
import '../../img/logo.svg';
import Logo from './Logo';

const AppNavBar = () => {
  return (
    <>
      <Container>
        <Row className={classes.topNavBar}>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Navbar>
              <Nav className={classes.topNavText}>
                <Nav.Link as={Link} to={PathVariable.MAIN_VIEW_PATH}>
                  홈
                </Nav.Link>
                <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH}>
                  파티추가
                </Nav.Link>
                <Nav.Link as={Link} to={PathVariable.LOGIN_VIEW_PATH}>
                  MY파티
                </Nav.Link>
                <Nav.Link as={Link} to={PathVariable.LOGIN_VIEW_PATH}>
                  가이드
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col className={classes.loginButton}>
            <KakaoLoginButton />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppNavBar;
