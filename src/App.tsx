import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Hero } from './sections/Hero';
import { Skills } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/projects/Projects';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="wrap">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
