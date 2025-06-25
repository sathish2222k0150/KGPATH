import { Activity, ActivitySquare, BadgeCheck, BookOpen, Brain, Briefcase, CloudCog, Code, GraduationCap, Layers, Lightbulb, LucideIcon, Server, ServerCog, ShieldCheck, Target, User, Users } from "lucide-react";
import { ReactNode } from "react";
import fullstack from '../../assets/fullstack.png';
import AI from '../../assets/AI.jpg';
import cloud from '../../assets/cloud.jpg';

export interface LearningCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhoCanLearnData {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  cards: LearningCard[];
}

export interface Course {
  eligibility: ReactNode;
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  fee: string;
  emi:string;
  month:string;
  originalFee?: string;
  image: string;
  videoUrl:string;
  category: string;
  level: string;
  students: string;
  rating: number;
  tags: string[];
  popular?: boolean;
  new?: boolean;
  mode: string;
  batchStart: string;
  skills: string[];
  learningOutcomes: string[];
  hiringPartners: string[];
   whoCanLearn: WhoCanLearnData;
  instructor: {
    name: string;
    title: string;
    experience: string;
    image: string;
    bio: string;
    duration:string;
  };
 
  certificates: Array<{
    icon:string;
    title:string;
    description:string;
  }>;
  curriculum: Array<{
    module: string;
    title: string;
    lessons: number;
    topics: string[];
    description: string;
  }>;
  careers: Array<{
    role: string;
    salary: string;
    growth: string;
  }>;
  schedule: Array<{
    type: string;
    days: string;
    time: string;
    status: string;
  }>;
  Benefit: Array<{
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    highlighted?: boolean;
  }>;
  
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    subtitle: "Master Frontend and Backend Development",
    description: "Become a complete web developer with our comprehensive full-stack course covering modern technologies like React, Node.js, and databases.",
    duration: "6 Months",
    fee: "₹75,000",
    emi:"₹6,901.63/month",
    month:"Interest amount changes depending on the initial payment.",
    originalFee: "₹10,00,000",
    image: fullstack,
    videoUrl:"https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
    category: "Technology",
    level: "Intermediate",
    students: "2.5k+",
    rating: 4.9,
    tags: ["Certificate", "Live Projects", "Job Guarantee"],
    new: true,
    mode: "Online/Offline",
    batchStart: "Jan 20, 2025",
    eligibility:"Basic programming knowledge required",
    skills: [
      "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
      "MongoDB", "SQL", "Git", "AWS", "REST APIs", "GraphQL"
    ],
    hiringPartners: [
      "Google", "Microsoft", "Amazon", "Netflix", "Meta",
      "Swiggy", "Zomato", "Flipkart", "Paytm", "Uber",
      "Adobe", "Spotify", "Airbnb", "Tesla"
    ],
    learningOutcomes: [
      "Build responsive web applications using React",
      "Develop backend APIs with Node.js and Express",
      "Work with databases (MongoDB and SQL)",
      "Deploy applications to cloud platforms",
      "Implement authentication and security",
      "Use version control with Git",
      "Build real-world projects for your portfolio",
      "Understand modern development workflows"
    ],
    instructor: {
      name: "Alex Thompson",
      title: "Senior Full Stack Developer at Microsoft",
      experience: "12+ years",
      duration:"520 Hours of Classroom Training",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "12+ years of experience in full-stack development with expertise in React, Node.js, and cloud technologies. Former tech lead at Amazon and Google."
    },
    curriculum: [
      {
      module: 'Module 1',
      title: 'Frontend Fundamentals',
      lessons: 12,
      topics: ['HTML5', 'CSS3', 'JavaScript ES6+'],
      description:
        'Learn the building blocks of modern web development including HTML5, CSS3, and JavaScript ES6+. This module lays the foundation for all UI/UX work.',
    },
    {
      module: 'Module 2',
      title: 'React Development',
      lessons: 15,
      topics: ['React Basics', 'Hooks', 'State Management'],
      description:
        'Dive into React for building dynamic and responsive user interfaces using components, hooks, and effective state management.',
    },
    {
      module: 'Module 3',
      title: 'Backend Development',
      lessons: 18,
      topics: ['Node.js', 'Express', 'REST APIs'],
      description:
        'Master server-side development with Node.js and Express, and learn how to create robust RESTful APIs for full-stack integration.',
    },
    {
      module: 'Module 4',
      title: 'Database Management',
      lessons: 10,
      topics: ['MongoDB', 'SQL', 'Database Design'],
      description:
        'Understand how to store and manage data efficiently using MongoDB and SQL. This module also covers fundamental principles of database design.',
    },
    {
      module: 'Module 5',
      title: 'Deployment & DevOps',
      lessons: 8,
      topics: ['AWS', 'Docker', 'CI/CD'],
      description:
        'Learn how to deploy applications using AWS and Docker, and implement CI/CD pipelines to automate and streamline delivery.',
    },
    {
      module: 'Module 6',
      title: 'Capstone Project',
      lessons: 12,
      topics: ['Full Stack App', 'Testing', 'Documentation'],
      description:
        "Apply everything you've learned in a real-world full-stack project. Focus on building, testing, and documenting a deployable application.",
    },
    ],
    careers: [
      { role: "Frontend Developer", salary: "₹4-8 LPA", growth: "High" },
      { role: "Backend Developer", salary: "₹5-10 LPA", growth: "Very High" },
      { role: "Full Stack Developer", salary: "₹6-15 LPA", growth: "Excellent" },
      { role: "Software Engineer", salary: "₹7-18 LPA", growth: "Excellent" },
      { role: "Tech Lead", salary: "₹12-25 LPA", growth: "Very High" },
      { role: "Solution Architect", salary: "₹15-35 LPA", growth: "Excellent" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your skills",
    description: "Build job-ready capabilities through hands-on, guided learning",
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Get expert mentorship, personalised learning, and guidance to overcome roadblocks",
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Apply concepts through real-world exercises and drills",
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live, mentor-led sessions",
  },
  {
    icon: "🌟",
    title: "Showcase your skills",
    description: "Earn a certificate that reflects your commitment, growth, skills, and capabilities",
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Short-term focus, practical skills, long-term career value",
  },
],
Benefit: [
  {
  id: 1,
  icon: Code,
  title: "Hands-On Training",
  description:
    "Gain practical coding experience through intensive hands-on sessions led by expert full stack developers."
},
{
  id: 2,
  icon: BadgeCheck,
  title: "Industry-Recognized Certification",
  description:
    "Receive a professional certificate upon completion, recognized by top tech companies to boost your career prospects.",
  highlighted: true  // middle (orange) card
},
{
  id: 3,
  icon: Server,
  title: "Real-Time Projects",
  description:
    "Build fully functional real-world applications with live project exposure across frontend and backend technologies."
},
{
  id: 4,
  icon: User,
  title: "One-on-One Coaching",
  description:
    "Get personalized mentorship from experienced instructors to strengthen your skills and clear your doubts."
},
{
  id: 5,
  icon: Briefcase,
  title: "Industry Integration",
  description:
    "Collaborate with industry experts and gain practical knowledge that aligns with current job market expectations."
},
{
  id: 6,
  icon: Users,
  title: "Dedicated Mentorship Ratio",
  description:
    "One dedicated trainer for every 15 students to ensure focused attention, better learning, and consistent support."
}

  
],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Your Journey to Becoming a <span class="text-teal-600">Full Stack Developer</span> Starts Here',
      description: "This Full Stack Development course is crafted for students, aspiring developers, and career switchers who want to master both frontend and backend technologies. Covering everything from HTML, CSS, JavaScript, React, and Node.js to databases like MongoDB and MySQL, this program equips you to build complete, production-ready web applications. Learn to design responsive UIs, build secure APIs, manage databases, and deploy projects on cloud platforms. Whether you're preparing for a developer job, freelancing, or launching your own tech startup, this hands-on course will help you become a job-ready full stack web developer with real-world project experience and the confidence to tackle any coding challenge.",
      cards: [
        {
            id: "cs-students",
            title: "Computer Science Students",
            description: "Ideal for students pursuing CS or IT degrees looking to master full stack development.",
            icon: GraduationCap
          },
          {
            id: "career-switchers",
            title: "Career Switchers",
            description: "Perfect for professionals from non-tech backgrounds transitioning into full stack development.",
            icon: Briefcase
          },
          {
            id: "junior-devs",
            title: "Junior Developers",
            description: "For early-career developers looking to gain hands-on experience and build full stack applications.",
            icon: Users
          },
          {
            id: "startup-founders",
            title: "Startup Founders",
            description: "Great for entrepreneurs who want to build and manage their own web platforms end-to-end.",
            icon: BookOpen
          }

      ]
    },
  },
  {
    id: 2,
    title: "AI & Machine Learning Professional",
    subtitle: "Master Artificial Intelligence and Machine Learning",
    description: "This intensive AI & ML course will equip you with the skills to build intelligent systems, predictive models, and deep learning applications. Learn from industry experts and work on real-world projects.",
    duration: "6 Months",
    fee: "₹75,000",
    emi:"₹6,901.63/month",
    month:"Interest amount changes depending on the initial payment.",
    originalFee: "₹10,00,000",
    image: AI,
    videoUrl:"https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
    category: "Technology",
    level: "Advanced",
    students: "1.8k+",
    rating: 4.7,
    tags: ["Certificate", "Capstone Project", "Research Support"],
    popular: true,
    mode: "Online/Offline & Offline",
    batchStart: "Feb 5, 2025",
    eligibility:"Basic programming experience recommended",
    skills: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks",
      "Deep Learning", "Natural Language Processing", "Computer Vision",
      "Data Preprocessing", "Model Deployment", "AI Ethics", "Reinforcement Learning"
    ],
    hiringPartners: [
      "Google", "Microsoft", "Amazon", "NVIDIA", "Tesla",
      "Apple", "Netflix", "Adobe", "IBM", "Samsung",
      "Uber", "Airbnb", "Paytm", "Flipkart"
    ],
    learningOutcomes: [
      "Understand fundamental AI/ML concepts and algorithms",
      "Build and train machine learning models using Python",
      "Implement deep learning architectures with TensorFlow/PyTorch",
      "Work with NLP and Computer Vision applications",
      "Deploy ML models in production environments",
      "Evaluate model performance and optimize results",
      "Understand ethical considerations in AI",
      "Complete a substantial capstone project"
    ],
    instructor: {
      name: "Dr. Rajesh Kumar",
      title: "AI Research Scientist at NVIDIA",
      experience: "15+ years",
      duration:"420 Hours of Classroom Training",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "PhD in Machine Learning with 15+ years of experience in AI research and development. Former lead researcher at Google Brain and IBM Watson."
    },
    curriculum: [
      {
        module: "Module 1",
        title: "Python for AI/ML",
        lessons: 10,
        topics: ["NumPy", "Pandas", "Matplotlib", "Data Structures"],
        description: ""
      },
      {
        module: "Module 2",
        title: "Machine Learning Fundamentals",
        lessons: 16,
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        description: ""
      },
      {
        module: "Module 3",
        title: "Deep Learning",
        lessons: 20,
        topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"],
        description: ""
      },
      {
        module: "Module 4",
        title: "Natural Language Processing",
        lessons: 14,
        topics: ["Text Processing", "Word Embeddings", "BERT", "GPT Models"],
        description: ""
      },
      {
        module: "Module 5",
        title: "Computer Vision",
        lessons: 12,
        topics: ["Image Processing", "Object Detection", "Image Segmentation"],
        description: ""
      },
      {
        module: "Module 6",
        title: "Model Deployment & Ethics",
        lessons: 8,
        topics: ["MLOps", "Model Serving", "AI Ethics", "Bias Mitigation"],
        description: ""
      }
    ],
    careers: [
      { role: "Machine Learning Engineer", salary: "₹8-15 LPA", growth: "Very High" },
      { role: "Data Scientist", salary: "₹7-14 LPA", growth: "Excellent" },
      { role: "AI Research Engineer", salary: "₹10-20 LPA", growth: "Excellent" },
      { role: "NLP Engineer", salary: "₹9-18 LPA", growth: "Very High" },
      { role: "Computer Vision Engineer", salary: "₹9-17 LPA", growth: "Very High" },
      { role: "AI Product Manager", salary: "₹12-25 LPA", growth: "High" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your skills",
    description: "Build job-ready capabilities through hands-on, guided learning",
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Get expert mentorship, personalised learning, and guidance to overcome roadblocks",
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Apply concepts through real-world exercises and drills",
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live, mentor-led sessions",
  },
  {
    icon: "🌟",
    title: "Showcase your skills",
    description: "Earn a certificate that reflects your commitment, growth, skills, and capabilities",
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Short-term focus, practical skills, long-term career value",
  },
],
Benefit: [
  {
  id: 1,
  icon: Brain,
  title: "Expert AI Mentors",
  description:
    "Learn from industry professionals in Artificial Intelligence and Machine Learning with hands-on mentoring sessions."
},
{
  id: 2,
  icon: BadgeCheck,
  title: "AI Certification",
  description:
    "Earn a certification that showcases your expertise in AI & ML, recognized by top companies and institutions.",
  highlighted: true  // middle (orange) card
},
{
  id: 3,
  icon: Activity,
  title: "Project-Based Learning",
  description:
    "Build real-world AI/ML models using Python, TensorFlow, and scikit-learn with datasets from real applications."
},
{
  id: 4,
  icon: Lightbulb,
  title: "Cutting-Edge Curriculum",
  description:
    "Stay ahead with the latest topics like Generative AI, LLMs, and Prompt Engineering, updated regularly with industry trends."
},
{
  id: 5,
  icon: Users,
  title: "Collaborative Community",
  description:
    "Join a vibrant peer community for AI/ML discussions, code reviews, group projects, and continuous learning support."
},
{
  id: 6,
  icon: Target,
  title: "Career-Focused Guidance",
  description:
    "Get support with resume building, mock interviews, and job referrals tailored for roles in AI, ML, and Data Science."
}


],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Become an <span class="text-teal-600">AI & Machine Learning</span> Expert',
      description: "This AI & Machine Learning course is designed for students, professionals, and tech enthusiasts eager to dive into the world of artificial intelligence and data-driven innovation. Whether you're aiming to become a machine learning engineer, data scientist, or AI researcher, this program covers the core concepts of supervised and unsupervised learning, neural networks, deep learning, natural language processing, and model deployment. With hands-on projects, real-world datasets, and guidance from industry experts, you'll build the skills needed to solve complex problems using AI. Ideal for those preparing for AI roles in top tech companies or planning to pursue research or higher studies in the field of machine learning and data science.",
      cards: [
        {
            id: "cs-students",
            title: "Computer Science Students",
            description: "Perfect for students eager to explore AI and ML as part of their academic or research journey.",
            icon: GraduationCap
          },
          {
            id: "career-switchers",
            title: "Career Switchers",
            description: "Designed for professionals moving from traditional tech or non-tech roles into AI/ML careers.",
            icon: Briefcase
          },
          {
            id: "junior-engineers",
            title: "Junior AI Engineers",
            description: "For early-career engineers who want to specialize in artificial intelligence and machine learning.",
            icon: Users
          },
          {
            id: "ai-entrepreneurs",
            title: "AI Entrepreneurs",
            description: "Great for founders and product builders aiming to create AI-powered solutions.",
            icon: BookOpen
          }
      ]
    },
  },
  {
    id: 3,
    title: "Cloud Architect Professional",
    subtitle: "Master Cloud Computing and Architecture",
    description: "Become a certified cloud architect with this comprehensive program covering AWS, Azure, and Google Cloud platforms. Learn to design, deploy, and manage scalable cloud solutions.",
    duration: "6 Months",
    fee: "₹75,000",
    emi:"₹6,901.63/month",
    month:"Interest amount changes depending on the initial payment.",
    originalFee: "₹10,00,000",
    image: cloud,
    videoUrl:"https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
    category: "Technology",
    level: "Intermediate",
    students: "2.2k+",
    rating: 4.8,
    tags: ["AWS Certified", "Azure Certified", "Hands-on Labs"],
    new: true,
    mode: "Online/Offline",
    batchStart: "Feb 10, 2025",
    eligibility:"Basic understanding of networking and operating systems",
    skills: [
      "AWS", "Azure", "Google Cloud", "Terraform", "Docker",
      "Kubernetes", "CI/CD", "Serverless", "Cloud Security",
      "Microservices", "Cloud Migration", "Infrastructure as Code"
    ],
    hiringPartners: [
      "Amazon", "Microsoft", "Google", "IBM", "Oracle",
      "VMware", "Adobe", "Spotify", "Netflix", "Uber",
      "Swiggy", "Zomato", "Paytm", "Flipkart"
    ],
    learningOutcomes: [
      "Design and implement cloud solutions on AWS, Azure, and GCP",
      "Configure and manage virtual networks and storage",
      "Implement security and compliance in cloud environments",
      "Automate deployments using Infrastructure as Code",
      "Containerize applications using Docker and Kubernetes",
      "Design for high availability and disaster recovery",
      "Optimize cloud costs and performance",
      "Prepare for major cloud certification exams"
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Principal Cloud Architect at Amazon Web Services",
      experience: "14+ years",
      duration:"420 Hours of Classroom Training",
      image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "14+ years of cloud architecture experience with expertise in multi-cloud environments. Holds 12+ cloud certifications. Former cloud architect at Microsoft and Google Cloud."
    },
    curriculum: [
      {
        module: "Module 1",
        title: "Cloud Fundamentals",
        lessons: 8,
        topics: ["Cloud Concepts", "Service Models", "Deployment Models"],
        description: ""
      },
      {
        module: "Module 2",
        title: "AWS Core Services",
        lessons: 15,
        topics: ["EC2", "S3", "VPC", "IAM", "RDS"],
        description: ""
      },
      {
        module: "Module 3",
        title: "Azure Core Services",
        lessons: 12,
        topics: ["Virtual Machines", "Blob Storage", "Azure AD", "SQL Database"],
        description: ""
      },
      {
        module: "Module 4",
        title: "Google Cloud Platform",
        lessons: 10,
        topics: ["Compute Engine", "Cloud Storage", "VPC Networks", "Cloud SQL"],
        description: ""
      },
      {
        module: "Module 5",
        title: "Cloud Architecture",
        lessons: 16,
        topics: ["High Availability", "Scalability", "Security", "Cost Optimization"],
        description: ""
      },
      {
        module: "Module 6",
        title: "DevOps in Cloud",
        lessons: 12,
        topics: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
        description: ""
      }
    ],
    careers: [
      { role: "Cloud Engineer", salary: "₹6-12 LPA", growth: "Very High" },
      { role: "Cloud Architect", salary: "₹10-25 LPA", growth: "Excellent" },
      { role: "DevOps Engineer", salary: "₹8-18 LPA", growth: "Excellent" },
      { role: "Cloud Security Specialist", salary: "₹9-20 LPA", growth: "Very High" },
      { role: "Site Reliability Engineer", salary: "₹12-28 LPA", growth: "Excellent" },
      { role: "Cloud Consultant", salary: "₹15-35 LPA", growth: "High" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your skills",
    description: "Build job-ready capabilities through hands-on, guided learning",
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Get expert mentorship, personalised learning, and guidance to overcome roadblocks",
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Apply concepts through real-world exercises and drills",
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live, mentor-led sessions",
  },
  {
    icon: "🌟",
    title: "Showcase your skills",
    description: "Earn a certificate that reflects your commitment, growth, skills, and capabilities",
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Short-term focus, practical skills, long-term career value",
  },
],
Benefit: [
  {
  id: 1,
  icon: CloudCog,
  title: "Cloud Expert Trainers",
  description:
    "Learn from certified cloud architects with experience in AWS, Azure, and Google Cloud infrastructure design."
},
{
  id: 2,
  icon: ShieldCheck,
  title: "Cloud Certification",
  description:
    "Get certified in cloud architecture and security, preparing you for roles like AWS Solutions Architect and DevOps Engineer.",
  highlighted: true  // middle (orange) card
},
{
  id: 3,
  icon: ServerCog,
  title: "Live Cloud Labs",
  description:
    "Deploy and manage real-world applications on the cloud with hands-on labs and guided architectural projects."
},
{
  id: 4,
  icon: Layers,
  title: "Multi-Cloud Strategies",
  description:
    "Gain practical knowledge in designing scalable, vendor-agnostic solutions across AWS, Azure, and GCP platforms."
},
{
  id: 5,
  icon: ActivitySquare,
  title: "Real-Time Monitoring & DevOps",
  description:
    "Master cloud automation, CI/CD pipelines, infrastructure as code (IaC), and monitoring tools like Prometheus and Grafana."
},
{
  id: 6,
  icon: Briefcase,
  title: "Career Mentorship & Placement",
  description:
    "Receive one-on-one career guidance, interview preparation, and referrals to top cloud-based companies and startups."
}


],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Perfect for Aspiring <span class="text-teal-600">Cloud Experts</span>',
      description: "This comprehensive cloud architect program is ideal for students, IT professionals, and career switchers who are passionate about designing secure, scalable, and efficient cloud infrastructure. Whether you're preparing for certifications like AWS Certified Solutions Architect, Microsoft Azure Architect, or Google Cloud Professional Architect, this course equips you with in-demand skills in cloud design, deployment, and management. Learn how to architect modern cloud-native applications, implement DevOps best practices, and optimize cloud costs — all guided by industry experts. Perfect for anyone looking to advance their career in cloud computing and build the foundation for high-paying roles in top tech companies.",
      cards: [
       {
          id: "it-students",
          title: "IT & CS Students",
          description: "Ideal for students interested in building careers in cloud computing and infrastructure design.",
          icon: GraduationCap
        },
        {
          id: "career-switchers",
          title: "Career Switchers",
          description: "Perfect for professionals moving from on-premise or non-cloud roles into cloud architecture.",
          icon: Briefcase
        },
        {
          id: "junior-engineers",
          title: "Junior Cloud Engineers",
          description: "For early-career engineers looking to grow into cloud architect roles.",
          icon: Users
        },
        {
          id: "tech-leaders",
          title: "Tech Leaders & Founders",
          description: "Great for decision-makers designing scalable, cloud-native architectures for startups or enterprises.",
          icon: BookOpen
        }

      ]
    },
  }
];

export const getCourseById = (id: number): Course | undefined => {
  return coursesData.find(course => course.id === id);
};