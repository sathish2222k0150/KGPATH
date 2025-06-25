export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatBotConfig {
  title: string;
  subtitle: string;
  welcomeMessage: string;
  poweredByText: string;
  placeholderText: string;
}

export const chatBotConfig: ChatBotConfig = {
  title: 'KGPATH',
  subtitle: 'Online now',
  welcomeMessage: "Hello! I'm your AI assistant. How can I help you today?",
  poweredByText: 'Powered by KGPATH',
  placeholderText: 'Type your message...',
};

export const initialMessages: Message[] = [
  {
    id: '1',
    text: chatBotConfig.welcomeMessage,
    isUser: false,
    timestamp: new Date(),
  },
];

const qnaDatabase = [
  // ========== GENERAL ENQUIRY ==========
  {
    keywords: ['location', 'address', 'where', 'located', 'place'],
    answer: "We are located on the 3rd Floor, KG Garden City Mall, Vedapatti, Coimbatore."
  },
  {
    keywords: ['contact', 'phone', 'number', 'call', 'reach', 'mobile'],
    answer: "You can call us at +91 7397788918 / 917 / 915 or email us at info@kgpath.org."
  },
  {
    keywords: ['working hours', 'timings', 'open', 'close', 'available', 'hours'],
    answer: "Our team is available Monday to Saturday from 10:00 AM to 6:00 PM."
  },
  {
    keywords: ['branches', 'other locations', 'centers', 'other branches'],
    answer: "Currently, our main training center is in Vedapatti, Coimbatore."
  },
  {
    keywords: ['parking', 'vehicle', 'car parking'],
    answer: "Yes, we have parking available within KG Garden City Mall premises."
  },

  // ========== MISSION & VISION ==========
  {
    keywords: ['mission'],
    answer: "Our mission is to make quality tech education accessible and bridge the digital skills gap with industry-relevant training."
  },
  {
    keywords: ['vision'],
    answer: "To become a globally recognized platform for skill development and empower learners to shape the future of technology."
  },

  // ========== COURSES OFFERED ==========
  {
    keywords: ['courses', 'programs', 'offerings', 'what do you offer'],
    answer: `We offer the following courses:
- Full Stack Development
- AI & Machine Learning
- Cloud Architect`
  },
  {
    keywords: ['duration', 'how long', 'length', 'course duration'],
    answer: "All three courses have a duration of 6 months."
  },
  {
    keywords: ['mode', 'online', 'offline', 'learning method', 'delivery'],
    answer: "We offer both online and offline learning options."
  },
  {
    keywords: ['age limit', 'age restriction', 'minimum age'],
    answer: "No, anyone passionate about tech and learning is welcome to join."
  },
  {
    keywords: ['beginners', 'new', 'no experience', 'starter', 'fresher'],
    answer: "Yes, our courses are designed for both beginners and professionals."
  },
  {
    keywords: ['working professionals', 'employed', 'job', 'professional'],
    answer: "Absolutely! We offer flexible timings suitable for working professionals."
  },
  {
    keywords: ['coding knowledge', 'prerequisites', 'requirements', 'prior knowledge'],
    answer: "Basic computer knowledge is preferred, but we start from fundamentals."
  },

  // ========== FEES & PAYMENT ==========
  {
    keywords: ['fee', 'cost', 'price', 'course fee'],
    answer: "₹75,000 for each course."
  },
  {
    keywords: ['emi', 'installment', 'payment plan', 'monthly payment'],
    answer: "Yes, installment options are available."
  },
  {
    keywords: ['installment plan', 'payment structure', 'payment options'],
    answer: "Contact our team for customized installment options."
  },
  {
    keywords: ['registration fee', 'admission fee', 'joining fee'],
    answer: "Yes, a nominal registration fee is applicable."
  },
  {
    keywords: ['discounts', 'offers', 'special price', 'early bird'],
    answer: "Special offers and early-bird discounts may apply. Please contact us for current offers."
  },

  // ========== FULL STACK DEVELOPMENT ==========
  {
    keywords: ['full stack', 'fullstack', 'web development', 'full stack course'],
    answer: `Full Stack Development course covers:
- Frontend, Backend, Database, APIs, Deployment, and Version Control.
Technologies you'll learn:
- HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, Git & GitHub.`
  },
  {
    keywords: ['projects', 'real projects', 'hands-on', 'practical'],
    answer: "Yes, hands-on projects and capstone projects are included."
  },
  {
    keywords: ['certificate', 'certification', 'completion certificate'],
    answer: "Yes, a course completion certificate is provided."
  },
  {
    keywords: ['portfolio', 'showcase', 'work portfolio'],
    answer: "Yes, we help you build a live portfolio with real-world projects."
  },

  // ========== AI & ML COURSE ==========
  {
    keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'ai ml'],
    answer: `AI & ML course includes:
- Python Programming, Machine Learning, Deep Learning, and AI concepts.
Tools you'll use:
- TensorFlow, Scikit-learn, NumPy, and Pandas.`
  },
  {
    keywords: ['python', 'programming language', 'python required'],
    answer: "Not necessarily; Python basics are covered at the start of the course."
  },
  {
    keywords: ['tensorflow', 'scikit', 'sklearn', 'numpy', 'pandas'],
    answer: "Yes, we cover all these essential AI/ML tools in our curriculum."
  },
  {
    keywords: ['ai projects', 'ml projects', 'ai practical'],
    answer: "Yes, each module includes practical assignments and projects."
  },

  // ========== CLOUD ARCHITECT COURSE ==========
  {
    keywords: ['cloud', 'cloud architect', 'aws', 'azure', 'google cloud', 'gcp'],
    answer: `Cloud Architect program covers:
- AWS, Azure, Google Cloud, DevOps basics, CI/CD pipelines, and infrastructure setup.`
  },
  {
    keywords: ['non-it', 'non technical', 'non computer background'],
    answer: "Yes, but basic IT knowledge is helpful."
  },
  {
    keywords: ['cloud certifications', 'certification exam', 'cloud exams'],
    answer: "We prepare you for AWS, Azure, or GCP certification exams."
  },
  {
    keywords: ['exam assistance', 'mock tests', 'certification help'],
    answer: "Yes, mock tests and mentorship for certification are part of the course."
  },

  // ========== CAREER SUPPORT ==========
  {
    keywords: ['placement', 'job assistance', 'career support', 'jobs'],
    answer: "Yes, we offer job support and placement assistance."
  },
  {
    keywords: ['resume', 'cv', 'profile', 'resume help'],
    answer: "Yes, we help with resume writing and LinkedIn profile optimization."
  },
  {
    keywords: ['mock interviews', 'interview preparation', 'interview practice'],
    answer: "Yes, mock technical and HR interviews are conducted regularly."
  },
  {
    keywords: ['companies', 'hiring partners', 'recruiters', 'placement partners'],
    answer: "We connect students with hiring partners and startup networks."
  },
  {
    keywords: ['internship', 'training', 'internship opportunities'],
    answer: "Yes, we also provide guidance and references for internships."
  },

  // ========== LEARNING EXPERIENCE ==========
  {
    keywords: ['recorded sessions', 'recordings', 'videos', 'class recordings'],
    answer: "Yes, recorded sessions are available for revision."
  },
  {
    keywords: ['live classes', 'interactive', 'live sessions'],
    answer: "Yes, our sessions include live Q&A and real-time code walkthroughs."
  },
  {
    keywords: ['student ratio', 'batch size', 'class size'],
    answer: "We maintain a small batch size to ensure personalized attention."
  },
  {
    keywords: ['missed class', 'absent', 'could not attend'],
    answer: "You can access the recorded session and schedule a catch-up session if needed."
  },
  {
    keywords: ['lms', 'learning management system', 'portal'],
    answer: "Yes, we provide access to our LMS with course materials and assignments."
  },

  // ========== TRAINERS & MENTORS ==========
  {
    keywords: ['trainers', 'instructors', 'faculty', 'teachers'],
    answer: "Our trainers are industry experts with years of real-world experience."
  },
  {
    keywords: ['mentors', 'one-on-one', 'personal guidance'],
    answer: "Yes, one-on-one mentorship is available."
  },
  {
    keywords: ['career guidance', 'development', 'career advice'],
    answer: "Yes, including mock interviews, technical skills, and soft skills."
  },

  // ========== OFFLINE FACILITIES ==========
  {
    keywords: ['classroom', 'offline classes', 'physical classes'],
    answer: "Yes, we provide offline classes at our Coimbatore center."
  },
  {
    keywords: ['wifi', 'internet', 'connectivity'],
    answer: "Yes, free high-speed internet is available."
  },
  {
    keywords: ['lab', 'computer lab', 'facilities', 'infrastructure'],
    answer: "Yes, well-equipped computer labs are provided."
  },
  {
    keywords: ['food', 'snacks', 'beverages', 'canteen'],
    answer: "Food court facilities are available within KG Garden City Mall."
  },

  // ========== CERTIFICATION ==========
  {
    keywords: ['certificate', 'certification', 'course certificate'],
    answer: "Yes, a professional certificate is provided upon successful completion."
  },
  {
    keywords: ['recognized', 'valid', 'industry recognized'],
    answer: "Yes, it is recognized by hiring partners and helps in your portfolio."
  },

  // ========== ADMISSIONS ==========
  {
    keywords: ['enroll', 'admission', 'join', 'how to join'],
    answer: "You can visit our website, contact us, or walk into our center."
  },
  {
    keywords: ['entrance exam', 'test', 'admission test'],
    answer: "No entrance exam is required."
  },
  {
    keywords: ['demo', 'trial', 'demo class'],
    answer: "Yes, we offer free demo sessions. Contact us to schedule one."
  },
  {
    keywords: ['group discount', 'group admission', 'friends discount'],
    answer: "Yes, we provide discounts for group admissions."
  },

  // ========== STUDENT SUPPORT ==========
  {
    keywords: ['difficulty', 'doubt', 'understanding', 'help with topic'],
    answer: "You can schedule a doubt session with the trainer."
  },
  {
    keywords: ['career counseling', 'guidance', 'advice'],
    answer: "Yes, career guidance is part of our offering."
  },
  {
    keywords: ['peer learning', 'group learning', 'student groups'],
    answer: "Yes, we have student forums and group activities."
  },

  // ========== TECHNOLOGY STACK ==========
  {
    keywords: ['frontend', 'front end', 'client side'],
    answer: "We teach HTML, CSS, Bootstrap, JavaScript, React.js for frontend."
  },
  {
    keywords: ['backend', 'back end', 'server side'],
    answer: "We teach Node.js, Express.js, MongoDB, and MySQL for backend."
  },
  {
    keywords: ['api', 'rest', 'services', 'web services'],
    answer: "Yes, you'll learn to build and consume REST APIs."
  },
  {
    keywords: ['git', 'version control', 'github'],
    answer: "Yes, Git and GitHub are part of the curriculum."
  },

  // ========== EVENTS & EXTRAS ==========
  {
    keywords: ['webinars', 'seminars', 'guest lectures'],
    answer: "Yes, we regularly conduct webinars with industry experts."
  },
  {
    keywords: ['hackathons', 'coding competitions', 'coding challenges'],
    answer: "Yes, we host coding contests and tech challenges."
  },
  {
    keywords: ['alumni', 'former students', 'alumni network'],
    answer: "Yes, alumni often return to share their experiences."
  },

  // ========== LANGUAGE & SUPPORT ==========
  {
    keywords: ['language', 'medium', 'instruction language'],
    answer: "English is the primary medium. Regional support is also available if needed."
  },
  {
    keywords: ['material language', 'docs language'],
    answer: "Yes, all documentation and tutorials are in English."
  },
  {
    keywords: ['technical support', 'help desk', 'support'],
    answer: "Yes, our team provides full tech support."
  },

  // ========== AFTER COURSE COMPLETION ==========
  {
    keywords: ['post course', 'after completion', 'after course'],
    answer: "Yes, we offer alumni support and updates."
  },
  {
    keywords: ['lifetime access', 'materials access', 'long term access'],
    answer: "Yes, lifetime access to LMS content is provided."
  },
  {
    keywords: ['repeat course', 'retake', 'redo'],
    answer: "Yes, repeat sessions are possible depending on availability."
  },

  // ========== ONLINE LEARNING ==========
  {
    keywords: ['online classes', 'virtual classes'],
    answer: "Online classes are conducted live and also recorded."
  },
  {
    keywords: ['platform', 'zoom', 'google meet', 'online platform'],
    answer: "We use Zoom/Google Meet and a secure LMS."
  },
  {
    keywords: ['system requirements', 'computer specs', 'laptop requirements'],
    answer: "A basic laptop or desktop with internet access is sufficient."
  },

  // ========== MISCELLANEOUS ==========
  {
    keywords: ['affiliated', 'accredited', 'recognized'],
    answer: "We are partnered with industry professionals and certification partners."
  },
  {
    keywords: ['hardware', 'software', 'provided equipment'],
    answer: "For offline students, lab systems are provided. Online students need personal devices."
  },
  {
    keywords: ['part-time', 'weekend batches', 'evening classes'],
    answer: "Yes, weekend and evening batches are available."
  },
  {
    keywords: ['switch mode', 'online to offline', 'change mode'],
    answer: "Yes, with prior notice, mode change is allowed."
  },
  {
    keywords: ['corporate training', 'workshops', 'company training'],
    answer: "Yes, we provide customized corporate training."
  },
  {
    keywords: ['freelance', 'remote work', 'freelancing'],
    answer: "Yes, we guide students in freelancing platforms and remote jobs."
  },
  {
    keywords: ['visit', 'campus tour', 'see center'],
    answer: "Yes, you are welcome to schedule a campus tour with our counselors."
  },
  {
    keywords: ['classroom facilities', 'separate classrooms'],
    answer: "Yes, we maintain separate classrooms for different programs."
  },
  {
    keywords: ['air conditioned', 'ac', 'ventilation'],
    answer: "Yes, our classrooms are well-ventilated and air-conditioned for comfort."
  },
  {
    keywords: ['waiting area', 'parents lounge'],
    answer: "Yes, parents can wait in our lounge or common area."
  },
  {
    keywords: ['cctv', 'security cameras', 'surveillance'],
    answer: "Yes, for student safety, classrooms and labs are monitored by CCTV."
  },

  // ========== PARENT RELATED ==========
  {
    keywords: ['parents', 'progress discussion', 'parent teacher'],
    answer: "Yes, parents are welcome to interact with counselors and trainers during reviews."
  },
  {
    keywords: ['safety', 'female students', 'women safety'],
    answer: "Yes, our campus is safe and monitored with female staff support."
  },
  {
    keywords: ['after 12th', 'school students', 'fresh graduates'],
    answer: "Yes, the course is beginner-friendly and helps students build a strong tech foundation."
  },
  {
    keywords: ['child', 'job guarantee', 'placement guarantee'],
    answer: "We offer job-ready training with placement assistance and soft skill support."
  },
  {
    keywords: ['orientation', 'parents attend', 'demo for parents'],
    answer: "Yes, orientation programs are open to both students and parents."
  },

  // ========== PROJECT SUPPORT ==========
  {
    keywords: ['final project', 'capstone project', 'major project'],
    answer: "Yes, each student must complete a capstone project for certification."
  },
  {
    keywords: ['project ideas', 'project guidance'],
    answer: "Yes, trainers help students brainstorm and structure their projects."
  },
  {
    keywords: ['college project', 'academic project'],
    answer: "Absolutely. Our projects are real-world ready and resume-worthy."
  },
  {
    keywords: ['advanced modules', 'specialization'],
    answer: "Yes, you can opt for advanced add-on modules or specialized tracks."
  },
  {
    keywords: ['open source', 'github projects', 'contributions'],
    answer: "Yes, we guide students to contribute to open-source as part of their learning."
  },

  // ========== ALUMNI & SUCCESS ==========
  {
    keywords: ['alumni working', 'placed students', 'successful students'],
    answer: "Our alumni are placed in leading companies and startups across India."
  },
  {
    keywords: ['connect alumni', 'talk to alumni'],
    answer: "Yes, you can speak with alumni or attend alumni Q&A webinars."
  },
  {
    keywords: ['success stories', 'achievements'],
    answer: "Yes, we regularly feature success stories on our website and social media."
  },
  {
    keywords: ['alumni support', 'graduate support'],
    answer: "Yes, alumni get lifelong access to materials, updates, and events."
  },
  {
    keywords: ['become mentor', 'teaching assistant'],
    answer: "Yes, top-performing alumni may be invited to become mentors or teaching assistants."
  },

  // ========== GREETINGS & COMMON ==========
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    answer: "Hello! How can I assist you today?"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    answer: "You're welcome! Feel free to ask anything else."
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'exit'],
    answer: "Goodbye! Have a great day."
  }
];

