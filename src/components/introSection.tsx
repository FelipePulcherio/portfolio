export default function IntroSection(): JSX.Element {
  return (
    <div
      id='introSection'
      className='w-full h-screen max-w-screen-2xl m-auto text-[#FFFFFF] text-xl leading-[2.25rem] font-light lg:text-2xl lg:leading-[2.5rem] xl:leading-[2.75rem] 2xl:text-3.5xl 2xl:leading-[3.25rem]'
    >
      <div className='introSectionContainer h-full w-full max-w-screen-2xl mx-auto py-[70px] px-[30px] flex flex-col items-start justify-center gap-12 sm:px-[50px] md:py-[120px] md:px-[70px] lg:px-[100px] 2xl:px-[150px]'>
        <p className='font-sans paragraph'>Hey there!</p>
        <p className='font-sans paragraph max-w-screen-md 2xl:max-w-[896px]'>
          I'm
          <span className='name text-[#FFEE66] font-bold'>
            {' Felipe Pulcherio'}
          </span>
          , a software engineer who's all about bringing ideas to life. I love
          creating solutions that make sense for consumers, and cracking tough
          problems with a smart, strategic approach.
        </p>
      </div>
    </div>
  );
}
