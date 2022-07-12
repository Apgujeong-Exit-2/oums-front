/**
 * 메인 페이지 View
 * @constructor
 */
import MainPageSection1 from '../compent/main/MainPageSection1';
import MainPageSection2 from '../compent/main/MainPageSection2';
import MainPageSection3 from '../compent/main/MainPageSection3';
import MainPageFooter from '../compent/main/MainPageFooter';

const MainPageView = () => {
  return (
    <>
      <MainPageSection1 />
      <MainPageSection2 />
      <MainPageSection3 />
      <MainPageFooter />
    </>
  );
};

export default MainPageView;
