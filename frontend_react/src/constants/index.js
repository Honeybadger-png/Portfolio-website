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
  ibm,
  cyber,
  ParsleySignIn,
  chatgpt,
  recipe,
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

export const tagsColor =[
  {
    color : "#FA332A"
  },
  {
    color : "#FAAE29"
  },
  {
    color : "#FA732F"
  },
  {
    color : "#FA1DD3"
  },
  {
    color : "#6A34FA"
  },
  {
    color : "#21FAD9"
  },
  {
    color : "#2F87FA"
  },
  {
    color : "#C328FA"
  },
  {
    color : "#FAF240"
  },
  {
    color : "#24FA22"
  },
]
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
    "Before diving into my projects I have taken some courses that helped me to improve my skills and knowledge about different technologies. I have taken courses in platforms like coursera and udemy. One of them was Full Stack Course provide by IBM. Also I had experience with Cyber Security Analist Programme. I have tried to Show certificates in my github repository. Also, Some small project that i have worked on while taking courses are also included in my repository. Also, I have React and Node.js certificates but i have improved my knowledge by watchirng tutorials and reading documentations.",
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
    images: [{image:ibm,title:"IBM Full Stack Developer Certificate",link:"https://github.com/Honeybadger-png/certificates/tree/main/Full%20stack%20developer%20courses%20certificates"},{image:cyber,title:"Cyber Security Analyst Certificates",link:"https://github.com/Honeybadger-png/certificates/tree/main/cyber%20security%20analist%20certificates"}],
    source_code_link: "https://github.com/Honeybadger-png/certificates",
  },
  {
    id:"Flutter",
    name: "Flutter Projects",
    description:
      "This project is made for my final project in my university. I aimed to learn mobile development and use my knowledge to make this project. In the first,I have tried to Kotlin but later I have decided to use Flutter. My idea was to make a app to help people to find healthy recipes. I wanted to create my own api service for recipes but it would make too much work for me. So, I have founda Edamam API and decided to use it. For authentication and other features I have used Firebase. It was easy to use but I have faced some problems while using it. And that cause me time so some features that I wanted couldn't be implemented. Other feature is ChatGPT. It was popular at that time and I wanted to implement it in my app and I achieved my goal. It created flexibility to app. I provided screenshots of my app and source code link. App is not live because API key and some other services needed to be renewed.    ",
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
    images: [{image:parsley,title:"Parsley App",link:"https://github.com/Honeybadger-png/Flutter-Projects"},{image:ParsleySignIn,title:"SignIn Page",link:""},{image:recipe,title:"Recipe Page",link:""},{image:chatgpt,title:"ChatGPT Page",link:""}],
    source_code_link: "https://github.com/Honeybadger-png/Flutter-Projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
