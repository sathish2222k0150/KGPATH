import { TrendingUp, Eye, Clock } from 'lucide-react';
import { BlogPost } from './data/blogData';

interface PopularPostsProps {
  posts: BlogPost[];
}

export default function PopularPosts({ posts }: PopularPostsProps) {
  // Sort posts by views and take top 5
  const popularPosts = posts
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Most Popular <span className='text-teal-600'>Posts</span></h2>
            </div>
            <p className="text-xl text-gray-600">The articles our readers love most</p>
          </div>

          {/* Popular Posts List */}
          <div className="space-y-6">
            {popularPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-6">
                  {/* Rank Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    index === 0 ? 'bg-orange-600 text-white' :
                    index === 1 ? 'bg-orange-600 text-white' :
                    index === 2 ? 'bg-orange-600 text-white' :
                    'bg-orange-600 text-white'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Post Image */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}m read
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        post.category === 'Career Tips' ? 'bg-blue-100 text-blue-700' :
                        post.category === 'Online Learning' ? 'bg-green-100 text-green-700' :
                        post.category === 'Student Success' ? 'bg-purple-100 text-purple-700' :
                        post.category === 'AI in Education' ? 'bg-orange-100 text-orange-700' :
                        post.category === 'Study Methods' ? 'bg-pink-100 text-pink-700' :
                        'bg-indigo-100 text-indigo-700'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Read Button */}
                  <div className="flex-shrink-0">
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 font-semibold">
              View All Popular Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}