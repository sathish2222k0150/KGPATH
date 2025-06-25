import { useState, useMemo } from 'react';
import HeroSection from './/HeroSection';
import FeaturedArticles from './/FeaturedArticles';
import Sidebar from './Sidebar';
import NewsletterSignup from './/NewsletterSignup';
import AuthorHighlights from './AuthorHighlights';
import PopularPosts from './PopularPosts';
import BlogPost from './BlogPost';
import { blogPosts, categories, authors } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Apply search filter
    if (searchQuery) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case 'oldest':
        posts.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
        break;
      case 'popular':
        posts.sort((a, b) => b.views - a.views);
        break;
      case 'alphabetical':
        posts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // newest
        posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }

    return posts;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handlePostClick = (postId: string) => {
    setSelectedPost(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // If a post is selected, show the blog post detail view
  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (post) {
      const relatedPosts = blogPosts
        .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
        .slice(0, 3);
      
      return <BlogPost post={post} relatedPosts={relatedPosts} onBack={handleBackToBlog} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Featured Articles */}
      <FeaturedArticles posts={blogPosts} />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              categories={categories}
              authors={authors}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Results Info */}
            {(searchQuery || selectedCategory) && (
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory && ` in "${selectedCategory}"`}
                  {(searchQuery || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('');
                      }}
                      className="ml-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      Clear filters
                    </button>
                  )}
                </p>
              </div>
            )}

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    onClick={() => handlePostClick(post.id)}
                    className="group bg-white rounded-2xl  overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Article Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          post.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {post.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span>{post.readTime}m read</span>
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gradient-primary hover:text-white transition-all duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          <span>❤️ {post.likes}</span>
                          <span>💬 {post.comments}</span>
                        </div>
                        
                        <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8c.424 0 .84.041 1.243.118" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <PopularPosts posts={blogPosts} />

      {/* Author Highlights */}
      <AuthorHighlights authors={authors} />

      {/* Newsletter Signup */}
      <NewsletterSignup />

    </div>
  );
}

export default App;