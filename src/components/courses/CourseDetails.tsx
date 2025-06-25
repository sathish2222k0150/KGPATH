import React from 'react';
import Navigation from '../Navbar';
import CourseDetailsHero from './CourseDetailsHero';
import StickySideCard from './StickySideCard';
import TabbedInfoSection from './TabbedInfoSection';
import CareerOpportunities from './CareerOpportunities';
import HiringPartners from './HiringPartners';
import CourseDetailsFAQ from './CourseDetailsFAQ';
import { getCourseById } from '../Data/coursesData';
import RecommendedCourses from './RecommendedCourses';
import Certificates from './Certificates';
import CourseBenefits from './WhatWeGive';
import WhoCanLearnSection from './WhoCanLearn';

interface CourseDetailsProps {
  onNavClick: (page: string) => void;
  onBackClick: () => void;
  courseId?: number | null;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ onNavClick, onBackClick, courseId }) => {
  const course = getCourseById(courseId || 1);

  if (!course) return <div className="min-h-screen flex items-center justify-center">Course not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="courses" onNavClick={onNavClick} />
      <CourseDetailsHero course={course} onBackClick={onBackClick} />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column (Content) */}
          <div className="lg:col-span-3 order-1 lg:order-none">
            <TabbedInfoSection course={course} />
          </div>
          
          {/* Right Column (Sticky Card) */}
          <div className="lg:col-span-1 order-0 lg:order-none">
            <StickySideCard course={course} />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="space-y-12 md:space-y-12">
        <CourseBenefits courseId={course.id} />
        <WhoCanLearnSection courseId={course.id} />
        <Certificates />
        <CareerOpportunities careers={course.careers} />
        
        {course?.id !== undefined && (
          <HiringPartners courseId={course.id} />
        )}
        
        <CourseDetailsFAQ />
        <RecommendedCourses />
      </div>
    </div>
  );
};

export default CourseDetails;