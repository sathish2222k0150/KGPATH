export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  expertise: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  trending: boolean;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  count: number;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    bio: 'Educational technology expert with 15+ years in online learning platforms.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      twitter: '@sarahmitchell',
      linkedin: 'sarah-mitchell-edu',
      email: 'sarah@example.com'
    },
    expertise: ['EdTech', 'Online Learning', 'AI in Education']
  },
  {
    id: '2',
    name: 'Marcus Chen',
    bio: 'Career counselor and student success coach helping students navigate their academic journey.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      twitter: '@marcuschen',
      linkedin: 'marcus-chen-career',
    },
    expertise: ['Career Development', 'Student Success', 'Academic Planning']
  },
  {
    id: '3',
    name: 'Prof. Amanda Rivera',
    bio: 'Psychology professor specializing in learning methodologies and student motivation.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      linkedin: 'amanda-rivera-prof',
      email: 'amanda@university.edu'
    },
    expertise: ['Learning Psychology', 'Student Motivation', 'Research Methods']
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Career Tips', color: 'bg-blue-100 text-blue-700', count: 24 },
  { id: '2', name: 'Online Learning', color: 'bg-green-100 text-green-700', count: 18 },
  { id: '3', name: 'Student Success', color: 'bg-purple-100 text-purple-700', count: 15 },
  { id: '4', name: 'AI in Education', color: 'bg-orange-100 text-orange-700', count: 12 },
  { id: '5', name: 'Study Methods', color: 'bg-pink-100 text-pink-700', count: 20 },
  { id: '6', name: 'Tech Courses', color: 'bg-indigo-100 text-indigo-700', count: 16 }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Remote Learning: Trends and Technologies Shaping Education',
    excerpt: 'Explore how emerging technologies like VR, AI, and blockchain are revolutionizing the way we learn and teach in the digital age.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[0],
    publishDate: '2024-01-15',
    readTime: 8,
    category: 'Online Learning',
    tags: ['EdTech', 'Remote Learning', 'Innovation', 'Future of Education'],
    featured: true,
    trending: true,
    views: 2847
  },
  {
    id: '2',
    title: 'Mastering Time Management: A Student\'s Guide to Academic Success',
    excerpt: 'Learn proven strategies and techniques to manage your study schedule effectively and boost your academic performance.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[1],
    publishDate: '2024-01-12',
    readTime: 6,
    category: 'Student Success',
    tags: ['Time Management', 'Study Tips', 'Productivity', 'Academic Success'],
    featured: false,
    trending: true,
    views: 1923
  },
  {
    id: '3',
    title: 'Building Your Tech Career: From Student to Professional',
    excerpt: 'Navigate the transition from academic learning to professional tech roles with practical advice and industry insights.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[1],
    publishDate: '2024-01-10',
    readTime: 10,
    category: 'Career Tips',
    tags: ['Career Development', 'Tech Industry', 'Professional Growth', 'Job Search'],
    featured: false,
    trending: true,
    views: 1654
  },
  {
    id: '4',
    title: 'The Psychology of Learning: How Your Brain Processes Information',
    excerpt: 'Understanding the science behind learning can help you develop more effective study strategies and improve retention.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[2],
    publishDate: '2024-01-08',
    readTime: 7,
    category: 'Study Methods',
    tags: ['Learning Psychology', 'Memory', 'Cognitive Science', 'Study Techniques'],
    featured: false,
    trending: false,
    views: 1432
  },
  {
    id: '5',
    title: 'AI-Powered Learning Tools: Enhancing Education with Technology',
    excerpt: 'Discover how artificial intelligence is transforming education through personalized learning experiences and smart tutoring systems.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[0],
    publishDate: '2024-01-05',
    readTime: 9,
    category: 'AI in Education',
    tags: ['Artificial Intelligence', 'EdTech', 'Personalized Learning', 'Innovation'],
    featured: false,
    trending: false,
    views: 1876
  },
  {
    id: '6',
    title: 'Effective Note-Taking Strategies for Digital Learners',
    excerpt: 'Master the art of digital note-taking with proven methods that enhance comprehension and retention.',
    content: 'Full article content here...',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: authors[2],
    publishDate: '2024-01-03',
    readTime: 5,
    category: 'Study Methods',
    tags: ['Note Taking', 'Digital Learning', 'Study Skills', 'Organization'],
    featured: false,
    trending: false,
    views: 1234
  }
];