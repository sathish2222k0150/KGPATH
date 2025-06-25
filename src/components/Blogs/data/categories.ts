export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  count: number;
  icon: string;
}

export const categories: Category[] = [
  { 
    id: '1', 
    name: 'Career Tips', 
    description: 'Professional development and career advancement strategies',
    color: 'bg-blue-100 text-blue-700', 
    count: 24,
    icon: 'briefcase'
  },
  { 
    id: '2', 
    name: 'Online Learning', 
    description: 'Digital education platforms, tools, and methodologies',
    color: 'bg-green-100 text-green-700', 
    count: 18,
    icon: 'monitor'
  },
  { 
    id: '3', 
    name: 'Student Success', 
    description: 'Academic achievement and personal development tips',
    color: 'bg-purple-100 text-purple-700', 
    count: 15,
    icon: 'graduation-cap'
  },
  { 
    id: '4', 
    name: 'AI in Education', 
    description: 'Artificial intelligence applications in learning and teaching',
    color: 'bg-orange-100 text-orange-700', 
    count: 12,
    icon: 'brain'
  },
  { 
    id: '5', 
    name: 'Study Methods', 
    description: 'Effective learning techniques and study strategies',
    color: 'bg-pink-100 text-pink-700', 
    count: 20,
    icon: 'book-open'
  },
  { 
    id: '6', 
    name: 'Tech Courses', 
    description: 'Programming, web development, and technical skills',
    color: 'bg-indigo-100 text-indigo-700', 
    count: 16,
    icon: 'code'
  }
];