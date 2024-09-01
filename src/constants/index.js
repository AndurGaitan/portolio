import { logoTuki, agdev, logoSC, intensiveCare } from "../assets/images";
import {
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Tuki Marketing",
        icon: logoTuki,
        iconBg: "#accbe1",
        date: "Julio 2024 - Actualmente",
            points: [
    "Desarrollar y mantener aplicaciones web utilizando React.js, Wordpress y otras tecnologías relacionadas.",
    "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
    "Implementar diseño responsive y asegurar la compatibilidad entre navegadores.",
    "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
    },
    {
        title: "Web Developer FullStack",
        company_name: "Sanity Care",
        icon: logoSC,
        iconBg: "#D0D0D0",
        date: "Noviembre 2023 - Mayo 2024",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js, Node.js, MongoDB y otras tecnologías relacionadas.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre diferentes navegadores en proyectos freelance.",
            "Revisar código y ofrecer retroalimentación constructiva a otros desarrolladores cuando colaboro en proyectos conjuntos."
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Free Lance",
        icon: agdev,
        iconBg: "#003366",
        date: "Febrero 2024 - Actualidad",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React Native y otras tecnologías relacionadas.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre diferentes dispositivos.",
            "Implementacion de diseños 3D."
            ,
        ],
    },
    {
        title: "Web Developer FullStack",
        company_name: "Free Lance",
        icon: agdev,
        iconBg: "#1c1c1c",
        date: "Enero 2021 - Actualidad",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js, Node.js, MongoDB y otras tecnologías relacionadas.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre diferentes navegadores en proyectos freelance.",
            "Revisar código y ofrecer retroalimentación constructiva a otros desarrolladores cuando colaboro en proyectos conjuntos."
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AndurGaitan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/andr%C3%A9s-david-gait%C3%A1n-469864239',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Portfolio-3D',
        description: 'Desarrollé un portafolio interactivo usando React.js, Three.js y Tailwind CSS. React.js gestionó el estado y los componentes, Three.js añadió gráficos y animaciones 3D, y Tailwind CSS proporcionó un diseño moderno y responsivo. El resultado es un portafolio visualmente atractivo y funcional que resalta mis habilidades en desarrollo web y diseño interactivo',
        link: 'https://github.com/AndurGaitan',
    },
    {
        iconUrl: intensiveCare,
        theme: 'btn-back-blue',
        name: 'Intensive Care',
        description: 'Desarrollé una aplicación para gestionar pacientes críticos en terapia intensiva con React.js, Tailwind CSS, Node.js, MongoDB, Express.js y JWT. La app permite ingresar y procesar datos de pacientes, generando estadísticas útiles para los médicos y facilitando la investigación',
        link: 'https://github.com/AndurGaitan',
    },
];