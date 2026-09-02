import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { Technology } from '@/components/sections/Technology';
import { About } from '@/components/sections/About';

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Work />
      <Experience />
      <Technology />
      <About />
    </div>
  );
}
