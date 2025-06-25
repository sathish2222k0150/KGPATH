import { Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Author } from './data/blogData';

interface AuthorHighlightsProps {
  authors: Author[];
}

export default function AuthorHighlights({ authors }: AuthorHighlightsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our <span className='text-teal-600'>Authors</span></h2>
          <p className="text-xl text-gray-600">Learn from education experts and industry professionals</p>
        </div>

        {/* Authors Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {authors.map((author, index) => (
            <div
              key={author.id}
              className="bg-white rounded-2xl  p-8 text-center hover:shadow-2xl hover:shadow-teal-200 transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Author Avatar */}
              <div className="relative mb-6">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-teal-100 group-hover:ring-teal-200 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Author Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {author.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {author.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {author.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-6">
                {author.socialLinks.twitter && (
                  <a
                    href={`https://twitter.com/${author.socialLinks.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {author.socialLinks.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${author.socialLinks.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {author.socialLinks.email && (
                  <a
                    href={`mailto:${author.socialLinks.email}`}
                    className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* View Posts Button */}
              <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
                See All Posts
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}