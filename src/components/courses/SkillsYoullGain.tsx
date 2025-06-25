import React from 'react';

const SkillsYoullGain = () => {
  const skills = [
    "User Research", "Wireframing", "Prototyping", "Visual Design", 
    "Interaction Design", "Usability Testing", "Design Systems", 
    "Figma", "Adobe XD", "Sketch", "InVision", "Principle",
    "HTML/CSS Basics", "Responsive Design", "Accessibility", 
    "Design Thinking", "Information Architecture", "User Journey Mapping"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills You'll Gain</h2>
          <p className="text-xl text-gray-600">
            Build expertise in the most in-demand design skills
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 px-4 py-2 rounded-full font-medium hover:shadow-md transition-shadow cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            { skill: "Design Fundamentals", level: 95 },
            { skill: "Prototyping Tools", level: 90 },
            { skill: "User Research", level: 85 },
            { skill: "Visual Design", level: 92 }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">{item.skill}</span>
                <span className="text-teal-600 font-bold">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsYoullGain;