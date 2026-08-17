import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Mail, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Building2, Users, Globe, FileText } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import ArticleCard from '../../components/insights/ArticleCard';
import { articles, categories, getFeaturedArticle } from '../../data/articlesData';
import { updateSeoMetadata } from '../../utils/seoHelper';

const categoryIcons = {
  'civic-issue-reporting': FileText,
  'civic-technology': Cpu,
  'municipal-services': Building2,
  'community-engagement': Users,
  'smart-cities': Globe,
  'government-transparency': ShieldCheck,
};

const InsightsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    updateSeoMetadata({
      title: 'CivicTrack Insights & Knowledge Base',
      description: 'Practical insights on civic technology, community engagement, public services, municipal accountability, and smart city infrastructure.',
      canonicalUrl: 'https://civictrack.example/insights',
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Insights' },
      ],
    });
  }, []);

  const featuredArticle = useMemo(() => getFeaturedArticle(), []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || article.categorySlug === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      }
      return b.title.localeCompare(a.title);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const pillarArticles = useMemo(() => articles.filter((a) => a.isPillar), []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 font-sans">
      {/* Page Header */}
      <PageHeader
        title="CivicTrack Insights"
        subtitle="Practical insights on civic technology, community engagement, public services, and building better communities."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights' },
        ]}
      />

      {/* Search & Category Filter Header Bar */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-400/30">
            Resource & Knowledge Hub
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Search articles, municipal guides & civic tech benchmarks
          </h2>
          <p className="text-sm sm:text-base text-blue-100/80 font-medium">
            Explore research, step-by-step reporting guides, and open governance reports.
          </p>
        </div>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or guide title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-400/40 shadow-inner"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-2xl bg-blue-800/80 text-white border border-blue-700 text-sm font-bold focus:outline-none cursor-pointer"
            >
              <option value="latest">Sort: Latest</option>
              <option value="popular">Sort: Featured</option>
            </select>
          </div>
        </div>

        {/* Topic Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-blue-800/60">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
            }`}
          >
            All Articles ({articles.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article Section (Only if no specific search query active) */}
      {selectedCategory === 'all' && !searchQuery && featuredArticle && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span>Featured Evergreen Guide</span>
            </h2>
          </div>
          <ArticleCard article={featuredArticle} featured />
        </section>
      )}

      {/* Articles Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              {selectedCategory === 'all' ? 'Latest Articles' : 'Topic Articles'}
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Showing {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
            <p className="text-base text-gray-600 font-bold">No articles found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Clear filters and view all articles
            </button>
          </div>
        )}
      </section>

      {/* Popular Topics Section */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Explore Topic Clusters</h2>
          <p className="text-sm text-gray-500 font-medium">
            Browse our organized knowledge base by municipal discipline and civic focus area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = categoryIcons[cat.slug] || FileText;
            return (
              <Link key={cat.slug} to={`/insights/category/${cat.slug}`} className="group">
                <Card hoverable className="p-6 h-full border border-gray-100/80 flex flex-col justify-between space-y-4 group-hover:border-blue-200 transition-colors">
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${cat.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Browse Cluster →</span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter & CivicTrack Product CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Stay Informed
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Build a better community with transparent civic insights
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed max-w-xl">
              Get practical municipal guides, smart city research, and civic action updates delivered directly to your inbox.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white text-gray-900 rounded-2xl p-6 shadow-lg space-y-4">
            <h3 className="text-base font-extrabold">Subscribe to CivicTrack Insights</h3>
            {subscribed ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! You are now subscribed to CivicTrack Insights updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/20"
                >
                  Subscribe to Insights Updates
                </button>
              </form>
            )}
            <p className="text-[11px] text-gray-400 font-medium text-center">
              No spam. Unsubscribe anytime. View our privacy commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
