export const personalInfo = {
  name: 'Mirza Rabby',
  role: 'Full-Stack Developer & AI Engineer',
  tagline: 'I build intelligent, scalable software that ships.',
  bio: 'I architect end-to-end platforms that blend modern web engineering with practical AI integration. From real-time data pipelines to production LLM applications, I turn ambitious ideas into shipped products.',
  location: 'Dhaka , Bangladesh',
  email: 'mshrabby21@gmail.com',
  resumeUrl: '#',
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rabbymirza', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/Mirza-Shakil-Hasan-Rabby', icon: 'Linkedin' },
  { label: 'Email', href: 'mailto:mshrabby21@gmail.com', icon: 'Mail' },
];

export const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 5, suffix: '+' },
  { label: 'GitHub Repos', value: 12, suffix: '+' },
  { label: 'Open Source Stars', value: 35, suffix: '+' },
];

export const techStackBadges = [
  { label: 'Next.js', icon: 'ArrowUpCircle' },
  { label: 'React', icon: 'Atom' },
  { label: 'TypeScript', icon: 'Code' },
  { label: 'Python', icon: 'Terminal' },
  { label: 'AWS', icon: 'Cloud' },
  { label: 'PostgreSQL', icon: 'Database' },
  { label: 'Docker', icon: 'Container' },
  { label: 'OpenAI / LLMs', icon: 'Sparkles' },
  { label: 'Kubernetes', icon: 'Boxes' },
  { label: 'Node.js', icon: 'Braces' },
];

