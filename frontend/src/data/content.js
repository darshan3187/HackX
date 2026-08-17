// Centralized Content Data for CivicTrack Landing Page

export const heroContent = {
  eyebrow: "Smarter Communities. Stronger Cities.",
  headline: {
    line1: "Report Issues.",
    line2: "Track Resolution.",
    line3: "Build Better Together.",
  },
  description: "CivicTrack is a transparent digital platform that helps citizens report civic issues, track real-time progress, and ensure accountability in their communities.",
  ctaPrimary: "Report an Issue",
  ctaSecondary: "View Live Dashboard",
  ratingScore: "4.8/5",
  ratingText: "Trusted by 10,000+ active citizens",
  avatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  ],
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  floatingCards: [
    { title: "Pothole on 5th Street", status: "Under Review", variant: "blue" },
    { title: "Street Light Out", status: "Resolved", variant: "emerald" },
    { title: "Garbage Not Collected", status: "In Progress", variant: "purple" },
  ]
};

export const metricsData = [
  { value: 1247, label: "Issues Resolved", format: "number", icon: "FileText" },
  { value: 3.2, label: "Days Avg. Response", format: "decimal", icon: "TrendingUp" },
  { value: 98, label: "Citizen Satisfaction", format: "percent", icon: "Users" },
  { value: 120, label: "Cities Empowered", format: "plus", icon: "Building2" },
];

export const featuresData = {
  eyebrow: "WHY CIVICTRACK?",
  title: "Powerful features for transparent governance",
  items: [
    {
      id: "tracking",
      title: "Real-time Tracking",
      description: "Track your complaint in real-time with live updates at every step of the resolution process.",
      linkText: "Learn more",
      variant: "blue",
    },
    {
      id: "process",
      title: "Transparent Process",
      description: "Complete visibility into the resolution process with direct access to assigned municipal departments.",
      linkText: "Learn more",
      variant: "emerald",
    },
    {
      id: "resolution",
      title: "Verified Resolution",
      description: "Photo proof and citizen feedback ensure strict accountability before issues are marked complete.",
      linkText: "Learn more",
      variant: "purple",
    },
  ]
};

export const howItWorksData = {
  eyebrow: "HOW IT WORKS",
  title: "Simple steps. Real impact.",
  steps: [
    {
      number: "01",
      title: "Report Issue",
      description: "Submit your civic complaint with photos and location details instantly.",
      variant: "blue",
    },
    {
      number: "02",
      title: "Track Progress",
      description: "Monitor real-time updates as your issue moves towards resolution.",
      variant: "emerald",
    },
    {
      number: "03",
      title: "Verify & Rate",
      description: "Confirm resolution and rate the quality of service provided.",
      variant: "purple",
    },
    {
      number: "04",
      title: "Stronger Community",
      description: "Your feedback helps build accountable and better communities.",
      variant: "amber",
    },
  ]
};

export const dashboardShowcaseData = {
  eyebrow: "OPEN. ACCOUNTABLE. EFFECTIVE.",
  title: "Your voice drives change.",
  description: "CivicTrack connects citizens and local authorities to create cleaner, safer, and better neighborhoods for everyone.",
  bullets: [
    "Easy issue reporting",
    "Real-time status updates",
    "Data-driven insights",
  ],
  stats: {
    resolved: { count: 724, change: "+2% this month" },
    inProgress: { count: 312, change: "+5% this month" },
    underReview: { count: 211, change: "-3% this month" },
    total: 1247
  }
};

export const testimonialsData = {
  eyebrow: "WHAT CITIZENS SAY",
  title: "Trusted by communities that care.",
  items: [
    {
      quote: "CivicTrack made it so easy to report and track issues in my area. Love the transparency!",
      name: "Priya Sharma",
      city: "Gurugram",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "Finally, a platform that actually keeps us updated. Our city is changing for the better.",
      name: "Ravi Patel",
      city: "Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The photo updates and real-time tracking build so much trust between citizens and authorities.",
      name: "Neha Verma",
      city: "Pune",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ]
};

export const ctaContent = {
  title: "Be the change your city needs.",
  subtitle: "Report issues. Track progress. Build a better tomorrow.",
  buttonText: "Get Started for Free",
};

export const footerData = {
  tagline: "Empowering citizens. Building better communities.",
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About Us", href: "#about" },
    { name: "Blog", href: "#blog" },
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  copyright: "© 2026 CivicTrack. All rights reserved.",
};
