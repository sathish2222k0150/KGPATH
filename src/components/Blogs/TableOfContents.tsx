import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  activeSection: string;
}

export default function TableOfContents({ items, activeSection }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center mb-4">
        <List className="w-5 h-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center group ${
              activeSection === item.id
                ? 'bg-gradient-primary text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            } ${item.level === 3 ? 'ml-4 text-sm' : ''}`}
          >
            <ChevronRight className={`w-4 h-4 mr-2 transition-transform duration-200 ${
              activeSection === item.id ? 'rotate-90' : 'group-hover:translate-x-1'
            }`} />
            <span className="truncate">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}