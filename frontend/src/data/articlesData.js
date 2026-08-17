// CivicTrack Insights & Knowledge Base Content Model

export const categories = [
  {
    id: "civic-issue-reporting",
    name: "Civic Issue Reporting",
    slug: "civic-issue-reporting",
    description: "Practical guides and best practices for citizens to document, report, and follow up on municipal issues.",
    icon: "FileText",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    articleCount: 3,
  },
  {
    id: "civic-technology",
    name: "Civic Technology",
    slug: "civic-technology",
    description: "Insights into modern digital platforms, issue status tracking, and technological innovation in community governance.",
    icon: "Cpu",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-700",
    articleCount: 2,
  },
  {
    id: "municipal-services",
    name: "Municipal Services",
    slug: "municipal-services",
    description: "Understanding urban infrastructure, public works, sanitation, road safety, and service level targets.",
    icon: "Building2",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700",
    articleCount: 2,
  },
  {
    id: "community-engagement",
    name: "Community Engagement",
    slug: "community-engagement",
    description: "Strategies for neighborhood collaboration, citizen action, and fostering constructive civic participation.",
    icon: "Users",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
    articleCount: 2,
  },
  {
    id: "smart-cities",
    name: "Smart Cities",
    slug: "smart-cities",
    description: "Data-driven urban planning, geospatial tracking, and the future of connected communities.",
    icon: "Globe",
    color: "bg-sky-50 text-sky-600 border-sky-200",
    badgeColor: "bg-sky-100 text-sky-700",
    articleCount: 2,
  },
  {
    id: "government-transparency",
    name: "Government Transparency",
    slug: "government-transparency",
    description: "Promoting open status tracking, clear complaint workflows, and public trust in community infrastructure.",
    icon: "ShieldCheck",
    color: "bg-purple-50 text-purple-600 border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    articleCount: 2,
  },
];

