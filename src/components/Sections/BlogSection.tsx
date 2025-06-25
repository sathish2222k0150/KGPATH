import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../Blogs/data/blogPosts';
import {Link} from 'react-router-dom'; 

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dive Into Our <span className="text-teal-600">Blog</span> Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest industry insights, career advice, and learning resources 
            from our team of experts and industry professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <div className="flex items-center text-teal-600 font-medium group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={'/BlogPage'}>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
            View All Posts
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}