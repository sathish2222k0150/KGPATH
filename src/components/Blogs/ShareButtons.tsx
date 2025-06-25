import { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link, Check } from 'lucide-react';
import { BlogPost } from './data';

interface ShareButtonsProps {
  post: BlogPost;
}

export default function ShareButtons({ post }: ShareButtonsProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/blog/${post.id}`;
  const shareText = `Check out this article: ${post.title}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-all duration-200"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>

      {showShareMenu && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10 min-w-[200px]">
          <div className="space-y-1">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link className="w-4 h-4" />}
              <span className={copied ? 'text-green-600' : ''}>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}