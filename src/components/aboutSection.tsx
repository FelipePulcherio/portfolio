import useSectionRefs from '../hooks/useSectionRefs';
import CustomButton from './customButton';

export default function AboutSection(): JSX.Element {
  const { about } = useSectionRefs();

  function OpenLink(url: string): void {
    window.open(url, '_blank');
  }

  return (
    <div
      id='aboutSection'
      className='aboutSection w-full h-min max-w-screen-2xl m-auto px-[30px] py-[150px] pt-[75px] font-sans text-[#FFFFFF] font-normal flex flex-col items-start justify-start gap-20 sm:px-[50px] md:px-[70px] lg:px-[100px] lg:py-[200px] lg:pt-[100px] 2xl:px-[150px] '
      ref={about}
    >
      <div className='title font-bold w-full text-3xl text-center md:text-4xl md:text-left '>
        About
      </div>
      <div className='mainContainer w-full h-min items-center justify-center flex flex-col gap-10 lg:flex-row lg:gap-20 xl:gap-24'>
        <img
          src='https://picsum.photos/300/300'
          className='image aspect-square max-w-[300px] rounded-full w-[200px] lg:w-[300px]'
        />
        <div className='text w-full h-full flex flex-col items-center justify-start gap-7 lg:flex-1'>
          <div className='description text-base text-[#999999] flex flex-col items-start justify-start gap-6 md:text-lg xl:text-xl'>
            <div className='w-full'>
              {
                "Hello! I'm Felipe, a Chemical Engineer turned Full-Stack Developer with a passion for problem-solving and a knack for creating impactful solutions. My career began in the industrial sector, where I held leadership roles in quality assurance and production management. Over the years, I've led teams, implemented innovative systems, and optimized processes that significantly boosted operational performance."
              }
            </div>
            <div className='w-full'>
              {
                "Now, I'm diving into the world of web development, where I've discovered a passion for creating intuitive and efficient digital experiences. I love turning ideas into reality through clean and effective code, always striving to learn and grow with each new challenge."
              }
            </div>
            <div className='w-full'>
              {
                "When I'm not coding or brainstorming solutions, you'll find me exploring new hiking trails, perfecting my barbecue skills and most likely gaming."
              }
            </div>
          </div>
          <div className='buttonsContainer w-full flex flex-row items-center justify-center gap-6 md:justify-start'>
            <CustomButton
              id='resumeButton'
              text='RESUME'
              customClasses='text-sm md:text-[0.94rem] xl:text-base border-[#FFFFFF] hover:border-[#FFEE66] hover:bg-[#232323]'
              border={true}
              customFunction={() => OpenLink('https://google.com')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
