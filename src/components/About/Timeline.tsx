import React, { useEffect, useState } from 'react';
import {
  Users,
  Handshake,
  Settings,
  BarChart3,
  Briefcase,
} from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  color: string;
  position: 'top' | 'bottom';
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2019 - 2020',
    title: 'FIRST STEP',
    description: 'We provided industry-based skill training to all graduates, equipping them with practical knowledge and real-world experience, preparing them for industrial work by bridging the gap between education and professional application.',
    icon: Users,
    color: '#14b8a6',
    position: 'bottom'
  },
  {
    id: '2',
    year: '2020 - 2021',
    title: 'ALL BEGIN',
    description: 'In 2020-2021, we partnered with TNSDC and NSDC to offer government-sponsored skill training, providing free food, accommodation, and government certification upon course completion.',
    icon: Briefcase,
    color: '#f97316',
    position: 'top'
  },
  {
    id: '3',
    year: '2021 - 2022',
    title: 'THE ACHIEVEMENT',
    description: 'In 2021-2022, we successfully trained over 1,000 students through our government-sponsored skill training programs, providing them with valuable skills and government certification upon completion.',
    icon: Settings,
    color: '#14b8a6',
    position: 'bottom'
  },
  {
    id: '4',
    year: '2023 - 2024',
    title: 'COMPANY NEW VISION',
    description: 'In 2023-2024, we offered top-level demand courses through TNSDC sponsorship, equipping students with in-demand skills and enhancing their employment opportunities in the job market.',
    icon: Handshake,
    color: '#f97316',
    position: 'top'
  },
  {
    id: '5',
    year: '2024 - 2025',
    title: 'NEW LAUNCH',
    description: 'Launched as a modern training academy to provide advanced tech education and bridge the digital skills gap.',
    icon: BarChart3,
    color: '#14b8a6',
    position: 'bottom'
  }
];

export const Timeline: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleEvents(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineEvents.forEach((event) => {
      const element = document.getElementById(`timeline-${event.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-teal-600">Journey</span>
              </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative min-h-[600px]">
          {/* Road Path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Road Background */}
            <path
              d="M 50 200 Q 200 120 350 200 Q 500 280 650 200 Q 800 120 950 200 Q 1100 280 1150 200"
              stroke="#14b8a6"
              strokeWidth="60"
              fill="none"
              className="opacity-80"
            />
            {/* Center Line */}
            <path
              d="M 50 200 Q 200 120 350 200 Q 500 280 650 200 Q 800 120 950 200 Q 1100 280 1150 200"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="20,15"
              fill="none"
              className="opacity-90"
            />
          </svg>

          {/* Timeline Events */}
          <div className="relative z-10 grid grid-cols-5 gap-4 h-full">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isVisible = visibleEvents.has(`timeline-${event.id}`);
              const isTop = event.position === 'top';

              return (
                <div
                  key={event.id}
                  id={`timeline-${event.id}`}
                  className={`flex flex-col items-center justify-center relative h-full ${
                    isTop ? 'flex-col' : 'flex-col-reverse'
                  }`}
                >
                  {/* Event Card */}
                  <div
                    className={`w-full max-w-xs transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : `opacity-0 ${isTop ? 'translate-y-8' : '-translate-y-8'}`
                    } ${isTop ? 'mb-8' : 'mt-8'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
                      {/* Year */}
                      <div className="text-4xl font-bold mb-3 text-orange-500">
                        {event.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 text-gradient">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="w-px bg-gray-400 h-8"></div>

                  {/* Icon Node */}
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500 ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                      }`}
                      style={{
                        backgroundColor: event.color,
                        transitionDelay: `${index * 200 + 300}ms`
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: event.color }}
                    ></div>
                  </div>

                  {/* Connecting Line */}
                  <div className="w-px bg-gray-400 h-8"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Legend */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {timelineEvents.map((event) => (
              <div
                key={event.id}
                className="w-4 h-4 rounded"
                style={{ backgroundColor: event.color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <h2 className="text-teal-600 text-4xl font-bold ">KG <span className='text-orange-600'>PATH</span></h2>
        </div>
      </div>
    </section>
  );
};
