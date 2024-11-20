import Header from '../components/header';
import IntroSection from '../components/introSection';
import KeywordsSection from '../components/keywordsSection';

export default function LandingPage(): JSX.Element {
  return (
    <div className='globalContainer p-[4px] sm:p-[6px] xl:p-[10px]'>
      <Header />
      <IntroSection />
      <KeywordsSection />
    </div>
  );
}