export const authors = {
  darshan: {
    name: "Darshan Rajgor",
    role: "Solo Developer & Creator of CivicTrack",
    bio: "Darshan is the developer behind CivicTrack, focusing on open civic technology, transparent issue tracking, and digital community tools.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
};

export const articles = [
  {
    slug: "civic-issue-reporting-guide",
    isFeatured: true,
    isPillar: true,
    title: "What Is Civic Issue Reporting? A Complete Guide to Digital Citizen Complaints",
    metaTitle: "What Is Civic Issue Reporting? Complete Guide (2026)",
    metaDescription: "Learn how modern digital civic issue reporting works, why citizen participation matters, and how transparent tracking improves problem resolution.",
    category: "Civic Issue Reporting",
    categorySlug: "civic-issue-reporting",
    author: authors.darshan,
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-15",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Civic issue reporting mobile platform used by citizens in an urban neighborhood",
    excerpt: "Discover how structured digital issue reporting clarifies complaint workflows, eliminates communication gaps, and empowers citizens to document local infrastructure needs.",
    
    primaryKeyword: "civic issue reporting",
    secondaryKeywords: ["report civic issues", "civic complaint system", "digital grievance reporting", "municipal complaint tracking"],
    
    summary: "Civic issue reporting is the process through which residents identify, document, and submit public infrastructure problems in their communities. This guide explains how digital grievance systems operate, key details required for clear resolution, and how platforms like CivicTrack bring transparency to issue tracking.",
    
    keyTakeaways: [
      "Digital civic issue reporting structures complaint details with geotagged locations and photos.",
      "Clear documentation—including precise GPS coordinates, crisp photos, and descriptive categories—helps eliminate location ambiguity for repair teams.",
      "Real-time progress tracking allows residents to follow their report status transparently.",
      "Platforms like CivicTrack enable photo uploads when issues are reported and completed."
    ],
    
    tableOfContents: [
      { id: "what-is-civic-issue-reporting", label: "01. What Is Civic Issue Reporting?" },
      { id: "why-traditional-systems-fail", label: "02. Common Challenges with Traditional Reporting" },
      { id: "how-digital-reporting-works", label: "03. How Digital Issue Tracking Works" },
      { id: "essential-elements-of-complaint", label: "04. Essential Elements of an Effective Report" },
      { id: "role-of-verification-and-slas", label: "05. Status Visibility & Service Target Concepts" },
      { id: "how-citizens-can-drive-change", label: "06. How Citizens Can Drive Local Impact" },
      { id: "frequently-asked-questions", label: "07. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "what-is-civic-issue-reporting",
        heading: "What Is Civic Issue Reporting?",
        content: `
Civic issue reporting refers to the process through which residents notify authorities or community managers about physical hazards, infrastructure decay, or public service issues in their neighborhoods. 

Common examples include:
- Road hazards such as potholes, damaged pavement, or broken curbs
- Electrical infrastructure issues like non-functioning streetlights or exposed wiring
- Sanitation problems including uncollected waste, overflowing bins, or illegal dumping
- Water supply leaks, clogged drainage pipes, or stagnant water
- Parks damage such as broken bench fixtures or fallen tree branches

Historically, reporting these problems required in-person visits to local ward offices or calling manual switchboards. Modern digital platforms organize this workflow into a transparent, structured process accessible via web dashboards and mobile devices.
        `,
      },
      {
        id: "why-traditional-systems-fail",
        heading: "Common Challenges with Traditional Complaint Methods",
        content: `
Many paper-based or traditional phone registers suffer from three common issues:

1. **Location Ambiguity**: Describing a problem verbally (e.g. "near the main market") often leaves field workers searching across large areas.
2. **Limited Status Visibility**: Once a phone complaint is submitted, residents rarely receive updates on whether the issue has been inspected or assigned.
3. **Manual Sorting Delays**: Administrative staff must manually read and forward reports to the responsible department, which can create unnecessary delays before work begins.
        `,
      },
      {
        id: "how-digital-reporting-works",
        heading: "How Digital Issue Tracking Systems Work",
        content: `
Digital civic platforms organize complaints using a standardized digital workflow:

\`\`\`text
[Citizen Submits Geotagged Report] 
           ↓
[Category & Department Routing] 
           ↓
[Work Assignment & Evaluation] 
           ↓
[Photo-Verified Resolution Status]
\`\`\`

When a resident submits an issue through an application like CivicTrack:
- **Location Pinning**: GPS coordinates record the exact location on an interactive map.
- **Visual Context**: Attached photos help evaluate the issue severity visually.
- **Department Categorization**: Selecting a category routes the report to the appropriate service division (e.g., Roads, Electrical, or Sanitation).
- **Status Updates**: The submitter can log in to view status milestones ("Under Review", "In Progress", "Resolved").
        `,
        callout: {
          type: "tip",
          title: "CivicTrack Design Goal",
          text: "CivicTrack is an independent project built by Darshan Rajgor to make civic issue tracking open, structured, and transparent for citizens."
        }
      },
      {
        id: "essential-elements-of-complaint",
        heading: "Essential Elements of an Effective Civic Report",
        content: `
To ensure a reported issue can be evaluated effectively, consider these best practices:

| Element | Description | Practical Benefit |
| :--- | :--- | :--- |
| **Location** | Exact map coordinates + nearby landmark | Eliminates search time for field workers |
| **Photo Quality** | 1 wide context shot + 1 detail shot | Helps assess required materials and team size |
| **Description** | Clear statement of hazard (e.g., "Deep pothole in right lane") | Assists in setting accurate work priority |
| **Category** | Selected specific sub-category | Ensures direct routing to the responsible team |
        `,
      },
      {
        id: "role-of-verification-and-slas",
        heading: "Status Visibility & Service Target Concepts",
        content: `
### Service Level Targets
Service Level Agreements (SLAs) represent target timelines established by public works departments for different types of infrastructure repairs:
- **Emergency Safety Hazards**: Target evaluation within hours
- **Streetlight / Electrical Outages**: Target repair within 24 to 48 hours
- **Road Maintenance**: Target scheduling within 48 to 72 hours

### Transparent Status Logging
In CivicTrack, issue status transitions are recorded in the application log. When work is completed, resolution photos can be uploaded so citizens can view proof of repair directly within the platform.
        `,
      },
      {
        id: "how-citizens-can-drive-change",
        heading: "How Citizens Can Drive Sustained Community Impact",
        content: `
Individual reporting helps identify specific problems, while collective engagement highlights neighborhood trends. When residents regularly document issues, public data feeds reveal infrastructure areas that require long-term maintenance.

To explore CivicTrack's reporting features:
1. Learn more about [Reporting Potholes Effectively](/insights/how-to-report-a-pothole-effectively).
2. Read about [Real-Time Issue Tracking](/insights/real-time-issue-tracking-transparency).
3. Try the interactive [CivicTrack Application Dashboard](/dashboard).
        `,
      },
    ],

    faqs: [
      {
        question: "Is CivicTrack an official government agency?",
        answer: "No. CivicTrack is an independent civic technology project built by Darshan Rajgor. It is not affiliated with or operated by any government body unless an official integration is explicitly stated."
      },
      {
        question: "What is the difference between civic issue reporting and emergency response?",
        answer: "Civic issue reporting handles non-emergency public infrastructure maintenance such as broken streetlights, road defects, or garbage accumulation. For life-threatening emergencies, dial your local emergency services (100 / 112 / 911)."
      },
      {
        question: "Can I report an issue anonymously on CivicTrack?",
        answer: "Yes. CivicTrack allows submissions while capturing necessary location details. Creating an account lets you track status updates and view completed resolution logs."
      }
    ],

    relatedSlugs: [
      "how-to-report-a-pothole-effectively",
      "how-to-report-broken-streetlight",
      "real-time-issue-tracking-transparency",
    ]
  },

  {
    slug: "how-to-report-a-pothole-effectively",
    isFeatured: false,
    isPillar: false,
    title: "How to Report a Pothole Effectively: A Citizen's Step-by-Step Guide",
    metaTitle: "How to Report a Pothole Effectively: Step-by-Step Guide",
    metaDescription: "Step-by-step practical guide on how to document and report road potholes for fast repairs using digital platforms.",
    category: "Civic Issue Reporting",
    categorySlug: "civic-issue-reporting",
    author: authors.darshan,
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-14",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Asphalt road pothole requiring road maintenance work",
    excerpt: "Learn how capturing clear photos, exact GPS coordinates, and hazard details ensures your pothole report is clear and actionable.",
    
    primaryKeyword: "report a pothole",
    secondaryKeywords: ["how to report pothole", "damaged road complaint", "pothole repair request", "municipal road maintenance"],

    summary: "Potholes are a common safety concern for motorists, cyclists, and pedestrians. This actionable guide breaks down how to document and submit road damage reports clearly.",

    keyTakeaways: [
      "Capture two photos: one close-up shot showing pothole depth, and one wide-angle shot showing lane position and landmark references.",
      "GPS coordinates eliminate location ambiguity for maintenance crews.",
      "Describing traffic hazard level helps prioritize repairs appropriately."
    ],

    tableOfContents: [
      { id: "why-pothole-reporting-matters", label: "01. Why Prompt Pothole Reporting Matters" },
      { id: "step-by-step-reporting", label: "02. Step-by-Step Reporting Guide" },
      { id: "avoiding-common-mistakes", label: "03. Common Mistakes to Avoid" },
      { id: "tracking-and-escalation", label: "04. Tracking Repairs & Status Updates" },
      { id: "frequently-asked-questions", label: "05. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "why-pothole-reporting-matters",
        heading: "Why Prompt Pothole Reporting Matters",
        content: `
Unattended potholes expand over time when water seeps into road surface cracks, weakening the underlying pavement under vehicle pressure. 

Reporting potholes early prevents minor road surface damage from turning into larger craters, helping protect vehicles and improve road safety for cyclists and drivers alike.
        `,
      },
      {
        id: "step-by-step-reporting",
        heading: "Step-by-Step Guide to Filing a Pothole Report",
        content: `
Follow these four steps to ensure your report provides clear information:

### Step 1: Ensure Personal Safety First
Never step into active traffic to photograph road damage. Stand safely on the sidewalk or shoulder.

### Step 2: Capture Clear Photos
Take two photographs:
1. **Context Shot**: Frame the pothole relative to a visible street sign, landmark, or intersection.
2. **Detail Shot**: Show the size and depth of the road damage clearly.

### Step 3: Use Geotagged Location Markers
When submitting via [CivicTrack's Report Form](/dashboard/report), the application captures GPS coordinates to pin the exact location on the map.

### Step 4: Describe Traffic Danger
In your report text, note:
- Is the pothole in a main travel lane or turning lane?
- Is it filled with water hiding its depth?
- Does it force cyclists or cars to swerve?
        `,
      },
      {
        id: "avoiding-common-mistakes",
        heading: "Common Mistakes to Avoid When Reporting Road Damage",
        content: `
- **Vague Descriptions**: Simply writing "pothole on Main St" without a cross street or landmark makes locating the issue difficult.
- **Combining Multiple Issues**: Log separate potholes as individual entries so maintenance workers can address them individually.
- **Missing Photos**: Reports without photos make it harder to evaluate the required repair materials beforehand.
        `,
      },
      {
        id: "tracking-and-escalation",
        heading: "Tracking Repairs & Status Updates",
        content: `
Once submitted on CivicTrack, your report receives a unique tracking ID. You can monitor the ticket status directly from your user dashboard as it updates from initial review to completion.
        `,
      },
    ],

    faqs: [
      {
        question: "How does CivicTrack handle pothole reports?",
        answer: "CivicTrack logs your report with geotagged coordinates and photos in our application database, making the issue visible on public feeds and status logs."
      }
    ],

    relatedSlugs: [
      "civic-issue-reporting-guide",
      "how-to-report-broken-streetlight",
      "real-time-issue-tracking-transparency"
    ]
  },

  {
    slug: "how-to-report-broken-streetlight",
    isFeatured: false,
    isPillar: false,
    title: "How to Report a Broken Street Light and Enhance Neighborhood Safety",
    metaTitle: "How to Report Broken Streetlights: Safety & Repair Guide",
    metaDescription: "Learn how reporting non-functioning streetlights improves pedestrian safety and helps identify electrical maintenance needs.",
    category: "Civic Issue Reporting",
    categorySlug: "civic-issue-reporting",
    author: authors.darshan,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-11",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Illuminated street light pole at dusk along a quiet urban avenue",
    excerpt: "Functional streetlights are vital for night-time visibility and safety. Learn how locating pole numbers and submitting reports online helps speed up repairs.",

    primaryKeyword: "report broken streetlight",
    secondaryKeywords: ["fix streetlight", "street light complaint", "dark street reporting", "municipal electrical maintenance"],

    summary: "Streetlights are essential public infrastructure components that illuminate walkways and roadways. This guide outlines how residents can identify streetlight numbers and lodge effective reports.",

    keyTakeaways: [
      "Many streetlight poles feature a stenciled identification code that helps locate the exact fixture.",
      "Specifying whether a single light or an entire row is dark helps distinguish bulb issues from circuit trips.",
      "Digital reporting provides status visibility from submission to completion."
    ],

    tableOfContents: [
      { id: "importance-of-streetlighting", label: "01. Why Streetlight Maintenance Matters" },
      { id: "finding-pole-numbers", label: "02. Locating Streetlight Pole Numbers" },
      { id: "reporting-process", label: "03. The Digital Reporting Process" },
      { id: "circuit-vs-single-failure", label: "04. Single Lamp vs. Circuit Outages" },
      { id: "frequently-asked-questions", label: "05. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "importance-of-streetlighting",
        heading: "Why Streetlight Maintenance Matters for Neighborhood Safety",
        content: `
Well-lit streets improve night-time visibility for drivers and pedestrians alike. When streetlights flicker, remain dark at night, or burn continuously during daylight, reporting the issue helps draw attention to maintenance needs and saves energy.
        `,
      },
      {
        id: "finding-pole-numbers",
        heading: "How to Locate Streetlight Identification Codes",
        content: `
Many municipal light posts feature stenciled identification numbers near eye level (e.g. \`POLE-88\`). Including this pole code in your report helps maintenance workers identify the exact post without guessing.
        `,
      },
      {
        id: "reporting-process",
        heading: "Reporting a Streetlight Issue via CivicTrack",
        content: `
1. **Open CivicTrack**: Go to [Report Issue](/dashboard/report).
2. **Select Category**: Choose \`Municipal Services -> Street Lighting\`.
3. **Attach Photo**: Take a picture showing the unlit fixture or damaged post.
4. **Add Details**: Enter pole number and nearest cross street.
5. **Submit**: Follow updates on your dashboard.
        `,
      },
      {
        id: "circuit-vs-single-failure",
        heading: "Single Lamp Failures vs. Circuit Outages",
        content: `
In your description, note whether:
- **Single Lamp Dark**: Only one fixture is off.
- **Multiple Consecutive Lamps Dark**: Several consecutive lights along a block are off (indicating a potential circuit breaker trip).
        `,
      },
    ],

    faqs: [
      {
        question: "Why do some streetlights stay on during the daytime?",
        answer: "Day-burning streetlights usually have a faulty light sensor or timer control. Reporting them helps conserve electricity and extend bulb life."
      }
    ],

    relatedSlugs: [
      "civic-issue-reporting-guide",
      "how-to-report-a-pothole-effectively",
      "how-civic-technology-changes-government"
    ]
  },

  {
    slug: "real-time-issue-tracking-transparency",
    isFeatured: false,
    isPillar: false,
    title: "How Real-Time Issue Tracking Improves Municipal Service Transparency",
    metaTitle: "Real-Time Issue Tracking & Transparency (2026)",
    metaDescription: "Explore how live status tracking, geotagged progress logs, and open dashboards build clarity between citizens and community projects.",
    category: "Government Transparency",
    categorySlug: "government-transparency",
    author: authors.darshan,
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-10",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Data analytics dashboard showing real-time issue status tracking",
    excerpt: "Discover how real-time issue status tracking replaces opaque paperwork with open milestone updates and verifiable completion logs.",

    primaryKeyword: "real time issue tracking",
    secondaryKeywords: ["municipal transparency", "open government technology", "civic dashboard", "verified grievance redressal"],

    summary: "Transparency is fundamental to building trust in community services. When residents can observe their reported issues moving step-by-step through clear application workflows, status uncertainty is replaced by clear communication.",

    keyTakeaways: [
      "Open status feeds provide clear visibility into issue progress.",
      "Geotagged milestone updates record when reports are submitted, evaluated, and resolved.",
      "Aggregated issue feeds help identify recurring maintenance trends across neighborhoods."
    ],

    tableOfContents: [
      { id: "the-opacity-problem", label: "01. Understanding Communication Gaps" },
      { id: "anatomy-of-realtime-tracking", label: "02. Anatomy of Real-Time Status Tracking" },
      { id: "benefits-for-citizens-and-cities", label: "03. Benefits for Citizens & Neighborhoods" },
      { id: "civictrack-transparency-model", label: "04. The CivicTrack Open Model" },
      { id: "frequently-asked-questions", label: "05. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "the-opacity-problem",
        heading: "Understanding Communication Gaps in Public Maintenance",
        content: `
Without status tracking, lodging a complaint can feel like sending information into a black hole. Residents often wonder if their report was received, who is handling it, or when action might take place. 

Real-time status tracking addresses this gap by providing an open digital timeline for every entry.
        `,
      },
      {
        id: "anatomy-of-realtime-tracking",
        heading: "Anatomy of Real-Time Status Tracking",
        content: `
A modern issue tracking platform generates an auditable timeline log containing:

1. **Submission Geotag & Timestamp**: Records when and where the entry was created.
2. **Category Classification**: Shows the assigned service department.
3. **Status Milestones**: Displays progress transitions ("Under Review", "In Progress", "Resolved").
4. **Resolution Photo Upload**: Allows attaching completion photos when work is done.
        `,
      },
      {
        id: "benefits-for-citizens-and-cities",
        heading: "Benefits for Citizens and Communities",
        content: `
- **Clear Expectations**: Residents can follow progress without needing to make follow-up phone calls.
- **Open Visibility**: Neighborhood feeds display active community issues in one centralized place.
- **Factual Logs**: Historical entries create a clear record of local maintenance requests.
        `,
      },
      {
        id: "civictrack-transparency-model",
        heading: "The CivicTrack Open Data Model",
        content: `
CivicTrack was built on open design principles. By providing clear public feeds while sanitizing personal user details, CivicTrack ensures anyone can view community issue trends while respecting user privacy.
        `,
      },
    ],

    faqs: [
      {
        question: "Is personal contact information displayed on CivicTrack's public feeds?",
        answer: "No. CivicTrack hides personal identifying information (name, email) on public feeds. Only the issue category, location marker, description, and status timeline are visible."
      }
    ],

    relatedSlugs: [
      "civic-issue-reporting-guide",
      "how-civic-technology-changes-government",
      "smart-cities-digital-grievance-systems"
    ]
  },

  {
    slug: "how-civic-technology-changes-government",
    isFeatured: false,
    isPillar: false,
    title: "How Civic Technology Improves Community Infrastructure Tracking",
    metaTitle: "How Civic Technology Improves Community Tracking (2026)",
    metaDescription: "Discover how modern civic tech tools, structured data, and open tracking drive public accountability and citizen engagement.",
    category: "Civic Technology",
    categorySlug: "civic-technology",
    author: authors.darshan,
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-04",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern urban city skyline with digital network overlays signifying civic technology",
    excerpt: "Civic tech bridges the gap between residents and neighborhood management. Learn how digital platforms bring structure to issue reporting.",

    primaryKeyword: "civic technology",
    secondaryKeywords: ["civic tech local government", "digital municipal governance", "smart city complaint platform", "government accountability software"],

    summary: "Civic technology encompasses software tools and data platforms designed to enhance citizen participation, improve public service accessibility, and bring transparency to local infrastructure tracking.",

    keyTakeaways: [
      "Civic tech replaces paper logs with accessible digital service platforms.",
      "Categorized ticket routing helps organize incoming reports by department.",
      "Map-based data visualization helps identify maintenance patterns."
    ],

    tableOfContents: [
      { id: "defining-civic-technology", label: "01. Defining Civic Technology" },
      { id: "core-pillars-of-civictech", label: "02. Core Pillars of Civic Tech" },
      { id: "building-trust-through-tech", label: "03. Open Design & Transparency" },
      { id: "frequently-asked-questions", label: "04. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "defining-civic-technology",
        heading: "Defining Civic Technology",
        content: `
Civic Technology (CivicTech) refers to digital solutions built to improve how people interact with public services and local infrastructure. Unlike internal administrative software, CivicTech explicitly prioritizes **user accessibility, transparency, and public visibility**.

Key examples include:
- Digital Issue Tracking & Grievance Platforms (e.g. CivicTrack)
- Open Data & Community Visualization Portals
- E-Democracy & Public Feedback Tools
- Geospatial Mapping Applications
        `,
      },
      {
        id: "core-pillars-of-civictech",
        heading: "Core Pillars of Effective Civic Tech",
        content: `
1. **Simple Mobile & Web Access**: Residents can lodge an issue in under a minute with clear forms.
2. **Structured Category Routing**: Reports are categorized automatically by service area (Roads, Water, Sanitation, Lighting).
3. **Auditable Status Logs**: Status transitions are timestamped to ensure clear record-keeping.
        `,
      },
    ],

    faqs: [
      {
        question: "Who built CivicTrack?",
        answer: "CivicTrack was built independently by Darshan Rajgor, a solo developer, to demonstrate how web technologies can make civic issue tracking open and transparent."
      }
    ],

    relatedSlugs: [
      "civic-issue-reporting-guide",
      "real-time-issue-tracking-transparency",
      "smart-cities-digital-grievance-systems"
    ]
  },

  {
    slug: "smart-cities-digital-grievance-systems",
    isFeatured: false,
    isPillar: false,
    title: "Smart Cities & Digital Issue Tracking: Reference Target Benchmarks",
    metaTitle: "Smart City Digital Grievance Systems & Reference Targets (2026)",
    metaDescription: "An informative guide evaluating municipal SLA concepts, digital issue workflows, and service level target frameworks.",
    category: "Smart Cities",
    categorySlug: "smart-cities",
    author: authors.darshan,
    publishedAt: "2026-07-28",
    updatedAt: "2026-08-02",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Aerial nighttime view of a modern smart city grid",
    excerpt: "Explore common service level target benchmarks for water leaks, road maintenance, sanitation, and streetlights in modern urban planning.",

    primaryKeyword: "smart city grievance system",
    secondaryKeywords: ["municipal sla benchmarks", "smart city issue tracking", "urban infrastructure metrics", "digital public services"],

    summary: "Modern smart city frameworks emphasize responsive public infrastructure. This guide outlines standard service level agreement (SLA) concepts used to measure maintenance response targets.",

    keyTakeaways: [
      "Target response SLAs provide clear guidelines for evaluating maintenance priorities.",
      "Geospatial issue mapping helps urban planners monitor recurring defect patterns.",
      "Clear status updates reduce unnecessary follow-up inquiries."
    ],

    tableOfContents: [
      { id: "defining-smart-city-services", label: "01. Service Level Target Concepts" },
      { id: "sla-benchmark-table", label: "02. Typical SLA Reference Table" },
      { id: "frequently-asked-questions", label: "03. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "defining-smart-city-services",
        heading: "Understanding Service Level Target Frameworks",
        content: `
In urban management, Service Level Agreements (SLAs) establish benchmark response times for different public works tasks based on urgency and public safety impact.
        `,
      },
      {
        id: "sla-benchmark-table",
        heading: "Typical Municipal SLA Reference Targets",
        content: `
The table below outlines common reference target timelines used in municipal maintenance planning:

| Service Category | Urgency Tier | Typical Evaluation Target | Typical Repair SLA Target |
| :--- | :--- | :--- | :--- |
| **Water Main Leak** | Emergency | < 1 Hour | 4 to 12 Hours |
| **Hazardous Pothole** | High | < 2 Hours | 24 to 48 Hours |
| **Streetlight Outage** | Standard | < 4 Hours | 24 to 48 Hours |
| **Garbage Overflow** | Standard | < 2 Hours | 24 Hours |
| **Park Bench Repair** | Low | < 24 Hours | 5 to 7 Days |
        `,
      },
    ],

    faqs: [
      {
        question: "What is an SLA target in civic maintenance?",
        answer: "An SLA target is an established timeframe within which a maintenance issue is expected to be inspected or resolved."
      }
    ],

    relatedSlugs: [
      "how-civic-technology-changes-government",
      "real-time-issue-tracking-transparency",
      "civic-issue-reporting-guide"
    ]
  },

  {
    slug: "building-trust-between-citizens-and-authorities",
    isFeatured: false,
    isPillar: false,
    title: "Building Transparency & Trust in Community Services",
    metaTitle: "Building Transparency & Trust in Community Services",
    metaDescription: "Strategies for open communication, clear status tracking, and closing the feedback loop in community issue management.",
    category: "Community Engagement",
    categorySlug: "community-engagement",
    author: authors.darshan,
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-25",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Community members discussing neighborhood projects around a table",
    excerpt: "Public trust is built through consistent responsiveness and open communication. Learn how clear status updates strengthen civic engagement.",

    primaryKeyword: "citizen municipal trust",
    secondaryKeywords: ["community participation", "local authority trust", "public engagement civic", "transparent governance"],

    summary: "Trust in community management is earned when reported issues receive clear status updates, predictable resolution timelines, and honest communication.",

    keyTakeaways: [
      "Status transparency builds confidence even when repairs take time.",
      "Clear feedback loops turn passive observers into active community stewards.",
      "Geotagged photo proof provides visible confirmation of work done."
    ],

    tableOfContents: [
      { id: "four-pillars-of-trust", label: "01. Four Pillars of Civic Transparency" },
      { id: "closing-the-feedback-loop", label: "02. Closing the Feedback Loop" },
      { id: "frequently-asked-questions", label: "03. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "four-pillars-of-trust",
        heading: "The Four Pillars of Civic Transparency",
        content: `
1. **Predictability**: Providing clear guidelines so residents know how reports are handled.
2. **Visibility**: Showing real-time status transitions as tickets move forward.
3. **Verification**: Allowing completion photo uploads when work is finished.
4. **Accessibility**: Making issue submission easy on web and mobile devices.
        `,
      },
      {
        id: "closing-the-feedback-loop",
        heading: "Closing the Feedback Loop with CivicTrack",
        content: `
Platforms like [CivicTrack](/about) provide a clear way for citizens to log issues and inspect completed repair photos, ensuring full visibility into neighborhood maintenance.
        `,
      },
    ],

    faqs: [
      {
        question: "How does CivicTrack promote transparency?",
        answer: "CivicTrack provides open status timelines and photo verification fields so users can see when issues are reviewed, assigned, and completed."
      }
    ],

    relatedSlugs: [
      "civic-issue-reporting-guide",
      "real-time-issue-tracking-transparency",
      "how-to-report-a-pothole-effectively"
    ]
  },

  {
    slug: "what-information-to-include-in-civic-complaint",
    isFeatured: false,
    isPillar: false,
    title: "What Information Should You Include in a Civic Report for Clear Action?",
    metaTitle: "What to Include in a Civic Report for Clear Action",
    metaDescription: "A practical checklist of essential details, photos, and location tips to include in your civic report for clear evaluation.",
    category: "Municipal Services",
    categorySlug: "municipal-services",
    author: authors.darshan,
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-18",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Person filling out digital report on smartphone in an urban neighborhood",
    excerpt: "Missing details cause reporting delays. Follow this 4-point checklist to ensure your issue report is clear and complete.",

    primaryKeyword: "civic complaint details",
    secondaryKeywords: ["how to write civic complaint", "municipal issue description", "effective report tips", "civic issue checklist"],

    summary: "The clarity of your initial report determines how easily a maintenance team can locate and evaluate the issue. This checklist outlines the key details needed when lodging a ticket.",

    keyTakeaways: [
      "Attach both a wide context photo and a close-up detail photo.",
      "Specify exact landmarks, cross streets, or structure numbers.",
      "Select the specific sub-category to avoid manual sorting delays."
    ],

    tableOfContents: [
      { id: "the-4point-checklist", label: "01. The 4-Point Report Checklist" },
      { id: "photo-best-practices", label: "02. Photography Best Practices" },
      { id: "frequently-asked-questions", label: "03. Frequently Asked Questions" },
    ],

    sections: [
      {
        id: "the-4point-checklist",
        heading: "The 4-Point Report Checklist",
        content: `
Before submitting an entry on [CivicTrack Report](/dashboard/report), verify your entry contains:

1. **Exact GPS Pin**: Confirm the map marker matches the physical location.
2. **Context Photo**: Include a photo showing nearby street signs or landmarks.
3. **Detail Photo**: Capture the specific defect (hole depth, wire exposure, leak stream).
4. **Clear Description**: Describe the defect concisely (e.g. "Deep pothole in right travel lane near 4th St").
        `,
      },
      {
        id: "photo-best-practices",
        heading: "Photographic Evidence Best Practices",
        content: `
- Take photos in good lighting or illuminate dark areas safely.
- Avoid blurry photos taken while moving.
- Include a recognizable object or curb line to show scale.
        `,
      },
    ],

    faqs: [
      {
        question: "Can I add more notes after submitting a report?",
        answer: "Yes. On CivicTrack, logged-in users can view their active tickets and update notes or photos on open entries."
      }
    ],

    relatedSlugs: [
      "how-to-report-a-pothole-effectively",
      "civic-issue-reporting-guide",
      "how-to-report-broken-streetlight"
    ]
  }
];

export const getFeaturedArticle = () => articles.find((a) => a.isFeatured) || articles[0];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (categorySlug) =>
  articles.filter((a) => a.categorySlug === categorySlug);

export const getRelatedArticles = (currentSlug, limit = 3) => {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, limit);

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const matched = current.relatedSlugs
      .map((s) => getArticleBySlug(s))
      .filter(Boolean);
    if (matched.length >= limit) return matched.slice(0, limit);
  }

  return articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, limit);
};
