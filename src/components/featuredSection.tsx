import CustomButton from './customButton';

export default function FeaturedSection(): JSX.Element {
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
    buttonProps: ButtonProps[];
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
            {buttonProps.map((btn, index) => (
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
    >
      <div className='title font-bold w-full text-3xl text-center md:text-4xl md:text-left 2xl:text-5xl '>
        Featured Projects
      </div>
      <div className='mainContainer w-full h-min items-center justify-center flex flex-col flex-wrap gap-20 lg:gap-24 xl:gap-32'>
        <Work
          imgSRC='https://picsum.photos/1600/900'
          title='JavaScript Game'
          description='Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi amet nullam efficitur volutpat curabitur a mollis ligula ridiculus. Eros consequat egestas elit id curae quam euismod. Sodales porta feugiat; dignissim id class. Eget duis taciti adipiscing nisl mi? Integer in ac arcu sagittis hendrerit tellus. Justo mus mus viverra senectus blandit ut quisque netus.'
          tags={[
            'React',
            'Node',
            'Express',
            'Socket.io',
            'MongoDB',
            'SASS',
            'Prisma',
            'OOP',
          ]}
          buttonProps={[
            { title: 'Source Code', url: 'https://google.com' },
            { title: 'See Live', url: 'https://google.com' },
          ]}
        />
        <Work
          imgSRC='https://picsum.photos/1601/900'
          title='Price web scraper'
          description='Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi amet nullam efficitur volutpat curabitur a mollis ligula ridiculus. Eros consequat egestas elit id curae quam euismod. Sodales porta feugiat; dignissim id class. Eget duis taciti adipiscing nisl mi? Integer in ac arcu sagittis hendrerit tellus. Justo mus mus viverra senectus blandit ut quisque netus.'
          tags={[
            'React',
            'Node',
            'Express',
            'Socket.io',
            'MongoDB',
            'SASS',
            'Prisma',
            'OOP',
          ]}
          buttonProps={[
            { title: 'Source Code', url: 'https://google.com' },
            { title: 'See Live', url: 'https://google.com' },
          ]}
        />
        <Work
          imgSRC='https://picsum.photos/1600/899'
          title='Wedding mockup'
          description='Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi amet nullam efficitur volutpat curabitur a mollis ligula ridiculus. Eros consequat egestas elit id curae quam euismod. Sodales porta feugiat; dignissim id class. Eget duis taciti adipiscing nisl mi? Integer in ac arcu sagittis hendrerit tellus. Justo mus mus viverra senectus blandit ut quisque netus.'
          tags={[
            'React',
            'Node',
            'Express',
            'Socket.io',
            'MongoDB',
            'SASS',
            'Prisma',
            'OOP',
          ]}
          buttonProps={[
            { title: 'Source Code', url: 'https://google.com' },
            { title: 'See Live', url: 'https://google.com' },
          ]}
        />
      </div>
    </div>
  );
}
