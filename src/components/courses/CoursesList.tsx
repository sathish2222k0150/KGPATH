import React from 'react';
import CoursesHero from './CoursesHero';
import CourseGrid from './CourseGrid';
import CoursesCallToAction from './CoursesCallToAction'
import FAQ from './FAQ';


interface CoursesListProps {
  onCourseClick: (courseId: number) => void;
}

const CoursesList: React.FC<CoursesListProps> = ({ onCourseClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <CoursesHero />
      <CourseGrid onCourseClick={onCourseClick} />
      <FAQ />
      <CoursesCallToAction />
      
    </div>
  );
};

export default CoursesList;
