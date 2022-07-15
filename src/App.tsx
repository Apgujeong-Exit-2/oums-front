import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './customBootStrap.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AppRouterView from './view/AppRouterView';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <AppRouterView />
    </RecoilRoot>
  );
};

export default App;
