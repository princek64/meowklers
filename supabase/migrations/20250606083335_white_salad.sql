/*
  # Migrate employee data from static file to Supabase

  1. Data Migration
    - Insert all employees with proper UUIDs
    - Insert all skills
    - Insert all projects with tech stacks
    - Link employees to skills with proficiency levels
    - Link employees to projects with project types

  2. Complete Data Set
    - 6 employees with full profiles
    - 27 unique skills
    - Multiple projects per employee
    - Tech stack associations
    - Employee-skill relationships with levels
    - Employee-project relationships with types
*/

-- Insert employees with proper UUIDs
INSERT INTO employees (id, name, role, team, location, avatar, meowline, fun_fact, cat_nickname)
VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Prince Kukreja', 'Frontend Developer', 'Web Development', 'Gurugram, INDIA', 'https://cdn.pixabay.com/photo/2024/08/01/11/26/animal-8936898_960_720.jpg', 'Turning coffee into purr-fect code!', 'Can type 120 WPM with just one paw', 'The Code Pouncer'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Tyler Buell', 'Backend Developer', 'API Services', 'Detroit, Michigan', 'https://cdn.pixabay.com/photo/2020/11/15/18/31/cat-5746771_1280.png', 'Building robust purr-formance APIs with naps in between', 'Once debugged code while sleeping', 'The Backend Purrfessor'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Maddy Martin', 'UX/UI Designer', 'Design', 'Portland, OR', 'https://cdn.pixabay.com/photo/2024/08/13/10/12/ai-generated-8965656_1280.png', 'Crafting pawsitively beautiful user experiences', 'Can judge the quality of a design in 0.5 seconds', 'The Design Claw'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Nate Goodman', 'DevOps Engineer', 'Infrastructure', 'Seattle, WA', 'https://cdn.pixabay.com/photo/2019/09/22/04/48/cat-4495099_1280.png', 'Automating the litter box of deployment', 'Sleeps with a Kubernetes plushie', 'The Deployment Tiger'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Bryan Garza', 'Full Stack Developer', 'Product Development', 'Chicago, IL', 'https://cdn.pixabay.com/photo/2025/05/16/01/25/cat-9602849_1280.png', 'Coding from whiskers to tail, full stack purr-velopment', 'Can recite the first 100 digits of Pi', 'The Stack Scratcher'),
  ('550e8400-e29b-41d4-a716-446655440006', 'Spencer Deering', 'QA Engineer', 'Quality Assurance', 'Boston, MA', 'https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png', 'Finding bugs before they hiss at the users', 'Has a collection of 42 rubber bugs', 'The Bug Hunter');

