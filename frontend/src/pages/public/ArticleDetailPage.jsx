import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ShieldCheck, CheckCircle2, User, ChevronRight, Share2, Sparkles } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import TableOfContents from '../../components/insights/TableOfContents';
import ShareBar from '../../components/insights/ShareBar';
import FaqSection from '../../components/insights/FaqSection';
import ArticleCard from '../../components/insights/ArticleCard';
import { getArticleBySlug, getRelatedArticles } from '../../data/articlesData';
import { updateSeoMetadata } from '../../utils/seoHelper';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = useMemo(() => getArticleBySlug(slug), [slug]);
  const relatedArticles = useMemo(() => getRelatedArticles(slug, 3), [slug]);

  useEffect(() => {
    if (article) {
      updateSeoMetadata({
        title: article.metaTitle || article.title,
        description: article.metaDescription || article.excerpt,
        canonicalUrl: `https://civictrack.example/insights/${article.slug}`,
        ogImage: article.image,
        ogType: 'article',
        articleData: article,
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: article.category, href: `/insights/category/${article.categorySlug}` },
          { label: article.title },
        ],
        faqs: article.faqs || [],
      });
      // Scroll to top on page load
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6 font-sans">
        <h1 className="text-3xl font-black text-gray-900">Article Not Found</h1>
        <p className="text-sm text-gray-500 font-medium">
          The article you are looking for may have been moved, renamed, or does not exist.
        </p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition-colors shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Insights Hub</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center flex-wrap gap-2 text-xs font-semibold text-gray-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/insights" className="hover:text-blue-600 transition-colors">Insights</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/insights/category/${article.categorySlug}`} className="hover:text-blue-600 transition-colors">
          {article.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
        <span className="text-gray-900 font-bold truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Article Header & Title */}
      <header className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            to={`/insights/category/${article.categorySlug}`}
            className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-extrabold px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
          >
            {article.category}
          </Link>
          {article.isPillar && (
            <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-extrabold px-3 py-1.5 rounded-full">
              Pillar Resource
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
          {article.title}
        </h1>

        {/* Short Executive Summary Box */}
        {article.summary && (
          <div className="p-5 sm:p-6 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-2xl text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            <strong className="text-blue-900 font-extrabold block mb-1">Executive Summary</strong>
            {article.summary}
          </div>
        )}

        {/* Author & Publication Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-gray-100 py-4 text-xs font-semibold text-gray-600">
          <div className="flex items-center gap-3">
            <img
              src={article.author?.avatar}
              alt={article.author?.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-xs"
            />
            <div>
              <h3 className="font-extrabold text-gray-900 text-sm">{article.author?.name}</h3>
              <p className="text-gray-500 text-[11px]">{article.author?.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              Published: {article.publishedAt}
            </span>
            {article.updatedAt && (
              <span className="hidden sm:flex items-center gap-1 text-gray-400">
                (Updated: {article.updatedAt})
              </span>
            )}
            <span className="flex items-center gap-1.5 font-bold text-gray-700">
              <Clock className="w-4 h-4 text-blue-600" />
              {article.readingTime}
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl space-y-2">
        <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-md">
          <img
            src={article.image}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover"
          />
        </div>
        {article.imageAlt && (
          <p className="text-center text-[11px] text-gray-400 font-medium italic">
            {article.imageAlt}
          </p>
        )}
      </div>

      {/* Key Takeaways Box */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="max-w-4xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 font-extrabold text-emerald-900 text-base">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h2>Key Takeaways for Citizens & Municipalities</h2>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content Layout with Sticky TOC */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Article Body (720px - 800px width on desktop) */}
        <main className="lg:col-span-8 space-y-10 max-w-[800px]">
          {article.sections?.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight border-b border-gray-100 pb-3">
                {section.heading}
              </h2>

              <div className="prose prose-blue max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                {section.content.split('\n\n').map((paragraph, pIdx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Render blockquotes
                  if (trimmed.startsWith('>')) {
                    return (
                      <blockquote key={pIdx} className="p-4 bg-gray-50 border-l-4 border-blue-600 rounded-r-xl italic text-gray-600 text-sm">
                        {trimmed.replace(/^>\s*/, '')}
                      </blockquote>
                    );
                  }

                  // Render markdown table approximation
                  if (trimmed.includes('|')) {
                    const rows = trimmed.split('\n').filter(r => r.trim() && !r.includes(':---'));
                    if (rows.length > 0) {
                      return (
                        <div key={pIdx} className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-xs bg-white">
                          <table className="w-full text-left text-xs font-medium text-gray-700">
                            <thead>
                              <tr className="bg-gray-50 border-b border-gray-200 text-gray-900 font-bold">
                                {rows[0].split('|').filter(Boolean).map((cell, cIdx) => (
                                  <th key={cIdx} className="p-3.5">{cell.trim()}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {rows.slice(1).map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-gray-50/60">
                                  {row.split('|').filter(Boolean).map((cell, cIdx) => (
                                    <td key={cIdx} className="p-3.5">{cell.trim()}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  }

                  // Render list items
                  if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                    const items = trimmed.split('\n');
                    return (
                      <ul key={pIdx} className="space-y-2 my-4 pl-5 list-disc text-gray-700">
                        {items.map((it, iIdx) => (
                          <li key={iIdx} className="leading-relaxed">
                            {it.replace(/^[-\d.]+\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={pIdx} className="leading-relaxed text-gray-700">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Callout box if attached */}
              {section.callout && (
                <div className="p-5 bg-blue-50/80 border border-blue-200 rounded-2xl space-y-1 text-xs sm:text-sm">
                  <strong className="font-extrabold text-blue-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    {section.callout.title}
                  </strong>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Social Share Section */}
          <ShareBar title={article.title} url={`https://civictrack.example/insights/${article.slug}`} />

          {/* Contextual CivicTrack Product Connection CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl my-10">
            <div className="space-y-3">
              <span className="bg-blue-500/30 text-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Transparent Civic Action
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Ready to transform civic reporting in your city?
              </h3>
              <p className="text-sm text-blue-100 font-medium leading-relaxed max-w-xl">
                CivicTrack provides a centralized, geotagged platform for citizens to lodge infrastructure complaints and track real-time resolution proof.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="bg-white text-blue-900 font-extrabold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs shadow-md"
              >
                Get Started Free →
              </Link>
              <Link
                to="/dashboard"
                className="bg-blue-800/80 text-white border border-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all text-xs"
              >
                View Live Dashboard
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          {article.faqs && article.faqs.length > 0 && <FaqSection faqs={article.faqs} />}
        </main>

        {/* Desktop Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block lg:col-span-4">
          <TableOfContents items={article.tableOfContents} />
        </aside>
      </div>

      {/* Related Articles Section ("Continue Reading") */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t border-gray-100 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Continue Reading Related Insights
            </h2>
            <Link to="/insights" className="text-xs font-bold text-blue-600 hover:underline">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default ArticleDetailPage;
