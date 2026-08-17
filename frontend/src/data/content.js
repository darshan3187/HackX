// Centralized Content Data for CivicTrack Landing Page
import { SITE_CONFIG } from '../constants/siteConfig';

export const heroContent = {
  eyebrow: "Independent Civic Technology",
  headline: {
    line1: "Report Issues.",
    line2: "Track Resolution.",
    line3: "Build Better Together.",
  },
  description: "CivicTrack is an independent digital platform that helps citizens report civic issues, track progress transparently, and foster accountability in their communities.",
  ctaPrimary: "Report an Issue",
  ctaSecondary: "View Live Dashboard",
  badgeText: "Independent Civic Technology Project",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  floatingCards: [
    { title: "Pothole Report", status: "Under Review", variant: "blue" },
    { title: "Street Light Out", status: "Resolved", variant: "emerald" },
    { title: "Garbage Dump", status: "In Progress", variant: "purple" },
  ]
};

export const metricsData = [
  { label: "End-to-End Tracking", description: "Track issues from submission to resolution", icon: "FileText" },
  { label: "Real-Time Updates", description: "Live status visibility for lodged reports", icon: "TrendingUp" },
  { label: "Transparent Platform", description: "Open public issue feed & status logs", icon: "Users" },
  { label: "Citizen-Focused", description: "Designed for individuals & neighborhoods", icon: "Building2" },
];

export const featuresData = {
  eyebrow: "WHY CIVICTRACK?",
  title: "Core capabilities for transparent civic tracking",
  items: [
    {
      id: "tracking",
      title: "Real-time Status Tracking",
      description: "Follow your reported issue in real-time with status updates at every stage of the resolution process.",
      linkText: "Learn more",
      variant: "blue",
    },
    {
      id: "process",
      title: "Transparent Process",
      description: "Clear visibility into issue progress, timestamps, and assigned categories without hidden steps.",
      linkText: "Learn more",
      variant: "emerald",
    },
    {
      id: "resolution",
      title: "Photo Proof Support",
      description: "Attach photo evidence to reports and view completion photos uploaded upon issue resolution.",
      linkText: "Learn more",
      variant: "purple",
    },
  ]
};

export const howItWorksData = {
  eyebrow: "HOW IT WORKS",
  title: "Simple steps for transparent reporting",
  steps: [
    {
      number: "01",
      title: "Report Issue",
      description: "Submit a report with location details, description, and optional photo proof.",
      variant: "blue",
    },
    {
      number: "02",
      title: "Track Progress",
      description: "Monitor real-time updates as your report moves through evaluation and work stages.",
      variant: "emerald",
    },
    {
      number: "03",
      title: "Review Completion",
      description: "Inspect resolution photos and verify that the issue has been addressed.",
      variant: "purple",
    },
    {
      number: "04",
      title: "Stronger Community",
      description: "Your participation helps build cleaner, safer, and more transparent neighborhoods.",
      variant: "amber",
    },
  ]
};

export const dashboardShowcaseData = {
  eyebrow: "OPEN. TRANSPARENT. ACCESSIBLE.",
  title: "Clear issue tracking at a glance",
  description: "CivicTrack provides a simple interface for citizens to submit, track, and monitor public infrastructure issues transparently.",
  bullets: [
    "Geotagged issue reporting",
    "Real-time status updates",
    "Clean application dashboard",
  ],
  previewNote: "UI Feature Preview (Application Demo)",
};

export const platformGuaranteesData = {
  eyebrow: "OUR COMMITMENT",
  title: "Built for transparency. Built for citizens.",
  description: "CivicTrack is grounded in core principles of open governance, factual communication, and citizen empowerment.",
  principles: [
    {
      title: "Independent Platform",
      description: "CivicTrack is an independent project created by solo developer Darshan Rajgor to make civic reporting clear and accessible.",
      icon: "ShieldCheck",
    },
    {
      title: "Complete Openness",
      description: "No hidden statuses or black-box workflows. Issue progress is displayed clearly for citizens.",
      icon: "FileText",
    },
    {
      title: "Factually Honest",
      description: "We communicate what our software actually does, avoiding fabricated statistics or fake claims.",
      icon: "CheckCircle2",
    },
  ]
};

export const ctaContent = {
  title: "Experience transparent civic tracking.",
  subtitle: "Report issues. Track progress. Help build better neighborhoods.",
  buttonText: "Get Started Free",
};

export const footerData = {
  tagline: SITE_CONFIG.tagline,
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About Us", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Insights Hub", href: "/insights" },
    { name: "Civic Issue Reporting", href: "/insights/category/civic-issue-reporting" },
    { name: "Civic Technology", href: "/insights/category/civic-technology" },
    { name: "Smart Cities", href: "/insights/category/smart-cities" },
    { name: "Municipal Services", href: "/insights/category/municipal-services" },
  ],
  copyright: SITE_CONFIG.copyright,
  disclaimer: SITE_CONFIG.disclaimer,
};
