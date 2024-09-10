import project1 from "../assets/projects/project-1.jpg";
import nasa_logo from  "../assets/nasalogo.png";
import calculator from  "../assets/calculator.png";
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
    year: "May 2023 - Present",
    role: "IT Consultant",
    company: "EDISA",
    description: "Consulting in the area of financial ERP, with experience in the implementation,customization, and optimization of solutions related to purchasing, sales, invoices,shipping notes, accounting, warehouse management, stock management, andeverything related to company management. Experience in developing and using PL/SQL in Oracle databases for ERP-relatedinformation processing.",
    technologies: ["ERP Libra", "Oracle PL/SQL"],
  },
  {
    year: "July 2022 - April 2023",
    role: "Junior ITSM Consultant",
    company: "AMBIT BST",
    description: `Development of a user portal with HTML and CSS, through the use of the Easyvista Service Apps platform. Use of Microsoft SQL Server Management tools for project data management. Configuration of project-related information using EasyVista Service Manager.
    Obtained the Fundamentals Certification from EasyVista.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "March 2019 -  October 2021",
    role: "Infraestructure System Technician",
    company: "Everis an NTT Data Company",
    description: `At Mutua Madrileña:
    Administration of project and team management tools (Atlassian JIRA and Confluence).
    Creation of processes and definition of SLAs. Execution and review of reports.
    Reporting in Power BI. Management of CMDB-related Configuration Items (CIs).
    Support and participation in preparing the annual IT infrastructure     budget.                                    
    At Mapfre:
    Administration of Operators, Roles, and Groups in Service Manager and IT ticketing. Extraction, execution, and reporting on incidents.
    Knowledge in Mapfre reporting (CaX and BOE reports with Crystal and SQL).
    In relation to the projects:
    Knowledge and experience in Big Data: Hadoop, Cloudera Manager, Batch, Architectures (Sqoop, NIFI, Spark, HDFS, HBase, Hive)
    `,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];
 
export const PROJECTS = [
  {
    title: "React Calculator", 
    image: calculator,
    description:
      "An application that mimics the procedure of a calculator, but without using libraries related to calculation. All using react principles.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Nasa APi MERN",
    image: nasa_logo,
    description:
      "NASA application, which contains a map with detailed information about asteroids, as well as a store to purchase the desired asteroids",
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

export const EXTRA = [{
    texto: `English: Intermediate Level (B1).`},
  { texto:`Driving license B (2013)` },
  { texto:`ITIL V4 Foundation Certified and EasyVista Foundations`},
  { texto:`Experience in projects using Agile methodologies (Scrum and Kanban)`},
];


export const CONTACT = {
  linkedin: "https://www.linkedin.com/in/alberto-rodriguez-garcia-904074161/",
  phoneNo: "+34 661065256",
  email: "futberto1993@gmail.com",
};