-- Insert skills with predefined UUIDs for referencing
INSERT INTO skills (id, name)
VALUES
  ('650e8400-e29b-41d4-a716-446655440001', 'React'),
  ('650e8400-e29b-41d4-a716-446655440002', 'Vue'),
  ('650e8400-e29b-41d4-a716-446655440003', 'TypeScript'),
  ('650e8400-e29b-41d4-a716-446655440004', 'Tailwind'),
  ('650e8400-e29b-41d4-a716-446655440005', 'React Native'),
  ('650e8400-e29b-41d4-a716-446655440006', 'Angular'),
  ('650e8400-e29b-41d4-a716-446655440007', 'Node.js'),
  ('650e8400-e29b-41d4-a716-446655440008', 'Python'),
  ('650e8400-e29b-41d4-a716-446655440009', 'MongoDB'),
  ('650e8400-e29b-41d4-a716-446655440010', 'Docker'),
  ('650e8400-e29b-41d4-a716-446655440011', 'AWS'),
  ('650e8400-e29b-41d4-a716-446655440012', 'Figma'),
  ('650e8400-e29b-41d4-a716-446655440013', 'Adobe XD'),
  ('650e8400-e29b-41d4-a716-446655440014', 'Sketch'),
  ('650e8400-e29b-41d4-a716-446655440015', 'User Research'),
  ('650e8400-e29b-41d4-a716-446655440016', 'Prototyping'),
  ('650e8400-e29b-41d4-a716-446655440017', 'Kubernetes'),
  ('650e8400-e29b-41d4-a716-446655440018', 'Terraform'),
  ('650e8400-e29b-41d4-a716-446655440019', 'CI/CD'),
  ('650e8400-e29b-41d4-a716-446655440020', 'Linux'),
  ('650e8400-e29b-41d4-a716-446655440021', 'JavaScript'),
  ('650e8400-e29b-41d4-a716-446655440022', 'PostgreSQL'),
  ('650e8400-e29b-41d4-a716-446655440023', 'Selenium'),
  ('650e8400-e29b-41d4-a716-446655440024', 'Cypress'),
  ('650e8400-e29b-41d4-a716-446655440025', 'Jest'),
  ('650e8400-e29b-41d4-a716-446655440026', 'TestRail'),
  ('650e8400-e29b-41d4-a716-446655440027', 'JIRA'),
  ('650e8400-e29b-41d4-a716-446655440028', 'NuxtJS'),
  ('650e8400-e29b-41d4-a716-446655440029', 'Styled Components'),
  ('650e8400-e29b-41d4-a716-446655440030', 'Material UI'),
  ('650e8400-e29b-41d4-a716-446655440031', 'D3.js'),
  ('650e8400-e29b-41d4-a716-446655440032', 'Vuex'),
  ('650e8400-e29b-41d4-a716-446655440033', 'Express'),
  ('650e8400-e29b-41d4-a716-446655440034', 'JWT'),
  ('650e8400-e29b-41d4-a716-446655440035', 'FastAPI'),
  ('650e8400-e29b-41d4-a716-446655440036', 'Illustrator'),
  ('650e8400-e29b-41d4-a716-446655440037', 'InVision'),
  ('650e8400-e29b-41d4-a716-446655440038', 'Jenkins'),
  ('650e8400-e29b-41d4-a716-446655440039', 'Prometheus'),
  ('650e8400-e29b-41d4-a716-446655440040', 'Grafana'),
  ('650e8400-e29b-41d4-a716-446655440041', 'Socket.io'),
  ('650e8400-e29b-41d4-a716-446655440042', 'Next.js'),
  ('650e8400-e29b-41d4-a716-446655440043', 'Tailwind CSS'),
  ('650e8400-e29b-41d4-a716-446655440044', 'Vercel'),
  ('650e8400-e29b-41d4-a716-446655440045', 'GitHub Actions'),
  ('650e8400-e29b-41d4-a716-446655440046', 'Expo'),
  ('650e8400-e29b-41d4-a716-446655440047', 'Supabase');

-- Insert projects with predefined UUIDs
INSERT INTO projects (id, name, description, year, status, duration)
VALUES
  ('750e8400-e29b-41d4-a716-446655440001', 'Orbit Four', 'Revamping the UX/UI of the Orbit Four platform', 2025, 'in-progress', '30 months'),
  ('750e8400-e29b-41d4-a716-446655440002', 'Andy Egan', 'Revamping the UX/UI of the PawsApp platform', 2025, 'in-progress', '36 months'),
  ('750e8400-e29b-41d4-a716-446655440003', 'GT Independence Dashboard', 'Data visualization dashboard for cat behavior analytics', 2024, 'completed', '9 months'),
  ('750e8400-e29b-41d4-a716-446655440004', 'Miller Johnson', 'Online store for premium cat products', 2023, 'completed', '8 months'),
  ('750e8400-e29b-41d4-a716-446655440005', 'MyObits App', 'Sleep tracking app for cat owners', 2022, 'planned', '6 months'),
  ('750e8400-e29b-41d4-a716-446655440006', 'Orbit Four Portal', 'Authentication microservice with OAuth support', 2025, 'in-progress', '4 months'),
  ('750e8400-e29b-41d4-a716-446655440007', 'Kalamazoo Promise', 'RESTful API for yarn inventory management', 2024, 'completed', '5 months'),
  ('750e8400-e29b-41d4-a716-446655440008', 'Burgess Concrete App Design', 'Designing a social media app for cat lovers', 2025, 'in-progress', '3 months'),
  ('750e8400-e29b-41d4-a716-446655440009', 'Rhumbix', 'E-commerce app for cat clothing', 2024, 'completed', '4 months'),
  ('750e8400-e29b-41d4-a716-446655440010', 'Gitlab Pipeline', 'Automated CI/CD pipeline for multiple services', 2025, 'in-progress', '6 months'),
  ('750e8400-e29b-41d4-a716-446655440011', 'AWS Cluster', 'Kubernetes cluster for high-availability services', 2024, 'completed', '7 months'),
  ('750e8400-e29b-41d4-a716-446655440012', 'Manzana', 'Real-time messaging application', 2025, 'in-progress', '5 months'),
  ('750e8400-e29b-41d4-a716-446655440013', 'FixtureWorks', 'Portfolio site generator for cat professionals', 2024, 'completed', '3 months'),
  ('750e8400-e29b-41d4-a716-446655440014', 'Mall City Mechanical', 'Automated testing framework for sleep tracking app', 2025, 'in-progress', '4 months'),
  ('750e8400-e29b-41d4-a716-446655440015', 'Robert Clancy Contracting', 'Issue tracking and test case management system', 2024, 'completed', '6 months');

