import { useState } from 'react';

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Define helper functions
  function OpenCloseButton(): void {
    return setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  // Define props used in LinkButton function
  interface LinkButtonProps {
    id: string;
    text: string;
    border?: boolean;
  }

  function LinkButton({
    id,
    text,
    border = false,
  }: LinkButtonProps): JSX.Element {
    return (
      <button
        id={id}
        className={
          'font-sans font-black text-lg tracking-normal leading-tight text-inherit py-[.85rem] px-[1.55rem] md:tracking-wide lg:text-base lg:tracking-wider lg:py-[.65rem] lg:px-[1.35rem] 2xl:text-xl ' +
          (border &&
            'ml-3 border-[.125rem] border-[#FFFFFF] rounded-lg transition-colors duration-200 hover:bg-[#000000]')
        }
      >
        {text}
      </button>
    );
  }

  return (
    <div
      id='header'
      className='bg-[#101010] w-screen h-16 fixed top-0 left-0 right-0 z-50 lg:h-20'
    >
      <div className='headerContainer bg-inherit text-[#FFFFFF] max-w-screen-2xl h-full m-auto px-10 flex flex-row items-center justify-center lg:justify-between'>
        <div className='homeButtonContainer'>
          <button
            id='homeButton'
            className='font-sans font-black text-2xl tracking-[.015rem] text-inherit'
          >
            FELIPE PULCHERIO
          </button>
        </div>
        <div className='otherButtonsContainer hidden flex-row items-center justify-between gap-4 lg:flex'>
          <LinkButton id={'skillsButton'} text={'SKILLS'} />
          <LinkButton id={'projectsButton'} text={'PROJECTS'} />
          <LinkButton id={'aboutButton'} text={'ABOUT'} />
          <LinkButton
            id={'getintouchButton'}
            text={'GET IN TOUCH'}
            border={true}
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
            <LinkButton id={'skillsButton'} text={'SKILLS'} />
            <LinkButton id={'projectsButton'} text={'PROJECTS'} />
            <LinkButton id={'aboutButton'} text={'ABOUT'} />
            <LinkButton
              id={'getintouchButton'}
              text={'GET IN TOUCH'}
              border={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
