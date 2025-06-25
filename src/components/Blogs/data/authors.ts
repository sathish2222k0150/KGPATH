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
  joinDate: string;
  totalPosts: number;
  totalViews: number;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    bio: 'Educational technology expert with 15+ years in online learning platforms. Former MIT researcher specializing in adaptive learning systems.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      twitter: '@sarahmitchell',
      linkedin: 'sarah-mitchell-edu',
      email: 'sarah@example.com'
    },
    expertise: ['EdTech', 'Online Learning', 'AI in Education', 'Learning Analytics'],
    joinDate: '2020-03-15',
    totalPosts: 45,
    totalViews: 125000
  },
  {
    id: '2',
    name: 'Marcus Chen',
    bio: 'Career counselor and student success coach helping students navigate their academic journey. Certified career development facilitator.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      twitter: '@marcuschen',
      linkedin: 'marcus-chen-career',
    },
    expertise: ['Career Development', 'Student Success', 'Academic Planning', 'Professional Skills'],
    joinDate: '2021-01-20',
    totalPosts: 32,
    totalViews: 89000
  },
  {
    id: '3',
    name: 'David Kim',
    bio: 'Software engineer turned educator, passionate about making technology accessible to all learners. Full-stack developer with teaching experience.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    socialLinks: {
      twitter: '@davidkim_dev',
      linkedin: 'david-kim-educator',
      email: 'david@techlearn.com'
    },
    expertise: ['Programming', 'Web Development', 'Tech Education', 'Coding Bootcamps'],
    joinDate: '2021-06-01',
    totalPosts: 38,
    totalViews: 95000
  },
  
];