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
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
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
