import CustomButton from './customButton';

export default function AboutSection(): JSX.Element {
  function OpenLink(url: string): void {
    window.open(url, '_blank');
  }

  function TogglePopUp(): void {
    console.log('1');
  }

  return (
    <div
      id='aboutSection'
      className='aboutSection w-full h-min max-w-screen-2xl m-auto p-[30px] pb-[100px] rounded-t-[30px] font-sans bg-[#000000] text-[#FFFFFF] font-normal flex flex-col items-start justify-start gap-20 sm:px-[50px] md:px-[70px] md:pt-[40px] lg:rounded-t-[45px] lg:px-[100px] xl:pt-[80px] 2xl:px-[150px]'
    >
      <div className='title font-bold w-full text-3xl text-center md:text-4xl md:text-left '>
        About
      </div>
      <div className='mainContainer w-full h-min items-center justify-center flex flex-col gap-12 lg:flex-row lg:gap-20 xl:gap-24'>
        <img
          src='https://picsum.photos/300/300'
          className='image aspect-square max-w-[300px] rounded-full w-[200px] lg:w-[300px]'
        />
        <div className='text w-full h-full flex flex-col items-center justify-start gap-12 lg:gap-12 xl:gap-16 lg:flex-1'>
          <div className='description text-base text-[#999999] md:text-lg xl:text-xl'>
            {
              'Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi amet nullam efficitur volutpat curabitur a mollis ligula ridiculus. Eros consequat egestas elit id curae quam euismod. Sodales porta feugiat; dignissim id class. Eget duis taciti adipiscing nisl mi? Integer in ac arcu sagittis hendrerit tellus. Justo mus mus viverra senectus blandit ut quisque netus.'
            }
          </div>
          <div className='buttonsContainer w-full flex flex-row items-center justify-center gap-6 md:justify-start'>
            <CustomButton
              id='aboutGetintouchButton'
              text='GET IN TOUCH'
              customClasses='text-sm md:text-[0.94rem] xl:text-base border-[#FFFFFF] hover:border-[#FFEE66] hover:bg-[#232323]'
              border={true}
              customFunction={() => OpenLink('https://google.com')}
            />
            <CustomButton
              id='resumeButton'
              text='RESUME'
              customClasses='text-sm md:text-[0.94rem] xl:text-base border-[#FFFFFF] hover:border-[#FFEE66] hover:bg-[#232323]'
              border={true}
              customFunction={() => TogglePopUp()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
