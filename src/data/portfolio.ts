import {
  FiArrowRight,
  FiCode,
  FiCoffee,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMonitor,
  FiPenTool
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import type { IconType } from "react-icons";

type SocialLink = {
  href: string;
  label: string;
  icon: IconType;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: IconType;
};

type ImageCard = {
  name: string;
  image: string;
};

type Project = {
  name: string;
  href: string;
  stack: string;
  description: string;
  image: string;
  icon: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

type ContactHighlight = {
  title: string;
  text: string;
  icon: IconType;
};

type HeroContent = {
  badge: string;
  greeting: string;
  name: string;
  description: string;
};

type AboutContent = {
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  cta: {
    href: string;
    label: string;
  };
};

type ContactForm = {
  subject: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/shubhammauryainfo/",
    label: "GitHub",
    icon: FiGithub
  },
  {
    href: "https://www.instagram.com/munda_thecoder",
    label: "Instagram",
    icon: FiInstagram
  },
  {
    href: "https://www.linkedin.com/in/shubham-maurya-17078a266/",
    label: "LinkedIn",
    icon: FiLinkedin
  },
  {
    href: "https://www.facebook.com/subham.maurya.902604/",
    label: "Facebook",
    icon: FaFacebookF
  }
];

export const interests: FeatureCard[] = [
  {
    title: "Designing",
    description:
      "I love shaping visual experiences that feel polished, expressive, and genuinely useful.",
    icon: FiPenTool
  },
  {
    title: "Developing",
    description:
      "After design, I enjoy bringing ideas to life through code and turning concepts into products people can use.",
    icon: FiCode
  },
  {
    title: "Expanding",
    description:
      "I like improving websites after launch through iteration, SEO basics, and practical product thinking.",
    icon: FiMonitor
  }
];

export const skills: ImageCard[] = [
  { name: "HTML", image: "/assets/images/skills/HTML.svg" },
  { name: "CSS", image: "/assets/images/skills/CSS.svg" },
  { name: "JavaScript", image: "/assets/images/skills/JS.svg" },
  { name: "Node.js", image: "/assets/images/skills/NodeJS.svg" },
  { name: "PHP", image: "/assets/images/skills/php.svg" },
  { name: "EJS", image: "/assets/images/skills/EJS.svg" },
  { name: "Linux", image: "/assets/images/skills/tux.svg" },
  { name: "SQL", image: "/assets/images/skills/sql.svg" },
  { name: "Bootstrap", image: "/assets/images/skills/Bootstrap.svg" },
  { name: "C++", image: "/assets/images/skills/c.svg" },
  { name: "Python", image: "/assets/images/skills/Python.svg" },
  { name: "Next.js", image: "/assets/images/skills/Next.svg" },
  { name: "React", image: "/assets/images/skills/React.svg" },
  { name: "Laravel", image: "/assets/images/skills/Laravel.svg" },
  { name: "Jigsaw", image: "/assets/images/skills/Jigsaw.svg" },
  { name: "Tailwind CSS", image: "/assets/images/skills/Tailwind.svg" },
  { name: "Express", image: "/assets/images/skills/express.svg" },
  { name: "MongoDB", image: "/assets/images/skills/MongoDB.svg" }
];

export const tools: ImageCard[] = [
  { name: "VS Code", image: "/assets/images/tools/vscode.svg" },
  { name: "GitHub", image: "/assets/images/tools/github.svg" },
  { name: "Canva", image: "/assets/images/tools/canva.svg" },
  { name: "PyCharm", image: "/assets/images/tools/pycharm.svg" },
  { name: "ChatGPT", image: "/assets/images/tools/ChatGPT.svg" },
  { name: "Gemini", image: "/assets/images/tools/Gemini.svg" }
];

export const projects: Project[] = [
  {
    name: "FleekFiles",
    href: "https://fleek-files.vercel.app/",
    stack: "Next.js 16 | React 19 | TypeScript | NextAuth.js | MongoDB",
    description:
      "A secure file management and sharing platform with authentication, role-based access control, metadata handling, and a dashboard-first user workflow built as a Semester 5 full-stack project.",
    image: "/assets/images/projects/ff.png",
    icon: "/assets/images/projects/ff-logo.png"
  },
  {
    name: "Resoo Build",
    href: "https://resoo-build.vercel.app/",
    stack: "MERN | Tailwind CSS",
    description:
      "A resume builder created with React, Tailwind CSS, Node.js, and Express for fast resume generation.",
    image: "/assets/images/projects/resoo.png",
    icon: "/assets/images/projects/resoo.png"
  },
  {
    name: "Vaaar Management",
    href: "https://vaaar-management.vercel.app/",
    stack: "MERN | Vite | Cloudinary",
    description:
      "A management platform built to support trust operations using a modern React-based stack.",
    image: "/assets/images/projects/vaaarm.png",
    icon: "/assets/images/projects/vaaarm.png"
  },
  {
    name: "Vaaar Website",
    href: "https://vaaartrust.github.io/",
    stack: "Laravel | Jigsaw | Tailwind CSS",
    description:
      "A public-facing website designed to highlight trust initiatives, impact stories, and organizational work.",
    image: "/assets/images/projects/vaaart.png",
    icon: "/assets/images/projects/vaaart.png"
  },
  {
    name: "Kamal Enterprises",
    href: "https://kamalenterprises.ltd",
    stack: "HTML | CSS | JavaScript | PHP",
    description:
      "A business website for a client with focused service presentation and a simple multi-section layout.",
    image: "/assets/images/projects/kamal-e.webp",
    icon: "/assets/images/projects/ke.png"
  },
  {
    name: "Shree Academy",
    href: "https://shreeacademy-project.free.nf/",
    stack: "HTML | CSS | Bootstrap | PHP | SQL",
    description:
      "An educational website template with a clean admin panel and a structure designed for content-heavy pages.",
    image: "/assets/images/projects/shree.webp",
    icon: "/assets/images/projects/sa.png"
  },
  {
    name: "Educate Tutorials",
    href: "https://et.fast-page.org/",
    stack: "HTML | CSS | Bootstrap | JavaScript | PHP | SQL",
    description:
      "A client website with multiple sections and a flexible admin panel built for an education business.",
    image: "/assets/images/projects/educate.webp",
    icon: "/assets/images/projects/et.png"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sonu Jha",
    role: "Founder of Educate Tutorials",
    quote:
      "Your brilliance is inspiring. You bring positivity and creativity wherever you go, and working with you is always a great experience.",
    image: "/assets/images/testimonials/sonujha.webp"
  },
  {
    name: "Rajat Vishwakarma",
    role: "UI/UX Designer",
    quote:
      "I admire your hard work and consistency. Your effort speaks for itself and your energy lifts the people around you.",
    image: "/assets/images/testimonials/rajat.webp"
  },
  {
    name: "Sunil Gupta",
    role: "Web Developer",
    quote:
      "Shubham's commitment and hard work shine through in everything he does.",
    image: "/assets/images/testimonials/sunil.webp"
  },
  {
    name: "Nilesh Shukla",
    role: "Software Developer",
    quote:
      "Working with Shubham has been an incredible experience. He turns ideas into reality and builds websites that exceed expectations.",
    image: "/assets/images/testimonials/Nilesh.webp"
  }
];

export const contactHighlights: ContactHighlight[] = [
  {
    title: "Frontend Development",
    text: "Responsive websites, landing pages, and clean UI implementation.",
    icon: FiCode
  },
  {
    title: "Design-to-Code",
    text: "Turning layouts and ideas into polished, production-ready interfaces.",
    icon: FiArrowRight
  },
  {
    title: "Collaboration",
    text: "Friendly communication, practical execution, and steady iteration.",
    icon: FiCoffee
  }
];

export const heroContent: HeroContent = {
  badge: "Web Developer",
  greeting: "Namaste, I'm",
  name: "Shubham Maurya",
  description:
    "From experimenting with dashboard templates in 2021 to building polished client work today, I focus on crafting responsive websites with intention, personality, and care."
};

export const aboutContent: AboutContent = {
  eyebrow: "But who am I?",
  title: "About Me",
  intro: "My story in a nutshell.",
  paragraphs: [
    "Hey there, I'm Shubham, a frontend-focused developer from India who enjoys building websites that look sharp and feel smooth to use. Alongside development, I also spend time teaching and sharpening my foundation in computer science.",
    "My goal is simple: build things that are both visually strong and genuinely useful. I enjoy translating ideas into interfaces, improving details after launch, and constantly learning through real projects.",
    "I also love trying new ideas beyond code, including building businesses like Nexbytes Technologies."
  ],
  cta: {
    href: "https://nexbytes.rf.gd/",
    label: "Visit Nexbytes"
  }
};

export const contactForm: ContactForm = {
  subject: "New submission from Shubham Maurya portfolio"
};

export const footerText = "Made with Next.js, Tailwind CSS, React Icons, and a lot of intent by Shubham.";
