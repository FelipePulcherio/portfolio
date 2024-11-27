import LanguagesSVG from '../assets/languages.svg?react';
import FrontendSVG from '../assets/frontend.svg?react';
import BackendSVG from '../assets/backend.svg?react';
import ToolsSVG from '../assets/tools.svg?react';

export default function SkillsSection(): JSX.Element {
  interface SkillProps {
    svgElement: React.ReactElement<React.SVGProps<SVGElement>>;
    title: string;
    bulletPoints: string[];
  }

  function Skill({ svgElement, title, bulletPoints }: SkillProps): JSX.Element {
    return (
      <div className='skillContainer w-full h-full flex flex-col items-center justify-center gap-5 md:w-min '>
        {svgElement}
        <div className='title text-xl text-nowrap md:text-2xl'>{title}</div>
        <ul className='text-[#999999] text-base'>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      id='skillsSection'
      className='skillsSection w-full h-min max-w-screen-2xl m-auto px-[30px] py-[150px] font-sans text-[#FFFFFF] font-normal flex flex-col items-start justify-start gap-20 sm:px-[50px] md:px-[70px] lg:px-[100px] lg:py-[200px] 2xl:px-[150px]'
    >
      <div className='title font-bold w-full text-3xl text-center md:text-4xl md:text-left '>
        Skills
      </div>
      <div className='mainContainer w-full h-min items-center justify-center flex flex-row flex-wrap gap-16 md:gap-12 md:items-start md:justify-between'>
        <Skill
          svgElement={
            <LanguagesSVG className='icon' width={'41px'} height={'40px'} />
          }
          title='Languages'
          bulletPoints={['JavaScript (ES6)', 'TypeScript', 'Python', 'C#']}
        />
        <Skill
          svgElement={
            <FrontendSVG className='icon' width={'40px'} height={'40px'} />
          }
          title='Frontend'
          bulletPoints={['HTML5', 'CSS/SASS', 'React', 'TailwindCSS', 'Axios']}
        />
        <Skill
          svgElement={
            <BackendSVG className='icon' width={'41px'} height={'40px'} />
          }
          title='Backend'
          bulletPoints={[
            'Node',
            'Express',
            'RESTful API',
            'Prisma',
            'Socket.io',
          ]}
        />
        <Skill
          svgElement={
            <ToolsSVG className='icon' width={'40px'} height={'40px'} />
          }
          title='Tools & DBs'
          bulletPoints={[
            'Bash',
            'Git / GitHub',
            'VS Code',
            'Postman',
            'PostgreSQL',
            'MongoDB',
            'MongoDB Atlas',
          ]}
        />
      </div>
    </div>
  );
}
