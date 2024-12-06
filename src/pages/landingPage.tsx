import Header from '../components/header';
import IntroSection from '../components/introSection';
import KeywordsSection from '../components/keywordsSection';
import SkillsSection from '../components/skillsSection';
import FeaturedSection from '../components/featuredSection';
import AboutSection from '../components/aboutSection';
import ContactSection from '../components/contactSection';

export default function LandingPage(): JSX.Element {
  return (
    <div className='globalContainer px-[4px] pt-[4px] sm:px-[6px] sm:pt-[6px] xl:px-[10px] xl:pt-[10px]'>
      <Header />
      <IntroSection />
      <KeywordsSection />
      <FeaturedSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
