import { Route, Routes } from 'react-router-dom';
import PathVariable from '../consts/PathVariable';
import TestView from './TestView';
import NotPageView from './NotPageView';
import AppNavBar from '../compent/navbar/AppNavBar';
import MainPageView from './MainPageView';
import LoginView from './LoginView';
import KakaoRedirectView from './KakaoRedirectView';

/**
 * 어플리케이션의 전체 라우터를 설정하는 View
 * @constructor
 */
const AppRouterView = () => {
  return (
    <>
      <header>
        <AppNavBar />
      </header>
      <Routes>
        {/* 메인 화면 Path */}
        <Route path={PathVariable.ROOT_VIEW_PATH} element={<MainPageView />}>
          <Route path={PathVariable.MAIN_VIEW_PATH} element={<MainPageView />} />
        </Route>

        {/* 상단 메뉴 Path */}
        <Route path={PathVariable.TEST_VIEW_PATH} element={<TestView />} />
        <Route path={PathVariable.LOGIN_VIEW_PATH} element={<LoginView />} />

        {/* 카카오 Path */}
        <Route path={PathVariable.KAKAO_REDIRECT_PATH} element={<KakaoRedirectView />} />

        {/* 공통 Path */}
        <Route path='*' element={<NotPageView />} />
      </Routes>
    </>
  );
};

export default AppRouterView;
