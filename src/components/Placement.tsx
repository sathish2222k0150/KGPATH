import Hero from '../components/Placement/Hero';
import PlacementStats from '../components/Placement/PlacementStats';
import HiringPartners from '../components/Placement/HiringPartners';
import SuccessStories from '../components/Placement/SuccessStories';
import PlacementProcess from '../components/Placement/PlacementProcess';
import CareerTracks from '../components/Placement/CareerTracks';
import SalaryInsights from '../components/Placement/SalaryInsights';
import PlacementSupport from '../components/Placement/PlacementSupport';
import EligibilityCriteria from '../components/Placement/EligibilityCriteria';
import FAQ from '../components/Placement/FAQ';
import CallToAction from '../components/Placement/CallToAction';


function Placement() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PlacementStats />
      <HiringPartners />
      <SuccessStories />
      <PlacementProcess />
      <CareerTracks />
      <SalaryInsights />
      <PlacementSupport />
      <EligibilityCriteria />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default Placement;