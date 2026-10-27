export interface Project {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  technologies: string[];
  keyFeatures?: string[];
  architectureFlow?: string[];
  liveUrl?: string;
  githubUrl?: string;
  detailsUrl?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  scoreLabel: string;
  score: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; primary?: boolean; tag?: string }[];
}

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  dateOrDuration?: string;
  roleType?: string;
  description: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlightNumber?: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const portfolioData = {
  personal: {
    fullName: "Gondela Sai Srujan",
    displayName: "Sai Srujan",
    initials: "SS",
    headline: "Software Developer focused on Java, problem-solving and building useful web applications.",
    professionalTitle: "Software Developer | Java & Data Structures and Algorithms | Web Development",
    location: "Hyderabad, Telangana, India",
    displayCity: "Hyderabad, India",
    availability: "Open to internships and full-time roles",
    bio: [
      "I'm Sai Srujan, a Computer Science and Engineering undergraduate at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad, graduating in 2027.",
      "I have a strong interest in software engineering, logical thinking, and building technology that solves practical problems. Java is my primary programming language, and solving 600+ Data Structures and Algorithms problems has helped me strengthen my problem-solving abilities and algorithmic thinking.",
      "Alongside DSA, I have worked on web application projects involving React, Node.js, Firebase, MongoDB, and other web technologies. My project interests include real-time information sharing, community support platforms, and AI-assisted learning experiences.",
      "I also enjoy collaborating with other students through developer-community activities, hackathons, and technology events. These experiences have helped me understand the importance of teamwork, communication, and turning ideas into working solutions.",
      "I believe in continuous learning, writing maintainable code, understanding problems before implementing solutions, and developing applications that provide real value.",
      "My current goal is to grow as a software engineer by contributing to meaningful projects and working with teams that value problem-solving, learning, and quality engineering."
    ],
    attributes: [
      "Computer Science undergraduate",
      "Java and DSA",
      "Web application development",
      "Collaborative mindset",
      "Continuous learning",
      "Based in Hyderabad, India"
    ],
    stats: [
      {
        value: "600+",
        label: "DSA Problems Solved",
        description: "Consistent problem-solving on LeetCode & algorithmic platforms"
      },
      {
        value: "9.02",
        label: "Reported CGPA",
        description: "B.Tech in Computer Science and Engineering at GRIET"
      },
      {
        value: "2027",
        label: "Expected Graduation",
        description: "Bachelor of Technology in CSE"
      }
    ]
  },

  contact: {
    email: "saisrujan115@gmail.com",
    emailLink: "mailto:saisrujan115@gmail.com",
    phone: "6305387164",
    phoneLink: "tel:+916305387164",
    github: "https://github.com/srujan0516",
    leetcode: "https://leetcode.com/u/G2lYT6OPhC/",
    linkedin: "https://in.linkedin.com/in/gondela-sai-srujan-83a11a314",
    resume: "https://drive.google.com/file/d/1vjYcjbq5o7XsIEQtQyCnflvpAjiknJ_v/view?usp=drive_link"
  },

  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
      duration: "2023–2027",
      scoreLabel: "Reported CGPA",
      score: "9.02",
      description: "Developing strong foundations in programming, data structures and algorithms, software development, and computer science fundamentals."
    },
    {
      degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      duration: "2021–2023",
      scoreLabel: "Board Percentage",
      score: "95.5%",
      description: "Rigorous focus on advanced mathematics, analytical reasoning, and scientific foundations."
    }
  ] as EducationEntry[],

  skillCategories: [
    {
      title: "Programming Languages",
      subtitle: "Core languages for algorithmic problem-solving & software engineering",
      skills: [
        { name: "Java", primary: true, tag: "Primary Language" },
        { name: "JavaScript" },
        { name: "C" },
        { name: "SQL" }
      ]
    },
    {
      title: "Frontend Development",
      subtitle: "Building responsive, modern, user-friendly client interfaces",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React.js" },
        { name: "Vite" }
      ]
    },
    {
      title: "Backend Development",
      subtitle: "Server architecture, RESTful API design, and web services",
      skills: [
        { name: "Node.js" },
        { name: "Spring Boot" }
      ]
    },
    {
      title: "Databases & Application Services",
      subtitle: "Data persistence, real-time sync, and document storage",
      skills: [
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "SQL" }
      ]
    },
    {
      title: "Core Computer Science",
      subtitle: "Algorithmic thinking, data structures, and computer science principles",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Problem-Solving" },
        { name: "Algorithm Analysis" },
        { name: "Object-Oriented Programming" },
        { name: "Database Fundamentals" }
      ]
    },
    {
      title: "Project-Specific Exposure",
      subtitle: "Technologies and APIs explored in hackathons, prototypes & projects",
      skills: [
        { name: "Twilio", tag: "Voice & SMS" },
        { name: "Gemini API", tag: "LLM Integration" },
        { name: "Retrieval-Augmented Generation (RAG)" },
        { name: "FAISS", tag: "Vector Index" },
        { name: "Sentence Transformers" },
        { name: "AWS", tag: "Cloud Services" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "openpad",
      title: "OpenPad — Real-Time Notes and File Sharing",
      category: "Web Application · Real-Time Collaboration",
      badge: "Featured Application",
      description:
        "OpenPad is an online notes and file-sharing platform designed to help users create and share content through a pad. It supports text, images, and file sharing, with a stated capacity of up to 25 MB per pad. The application explores real-time synchronization and convenient content sharing through a lightweight web interface.",
      technologies: ["React 19", "Vite", "Firebase"],
      keyFeatures: [
        "Create and share instant collaborative pads",
        "Add, edit, and share notes with markdown formatting",
        "Share images and supported file formats",
        "Real-time synchronization across connected users",
        "File handling up to 25 MB per pad"
      ],
      // URLs set to undefined if not supplied, per strict accuracy requirement
      liveUrl: undefined,
      githubUrl: undefined
    },
    {
      id: "community-care",
      title: "Community Care — Community Support Platform",
      category: "Full-Stack Web Application",
      badge: "Community Initiative",
      description:
        "Community Care is a community-focused platform intended to connect people who need assistance with volunteers willing to help. The project explores how a web application can make community support, communication, and volunteer coordination more accessible.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      keyFeatures: [
        "Assistance requests creation and classification",
        "Categorized request browsing for volunteers",
        "Volunteer participation workflows",
        "Community support coordination and tracking",
        "Structured request information management"
      ],
      liveUrl: undefined,
      githubUrl: undefined
    },
    {
      id: "calltutor",
      title: "CallTutor — AI-Powered Voice Learning Assistant",
      category: "Hackathon Prototype · Voice AI",
      badge: "Hackathon Prototype",
      description:
        "CallTutor is an AI-powered voice-learning concept designed to help learners practise spoken English through a phone conversation. It explores conversational AI to make language practice more accessible, focusing on phone-based conversations, interview practice, and spoken language learning without requiring an app.",
      technologies: ["Twilio", "LLM APIs", "Voice Integration"],
      keyFeatures: [
        "Team project built with Creative Coders at Agentathon 2025",
        "Phone-based conversational interaction via Twilio",
        "Spoken English and conversational practice concept",
        "Explores voice-based language learning workflows"
      ],
      liveUrl: undefined,
      githubUrl: undefined
    },
    {
      id: "incidentiq",
      title: "IncidentIQ — Retrieval-Augmented Incident Intelligence",
      category: "AI Research / Prototype",
      badge: "Research Prototype",
      description:
        "IncidentIQ is a technical project exploring how retrieval-augmented generation (RAG) can help users retrieve relevant information from incident-related knowledge and generate context-aware responses. It combines text embeddings, vector similarity search, and language-model integration to make technical knowledge accessible.",
      technologies: [
        "RAG",
        "Sentence Transformers",
        "all-MiniLM-L6-v2",
        "FAISS",
        "Gemini API"
      ],
      architectureFlow: [
        "1. User submits an incident or troubleshooting query",
        "2. Query is converted into semantic dense vector embeddings",
        "3. FAISS vector database retrieves most relevant incident context",
        "4. Application augments prompt with retrieved incident context",
        "5. Gemini API generates an accurate, context-aware technical response"
      ],
      liveUrl: undefined,
      githubUrl: undefined
    }
  ] as Project[],

  experience: [
    {
      id: "gdoc-griet",
      title: "Google Developer Groups on Campus — GRIET",
      organization: "GDGoC GRIET",
      roleType: "Student Community Organizer",
      dateOrDuration: "2024 – Present",
      description:
        "Participated in developer-community activities at GRIET, supporting technology-focused events, workshops, hackathons, and knowledge-sharing opportunities. Collaborated with fellow student organizers to coordinate activities and encourage student participation."
    },
    {
      id: "cosmos-2026",
      title: "COSMOS 2026 Organizing Team",
      organization: "GDGoC GRIET",
      roleType: "Event Coordination & Speaker Outreach",
      dateOrDuration: "March 25–26, 2026",
      description:
        "Contributed to the organizing team for COSMOS 2026, a two-day student technology event. Participated in event coordination and speaker outreach while collaborating with other organizers to support the programme."
    },
    {
      id: "agentathon-2025",
      title: "Agentathon 2025 Hackathon",
      organization: "Creative Coders Team",
      roleType: "Hackathon Participant · Voice AI Concept",
      dateOrDuration: "2025",
      description:
        "Participated in a hackathon team exploring an AI-powered voice-learning assistant (CallTutor). Contributed to the project concept and the effort to use conversational technology to make spoken-English practice more accessible."
    },
    {
      id: "gdd-2025",
      title: "Google Developer Day 2025 Activities",
      organization: "GRIET Student Community",
      roleType: "Community Participant & Contributor",
      dateOrDuration: "2025",
      description:
        "Participated in developer-community activities associated with Google Developer Day 2025 at GRIET, supporting a student environment focused on technology learning, projects, and collaboration."
    }
  ] as ExperienceEntry[],

  achievements: [
    {
      id: "dsa-600",
      title: "600+ DSA Problems Solved",
      subtitle: "Algorithmic & Problem-Solving Proficiency",
      highlightNumber: "600+",
      description:
        "Consistent programming practice in Java focused on data structures, algorithms, logical reasoning, and technical problem-solving."
    },
    {
      id: "academics",
      title: "Strong Academic Performance",
      subtitle: "Consistent Excellence in Engineering & Science",
      highlightNumber: "9.02",
      description:
        "Reported CGPA of 9.02 in B.Tech Computer Science and Engineering at GRIET, and 95.5% in Intermediate MPC at Sri Chaitanya Junior College."
    },
    {
      id: "hackathon",
      title: "Hackathon Project Experience",
      subtitle: "Agentathon 2025 Participant",
      highlightNumber: "2025",
      description:
        "Collaborated with Team Creative Coders at Agentathon 2025, exploring and conceptualizing CallTutor, an AI-powered voice-learning assistant."
    },
    {
      id: "community",
      title: "Developer Community Participation",
      subtitle: "Active Volunteer & Organizer",
      highlightNumber: "GDGoC",
      description:
        "Contributed to student technology events, technical workshops, and organizing activities through Google Developer Groups on Campus at GRIET."
    }
  ] as AchievementEntry[],

  certifications: [
    {
      id: "ibm-genai",
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "February 2026",
      credentialUrl: undefined
    },
    {
      id: "cisco-networks",
      title: "Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "February 2025",
      credentialUrl: undefined
    }
  ] as CertificationEntry[]
};
