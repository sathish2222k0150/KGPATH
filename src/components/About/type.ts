export interface Leadership {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
}

export interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}



export interface Trainer {
  name: string;
  subject: string;
  experience: string;
  image: string;
  rating: number;
  students: string;
}

export interface Testimonial {
  name: string;
  course: string;
  outcome: string;
  image: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}