export const getBotResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase().trim();
  
  // First check for exact matches or very specific patterns
  if (/(^hello|^hi|^hey)\b/i.test(msg)) return "Hello! How can I assist you today?";
  if (/thank|thanks|thank you/i.test(msg)) return "You're welcome! Feel free to ask anything else.";
  if (/(bye|goodbye|see you|exit)/i.test(msg)) return "Goodbye! Have a great day.";

  // Search through all Q&A pairs to find the best match
  for (const qna of qnaDatabase) {
    for (const keyword of qna.keywords) {
      // Create a regex pattern that looks for the keyword as a whole word
      const pattern = new RegExp(`\\b${keyword}\\b`, 'i');
      if (pattern.test(msg)) {
        return qna.answer;
      }
    }
  }

  // If no specific match found, use a fallback response
  const fallbackResponses = [
    "I'm not sure I understand. Could you please rephrase your question?",
    "That's an interesting question! Could you provide more details?",
    "I'm here to help with information about KGPATH Academy. Could you clarify your question?",
    "I want to make sure I give you the right information. Could you ask your question differently?",
    "Thank you for your question! For more specific information, you might want to contact our team directly at +91 7397788918.",
    "I'm constantly learning! Could you try asking that in a different way?",
    "That's a great question. Let me connect you with more detailed information: please call +91 7397788918.",
    "I'm designed to answer questions about KGPATH Academy. Could you ask something related to our courses or services?"
  ];
  
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};