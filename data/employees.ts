// Types for employee data
export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  year: number;
  status: 'completed' | 'in-progress' | 'planned';
  duration: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  team: string;
  location: string;
  avatar: string;
  meowline: string;
  skills: Skill[];
  currentProjects: Project[];
  pastProjects: Project[];
  futureProjects?: Project[];
  funFact: string;
  catNickname: string;
}

// Mock data for employees
export const employees: Employee[] = [
  {
    id: '1',
    name: 'Prince Kukreja',
    role: 'Frontend Developer',
    team: 'Web Development',
    location: 'Gurugram, INDIA',
    avatar:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    meowline: 'Turning coffee into purr-fect code since 2015',
    skills: [
      { id: '1', name: 'React', level: 'expert' },
      { id: '2', name: 'TypeScript', level: 'expert' },
      { id: '3', name: 'CSS/SASS', level: 'advanced' },
      { id: '4', name: 'React Native', level: 'intermediate' },
      { id: '5', name: 'GraphQL', level: 'intermediate' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'Orbit Four',
        description: 'Revamping the UX/UI of the PawsApp platform',
        techStack: ['Vue', 'NuxtJS', 'Tailwind', 'Styled Components'],
        year: 2025,
        status: 'in-progress',
        duration: '30 months',
      },
      {
        id: generateId(),
        name: 'Andy Egan',
        description: 'Revamping the UX/UI of the PawsApp platform',
        techStack: ['Angular', 'TypeScript', 'Styled Components'],
        year: 2025,
        status: 'in-progress',
        duration: '36 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'GT Independence Dashboard',
        description: 'Data visualization dashboard for cat behavior analytics',
        techStack: ['Vue', 'D3.js', 'Vuex'],
        year: 2024,
        status: 'completed',
        duration: '9 months',
      },
      {
        id: generateId(),
        name: 'Miller Johnson',
        description: 'Online store for premium cat products',
        techStack: ['React', 'Node.js', 'MongoDB'],
        year: 2023,
        status: 'completed',
        duration: '8 months',
      },
    ],
    futureProjects: [
      {
        id: generateId(),
        name: 'CatNap',
        description: 'Sleep tracking app for cat owners',
        techStack: ['React Native', 'Expo', 'Firebase'],
        year: 2022,
        status: 'planned',
        duration: '6 months',
      },
    ],
    funFact: 'Can type 120 WPM with just one paw',
    catNickname: 'The Code Pouncer',
  },
  {
    id: '2',
    name: 'Tyler Buell',
    role: 'Backend Developer',
    team: 'API Services',
    location: 'Detroit, Michigan',
    avatar:
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
    meowline: 'Building robust purr-formance APIs with naps in between',
    skills: [
      { id: '1', name: 'Node.js', level: 'expert' },
      { id: '2', name: 'Python', level: 'advanced' },
      { id: '3', name: 'MongoDB', level: 'advanced' },
      { id: '4', name: 'Docker', level: 'intermediate' },
      { id: '5', name: 'AWS', level: 'intermediate' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'Orbit Four Portal',
        description: 'Authentication microservice with OAuth support',
        techStack: ['Node.js', 'Express', 'JWT', 'MongoDB'],
        year: 2025,
        status: 'in-progress',
        duration: '4 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'K Promise',
        description: 'RESTful API for yarn inventory management',
        techStack: ['Python', 'FastAPI', 'PostgreSQL'],
        year: 2024,
        status: 'completed',
        duration: '5 months',
      },
    ],
    funFact: 'Once debugged code while sleeping',
    catNickname: 'The Backend Purrfessor',
  },
  {
    id: '3',
    name: 'Maddy Martin',
    role: 'UX/UI Designer',
    team: 'Design',
    location: 'Portland, OR',
    avatar: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
    meowline: 'Crafting pawsitively beautiful user experiences',
    skills: [
      { id: '1', name: 'Figma', level: 'expert' },
      { id: '2', name: 'Adobe XD', level: 'advanced' },
      { id: '3', name: 'Sketch', level: 'advanced' },
      { id: '4', name: 'User Research', level: 'advanced' },
      { id: '5', name: 'Prototyping', level: 'expert' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'MyObits App Design',
        description: 'Designing a social media app for cat lovers',
        techStack: ['Figma', 'Prototyping', 'User Testing'],
        year: 2025,
        status: 'in-progress',
        duration: '3 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'Rhumbix',
        description: 'E-commerce app for cat clothing',
        techStack: ['Adobe XD', 'Illustrator', 'InVision'],
        year: 2024,
        status: 'completed',
        duration: '4 months',
      },
    ],
    funFact: 'Can judge the quality of a design in 0.5 seconds',
    catNickname: 'The Design Claw',
  },
  {
    id: '4',
    name: 'Nate Goodman',
    role: 'DevOps Engineer',
    team: 'Infrastructure',
    location: 'Seattle, WA',
    avatar:
      'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg',
    meowline: 'Automating the litter box of deployment',
    skills: [
      { id: '1', name: 'Kubernetes', level: 'expert' },
      { id: '2', name: 'AWS', level: 'expert' },
      { id: '3', name: 'Terraform', level: 'advanced' },
      { id: '4', name: 'CI/CD', level: 'expert' },
      { id: '5', name: 'Linux', level: 'expert' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'Gitlab Pipeline',
        description: 'Automated CI/CD pipeline for multiple services',
        techStack: ['Jenkins', 'Kubernetes', 'Terraform'],
        year: 2025,
        status: 'in-progress',
        duration: '6 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'AWS Cluster',
        description: 'Kubernetes cluster for high-availability services',
        techStack: ['Kubernetes', 'Prometheus', 'Grafana'],
        year: 2024,
        status: 'completed',
        duration: '7 months',
      },
    ],
    funFact: 'Sleeps with a Kubernetes plushie',
    catNickname: 'The Deployment Tiger',
  },
  {
    id: '5',
    name: 'Bryan Garza',
    role: 'Full Stack Developer',
    team: 'Product Development',
    location: 'Chicago, IL',
    avatar: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    meowline: 'Coding from whiskers to tail, full stack purr-velopment',
    skills: [
      { id: '1', name: 'JavaScript', level: 'expert' },
      { id: '2', name: 'React', level: 'advanced' },
      { id: '3', name: 'Node.js', level: 'advanced' },
      { id: '4', name: 'PostgreSQL', level: 'intermediate' },
      { id: '5', name: 'AWS', level: 'intermediate' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'Meow Messenger',
        description: 'Real-time messaging application',
        techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        year: 2025,
        status: 'in-progress',
        duration: '5 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'Purr Portfolio',
        description: 'Portfolio site generator for cat professionals',
        techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
        year: 2024,
        status: 'completed',
        duration: '3 months',
      },
    ],
    funFact: 'Can recite the first 100 digits of Pi',
    catNickname: 'The Stack Scratcher',
  },
  {
    id: '6',
    name: 'Max Scratchington',
    role: 'QA Engineer',
    team: 'Quality Assurance',
    location: 'Boston, MA',
    avatar: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    meowline: 'Finding bugs before they hiss at the users',
    skills: [
      { id: '1', name: 'Selenium', level: 'expert' },
      { id: '2', name: 'Cypress', level: 'advanced' },
      { id: '3', name: 'Jest', level: 'advanced' },
      { id: '4', name: 'TestRail', level: 'intermediate' },
      { id: '5', name: 'JIRA', level: 'advanced' },
    ],
    currentProjects: [
      {
        id: generateId(),
        name: 'CatNap Test Suite',
        description: 'Automated testing framework for sleep tracking app',
        techStack: ['Cypress', 'TestRail', 'GitHub Actions'],
        year: 2025,
        status: 'in-progress',
        duration: '4 months',
      },
    ],
    pastProjects: [
      {
        id: generateId(),
        name: 'Litter Bug Tracker',
        description: 'Issue tracking and test case management system',
        techStack: ['JavaScript', 'Node.js', 'MongoDB'],
        year: 2024,
        status: 'completed',
        duration: '6 months',
      },
    ],
    funFact: 'Has a collection of 42 rubber bugs',
    catNickname: 'The Bug Hunter',
  },
];

// Get all unique skills
export const getAllSkills = (): string[] => {
  const skillsSet = new Set<string>();
  
  employees.forEach(employee => {
    employee.skills.forEach(skill => {
      skillsSet.add(skill.name);
    });
  });
  
  return Array.from(skillsSet).sort();
};

// Get all unique tech stack items
export const getAllTechStack = (): string[] => {
  const techStackSet = new Set<string>();
  
  employees.forEach(employee => {
    [
      ...employee.currentProjects,
      ...employee.pastProjects,
      ...(employee.futureProjects || []),
    ].forEach((project) => {
      project.techStack.forEach((tech) => {
        techStackSet.add(tech);
      });
    });
  });
  
  return Array.from(techStackSet).sort();
};

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}