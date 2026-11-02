import type { PortfolioConfig } from "@/app/types";

const portfolio: PortfolioConfig = {
  url: "https://www.example.com",

  profile: {
    name: "Muhammad Habib rifai",
    role: "Software Engineer",
    tagline: "Turning Ideas Into Digital Solutions.",
    image: "/foto.jpeg",
    availability: "Open for software engineer work",
    location: "Sukoharjo",
  },

  geo: {
    city: "Sukoharjo",  
    country: "Jawa Tengah",
    countryCode: "SKH",
    timezone: "Jakarta/indonesia",
    flag: "id",
    coordinates: {
    lat: -7.6833,
    lng: 110.8333,
    },
  },

  images: {
    hero: "/foto.jpeg",
    about: "/foto.jpeg",
    contact: "/contact.jpeg",
    seoFallback: "",
  },

  seo: {
    title: "Muhammad Habib Rifai| Software Engineer in Sukoharjo",
    titleTemplate: "%s | habib rifai",
    description:
      "Muhammad Habib Rifai is a Software Engineer from Sukoharjo,jawa tengah.",
    applicationName: "Portfolio",
    keywords: [
      "Habib rifai",
      "frontend developer",
      "frontend developer Sukoharjo",
      "frontend developer ",
      "Software Engineer",
      "Hardware Engineer",
      "Internet of Things",
      "Data Analys",  
    ],
    sameAs: [
      "https://github.com/bebbb29",
      "https://www.linkedin.com/in/muhammad-habib-rifai-904774446?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "https://www.instagram.com/_r.paiii?srtk=NHF6aXdhemt0aTE0",
    ],
    googleVerification: process.env.GOOGLE_VERIFICATION,
    image: "/picofme.png",
  },

  analytics: {
    umamiId: process.env.UMAMI_ID,
  },

  contact: {
    email: "habibrifai13@gmail.com",
    phone: "+6281511276987",
    showPhone: true,
  },

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/bebbb29",
      icon: "Github",
      tooltip: "Where I store my bugs... ",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-habib-rifai-904774446?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "Linkedin",
      tooltip: "Professional me (I promise I'm fun) ",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_r.paiii?srtk=NHF6aXdhemt0aTE0",
      icon: "Instagram",
      tooltip: "Reels, vibes & fake perfection ",
    },
    {
      name: "Email",
      href: "mailto:habibrifai13@gmail.com",
      icon: "Mail",
      tooltip: "Let's build something cool together ",
    },
  ],

  hero: {
    kicker: "Muhammad habib Rifai · Software Engineer",
    heading: [
      { text: "Turning Ideas" },
      { text: "Into Digital" },
      { text: "Solutions.", gradient: true },
    ],
    primaryCta: { label: "View projects", href: "/projects", icon: "ArrowRight" },
    secondaryCta: { label: "About me", href: "/about", icon: "ChevronRight" },
  },

  heroStats: [
    { value: "5", label: "Projects in portfolio" },
    { value: "PHP,Python", label: "Core stack" },
    { value: "Sukoharjo, Jateng", label: "Based in" },
  ],

  principles: [
    {
      icon: "Layers3",
      title: "Make it make sense",
      body: "Good interfaces shouldn't need explaining. If it feels obvious, the job is probably done.",
    },
    {
      icon: "Code2",
      title: "Pretty, but functional",
      body: "Because a beautiful interface that breaks the moment someone touches it is just expensive decoration.",
    },
    {
      icon: "Wand2",
      title: "Just enough magic",
      body: "Thoughtful motion, tiny details, and interactions that make people think, “okay, that’s nice.”",
    },
  ],

  
home: {
  principlesKicker: "My Approach",
  principlesTitle: "How I Build & Create",
  principlesDescription:
    "Combining logical thinking, creativity, and technology to build functional digital solutions and meaningful user experiences.",

  workKicker: "Selected Projects",
  workTitle: "Things I've Built",
  workDescription:
    "A collection of projects covering web development, system design, UI/UX, and intelligent applications built through learning and experimentation.",

  aboutCta: { label: "More About Me", href: "/about", icon: "ArrowRight" },
  projectsCta: { label: "Explore My Projects", href: "/projects", icon: "ArrowRight" },
},

status: {
  label: "Currently exploring",
  note: "Learning, building, and improving every day.",
},

navigation: [
  { label: "Home", href: "/", icon: "Home" },
  { label: "About", href: "/about", icon: "User" },
  { label: "Projects", href: "/projects", icon: "Briefcase" },
  { label: "Contact", href: "/contact", icon: "Mail" },
],


  footer: {
    
description:
  "An Informatics Engineering student passionate about software development, web technologies, and system design. Exploring ideas and turning them into functional digital solutions through code and creativity.",
 nav: [
      { label: "homepage", href: "/" },
      { label: "About me", href: "/about" },
      { label: "Selected projects", href: "/projects" },
      { label: "Contact me", href: "/contact" },
    ],
    shareTitle: "Muhammad Habib rifai | Software engineer",
    copyright: "Muhammad Habib rifai",
  },

  
