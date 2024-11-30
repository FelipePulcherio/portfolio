import ChevronUpSVG from '../assets/chevronUp.svg?react';

export default function Footer(): JSX.Element {
  return (
    <div id='footer' className='footer w-full h-min bg-transparent'>
      <div className='footerContainer w-full h-full m-auto max-w-screen-2xl bg-[#000000] flex flex-col items-center justify-center '>
        <hr className='w-[85%] h-[1px] mb-[30px] bg-[#999999] md:mb-8' />
        <div className='scrollUp w-[30px] aspect-square'>
          <ChevronUpSVG className='icon' width={'100%'} height={'100%'} />
        </div>
        <div className='footerText text-sm text-[#FFFFFF] pb-2 pt-[30px] md:text-base xl:text-lg md:pb-4 md:pt-8'>
          Developed by Felipe Pulcherio - 2024
        </div>
      </div>
    </div>
  );
}
