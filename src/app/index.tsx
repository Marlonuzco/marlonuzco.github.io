import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import { About } from '@/sections/About';
import { CaseStudies } from '@/sections/CaseStudies';
import { Contact } from '@/sections/Contact';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { Process } from '@/sections/Process';
import { Technologies } from '@/sections/Technologies';

import { DocumentMeta } from './DocumentMeta';

const Page = () => (
  <div className="min-h-svh" id="top">
    <DocumentMeta />
    <Header />
    <main id="content">
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Technologies />
      <Process />
      <Contact />
    </main>
    <Footer />
  </div>
);

export const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);
