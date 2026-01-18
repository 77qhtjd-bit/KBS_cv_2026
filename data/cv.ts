export interface CVData {
  profile: {
    name: string;
    headline: string;
    location?: string;
    email: string;
    phone?: string;
    links: {
      github: string;
      linkedin: string;
      website?: string;
    };
  };
  about: {
    summary: string[];
    keywords: string[];
  };
  experience: Array<{
    org: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
    highlight?: boolean;
  }>;
  projects: Array<{
    title: string;
    subtitle?: string;
    description: string;
    tech: string[];
    links?: {
      repo?: string;
      demo?: string;
    };
    status?: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  tools: string[];
  education: Array<{
    school: string;
    degree: string;
    period: string;
    details?: string[];
  }>;
  hobbies: string[];
  social: Array<{
    label: string;
    value: string;
    href?: string;
  }>;
}

export const cv: CVData = {
  profile: {
    name: "Kim Bo-Sung",
    headline: "Physics & Mechanical Engineering | Wearable, Dexterity Device / EdTech",
    location: "Seoul, South Korea",
    email: "77qhtjd@snu.ac.kr",
    phone: undefined,
    links: {
      github: "https://github.com/yourname",
      linkedin: "https://www.linkedin.com/in/bosung-kim-816a77377",
      website: undefined,
    },
  },
  about: {
    summary: [
      "Third-year student at Seoul National University, majoring in Physics Education with a double major in Mechanical Engineering.",
      "Academic interests in Swarm Robot mechanisms with flow physics and sports engineering, focusing on emergent behaviors and development of sports technologies such as assistive machines and data measurement tools.",
      "Currently a student intern at the SNU Energy & Environmental Flow Lab (EEFL), researching fluid dynamics and heat transfer.",
      "Pursuing entrepreneurship activities with SNUSV, a startup club at SNU, while building hands-on research experience.",
      "Deeply interested in pure physics and fundamental mathematics, believing these subjects cultivate rigorous thinking and inspire innovative applications.",
    ],
    keywords: ["Robotics", "Sports Engineering", "Fluid Dynamics", "Wearable Technology", "Physics", "Mechanical Engineering"],
  },
  experience: [
    {
      org: "SNU Energy & Environmental Flow Lab (EEFL)",
      role: "UROP Intern",
      period: "2025.07 – 2025.11",
      location: "Seoul National University",
      bullets: [
        "Analyzed MRV/PIV data and designed flow characteristic indicators",
        "Organized experimental and code pipelines, created result visualizations",
      ],
      highlight: true,
    },
  ],
  projects: [
    {
      title: "Running Journal App",
      subtitle: "Flutter-based Running Diary",
      description: "A comprehensive running diary app with recording, editing, and journaling features. Tracks personal running data with customizable insights.",
      tech: ["Flutter", "Supabase", "Dart"],
      links: {
        repo: undefined,
        demo: undefined,
      },
      status: "In Development",
    },
    {
      title: "ESP32-CAM Line Tracer",
      subtitle: "Computer Vision-based Robot",
      description: "OpenCV-based line tracking robot with ESP32-CAM for real-time control signal transmission. Explores autonomous navigation concepts.",
      tech: ["ESP32", "OpenCV", "Python", "C++"],
      links: {
        repo: undefined,
        demo: undefined,
      },
      status: "Completed",
    },
    {
      title: "Haptic Guidance Device",
      subtitle: "Assistive Wearable Technology",
      description: "Vibration-based direction aid device for visually impaired runners. Combines haptic feedback with navigation algorithms.",
      tech: ["Arduino", "Electronics", "Haptic Design"],
      links: {
        repo: undefined,
        demo: undefined,
      },
      status: "Prototype",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "C/C++", "Dart", "MATLAB", "Git"],
    },
    {
      category: "Robotics & Hardware",
      items: ["Arduino", "ESP32", "ROS Basics", "PCB Design"],
    },
    {
      category: "Data & Analysis",
      items: ["OpenCV", "Image Processing", "Data Visualization", "Scientific Computing"],
    },
    {
      category: "Frameworks & Tools",
      items: ["Flutter", "Next.js", "Supabase", "CAD (Fusion 360)"],
    },
  ],
  tools: ["Python", "MATLAB", "Arduino", "C/C++", "Flutter", "Git", "OpenCV", "Supabase"],
  education: [
    {
      school: "Seoul National University",
      degree: "B.S. in Physics Education (Major) & Mechanical Engineering (Double Major)",
      period: "2022 – Present",
      details: [
        "Current: 3rd Year",
        "GPA: 3.7/4.3",
      ],
    },
  ],
  hobbies: ["Running", "Reading", "Robotics", "Physics", "Entrepreneurship"],
  social: [
    {
      label: "GitHub",
      value: "yourname",
      href: "https://github.com/yourname",
    },
    {
      label: "LinkedIn",
      value: "bosung-kim",
      href: "https://www.linkedin.com/in/bosung-kim-816a77377",
    },
    {
      label: "Email",
      value: "77qhtjd@snu.ac.kr",
      href: "mailto:77qhtjd@snu.ac.kr",
    },
  ],
};
