import css from './AddPartyView.module.css';
import { Container } from 'react-bootstrap';
import MatchingWeekCard from '../compent/addParty/MatchingWeekCard';
import SelectOttCard from '../compent/addParty/SelectOttCard';
import GapDiv from '../compent/ui/GapDiv';

export interface Ott {
  key: number;
  line: number;
  title: string;
  url: string;
}

// TODO : 추후 DB 에서?
const ottList: Ott[] = [
  {
    key: 1,
    line: 1,
    title: '넷플릭스',
    url: 'https://asset.pickle.plus/ott_logo/icon_netflix_x2.png',
  },
  {
    key: 2,
    line: 1,
    title: '웨이브',
    url: 'https://asset.pickle.plus/ott_logo/icon_wavve_x2.png',
  },
  {
    key: 3,
    line: 1,
    title: '왓챠',
    url: 'https://asset.pickle.plus/ott_logo/icon_watcha_x2.png',
  },
  {
    key: 4,
    line: 2,
    title: '라프텔',
    url: 'https://asset.pickle.plus/ott_logo/icon_laftel_x2.png',
  },
  {
    key: 5,
    line: 2,
    title: '티빙',
    url: 'https://asset.pickle.plus/ott_logo/icon_tving_x2.png',
  },
  {
    key: 6,
    line: 2,
    title: '디즈니+',
    url: 'https://asset.pickle.plus/ott_logo/icon_disney_x2.png',
  },
]; // ottList

const addPartyView = () => {
  return (
    <div className={css.root}>
      <Container className={css.container}>
        <MatchingWeekCard />
        <GapDiv height={24} />
        <SelectOttCard otts={ottList} />
      </Container>
    </div>
  );
};

export default addPartyView;
