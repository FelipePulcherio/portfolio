import { useContext } from 'react';
import sectionRefsContext from '../contexts/sectionRefsContext';

export const useSectionRefs = () => {
  const context = useContext(sectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};

export default useSectionRefs;
