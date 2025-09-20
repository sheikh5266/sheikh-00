import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { LazyImage } from '@/components/ui/LazyImage';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  slug: string;
  tags: string[];
}

interface BlogSectionProps {
  isHomepage?: boolean;
}

export const BlogSection = ({ isHomepage = false }: BlogSectionProps) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'Video Editing', 'Case Studies'];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Optimize Meta Ads for Maximum ROI',
      excerpt: 'Learn the essential strategies to improve your Facebook and Instagram advertising performance and reduce cost per acquisition.',
      category: 'Digital Marketing',
      readTime: '8 min read',
      publishDate: '2024-03-15',
      author: 'Sheikh Momin',
      image: '/api/placeholder/400/250',
      slug: 'optimize-meta-ads-roi',
      tags: ['Meta Ads', 'ROI', 'Digital Marketing']
    },
    {
      id: '2',
      title: 'Building Responsive Websites with Modern CSS',
      excerpt: 'Explore the latest CSS techniques and best practices for creating beautiful, responsive websites that work on all devices.',
      category: 'Web Development',
      readTime: '12 min read',
      publishDate: '2024-03-10',
      author: 'Sheikh Momin',
      image: '/api/placeholder/400/250',
      slug: 'responsive-css-techniques',
      tags: ['CSS', 'Responsive Design', 'Web Development']
    },
    {
      id: '3',
      title: 'Video Editing Workflow for Social Media',
      excerpt: 'Step-by-step guide to creating engaging short-form content that performs well on Instagram, TikTok, and YouTube.',
      category: 'Video Editing',
      readTime: '10 min read',
      publishDate: '2024-03-05',
      author: 'Sheikh Momin',
      image: '/api/placeholder/400/250',
      slug: 'social-media-video-workflow',
      tags: ['Video Editing', 'Social Media', 'Content Creation']
    },
    {
      id: '4',
      title: 'E-commerce Store Success Story: 300% Revenue Increase',
      excerpt: 'How we transformed a struggling online store into a profitable business through strategic digital marketing and web optimization.',
      category: 'Case Studies',
      readTime: '15 min read',
      publishDate: '2024-02-28',
      author: 'Sheikh Momin',
      image: '/api/placeholder/400/250',
      slug: 'ecommerce-success-case-study',
      tags: ['Case Study', 'E-commerce', 'Success Story']
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = isHomepage ? filteredPosts.slice(0, 3) : filteredPosts;

  const handleReadMore = (slug: string) => {
    // Track blog post click
    if (window.analytics?.trackEvent) {
      window.analytics.trackEvent('blog_post_click', { slug });
    }
    
    navigate(`/blog/${slug}`);
  };

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            Stay updated with the latest trends, tips, and insights in digital marketing and web development
          </p>
        </div>

        {/* Category Filter - Only show on full blog page */}
        {!isHomepage && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-mint text-white shadow-md'
                    : 'bg-white text-charcoal hover:bg-mint hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedPosts.map((post, index) => (
            <article 
              key={post.id}
              className="portfolio-card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-mint text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-mint transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center space-x-1">
                      <Tag className="h-3 w-3 text-mint" />
                      <span className="text-xs text-gray-500">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleReadMore(post.slug)}
                    className="text-mint hover:text-mint-dark group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button for Homepage */}
        {isHomepage && (
          <div className="text-center animate-fade-in-up">
            <Button 
              className="btn-hero group relative overflow-hidden"
              onClick={() => navigate('/blog')}
            >
              <span className="relative z-10 flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};