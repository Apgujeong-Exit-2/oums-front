import { Card } from 'react-bootstrap';
import css from './MainPageSectionSlide1.module.css';

const MainPageSectionSlide1 = () => {
  return (
    <div className={css.root}>
      <Card.Img src={'img/slide1.png'} />
    </div>
  );
};

export default MainPageSectionSlide1;