projects: [
  {
    id: "1",
    title: "Automatic Water Heater with Blynk",
    description:
      "An IoT-based automatic water heater using ESP32 and DS18B20 temperature sensor with remote monitoring and control through Blynk.",
    longDescription:
      "This project implements an automatic water heating system using ESP32 and a DS18B20 temperature sensor. A relay controls the heating element based on the detected water temperature. The system also integrates with Blynk to support remote monitoring and manual control.",
    role: "IoT Developer",
    image: "/projects/pemanas-air.png",
    tags: [
      "ESP32",
      "Arduino",
      "DS18B20",
      "Relay",
      "Blynk",
      "IoT"
    ],
    liveUrl: "https://ojs.udb.ac.id/Senatib/article/view/5480/3681",
    githubUrl:
      "https://github.com/bebbb29/pemanas-air-otomatis-dengan-blynk",
    featured: true,
  },
  {
    id: "2",
    title: "FC Barcelona Performance Analysis",
    description:
      "A football match performance analysis application using K-Means clustering to identify different team performance patterns.",
    longDescription:
      "This project analyzes FC Barcelona match statistics using the K-Means clustering algorithm. Match data is processed using Python and Scikit-learn, with StandardScaler, Elbow Method, and Silhouette Score. The application presents three performance clusters: Stable, Dominant, and Aggressive through an interactive Streamlit dashboard.",
    role: "Data Analyst & Developer",
    image: "/projects/barcelona-analysis.png",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "Data Visualization"
    ],
    liveUrl: "https://ejournal.itn.ac.id/jati/article/view/19089/10081",
    githubUrl: "https://github.com/bebbb29/analysis-performa-Fc-barcelona.git",
    featured: true,
  },
  {
    id: "3",
    title: "Scholarship Information Application",
    description:
      "A mobile application designed to provide accessible scholarship information using Flutter.",
    longDescription:
      "This project is a mobile application developed using Flutter and Dart. It focuses on presenting scholarship information in an accessible format and demonstrates the development of mobile application interfaces and functionality.",
    role: "Mobile App Developer",
    image: "/projects/beasiswa.png",
    tags: [
      "Flutter",
      "Dart",
      "Mobile Development"
    ],
    liveUrl: null,
    githubUrl:
      "https://github.com/bebbb29/Aplikasi-informasi-beasiswa-flutter",
    featured: true,
  },
  {
    id: "4",
    title: "Network Disruption Reporting System",
    description:
      "A web application design concept for managing network disruption reports during an internship at Telkom Akses.",
    longDescription:
      "This project focuses on designing a web-based network disruption reporting system. The work includes system requirements analysis, business process modeling, UML diagrams, database design, wireframes, and interactive prototypes using Figma. The project scope covers system planning and UI/UX design rather than full application development.",
    role: "System Analyst & UI/UX Designer",
    image: "/projects/network-reporting.jpeg",
    tags: [
      "Figma",
      "UI/UX",
      "UML",
      "Use Case Diagram",
      "Flowchart",
      "Database Design"
    ],
    liveUrl: "https://www.figma.com/design/SPoOeax1ifC1nqmUMm5mRo/laprak",
    githubUrl: null,
    featured: true,
  },
  {
  id: "5",
  title: "Portal Indonesia",
  description:
    "A web-based platform designed to present information about Indonesia through an accessible and user-friendly interface.",
  longDescription:
    "Portal Indonesia is a web development project focused on presenting Indonesian-related information through a centralized website. This project demonstrates my experience in building web interfaces, organizing content, and developing functional website features.",
  role: "Web Developer",
  image: "/projects/portal.png",
  tags: [
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  liveUrl: null,
  githubUrl: "https://github.com/reinzzy/portal-indonesia",
  featured: true,
},
{
  id: "6",
  title: "Dimpil Food",
  description:
    "A food-related digital project focused on providing a practical and accessible user experience.",
  longDescription:
    "Dimpil Food is a development project that demonstrates the application of software development concepts in the food and culinary domain.",
  role: "Developer",
  image: "/projects/dimpil-food.png",
  tags: ["Web Development", "Application Development"],
  liveUrl: "https://jurnal.portalpublikasi.id/index.php/JORAPI/article/view/559/388",
  githubUrl: "https://github.com/bebbb29/dimpil-food",
  featured: true,
}
],


  projectsPage: {
    kicker: "Selected work",
    heading: [
      { text: "Selected projects," },
      { text: "built to solve" },
      { text: "real problems.", gradient: true },
    ],
    description:
      "A collection of software development projects covering web and mobile applications, data analysis, IoT solutions, and system design.",
    indexCard: {
      title: "Work index",
      countLabel: "Selected projects",
      focusLabel: "Primary Focus",
      focusValue: "Software Development",
      toolsLabel: "Technologies",
      toolsValue: "PHP · Python · Flutter · ESP32", 
      footer: "From product interfaces to practical web applications.",
    },
    moreText:
      "More experiments, prototypes, and older work live on GitHub.",
    moreCtaLabel: "Explore more on GitHub",
  },

  aboutPage: {
    profileBadge: "Profile",
    introductionTitle: "Introduction",
    experienceTitle: "Work Experience",
    educationTitle: "Education",
    skillsTitle: "Technical Skills",
  },

  contactPage: {
    kicker: "Let’s connect",
    heading: [
      { text: "Let’s build" },
      { text: "something useful", gradient: true },
    ],
    intro:
      "Interested in working together or discussing technology? Feel free to reach out. I'm open to opportunities, collaborations, and new challenges.",
    imageBadge: "Let's Talk",
    emailCardTitle: "Get in touch",
    emailCardText:
      "THave a project or opportunity in mind? Send me an email. I'd be happy to connect. ",
    responseTime: "I'll get back to you as soon as possible",
    basedInBody: "Weru,Sukoharjo.",
    timezoneBody: "UTC+7. Usually online from 9 AM to 7 PM.",
    takeActionTitle: "Find me online",
    takeActionText: "Explore my projects and connect with me through these platforms.",
    actions: [
      {
        title: "View GitHub",
        body: "Explore repositories and recent code.",
        href: "https://github.com/bebbb29",
        icon: "Github",
      },
      {
        title: "Connect on LinkedIn",
        body: "View my professional profile and experience.",
        href: "https://www.linkedin.com/in/muhammad-habib-rifai-904774446?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: "Linkedin",
      },
      {
        title: "Follow on Instagram",
        body: "See updates and moments beyond work.",
        href: "https://www.instagram.com/_r.paiii?srtk=NHF6aXdhemt0aTE0",
        icon: "Instagram",
      },
    ],
  },

  openGraph: {
    home: {
      role: "Software Engineer",
      description:
        "Personal portfolio showcasing software development projects, web applications, system design, and technology experiments.",
    },
    about: {
      subtitle: "About me",
      description:
        "Learn more about my background, education, experience, and technical skills in Informatics Engineering.",
    },
    projects: {
      subtitle: "Projects",
      description: "Explore projects in web development, mobile applications, system design, data analysis, and IoT.",
    },
    contact: {
      subtitle: "Contact",
      description:
        "Get in touch for professional opportunities, collaborations, and technology projects.",
    },
  },

  sections: {
    about: true,
    projects: true,
    contact: true,
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showPrinciples: true,
    showAvailability: true,
    showHeroStats: true,
    projectLabels: {
      live: "Live demo",
      source: "Source",
    },
  },

  introduction: `
Lulusan S1 Teknik Informatika Universitas Duta Bangsa yang memiliki minat dalam bidang teknologi informasi serta pengembangan keterampilan profesional. Memiliki pengalaman dalam perancangan sistem, pengembangan aplikasi berbasis web dan mobile, desain UI/UX, serta proyek Internet of Things (IoT). Memahami dasar pemrograman, pengelolaan database, dan analisis kebutuhan sistem. Memiliki kemampuan berpikir analitis, problem solving, komunikasi, serta mampu bekerja secara individu maupun tim. Pribadi yang adaptif, disiplin, dan bertanggung jawab, dengan motivasi tinggi untuk terus belajar, mengembangkan kemampuan, serta memberikan kontribusi positif bagi perusahaan.
`,

  workExperience: [
    {
      title: "Magang Internship",
      company: "Telkom Akses solo",
      period: "Agustus - Desember 2025",
      description:
        "Melaksanakan kegiatan magang dengan berfokus pada perancangan sistem informasi dan pengembangan konsep aplikasi berbasis web untuk mendukung proses operasional perusahaan. Terlibat dalam analisis kebutuhan sistem, perancangan alur proses bisnis, serta pembuatan desain antarmuka aplikasi menggunakan Figma..",
    },
  ],

  education: [
    {
      title: "Teknik Informatika",
      school: "Universitas Duta Bangsa Surakarta",
      info: "Lulus",
      current: false,
    },
    {
      title: "Sekolah Menengah Kejuruan",
      school: "SMK IPTEK Weru",
    },
  ],

  skills: {
    frontend: ["React", "Next.js", "css",],
    webdevelopment: ["Node.js", "php", "Laravel", "html"],
    tools: ["Git", "Github", "Figma", "Xampp", "VScode"],
    iot :["ESP32", "ARDUINO", "BLYNK"],
    DataAnalys :["python", "pandas", "Scikit-learn", "Streamlit"],
  },
};

export default portfolio;
