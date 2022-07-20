import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './customBootStrap.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AppRouterView from './view/AppRouterView';
import { RecoilRoot } from 'recoil';
import React from 'react';

const App = () => {
  console.log('App');
  return (
    <RecoilRoot>
      <React.Suspense>
        <AppRouterView />
      </React.Suspense>
    </RecoilRoot>
  );
};

export default App;
