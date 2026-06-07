import { JobExperience, ProjectData, CertificateData } from '../types';

export const RAJAN_PROFILE = {
  name: 'Rajan Kumar',
  title: 'Python Full Stack Developer',
  tagline: 'Deep Learning & Intelligent AI Integrations',
  email: 'rajansukul19@gmail.com',
  phone: '+91-6202422559',
  location: 'India',
  github: 'https://github.com/Rajank19',
  linkedin: 'https://www.linkedin.com/in/rajan-kumar-73326a297/',
  education: {
    degree: 'B.Tech in Computer Science and Design',
    institution: 'Faculty of Engineering and Technology (DMIHER), Wardha',
    graduationDate: 'Graduated: 2026',
    score: 'CGPA: 7.36 / 10'
  },
  summary: `Python Full Stack Developer skilled in FastAPI, REST APIs, React.js, and MySQL with experience in building scalable web applications. Proficient in backend development, CRUD operations, API integration, JWT authentication, debugging, and deployment. Passionate about machine learning, deep learning architectures, and integrating generative AI pipelines to solve real-world problems.`
};

export const JOB_EXPERIENCES: JobExperience[] = [
  {
    role: 'AI Content Curator Intern',
    company: 'Nextleap.ai',
    location: 'Remote',
    period: 'Apr 2025 – Oct 2025',
    tags: ['Python', 'NLP', 'LLMs', 'OCR', 'n8n', 'Cloudinary', 'Google Drive'],
    bulletPoints: [
      'Engineered AI pipelines to process 500+ PDFs, images, and handwritten notes into structured JSON data using advanced Python, OCR libraries, and NLP parsers.',
      'Automated large-scale question and evaluation-rubric generation utilizing LLM prompting patterns, decreasing manual curriculum-curation workload by over 60%.',
      'Implemented robust API-based automated workflows using n8n, Cloudinary, and Google Drive to streamline multi-stage media processing pipelines and ensure 99.9% system reliability.'
    ]
  }
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'breast-cancer',
    title: 'Intelligent Breast Cancer Diagnostic Platform',
    period: 'Aug 2024 – Mar 2025',
    description: 'A multi-modal machine learning and deep learning diagnostic visualizer that combines clinical feature vectors with imaging data indicators to predict breast tumor malignancy with extreme reliability.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Scikit-Learn', 'Pandas', 'NumPy', 'Feature Engineering'],
    bullets: [
      'Engineered a multi-modal diagnostic analysis grid combining clinical metrics (mean radius, perimeter, smoothness) to classify tumors with up to 92% validated accuracy.',
      'Optimized medical datasets using feature scaling, outlier rejection, and Principal Component Analysis (PCA) to speed up model evaluation cycles.',
      'Designed interactive diagnostic simulation dashboard allowing medical practitioners to adjust cellular feature inputs and observe prompt confidence scores in real-time.'
    ],
    // githubUrl: 'https://github.com/rajan-kumar/breast-cancer-diagnostics',
    // liveUrl: '#breast-cancer-simulator'
  },
  {
    id: 'nextcart',
    title: 'NextCart E-Commerce Platform',
    period: 'Apr 2026 – May 2026',
    description: 'A professional full-stack high-performance marketplace platform featuring JWT-secured auth, responsive catalogue grids, complex cart state managers, and Razorpay sandbox payments.',
    technologies: ['React.js', 'FastAPI', 'JWT Auth', 'Razorpay API', 'MySQL', 'SQLAlchemy ORM', 'Tailwind CSS'],
    bullets: [
      'Built a responsive, fluid marketplace workspace in React.js integrated with a robust pythonic FastAPI backend.',
      'Created a comprehensive cart state manager with instantaneous subtotal calculations, coupon deductions, and product state preservation.',
      'Implemented highly secure JSON Web Token (JWT) session protocols and a fully test-functional Razorpay checkout simulation.'
    ],
    githubUrl: 'https://github.com/Rajank19/NextCart',
    liveUrl: '#nextcart-simulation'
  },
  {
    id: 'campus-sync',
    title: 'CampusSync / Student Management System',
    period: 'Apr 2026',
    description: 'A complete relational student life-cycle administrative dashboard featuring responsive search, detailed tabular records indexation, and real-time class metrics analytics.',
    technologies: ['React.js', 'FastAPI', 'JWT Protected Routes', 'SQLAlchemy', 'PostgreSQL', 'Recharts'],
    bullets: [
      'Developed a stateful dashboard for bulk creation, elastic search queries, and programmatic deletion of mock student records.',
      'Integrated SQLAlchemy backend mapping rules to provide lightning-fast transaction endpoints.',
      'Crafted interactive charts visualising student Grade Point Average (GPA) spreads and enrollment density per department.'
    ],
    githubUrl: 'https://github.com/Rajank19/student-management-system',
    liveUrl: '#campussync-dashboard'
  }
];

