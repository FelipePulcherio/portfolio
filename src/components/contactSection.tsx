import useSectionRefs from '../hooks/useSectionRefs';
import SocialLinkedinSVG from '../assets/socialLinkedin.svg?react';
import SocialGithubSVG from '../assets/socialGithub.svg?react';
import SocialEmailSVG from '../assets/socialEmail.svg?react';
import LogoSVG from '../assets/logo.svg?react';

export default function ContactSection(): JSX.Element {
  const { contact } = useSectionRefs();

  return (
    <div
      id='contactSection'
      className='aboutSection w-full h-min max-w-screen-2xl m-auto p-[30px] pb-8 rounded-t-[30px] font-sans bg-[#000000] text-[#FFFFFF] font-normal flex flex-col items-start justify-start gap-20 sm:px-[50px] sm:pt-[50px] md:px-[70px] lg:rounded-t-[45px] lg:px-[100px] xl:pt-[80px] 2xl:px-[150px]'
      ref={contact}
    >
      <div className='mainContainer w-full h-min items-center justify-center flex flex-col gap-8 sm:gap-12 xl:gap-14'>
        <div className='logoContainer w-[125px] '>
          <LogoSVG width={'100%'} height={'100%'} />
        </div>
        <div className='second w-min h-full flex flex-col items-center justify-start gap-8 sm:gap-12 xl:gap-14'>
          <div className='text w-full flex flex-col items-center justify-center gap-4'>
            <div className='title text-nowrap font-bold text-3xl text-center md:text-4xl '>
              Contact Me
            </div>
            <div className='description text-base text-[#999999] text-center md:text-lg xl:text-xl'>
              "I'm currently available for work. Let's transform your ideas into
              reality!
            </div>
          </div>
          <div className='email w-min text-[#FFFFFF] text-nowrap font-bold text-lg text-center sm:text-xl md:text-2xl '>
            felipe.pulcherio1@gmail.com
          </div>
          <div className='buttonsContainer w-full flex flex-row items-center justify-center gap-10'>
            <a
              className='svgContainer w-[24px] aspect-square sm:w-[30px]'
              href='mailto:felipe.pulcherio1@gmail.com'
            >
              <SocialEmailSVG width={'100%'} height={'100%'} fill={'#FFEE66'} />
            </a>
            <a
              className='svgContainer w-[24px] aspect-square sm:w-[30px]'
              href='https://github.com/FelipePulcherio'
              target='_blank'
            >
              <SocialGithubSVG
                width={'100%'}
                height={'100%'}
                fill={'#FFEE66'}
              />
            </a>
            <a
              className='svgContainer w-[24px] aspect-square sm:w-[30px]'
              href='https://www.linkedin.com/in/felipe-pulcherio-dev'
              target='_blank'
            >
              <SocialLinkedinSVG
                width={'100%'}
                height={'100%'}
                fill={'#FFEE66'}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