export const skillCategories = [
  {
    title: 'AI / ML Integration',
    icon: 'Sparkles',
    color: 'purple',
    skills: [
      'OpenAI / GPT Integration',
      'LangChain & RAG Pipelines',
      'Vector Databases (Pinecone, pgvector)',
      'Hugging Face Transformers',
      'Prompt Engineering',
      'AI Agent Orchestration',
    ],
  },
  {
    title: 'Frontend',
    icon: 'Monitor',
    color: 'cyan',
    skills: [
      'React / Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js / WebGL',
      'Zustand / Redux',
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    color: 'blue',
    skills: [
      'Node.js / Express',
      'Python / FastAPI',
      'GraphQL / tRPC',
      'REST API Design',
      'Microservices',
      'WebSockets / Real-time',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    color: 'purple',
    skills: [
      'AWS (EC2, S3, Lambda)',
      'Docker / Kubernetes',
      'CI/CD (GitHub Actions)',
      'Terraform / IaC',
      'Vercel / Netlify',
      'Monitoring (Datadog)',
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    color: 'cyan',
    skills: [
      'PostgreSQL / Supabase',
      'Redis / Memcached',
      'MongoDB',
      'Prisma / Drizzle',
      'Supabase / Firebase',
      'Elasticsearch',
    ],
  },
  {
    title: 'Mobile',
    icon: 'Smartphone',
    color: 'blue',
    skills: [
      'React Native',
      'Expo',
      'iOS / Android',
      'Push Notifications',
      'App Store Deployment',
      'Mobile CI/CD',
    ],
  },
];

export const experiences = [
  {
    company: 'Nexus AI',
    role: 'Senior Full-Stack Engineer',
    period: '2023 — Present',
    location: 'Dhaka , Bangladesh',
    description: [
      'Lead architect for an AI-powered analytics platform serving 100K+ daily active users.',
      'Built RAG pipeline with sub-second response times using pgvector and OpenAI embeddings.',
      'Reduced infrastructure costs by 40% through Kubernetes autoscaling and Lambda migration.',
      'Mentored a team of 5 engineers on AI integration best practices and code quality standards.',
    ],
  },
  {
    company: 'Quantum Labs',
    role: 'Full-Stack Developer',
    period: '2021 — 2023',
    location: 'Remote',
    description: [
      'Developed real-time collaboration features used by 500+ enterprise teams.',
      'Implemented WebSocket-based live editing with conflict resolution and CRDTs.',
      'Built a design system component library adopted across 12 internal products.',
      'Achieved 98+ Lighthouse performance scores across all core product pages.',
    ],
  },
  {
    company: 'Forge Digital',
    role: 'Software Engineer',
    period: '2019 — 2021',
    location: 'Austin, TX',
    description: [
      'Shipped 20+ client projects ranging from e-commerce to SaaS dashboards.',
      'Built CI/CD pipelines that reduced deployment time from 45 minutes to 4 minutes.',
      'Integrated Stripe payments and subscription billing for 3 SaaS clients.',
      'Optimized database queries, cutting average page load time by 60%.',
    ],
  },
  {
    company: 'Pixel Studio',
    role: 'Junior Developer',
    period: '2017 — 2019',
    location: 'Austin, TX',
    description: [
      'Developed responsive marketing sites and interactive landing pages.',
      'Collaborated with designers to translate Figma mockups into pixel-perfect UI.',
      'Built reusable component library that accelerated project delivery by 30%.',
      'Learned modern JavaScript frameworks and full-stack development practices.',
    ],
  },
];

export const education = [
  {
    institution: 'Dhaka International University',
    degree: 'M.S. Computer Science (AI Track)',
    period: '2027',
    details:
      'Specialized in machine learning and natural language processing. Thesis on neural text generation.',
  },
  {
    institution: 'Dhaka International University',
    degree: 'B.S. Computer Science',
    period: '2023 — 2026',
    details:
      'Graduated with honors. Focus on algorithms, distributed systems, and software engineering.',
  },
  {
    institution: 'AWS Certified Solutions Architect',
    degree: 'Professional Certification',
    period: '2026',
    details:
      'Advanced certification in designing distributed systems on AWS infrastructure.',
  },
  {
    institution: 'Google Cloud Professional',
    degree: 'Cloud Architect Certification',
    period: '2026',
    details:
      'Certified in designing, developing, and managing Google Cloud architecture.',
  },
];

export const projects = [
  {
    title: 'NeuralChat AI',
    category: 'AI',
    description:
      'Production-grade RAG chatbot platform supporting multi-document reasoning, streaming responses, and custom fine-tuned models.',
    tags: ['Next.js', 'OpenAI', 'Pinecone', 'FastAPI'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Pulse Analytics',
    category: 'Web',
    description:
      'Real-time analytics dashboard processing 2M+ events/day with live charts, anomaly detection, and custom alerting.',
    tags: ['React', 'D3.js', 'WebSocket', 'Redis'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'FitFlow Mobile',
    category: 'Mobile',
    description:
      'Cross-platform fitness app with AI workout recommendations, progress tracking, and social challenges.',
    tags: ['React Native', 'Expo', 'Supabase', 'OpenAI'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'DevForge CLI',
    category: 'Backend',
    description:
      'Open-source developer tooling CLI that scaffolds full-stack projects with AI-assisted code generation.',
    tags: ['Node.js', 'TypeScript', 'OpenAI', 'Docker'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'SmartDoc OCR',
    category: 'AI',
    description:
      'Document intelligence platform with OCR extraction, entity recognition, and automated data pipeline integration.',
    tags: ['Python', 'Tesseract', 'FastAPI', 'PostgreSQL'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'CloudDeploy Pro',
    category: 'Backend',
    description:
      'Zero-config deployment platform supporting 12+ cloud providers with automatic SSL, scaling, and rollback.',
    tags: ['Go', 'Kubernetes', 'Terraform', 'AWS'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Immerse 3D',
    category: 'Web',
    description:
      'Interactive 3D product configurator with real-time rendering, AR preview, and e-commerce checkout integration.',
    tags: ['Three.js', 'React', 'WebGL', 'Stripe'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'TaskNest Mobile',
    category: 'Mobile',
    description:
      'Minimalist task management app with offline-first sync, natural language input, and smart prioritization.',
    tags: ['React Native', 'SQLite', 'TypeScript', 'OpenAI'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'InsightGraph AI',
    category: 'AI',
    description:
      'Knowledge graph builder that automatically extracts relationships from unstructured text using LLMs.',
    tags: ['Python', 'Neo4j', 'LangChain', 'FastAPI'],
    link: '#',
    github: '#',
    featured: false,
  },
];

export const projectFilters = ['All', 'AI', 'Web', 'Mobile', 'Backend'];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Résumé', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: "Let's Talk", href: '#contact' },
];