-- Link employees with their skills (Prince Kukreja)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440001', 'intermediate'), -- React
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440002', 'expert'), -- Vue
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440003', 'expert'), -- TypeScript
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440004', 'advanced'), -- Tailwind
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440005', 'intermediate'), -- React Native
  ('550e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440006', 'intermediate'); -- Angular

-- Link employees with their skills (Tyler Buell)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440007', 'expert'), -- Node.js
  ('550e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440008', 'advanced'), -- Python
  ('550e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440009', 'advanced'), -- MongoDB
  ('550e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440010', 'intermediate'), -- Docker
  ('550e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440011', 'intermediate'); -- AWS

-- Link employees with their skills (Maddy Martin)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440012', 'expert'), -- Figma
  ('550e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440013', 'advanced'), -- Adobe XD
  ('550e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440014', 'advanced'), -- Sketch
  ('550e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440015', 'advanced'), -- User Research
  ('550e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440016', 'expert'); -- Prototyping

-- Link employees with their skills (Nate Goodman)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440017', 'expert'), -- Kubernetes
  ('550e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440011', 'expert'), -- AWS
  ('550e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440018', 'advanced'), -- Terraform
  ('550e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440019', 'expert'), -- CI/CD
  ('550e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440020', 'expert'); -- Linux

-- Link employees with their skills (Bryan Garza)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440021', 'expert'), -- JavaScript
  ('550e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440001', 'advanced'), -- React
  ('550e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440007', 'advanced'), -- Node.js
  ('550e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440022', 'intermediate'), -- PostgreSQL
  ('550e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440011', 'intermediate'); -- AWS

-- Link employees with their skills (Spencer Deering)
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('550e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440023', 'expert'), -- Selenium
  ('550e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440024', 'advanced'), -- Cypress
  ('550e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440025', 'advanced'), -- Jest
  ('550e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440026', 'intermediate'), -- TestRail
  ('550e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440027', 'advanced'); -- JIRA

