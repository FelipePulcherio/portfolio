import { useState } from 'react';
import useSectionRefs from '../hooks/useSectionRefs';
import CustomButton from './customButton';
import LogoSVG from '../assets/logo.svg?react';

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { intro, featured, skills, about, contact } = useSectionRefs();

  // Define helper functions
  function OpenCloseButton(): void {
    return setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div
      id='header'
      className='bg-[#101010] w-screen h-16 fixed top-0 left-0 right-0 z-50 lg:h-20'
    >
      <div className='headerContainer bg-inherit text-[#FFFFFF] max-w-screen-2xl h-full m-auto px-10 flex flex-row items-center justify-center lg:justify-between'>
        <div className='homeButtonContainer flex flex-row items-center justify-start gap-4'>
          <div className='logoContainer w-[24px] '>
            <LogoSVG width={'100%'} height={'100%'} />
          </div>
          <button
            id='homeButton'
            className='font-sans font-black text-2xl tracking-[.015rem] text-inherit'
            onClick={() =>
              intro.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            FELIPE PULCHERIO
          </button>
        </div>
        <div className='otherButtonsContainer hidden flex-row items-center justify-between gap-4 lg:flex'>
          <CustomButton
            id='projectsButton'
            text='PROJECTS'
            customClasses='text-lg lg:text-base 2xl:text-xl '
            customFunction={() =>
              featured.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
          <CustomButton
            id='skillsButton'
            text='SKILLS'
            customClasses='text-lg lg:text-base 2xl:text-xl '
            customFunction={() =>
              skills.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
          <CustomButton
            id='aboutButton'
            text='ABOUT'
            customClasses='text-lg lg:text-base 2xl:text-xl '
            customFunction={() =>
              about.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
          <CustomButton
            id='getintouchButton'
            text='GET IN TOUCH'
            customClasses='text-lg lg:text-base 2xl:text-xl ml-3 border-[#FFFFFF] hover:border-[#FFEE66] hover:bg-[#000000]'
            border={true}
            customFunction={() =>
              contact.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </div>
        <div
          id='menuButton'
          className='fixed top-0 right-0 text-[#FFFFFF] h-16 w-10 mr-2 flex items-center justify-center lg:hidden'
          onClick={OpenCloseButton}
        >
          <button className='group w-full h-full'>
            <div className='grid justify-items-center gap-2'>
              <span
                className={`h-0.5 w-4/5 rounded-full bg-[#FFFFFF] transition ${
                  isMobileMenuOpen && ' rotate-45 translate-y-2.5'
                }`}
              ></span>
              <span
                className={`h-0.5 w-4/5 rounded-full bg-[#FFFFFF] transition  ${
                  isMobileMenuOpen && ' scale-x-0'
                }`}
              ></span>
              <span
                className={`h-0.5 w-4/5 rounded-full bg-[#FFFFFF] transition  ${
                  isMobileMenuOpen && ' -rotate-45 -translate-y-2.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className='otherButtonsContainerMobile bg-[#101010] fixed top-20 left-0 right-0 w-screen h-screen flex flex-col items-center justify-start gap-4'>
            <CustomButton
              id='projectsButton'
              text='PROJECTS'
              customClasses='text-lg lg:text-base 2xl:text-xl '
              customFunction={() =>
                featured.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <CustomButton
              id='skillsButton'
              text='SKILLS'
              customClasses='text-lg lg:text-base 2xl:text-xl '
              customFunction={() =>
                skills.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <CustomButton
              id='aboutButton'
              text='ABOUT'
              customClasses='text-lg lg:text-base 2xl:text-xl '
              customFunction={() =>
                about.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <CustomButton
              id='getintouchButton'
              text='GET IN TOUCH'
              customClasses='text-lg lg:text-base 2xl:text-xl ml-3 hover:bg-[#000000]'
              border={true}
              customFunction={() =>
                contact.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
