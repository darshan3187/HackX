import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import Card from '../ui/Card';

const ArticleCard = ({ article, featured = false }) => {
  if (!article) return null;

  if (featured) {
    return (
      <Card hoverable className="p-0 overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Column */}
          <div className="lg:col-span-7 relative overflow-hidden bg-gray-100 aspect-video lg:aspect-auto min-h-[280px]">
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                Featured Guide
              </span>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold border border-blue-100">
                  {article.category}
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readingTime}
                </span>
              </div>

              <Link to={`/insights/${article.slug}`} className="block group">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={article.author?.avatar}
                  alt={article.author?.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{article.author?.name}</h4>
                  <p className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.publishedAt}
                  </p>
                </div>
              </div>

              <Link
                to={`/insights/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 group/btn"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card hoverable className="p-0 overflow-hidden flex flex-col justify-between group border border-gray-100/90 shadow-xs hover:shadow-lg transition-all duration-300">
      <div>
        <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
          <img
            src={article.image}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-md text-blue-600 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-gray-100 shadow-xs">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {article.readingTime}
            </span>
          </div>

          <Link to={`/insights/${article.slug}`} className="block">
            <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <img
            src={article.author?.avatar}
            alt={article.author?.name}
            className="w-6 h-6 rounded-full object-cover border border-gray-200"
          />
          <span className="font-semibold text-gray-700 text-[11px]">{article.author?.name}</span>
        </div>

        <Link
          to={`/insights/${article.slug}`}
          className="font-extrabold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1 hover:underline cursor-pointer"
        >
          Read Article →
        </Link>
      </div>
    </Card>
  );
};

export default ArticleCard;
