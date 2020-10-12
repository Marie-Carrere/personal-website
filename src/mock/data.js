import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marie Carrere | Web Developer',
  lang: 'en, fr',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Marie',
  subtitle: 'I am a Web Developer based in Paris 🇫🇷',
  cta: 'Who Am I?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-image.png',
  paragraphOne: 'Creative and proactive Web Developer with a focus on the front-end.',
  paragraphTwo:
    'I thrive to better the lives of all users throughout the use of technology innovation in an Agile environment. I am always looking for ways to grow as a developer and use my skills to positively impact others.',
  paragraphThree:
    'Being a big proponent of the JAMstack I preferably work with React JS and Gatsby JS, accompanied by a serverless architecture.',
  resume: 'https://www.linkedin.com/in/marie-carrere',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'laptop-screen.jpg',
    title: 'Consultant at Zenika',
    info:
      "I build robust and scalable front-end solutions using JS/TS/React. I work directly with the Marketing and UX/UI teams to understand end-user requirements and use cases. I translate design work into clean and performant front-end code, producing interfaces that strictly conform to mockups. I follow and maintain front-end coding conventions and documentation standards. I maintain and improve applications' quality via clear, thorough, easy-to-follow testing steps",
    info2: 'Coding is an outlet for my creativity and I seek to be constantly challenged',
    url: 'https://zenika.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'react-ecosystem.png',
    title: 'Proficient In',
    info: 'React - JavaScript - TypeScript - GraphQL - Git - Agile methodologies',
    info2: '',
    url: 'https://github.com/Marie-Carrere',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/carrere_marie',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marie-carrere',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Marie-Carrere',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
