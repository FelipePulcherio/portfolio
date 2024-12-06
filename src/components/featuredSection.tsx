import useSectionRefs from '../hooks/useSectionRefs';
import CustomButton from './customButton';
import WeddingImg from '../assets/wedding.png';
import GameImg from '../assets/game.png';
import WebscraperImg from '../assets/pricewebscraper.png';

export default function FeaturedSection(): JSX.Element {
  const { featured } = useSectionRefs();

  function OpenLink(url: string): void {
    window.open(url, '_blank');
  }

  interface ButtonProps {
    title: string;
    url: string;
  }

  interface SkillProps {
    imgSRC: string;
    title: string;
    description: string;
    tags: string[];
    buttonProps?: ButtonProps[];
  }

  function Work({
    imgSRC,
    title,
    description,
    tags,
    buttonProps,
  }: SkillProps): JSX.Element {
    return (
      <div className='workContainer w-full h-full flex flex-col items-start justify-start gap-5 lg:flex-row lg:gap-12 xl:gap-16'>
        <img src={imgSRC} className='image lg:max-w-[50%] rounded-[0.7rem] ' />
        <div className='text flex-1 flex flex-col items-center justify-start gap-5'>
          <div className='title w-full text-2xl text-nowrap lg:text-2xl'>
            {title}
          </div>
          <div className='tagsContainer w-full h-min text-base tracking-wide flex flex-row flex-wrap items-center justify-start gap-2'>
            {tags.map((tag, index) => (
              <div
                key={index}
                className='tag text-sm text-[#666666] border border-[#666666] px-1 md:text-[0.94rem] xl:text-base '
              >
                {tag}
              </div>
            ))}
          </div>
          <div className='description text-base text-[#666666] md:text-lg xl:text-xl'>
            {description}
          </div>
          <div className='buttonContainer w-full flex flex-row items-center justify-start gap-4'>
            {buttonProps?.map((btn, index) => (
              <CustomButton
                key={index}
                text={btn.title}
                customClasses='text-sm text-[#101010] border-[#101010] hover:text-[#FFFFFF] hover:bg-[#101010] md:text-[0.94rem] xl:text-base '
                border={true}
                customFunction={() => OpenLink(btn.url)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id='featuredSection'
      className='featuredSection w-full h-min max-w-screen-2xl m-auto p-[30px] pb-[100px] rounded-[30px] font-sans bg-[#FFFFFF] text-[#101010] font-normal flex flex-col items-start justify-start gap-12 sm:px-[50px] md:px-[70px] md:pt-[40px] lg:rounded-[45px] lg:px-[100px] xl:pt-[80px] 2xl:px-[150px]'
      ref={featured}
    >
      <div className='title font-bold w-full text-3xl text-center md:text-4xl md:text-left 2xl:text-5xl '>
        Featured Projects
      </div>
      <div className='mainContainer w-full h-min items-center justify-center flex flex-col flex-wrap gap-20 lg:gap-24 xl:gap-32'>
        <Work
          imgSRC={GameImg}
          title='JavaScript Game'
          description=''
          tags={['Javascript', 'React', 'CSS/SASS', 'OOP']}
        />
        <Work
          imgSRC={WebscraperImg}
          title='Price web scraper'
          description="Price Web Scraper is an automated tool designed to track prices of products across major online retailers such as Walmart, Amazon, BestBuy, Newegg, and Canada Computers. Utilizing scheduled scraping, it collects current price data at defined intervals, stores it in a cloud database, and enables historical price tracking and daily lowest-price analysis. This project leverages BrightData's proxy service and cloud browser for stable web scraping, along with MongoDB Atlas for secure data storage."
          tags={[
            'Typescript',
            'Node',
            'Express',
            'Agenda',
            'Puppeteer',
            'MongoDB',
            'Mongoose',
            'Historical Data',
            'Data Analysis',
          ]}
          buttonProps={[
            {
              title: 'Source Code',
              url: 'https://github.com/FelipePulcherio/price-web-scraper',
            },
          ]}
        />
        <Work
          imgSRC={WeddingImg}
          title='Wedding mockup'
          description='This project is a wedding page mockup, designed as a personal learning exercise in web development. It features pages for RSVP, place details, and registry information, created using vanilla HTML, SCSS, and Javascript. The design is fully responsive, ensuring a seamless experience on both desktop and mobile devices.'
          tags={['HTML', 'CSS/SASS', 'Javascript', 'Google Routes API']}
          buttonProps={[
            {
              title: 'Source Code',
              url: 'https://github.com/FelipePulcherio/wedding-mockup/',
            },
            {
              title: 'See Live',
              url: 'https://felipepulcherio.github.io/wedding-mockup/',
            },
          ]}
        />
      </div>
    </div>
  );
}
