import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import TestView from './compent/view/TestView';
import RouterView from './compent/view/RouterView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TestView />} />
      <Route path='/router' element={<RouterView />} />
    </Routes>
  );
};

export default App;
