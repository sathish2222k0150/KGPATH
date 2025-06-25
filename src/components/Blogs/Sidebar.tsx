import { Search, Filter, TrendingUp, Hash } from 'lucide-react';
import { Category, Author } from './data/blogData';

interface SidebarProps {
  categories: Category[];
  authors: Author[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function Sidebar({
  categories,
  authors,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}: SidebarProps) {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-6 sticky top-6 space-y-8">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          <Search className="w-4 h-4 inline mr-2" />
          Search Articles
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Sort Options */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          <Filter className="w-4 h-4 inline mr-2" />
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
          <option value="alphabetical">A-Z</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          <Hash className="w-4 h-4 inline mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === '' 
                ? 'bg-orange-100 text-orange-700 font-semibold' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between ${
                selectedCategory === category.name 
                  ? 'bg-orange-100 text-orange-700 font-semibold' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          <TrendingUp className="w-4 h-4 inline mr-2" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {['EdTech', 'Remote Learning', 'Career Development', 'Study Tips', 'AI', 'Productivity', 'Student Life', 'Innovation'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Authors */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Featured Authors</h3>
        <div className="space-y-3">
          {authors.slice(0, 3).map((author) => (
            <div key={author.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{author.name}</p>
                <p className="text-xs text-gray-500 truncate">{author.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}