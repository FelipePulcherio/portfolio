import React, { createContext, useRef, RefObject } from 'react';

interface SectionRefs {
  intro: RefObject<HTMLDivElement>;
  featured: RefObject<HTMLDivElement>;
  skills: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
}

const SectionRefsContext = createContext<SectionRefs | undefined>(undefined);

export const SectionRefsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const intro = useRef<HTMLDivElement>(null);
  const featured = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{ intro, featured, skills, about, contact }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};

export default SectionRefsContext;
