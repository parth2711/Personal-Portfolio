export const personalInfo = {
  name: 'Parth Jangir',
  title: 'Software Engineer',
  email: 'jangirparth@gmail.com',
  phone: '+91-8839038835',
  location: 'Bhilai, Chhattisgarh, India',
  github: 'https://github.com/parth2711',
  linkedin: 'https://linkedin.com/in/parth-jangir-a9993a323',
  leetcode: 'https://leetcode.com/u/parthayyy/',
  codeforces: 'https://codeforces.com/profile/parth2711',
  youtube: 'https://www.youtube.com/@parthjangirr',
  instagram: 'https://www.instagram.com/parthayyy/',
  discord: 'https://discord.com/users/parthayyy',
  resumeUrl: '/Parth_Jangir_Resume.pdf',
  bio: [
    "I'm a Computer Science student at VIT Bhopal specialising in AI & ML — but I don't stop at models.",
    "I build end-to-end products: from crunching datasets with NumPy & Scikit-learn to shipping full-stack apps with React frontends and FastAPI backends. DSA lives in my C++ files; production systems live in my repos.",
    "Currently shipping DevAct — a developer activity aggregation platform. When I'm not coding, you'll find me on a football pitch or chasing problems on LeetCode.",
  ],
  currentlyBuilding: 'DevAct',
}

export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: [
      { name: 'C++', hot: true },
      { name: 'Python', hot: true },
      { name: 'C', hot: false },
      { name: 'JavaScript', hot: true },
      { name: 'HTML / CSS', hot: false },
    ],
  },
  {
    category: 'Full Stack',
    icon: 'layers',
    items: [
      { name: 'React', hot: true },
      { name: 'FastAPI', hot: true },
      { name: 'Flask', hot: false },
      { name: 'Streamlit', hot: false },
      { name: 'PostgreSQL', hot: true },
      { name: 'MySQL', hot: false },
    ],
  },
  {
    category: 'Machine Learning',
    icon: 'cpu',
    items: [
      { name: 'TensorFlow', hot: true },
      { name: 'Scikit-learn', hot: true },
      { name: 'Deep Learning', hot: false },
      { name: 'OpenCV', hot: true },
      { name: 'NumPy', hot: false },
      { name: 'Pandas', hot: false },
      { name: 'Matplotlib', hot: false },
    ],
  },
  {
    category: 'Tools & CS Core',
    icon: 'tool',
    items: [
      { name: 'Data Structures & Algorithms', hot: true },
      { name: 'OOP', hot: false },
      { name: 'DBMS', hot: false },
      { name: 'Git / GitHub', hot: true },
      { name: 'VS Code', hot: false },
      { name: 'SDLC', hot: false },
    ],
  },
]

export const dsaProficiency = [
  { label: 'Arrays & Strings', pct: 92 },
  { label: 'Linked Lists & Trees', pct: 85 },
  { label: 'Dynamic Programming', pct: 78 },
  { label: 'Graphs & BFS/DFS', pct: 82 },
  { label: 'Sorting & Searching', pct: 95 },
]

export const projects = [
  {
    id: 1,
    title: 'DevAct',
    featured: true,
    tag: 'Full Stack · Developer Tools',
    date: 'Ongoing',
    description:
      'A platform for developers to track and aggregate their activities across platforms. Centralises GitHub activity, competitive programming stats, and project progress into one unified dashboard — built for developers, by a developer.',
    stack: ['JavaScript', 'React', 'REST APIs'],
    highlights: [
      'GitHub activity aggregation',
      'Competitive programming stats',
      'Unified developer dashboard',
      'Cross-platform tracking',
    ],
    github: 'https://github.com/parth2711/devact',
    live: null,
  },
  {
    id: 2,
    title: 'Kairos',
    featured: false,
    tag: 'Full Stack · Productivity',
    date: '2025 – Present',
    description:
      'A productivity and time management platform built to help developers and students track their work sessions, set goals, and analyse their output over time.',
    stack: ['React', 'JavaScript', 'Node.js'],
    highlights: [],
    github: 'https://github.com/parth2711/kairos',
    live: null,
  },
  {
    id: 3,
    title: 'CivicVision',
    featured: false,
    tag: 'AI · Full Stack · Computer Vision',
    date: 'Feb 2026 – Present',
    description:
      'AI-powered civic issue intelligence system that detects urban problems — potholes, garbage overflow, water leakage — from images using real-time CNN classification. Role-based React dashboard with geolocation clustering and priority ranking.',
    stack: ['Python', 'FastAPI', 'React', 'TensorFlow', 'OpenCV', 'PostgreSQL'],
    highlights: [],
    github: 'https://github.com/parth2711',
    live: null,
  },
  {
    id: 4,
    title: 'Vaxtrust',
    featured: false,
    tag: 'ML · Data Science',
    date: 'Nov 2025 – Feb 2026',
    description:
      'AI-powered vaccine verification system. Scans QR codes for real-time Trust Scores using anomaly detection ML on AEFI adverse event datasets. Full preprocessing pipeline with StandardScaler and EDA-driven model interpretability.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'JavaScript'],
    highlights: [],
    github: 'https://github.com/HyprrStack/Vaxtrust',
    live: null,
  },
  {
    id: 5,
    title: 'HydroMind AI',
    featured: false,
    tag: 'ML · AgriTech · Transformers',
    date: '2025',
    description:
      'Next-generation AI-driven nutrition management for hydroponically grown lettuce. Intelligent monitoring, forecasting, and optimisation of nutrient delivery using a transformer-based model.',
    stack: ['Python', 'ML', 'Transformers'],
    highlights: [],
    github: 'https://github.com/HydroMind-AI/Hydroponic-Nutrition-Transformer',
    live: null,
  },
  {
    id: 6,
    title: 'Spam Email Classification',
    featured: false,
    tag: 'ML · NLP',
    date: '2025',
    description:
      'End-to-end spam email classification exploring SVM behaviour on high-dimensional text data. Demonstrates strong understanding of feature engineering and model evaluation.',
    stack: ['Python', 'Scikit-learn', 'NLP', 'SVM'],
    highlights: [],
    github: 'https://github.com/parth2711/Spam-Email-Classification',
    live: null,
  },
]

export const certifications = [
  {
    icon: 'python',
    title: 'Python for Data Science & Machine Learning Bootcamp',
    issuer: 'Udemy',
    status: 'Completed',
  },
  {
    icon: 'google',
    title: 'The Nuts and Bolts of Machine Learning',
    issuer: 'Google',
    status: 'Completed',
  },
  {
    icon: 'cpp',
    title: 'Beginning C++ Programming — From Beginner to Beyond',
    issuer: 'Udemy',
    status: 'Completed',
  },
]

export const education = [
  {
    degree: 'B.Tech CSE (AI & ML)',
    institution: 'VIT Bhopal University',
    location: 'Sehore, Madhya Pradesh',
    period: 'Aug 2024 – Present',
    icon: 'graduation',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: 'Delhi Public School, Bhilai',
    location: 'Bhilai, Chhattisgarh',
    period: 'Mar 2010 – May 2024',
    icon: 'school',
  },
]

export const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'ML & AI Builder',
  'DSA Practitioner',
  'C++ Enthusiast',
  'Problem Solver',
]
