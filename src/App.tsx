import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './customBootStrap.css';
import AppRouterView from './view/AppRouterView';

const App = () => {
  console.log('App 랜더링');
  return <AppRouterView />;
};

export default App;
