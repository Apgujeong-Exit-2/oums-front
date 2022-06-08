import { Route, Routes } from 'react-router-dom';
import PathVariable from '../gobal/PathVariable';
import TestView from './TestView';
import NotPageView from './NotPageView';
import AppNavBar from '../compent/navbar/AppNavBar';
import Test2View from './Test2View';
import MainPageView from './MainPageView';
import LoginView from './LoginView';

/**
 * 어플리케이션의 전체 라우터를 설정하는 View
 * @constructor
 */
const AppRouterView = () => {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path={PathVariable.ROOT_VIEW_PATH} element={<MainPageView />}>
          <Route path={PathVariable.MAIN_VIEW_PATH} element={<MainPageView />} />
        </Route>
        <Route path={PathVariable.TEST_VIEW_PATH} element={<TestView />} />
        <Route path={PathVariable.TEST_VIEW_PATH_2} element={<Test2View />} />
        <Route path={PathVariable.LOGIN_VIEW_PATH} element={<LoginView />} />
        <Route path='*' element={<NotPageView />} />
      </Routes>
    </>
  );
};

export default AppRouterView;
