import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './customBootStrap.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AppRouterView from './view/AppRouterView';

const App = () => {
  console.log('App 랜더링');
  return <AppRouterView />;
};

export default App;
