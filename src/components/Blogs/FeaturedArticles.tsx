import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from './data/blogData';

interface FeaturedArticlesProps {
  posts: BlogPost[];
}

export default function FeaturedArticles({ posts }: FeaturedArticlesProps) {
  const featuredPost = posts.find(post => post.featured);
  const trendingPosts = posts.filter(post => post.trending && !post.featured).slice(0, 3);

  if (!featuredPost) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured & <span className='text-teal-600'>Trending</span></h2>
          <p className="text-xl text-gray-600">Discover our most popular and recent insights</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author.name}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime} min read
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Articles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trending <span className='text-teal-600'>Now</span></h3>
            {trendingPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white rounded-xl border border-grey-100 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{post.author.name}</span>
                      <span>{post.readTime}m read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}