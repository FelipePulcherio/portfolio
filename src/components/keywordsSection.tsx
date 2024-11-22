import { useState, useEffect } from 'react';

export default function KeywordsSection(): JSX.Element {
  // Define props used in ScrollingText function
  interface ScrollingTextProps {
    text: string;
    direction: 'left' | 'right';
    initialLeft: number;
  }

  function ScrollingText({
    text,
    direction,
    initialLeft,
  }: ScrollingTextProps): JSX.Element {
    // Create a state for the scroll
    const [scrollX, setScrollX] = useState<number>(0);

    // UseEffect to add event listener 'scroll'
    useEffect(() => {
      // Define function to handle scroll
      function handleScroll() {
        setScrollX(window.scrollY);
      }

      window.addEventListener('scroll', handleScroll);
      // Cleanup on dismount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <p
        style={{
          left:
            direction === 'right'
              ? `${initialLeft + 0.08 * scrollX}%`
              : `${initialLeft - 0.08 * scrollX}%`,
        }}
        className={`flow-${direction} relative whitespace-nowrap ${
          direction === 'left' && 'mt-4 md:mt-0'
        } last:mb-[50vh] `}
      >
        {text}
      </p>
    );
  }

  return (
    <div
      id='keywordSection'
      className='font-sans text-[#FFFFFF] text-3xl font-black md:text-5xl lg:text-6xl '
    >
      <ScrollingText
        text={'Product Design • Digital Design • UX Research'}
        direction='right'
        initialLeft={-45}
      />
      <ScrollingText
        text={'Figma Freak • Illustration • No Code'}
        direction='left'
        initialLeft={70}
      />
    </div>
  );
}
