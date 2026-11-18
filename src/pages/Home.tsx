import { Hero } from '../sections/Hero';
import { Skills } from '../sections/About';
import { Education } from '../sections/Education';
import { Projects } from '../sections/projects/Projects';
import { Contact } from '../sections/Contact';

export default function Home() {
  return (
    <>
      <div className="home-intro"><div className="wrap"><Hero /></div></div>
      <Projects />
      <div className="home-skills"><div className="wrap"><Skills /></div></div>
      <div className="home-education"><div className="wrap"><Education /></div></div>
      <div className="home-contact"><div className="wrap"><Contact /></div></div>
    </>
  );
}

