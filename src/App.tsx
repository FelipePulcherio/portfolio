import { SectionRefsProvider } from './contexts/sectionRefsContext';
import LandingPage from './pages/landingPage';

export default function App() {
  return (
    <SectionRefsProvider>
      <LandingPage />
    </SectionRefsProvider>
  );
}
