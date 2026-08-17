import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';

const blogPosts = [
  {
    id: 1,
    title: "How Municipalities are Using Real-Time Data to Fix Potholes 50% Faster",
    category: "Civic Tech",
    date: "Aug 14, 2026",
    excerpt: "Discover how smart ticket routing and geographic clustering are helping public works departments reduce response times across major cities.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Role of Citizen Verification in Building Public Trust",
    category: "Governance",
    date: "Jul 28, 2026",
    excerpt: "Closing the feedback loop with citizen verification photos ensures transparency and prevents prematurely marked closed issues.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SLA Benchmarks for Urban Infrastructure: A 2026 Report",
    category: "Research",
    date: "Jul 10, 2026",
    excerpt: "An analysis of 120+ municipal wards comparing average resolution times for water leaks, streetlights, and sanitation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      <PageHeader
        title="CivicTrack Insights & News"
        subtitle="Articles and reports on modern civic infrastructure, municipal technology, and community governance."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog & Articles' },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} hoverable className="p-0 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg">{post.category}</span>
                  <span className="text-gray-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <span className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">Read Full Article →</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
