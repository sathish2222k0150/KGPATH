import { useState } from "react";
import { CheckCircle, User, Calendar, BookOpen } from "lucide-react";
import { Course } from "../Data/coursesData";

interface TabbedInfoSectionProps {
  course: Course;
}

const TabbedInfoSection: React.FC<TabbedInfoSectionProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "instructor" | "schedule"
  >("overview");

  /* ⤵︎  track which curriculum block is open; null = all collapsed */
  const [expanded, setExpanded] = useState<number | null>(null);
  const toggleModule = (index: number) =>
    setExpanded(prev => (prev === index ? null : index));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BookOpen },
              { id: "curriculum", label: "Curriculum", icon: BookOpen },
              { id: "instructor", label: "Instructor", icon: User },
              { id: "schedule", label: "Schedule", icon: Calendar },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* ────────────────── OVERVIEW ────────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* About the Course */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                About the Course
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>{course.description}</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Tag Cloud */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Skills You'll Gain
              </h3>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── CURRICULUM ────────────────── */}
        {activeTab === "curriculum" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Course Curriculum
            </h3>
            <div className="space-y-4">
              {course.curriculum.map((module, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {module.module}: {module.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {module.lessons} lessons
                      </p>
                    </div>

                    <button
                      onClick={() => toggleModule(index)}
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium focus:outline-none"
                    >
                      {expanded === index ? "Hide Details" : "View Details"}
                    </button>
                  </div>

                  {/* description revealed when expanded */}
                  {expanded === index && (
                    <div className="mt-4 text-gray-700 text-sm">
                      {/* topics (optional) */}
                      <ul className="list-disc pl-5 mb-2">
                        {module.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                      <p>{module.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ────────────────── INSTRUCTOR ────────────────── */}
        {activeTab === "instructor" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Meet Your Instructor
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {course.instructor.name}
                  </h4>
                  <p className="text-orange-600 font-medium">
                    {course.instructor.title}
                  </p>
                   <p className="text-orange-600 font-medium">
                    {course.instructor.duration}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── SCHEDULE ────────────────── */}
        {activeTab === "schedule" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Class Schedule
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {course.schedule.map((batch, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {batch.type}
                  </h4>
                  <p className="text-gray-600">{batch.days}</p>
                  <p className="text-gray-600">{batch.time}</p>
                  <p
                    className={`text-sm mt-2 ${
                      batch.status === "Available"
                        ? "text-green-600"
                        : batch.status === "Filling Fast"
                        ? "text-orange-600"
                        : "text-gray-600"
                    }`}
                  >
                    {batch.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabbedInfoSection;
