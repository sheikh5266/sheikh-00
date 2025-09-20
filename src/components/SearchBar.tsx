import { useState, useRef, useEffect } from 'react';
import { Search, X, Hash, FileText, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchResult {
  id: string;
  title: string;
  type: 'service' | 'portfolio' | 'blog' | 'page';
  url: string;
  excerpt?: string;
  icon: any;
}

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in real implementation, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Meta Ad Management',
      type: 'service',
      url: '/services#meta-ads',
      excerpt: 'Campaign setup, targeting & optimization',
      icon: Briefcase
    },
    {
      id: '2',
      title: 'Web Development',
      type: 'service',
      url: '/services#web-dev',
      excerpt: 'Single-page sites, portfolio sites, business sites',
      icon: Briefcase
    },
    {
      id: '3',
      title: 'Video Editing Portfolio',
      type: 'portfolio',
      url: '/portfolio#video',
      excerpt: 'Professional video editing projects',
      icon: FileText
    },
    {
      id: '4',
      title: 'How to Optimize Meta Ads',
      type: 'blog',
      url: '/blog/optimize-meta-ads-roi',
      excerpt: 'Learn strategies to improve your advertising performance',
      icon: Hash
    },
    {
      id: '5',
      title: 'About Sheikh Momin',
      type: 'page',
      url: '/#about',
      excerpt: 'Learn more about my background and experience',
      icon: User
    }
  ];

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt?.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.getElementById(url.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (url.startsWith('/')) {
      window.location.href = url;
    }
    
    setIsOpen(false);
    setQuery('');
    
    // Track search result click
    if (window.analytics?.trackEvent) {
      window.analytics.trackEvent('search_result_click', { url, query });
    }
  };

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 dark:bg-gray-800/80 dark:border-gray-700/20 dark:hover:bg-gray-800/90 transition-all duration-300"
      >
        <Search className="h-4 w-4 mr-2" />
        Search
        <span className="ml-2 text-xs opacity-60">⌘K</span>
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="flex items-start justify-center pt-20 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl animate-scale-in">
          {/* Search Input */}
          <div className="flex items-center p-4 border-b">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, portfolio, blog posts..."
              className="flex-1 border-0 focus:ring-0 text-lg"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.url)}
                    className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-mint/10 rounded-lg flex items-center justify-center group-hover:bg-mint/20 transition-colors">
                      <result.icon className="h-4 w-4 text-mint" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-charcoal group-hover:text-mint transition-colors">
                        {result.title}
                      </div>
                      {result.excerpt && (
                        <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {result.excerpt}
                        </div>
                      )}
                      <div className="text-xs text-gray-400 mt-1 capitalize">
                        {result.type}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-40" />
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1">Try different keywords or browse our services.</p>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-40" />
                <p>Start typing to search...</p>
                <p className="text-sm mt-1">Search services, portfolio, or blog posts</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
            <span>Press ESC to close</span>
            <span>⌘K to search</span>
          </div>
        </div>
      </div>
    </div>
  );
};