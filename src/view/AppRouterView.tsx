import { Route, Routes } from 'react-router-dom';
import PathVariable from '../consts/PathVariable';
import TestView from './TestView';
import NotPageView from './NotPageView';
import MainPageView from './MainPageView';
import KakaoRedirectView from './KakaoRedirectView';
import MyPartyView from './MyPartyView';
import AddPartyView from './AddPartyView';
import GuideView from './GuideView';
import { Container } from 'react-bootstrap';
import AppNavBar from '../compent/navbar/AppNavBar';
import React, { useEffect } from 'react';

/**
 * 어플리케이션의 전체 라우터를 설정하는 View
 * @constructor
 */
const AppRouterView = () => {
  useEffect(() => {
    console.log('AppRouterView 랜더링');
  }, []);
  return (
    <>
      <header>
        <AppNavBar />
      </header>
      <Container fluid className='main-container'>
        <Routes>
          {/* 메인 화면 Path */}
          <Route path={PathVariable.ROOT_VIEW_PATH} element={<MainPageView />}>
            <Route path={PathVariable.MAIN_VIEW_PATH} element={<MainPageView />} />
          </Route>

          {/* 상단 메뉴 Path */}
          <Route path={PathVariable.ADD_PARTY_PATH} element={<AddPartyView />} />
          <Route path={PathVariable.MY_PARTY_PATH} element={<MyPartyView />} />
          <Route path={PathVariable.GUIDE_PATH} element={<GuideView />} />
          <Route path={PathVariable.TEST_VIEW_PATH} element={<TestView />} />

          {/* 카카오 Path */}
          <Route path={PathVariable.KAKAO_REDIRECT_PATH} element={<KakaoRedirectView />} />

          {/* 공통 Path */}
          <Route path='*' element={<NotPageView />} />
        </Routes>
      </Container>
    </>
  );
};

export default AppRouterView;