-- Link projects with their tech stack
INSERT INTO project_tech_stack (project_id, tech_name)
VALUES
  -- Orbit Four
  ('750e8400-e29b-41d4-a716-446655440001', 'Vue'),
  ('750e8400-e29b-41d4-a716-446655440001', 'NuxtJS'),
  ('750e8400-e29b-41d4-a716-446655440001', 'Tailwind'),
  ('750e8400-e29b-41d4-a716-446655440001', 'Styled Components'),
  -- Andy Egan
  ('750e8400-e29b-41d4-a716-446655440002', 'Angular'),
  ('750e8400-e29b-41d4-a716-446655440002', 'TypeScript'),
  ('750e8400-e29b-41d4-a716-446655440002', 'Styled Components'),
  -- GT Independence Dashboard
  ('750e8400-e29b-41d4-a716-446655440003', 'Vue'),
  ('750e8400-e29b-41d4-a716-446655440003', 'D3.js'),
  ('750e8400-e29b-41d4-a716-446655440003', 'Vuex'),
  -- Miller Johnson
  ('750e8400-e29b-41d4-a716-446655440004', 'React'),
  ('750e8400-e29b-41d4-a716-446655440004', 'Material UI'),
  ('750e8400-e29b-41d4-a716-446655440004', 'Node.js'),
  ('750e8400-e29b-41d4-a716-446655440004', 'MongoDB'),
  -- MyObits App
  ('750e8400-e29b-41d4-a716-446655440005', 'React Native'),
  ('750e8400-e29b-41d4-a716-446655440005', 'Expo'),
  ('750e8400-e29b-41d4-a716-446655440005', 'Supabase'),
  -- Orbit Four Portal
  ('750e8400-e29b-41d4-a716-446655440006', 'Node.js'),
  ('750e8400-e29b-41d4-a716-446655440006', 'Express'),
  ('750e8400-e29b-41d4-a716-446655440006', 'JWT'),
  ('750e8400-e29b-41d4-a716-446655440006', 'MongoDB'),
  -- Kalamazoo Promise
  ('750e8400-e29b-41d4-a716-446655440007', 'Python'),
  ('750e8400-e29b-41d4-a716-446655440007', 'FastAPI'),
  ('750e8400-e29b-41d4-a716-446655440007', 'PostgreSQL'),
  -- Burgess Concrete App Design
  ('750e8400-e29b-41d4-a716-446655440008', 'Figma'),
  ('750e8400-e29b-41d4-a716-446655440008', 'Prototyping'),
  ('750e8400-e29b-41d4-a716-446655440008', 'User Testing'),
  -- Rhumbix
  ('750e8400-e29b-41d4-a716-446655440009', 'Adobe XD'),
  ('750e8400-e29b-41d4-a716-446655440009', 'Illustrator'),
  ('750e8400-e29b-41d4-a716-446655440009', 'InVision'),
  -- Gitlab Pipeline
  ('750e8400-e29b-41d4-a716-446655440010', 'Jenkins'),
  ('750e8400-e29b-41d4-a716-446655440010', 'Kubernetes'),
  ('750e8400-e29b-41d4-a716-446655440010', 'Terraform'),
  -- AWS Cluster
  ('750e8400-e29b-41d4-a716-446655440011', 'Kubernetes'),
  ('750e8400-e29b-41d4-a716-446655440011', 'Prometheus'),
  ('750e8400-e29b-41d4-a716-446655440011', 'Grafana'),
  -- Manzana
  ('750e8400-e29b-41d4-a716-446655440012', 'React'),
  ('750e8400-e29b-41d4-a716-446655440012', 'Node.js'),
  ('750e8400-e29b-41d4-a716-446655440012', 'Socket.io'),
  ('750e8400-e29b-41d4-a716-446655440012', 'MongoDB'),
  -- FixtureWorks
  ('750e8400-e29b-41d4-a716-446655440013', 'Next.js'),
  ('750e8400-e29b-41d4-a716-446655440013', 'Tailwind CSS'),
  ('750e8400-e29b-41d4-a716-446655440013', 'Vercel'),
  -- Mall City Mechanical
  ('750e8400-e29b-41d4-a716-446655440014', 'Cypress'),
  ('750e8400-e29b-41d4-a716-446655440014', 'TestRail'),
  ('750e8400-e29b-41d4-a716-446655440014', 'GitHub Actions'),
  -- Robert Clancy Contracting
  ('750e8400-e29b-41d4-a716-446655440015', 'JavaScript'),
  ('750e8400-e29b-41d4-a716-446655440015', 'Node.js'),
  ('750e8400-e29b-41d4-a716-446655440015', 'MongoDB');

-- Link employees with their projects
INSERT INTO employee_projects (employee_id, project_id, project_type)
VALUES
  -- Prince Kukreja projects
  ('550e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440001', 'current'), -- Orbit Four
  ('550e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440002', 'current'), -- Andy Egan
  ('550e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440003', 'past'), -- GT Independence Dashboard
  ('550e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440004', 'past'), -- Miller Johnson
  ('550e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440005', 'future'), -- MyObits App
  -- Tyler Buell projects
  ('550e8400-e29b-41d4-a716-446655440002', '750e8400-e29b-41d4-a716-446655440006', 'current'), -- Orbit Four Portal
  ('550e8400-e29b-41d4-a716-446655440002', '750e8400-e29b-41d4-a716-446655440007', 'past'), -- Kalamazoo Promise
  -- Maddy Martin projects
  ('550e8400-e29b-41d4-a716-446655440003', '750e8400-e29b-41d4-a716-446655440008', 'current'), -- Burgess Concrete App Design
  ('550e8400-e29b-41d4-a716-446655440003', '750e8400-e29b-41d4-a716-446655440009', 'past'), -- Rhumbix
  -- Nate Goodman projects
  ('550e8400-e29b-41d4-a716-446655440004', '750e8400-e29b-41d4-a716-446655440010', 'current'), -- Gitlab Pipeline
  ('550e8400-e29b-41d4-a716-446655440004', '750e8400-e29b-41d4-a716-446655440011', 'past'), -- AWS Cluster
  -- Bryan Garza projects
  ('550e8400-e29b-41d4-a716-446655440005', '750e8400-e29b-41d4-a716-446655440012', 'current'), -- Manzana
  ('550e8400-e29b-41d4-a716-446655440005', '750e8400-e29b-41d4-a716-446655440013', 'past'), -- FixtureWorks
  -- Spencer Deering projects
  ('550e8400-e29b-41d4-a716-446655440006', '750e8400-e29b-41d4-a716-446655440014', 'current'), -- Mall City Mechanical
  ('550e8400-e29b-41d4-a716-446655440006', '750e8400-e29b-41d4-a716-446655440015', 'past'); -- Robert Clancy Contracting