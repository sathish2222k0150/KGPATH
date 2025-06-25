import React, { useState } from 'react';
import {
  Clock, Users, Award, Download, ArrowLeft, Star, Play,
} from 'lucide-react';
import { Course } from '../Data/coursesData';
import ApplyFormModal from './ApplyFormModal';

interface CourseDetailsHeroProps {
  course: Course;
  onBackClick: () => void;
}

const CourseDetailsHero: React.FC<CourseDetailsHeroProps> = ({ course, onBackClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const extractYouTubeId = (url: string): string => {
    const regExp = /(?:youtube\.com.*(?:\/|v=)|youtu\.be\/)([^&#?]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : '';
  };

  const isYouTubeVideo = (url: string): boolean =>
    url.includes('youtube.com') || url.includes('youtu.be');

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 bg-gradient-primary py-8 md:py-16 text-white">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center mb-4 md:mb-8">
          <button 
            onClick={onBackClick}
            className="flex items-center text-white/80 hover:text-white font-medium text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Courses
          </button>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-white/80 text-sm md:text-base line-clamp-1">{course.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">

            {/* Mode and Rating */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                {course.mode}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                <span className="font-bold text-sm md:text-base">{course.rating}</span>
                <span className="text-white/80 text-sm md:text-base">/5</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
                {course.title}
              </h1>
              <p className="text-base md:text-xl text-white/90">
                {course.subtitle}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
              <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1" />
                <div className="font-bold text-xs md:text-sm">{course.duration}</div>
              </div>
              <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Users className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1" />
                <div className="font-bold text-xs md:text-sm">{course.mode}</div>
              </div>
              <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Award className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1" />
                <div className="font-bold text-xs md:text-sm">{course.rating} Rating</div>
              </div>
              <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="font-bold text-xs md:text-sm">{course.batchStart}</div>
                <div className="text-[10px] md:text-xs text-white/80">Batch Start</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-base md:text-lg"
              >
                Apply Now
              </button>

              <button className="border-2 border-white/30 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-base md:text-lg flex items-center justify-center">
                <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Download Brochure
              </button>
            </div>

            {/* Fee Info */}
            <div className="flex items-center space-x-4 md:space-x-6 pt-2 md:pt-4">
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{course.fee}</div>
                <div className="text-white/80 text-xs md:text-sm">Course Fee</div>
              </div>
              <div>
                <div className="text-sm md:text-lg font-bold">
                  {course.emi}
                </div>
                <div className="text-white/80 text-xs">EMI Available</div>
              </div>
            </div>
          </div>

          {/* Thumbnail + Play Button */}
          <div className="relative mt-6 md:mt-0">
            <img 
              src={course.image}
              alt={course.title}
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
            {course.videoUrl && (
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full hover:bg-white/30 transition-colors"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
            
      {/* Apply Modal */}
      <ApplyFormModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Video Modal */}
      {course.videoUrl && showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl p-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 z-50"
            >
              ✕
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              {isYouTubeVideo(course.videoUrl) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(course.videoUrl)}`}
                  title="Course Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              ) : (
                <video
                  src={course.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseDetailsHero;
