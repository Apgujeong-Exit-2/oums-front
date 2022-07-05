/**
 * 메인 페이지 View
 * @constructor
 */
import MainPageSection1View from '../compent/main/MainPageSection1';
import MainPageSection2View from '../compent/main/MainPageSection2';
import MainPageSection3View from '../compent/main/MainPageSection3';

const MainPageView = () => {
  return (
    <>
      <MainPageSection1View />
      <MainPageSection2View />
      <MainPageSection3View />
    </>
  );
};

export default MainPageView;
