import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/Sections/PartnerSection';
import About from '../components/Sections/About';
import CoursesSection from '../components/Sections/CourseSection';
import WhyChooseUsSection from '../components/Sections/WhyChooseUsSection';
import TestimonialsSection from '../components/Sections/TestimonalSection';
import PlacementSection from '../components/Sections/PlacementSection';
import FaqSection from '../components/Sections/FaqSection';
import BlogSection from '../components/Sections/BlogSection';
import NewsletterSection from '../components/Sections/NewsletterSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <About />
      <CoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PlacementSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
