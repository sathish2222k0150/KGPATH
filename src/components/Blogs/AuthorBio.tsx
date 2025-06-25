import { Twitter, Linkedin, Mail, ExternalLink, Calendar, Eye, FileText } from 'lucide-react';
import { Author } from './data';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h3>
      
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-100"
          />
        </div>
        
        {/* Author Info */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h4>
          <p className="text-gray-600 mb-4 leading-relaxed">{author.bio}</p>
          
          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {author.expertise.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Author Stats */}
          <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Joined {new Date(author.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              <span>{author.totalPosts} articles</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{author.totalViews.toLocaleString()} total views</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {author.socialLinks.twitter && (
              <a
                href={`https://twitter.com/${author.socialLinks.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {author.socialLinks.linkedin && (
              <a
                href={`https://linkedin.com/in/${author.socialLinks.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.socialLinks.email && (
              <a
                href={`mailto:${author.socialLinks.email}`}
                className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            <button className="px-4 py-2 bg-gradient-secondary text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center text-sm font-medium">
              View All Posts
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}