export const CERTIFICATES_DATA: CertificateData[] = [
  {
    id: 'ibm-fullstack',
    title: 'IBM Full Stack Software Developer',
    issuer: 'Coursera (IBM Professional Certification)',
    date: 'Sep 11, 2024',
    verificationUrl: "C:\Users\hp\Downloads\IBM full stack software developer.pdf",
    credentialId: 'VWHFX8PH4UW3',
    type: 'ibm',
    details: [
      'Completed a rigorous 12-course program covering the complete full-stack development life cycle.',
      'Gained deep proficiency in HTML5, CSS3, JavaScript, React.js, Node.js, Express, and Python programming.',
      'Mastered container orchestration using Docker, Kubernetes, OpenShift, and cloud deployment of microservices and serverless apps.',
      'Aquired hands-on experience with SQL databases, NoSQL, Django ORM, and DevOps CI/CD workflow systems.'
    ]
  },
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing and Distributed Systems',
    issuer: 'NPTEL / Indian Institute of Technology Kanpur (Govt. of India)',
    date: 'Jan – Mar 2026',

    credentialId: 'NPTEL26CS29S563500846',
    type: 'nptel_cloud',
    score: '76%',
    details: [
      'Awarded "Elite" certification status under the leadership of IIT Kanpur (8-week technical curriculum).',
      'Scored a highly competitive 76% consolidated score (25/25 in Online Assignments, 51/75 in Proctored Exam).',
      'Studied distributed consensus models, virtualization technologies, map-reduce paradigms, cloud security, and resource scheduling.'
    ]
  },
  {
    id: 'nptel-edge',
    title: 'Foundation of Cloud IoT Edge ML',
    issuer: 'NPTEL / Indian Institute of Technology Kanpur (Govt. of India)',
    date: 'Feb – Apr 2025',
    credentialId: 'NPTEL25CS75S352801223',
    type: 'nptel_edge',
    score: '63%',
    details: [
      'Successfully certified in Cloud IoT Edge Machine Learning (8-week duration under IIT Kanpur).',
      'Consolidated final score of 63% (24.17/25 in Online Assignments, 39/75 in Proctored Exam).',
      'Aquired deep theoretical and practical frameworks for embedding neural networks on energy-constrained embedded Edge microcontrollers and IoT nodes.'
    ]
  },
  {
    id: 'nextleap-letter',
    title: 'Internship Completion Certificate',
    issuer: 'Next Leap Analytics Pvt. Ltd.',
    date: 'Certified: Nov 1, 2025',
    type: 'internship',
    details: [
      'Successfully completed a 6-month hands-on industry internship from April 23, 2025 to October 15, 2025.',
      'Formally rated as "Highly Satisfactory" by Neha Pal (Cofounder & Head of Operations).',
      'Actively contributed to generative AI content, automated test frameworks, and text parsers.'
    ]
  }
];
