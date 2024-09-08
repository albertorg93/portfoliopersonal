import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/Project_AR.png";
import project6 from "../assets/pokeapi.png";

export const HERO_CONTENT = `My name is Alberto, I am 31 years old and I like Full Stack Web Development and everything related to programming.
My training as Developer was at The Bridge School, in Madrid, with a 480hours Bootcamp.
I also have a higher degree in Network Information Systems Administration(two-years course).
Therefore, my knowledge is:
HTML5, CSS3, JavaScript. React, Express. Bootstrap, MERN.
Backend: MySQL, NodeJS and MongoDB.
In systems and networks: Phyton, php, Cisco packet tracer, wireshark, powershell, bash, cryptography.
I like learning languages too and, as a curious fact, I was close to getting HSK2 Chinese title.`;

export const ABOUT_TEXT = `As a passionate and dedicated software developer, I thrive on solving complex problems and transforming ideas into innovative solutions. I have a keen ability to design, dev>elop, and implement scalable software applications.
I work across the full software development lifecycle, from initial requirements gathering to deployment and maintenance. My experience includes front-end and back-end development, database management, and system integration, which allows me to deliver user-centric applications.
In addition, I have a collaborative mindset and great communication abilities, enabling me to work effectively within cross-functional teams. I attem to learn new technologies and stay updated with industry trends, which are always innovating.
I continuously seek opportunities to refine my craft and contribute to meaningful projects. Whether working on individual assignments or as part of a team, I bring creativity, precision, and a problem-solving attitude to every task.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "PokeAPi Project",
    image: project6,
    description:
      "Pokeapi project that brings information about pokemons, using html css and javascript",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  linkedin: "https://www.linkedin.com/in/alberto-rodriguez-garcia-904074161/",
  phoneNo: "+34 661065256",
  email: "futberto1993@gmail.com",
};
