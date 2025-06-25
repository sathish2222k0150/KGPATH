import { Clock, Eye, ArrowRight } from 'lucide-react';
import { BlogPost } from './data';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">You Might Also Like</h3>
        <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
          <a href="#post-grid">View More</a>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, index) => (
          <article
            key={post.id}
            className="group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    post.category === 'Career Tips' ? 'bg-blue-600 text-white' :
                    post.category === 'Online Learning' ? 'bg-green-600 text-white' :
                    post.category === 'Student Success' ? 'bg-purple-600 text-white' :
                    post.category === 'AI in Education' ? 'bg-orange-600 text-white' :
                    post.category === 'Study Methods' ? 'bg-pink-600 text-white' :
                    'bg-indigo-600 text-white'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}m
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views > 1000 ? `${(post.views / 1000).toFixed(1)}k` : post.views}
                    </div>
                  </div>
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}