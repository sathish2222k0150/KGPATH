import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle, 
  ChevronRight,
  ArrowUp} from 'lucide-react';
import { BlogPost as BlogPostType } from './data';
import TableOfContents from './TableOfContents';
import AuthorBio from './AuthorBio';
import RelatedPosts from './RelatedPosts';
import ShareButtons from './ShareButtons';
import CalloutBox from './CalloutBox';
import InlineCTA from './InlineCTA';
import BlogNewsletterSignup from './BlogNewsletterSignup';

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
  onBack: () => void;
}

export default function BlogPost({ post, relatedPosts, onBack }: BlogPostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section for TOC
      const sections = document.querySelectorAll('h2[id], h3[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'key-concepts', title: 'Key Concepts', level: 2 },
    { id: 'practical-applications', title: 'Practical Applications', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 3 },
    { id: 'common-mistakes', title: 'Common Mistakes to Avoid', level: 3 },
    { id: 'conclusion', title: 'Conclusion', level: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mb-10 py-14 pt-16">
      {/* Back Button */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10 py-15">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
            Back to Blog
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents 
              items={tableOfContents} 
              activeSection={activeSection}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Hero Section */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
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

                {/* Difficulty Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    post.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {post.difficulty}
                  </span>
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{post.author.name}</p>
                      <p className="text-sm">{post.author.expertise[0]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    {post.readTime} min read
                  </div>
                  
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    {post.views.toLocaleString()} views
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gradient-primary hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-8">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={handleLike}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isLiked 
                          ? 'bg-red-100 text-red-600' 
                          : 'hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{likes}</span>
                    </button>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <ShareButtons post={post} />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-4 scroll-mt-24">
                    Introduction
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    In today's rapidly evolving educational landscape, understanding the latest trends and methodologies is crucial for both educators and learners. This comprehensive guide will walk you through the essential concepts and practical applications that can transform your learning experience.
                  </p>

                  <CalloutBox
                    type="tip"
                    title="Pro Tip"
                    content="Always start with understanding your learning style before diving into new methodologies. This will help you adapt the strategies to your specific needs."
                  />

                   {post.keyConcepts && (
                  <>
                    <h2 id="key-concepts" className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">
                      Key Concepts
                    </h2>
                    <p className="mb-4 text-gray-700">{post.keyConcepts.summary}</p>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                      {post.keyConcepts.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                  {/* Inline CTA */}
                  <InlineCTA />

                  {/* Practical Applications */}
                {post.practicalApplications && (
                  <>
                    <h2 id="practical-applications" className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">
                      Practical Applications
                    </h2>
                    <p className="mb-4 text-gray-700">{post.practicalApplications.summary}</p>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                      {post.practicalApplications.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                  {/* Best Practices */}
                {post.bestPractices && (
                  <>
                    <h3 id="best-practices" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">
                      Best Practices
                    </h3>
                    <p className="mb-4 text-gray-700">{post.bestPractices.summary}</p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {post.bestPractices.sections.map((section, idx) => (
                        <div key={idx} className="bg-white border p-6 rounded-lg">
                          <h5 className="font-semibold text-gray-900 mb-2">{section.title}</h5>
                          {section.content.map((line, i) => (
                            <p key={i} className="text-sm text-gray-600">{line}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                  <CalloutBox
                    type="warning"
                    title="Important Note"
                    content="Remember that what works for one person may not work for another. Be prepared to experiment and adjust your approach based on your results."
                  />

                   {/* Common Mistakes */}
                {post.commonMistakes && (
                  <>
                    <h3 id="common-mistakes" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">
                      Common Mistakes to Avoid
                    </h3>
                    <p className="mb-4 text-gray-700">{post.commonMistakes.summary}</p>
                    <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                      <ul className="space-y-3 text-gray-700">
                        {post.commonMistakes.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">❌</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                    {post.conclusion && (
                  <>
                    <h2 id="conclusion" className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">
                      Conclusion
                    </h2>
                    {post.conclusion.map((para, i) => (
                      <p key={i} className="mb-4 text-gray-700">{para}</p>
                    ))}
                  </>
                )}

                  <CalloutBox
                    type="success"
                    title="Take Action"
                    content="Don't let this knowledge sit idle. Pick one strategy from this article and commit to trying it for the next week. Track your progress and see how it impacts your learning experience."
                  />
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <AuthorBio author={post.author} />

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Newsletter Signup */}
            <BlogNewsletterSignup />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}

      {/* Sticky CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <button className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200">
          Explore Our Courses
        </button>
      </div>
    </div>
  );
}