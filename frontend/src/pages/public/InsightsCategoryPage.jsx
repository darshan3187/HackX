import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, ShieldCheck, FileText, Cpu, Building2, Users, Globe } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import ArticleCard from '../../components/insights/ArticleCard';
import { categories, getArticlesByCategory } from '../../data/articlesData';
import { updateSeoMetadata } from '../../utils/seoHelper';

const categoryIcons = {
  'civic-issue-reporting': FileText,
  'civic-technology': Cpu,
  'municipal-services': Building2,
  'community-engagement': Users,
  'smart-cities': Globe,
  'government-transparency': ShieldCheck,
};

const InsightsCategoryPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const category = useMemo(() => {
    return categories.find((c) => c.slug === categorySlug);
  }, [categorySlug]);

  const categoryArticles = useMemo(() => {
    return getArticlesByCategory(categorySlug);
  }, [categorySlug]);

  useEffect(() => {
    if (category) {
      updateSeoMetadata({
        title: `${category.name} Articles & Guides`,
        description: category.description,
        canonicalUrl: `https://civictrack.example/insights/category/${category.slug}`,
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: category.name },
        ],
      });
    }
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4 font-sans">
        <h2 className="text-2xl font-bold text-gray-900">Category Not Found</h2>
        <p className="text-sm text-gray-500">The topic category you requested does not exist.</p>
        <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Insights Hub
        </Link>
      </div>
    );
  }

  const IconComponent = categoryIcons[category.slug] || FileText;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      {/* Page Header */}
      <PageHeader
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: category.name },
        ]}
      />

      {/* Category Overview Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-100 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${category.color}`}>
            <IconComponent className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Topic Cluster</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">{category.name} Knowledge Hub</h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Topics</span>
        </Link>
      </div>

      {/* Articles Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Articles in {category.name} ({categoryArticles.length})
          </h3>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100 space-y-3">
            <p className="text-sm font-bold text-gray-600">No articles currently published in this category.</p>
            <Link to="/insights" className="text-xs font-bold text-blue-600 hover:underline">
              Explore other Insights articles
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default InsightsCategoryPage;
