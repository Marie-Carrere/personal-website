import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marie Carrere | Developer',
  lang: 'en, fr',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Marie',
  subtitle: 'I am a web developer working at Zenika',
  cta: 'Who Am I?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-image.png',
  paragraphOne: 'Creative and proactive full stack developer with a focus on the front-end.',
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'codepen',
      url: '',
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
