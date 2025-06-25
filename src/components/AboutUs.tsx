import AboutHero from '../components/About/AboutHero';
import ImpactStats from '../components/About/ImpactStats';
import AboutSection from '../components/About/AboutSection';
import OurStory from '../components/About/OurStory';
import CampusTour from '../components/About/CampusTour';
import Trainers from '../components/About/Trainers';
import Testimonials from '../components/About/Testimonials';
import Certifications from '../components/About/Certifications';
import FAQ from '../components/About/FAQ';
import CTASection from '../components/About/CTASection';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <ImpactStats />
      <AboutSection />
      <OurStory />
      <CampusTour />
      <Trainers />
      <Testimonials />
      <Certifications />
      <FAQ />
      <CTASection />
    </>
  );
};

export default AboutUs;
