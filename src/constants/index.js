import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  asumona,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  laravel,
  blender,
  parsley,
  courses,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const detailLinks = [
  {
    id:"home",
    link:"/",
    title:"Home"
  }
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Blender 3D",
    icon: blender,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Laravel Developer Intern",
    company_name: "Asumona",
    icon: asumona,
    iconBg: "#383E56",
    date: "February 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Designing and applying designs to the web applications using figma, css and related tools.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in meetings and providing constructive feedback to my mentors.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id:"Certificates",
    name: "My Certificates",
    description:
    "In my journey, I have taken some courses and their certificates can be reached from my github link.",
    tags: [
      {
        name: "IBM Full Stack Course",
        color: "blue-text-gradient",
      },
      {
        name: "Cyber Security Analist Programme",
        color: "green-text-gradient",
      },
    ],
    image: courses,
    images: [{image:courses,title:"screenshot"},{image:starbucks,title:"screenshot2"}],
    source_code_link: "https://github.com/Honeybadger-png/certificates",
  },
  {
    id:"Flutter",
    name: "Flutter Projects",
    description:
      "All my Flutter projects source codes can be seen from my github link.Also repository includes little porjects that i have worked on while learning Flutter.My project called Parsley to help people for their daily meal plans.I have used Edamam API to reach recipes from different cuisines.Also, I designed chatbot for users to interact with ChatGPT to help to acces different solutions for their problem.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Edamam API",
        color: "green-text-gradient",
      },
    ],
    image: parsley,
    images: [{image:parsley,title:"screenshot"},{image:starbucks,title:"screenshot2"}],
    source_code_link: "https://github.com/Honeybadger-png/Flutter-Projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
