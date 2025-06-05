/*
  # Insert initial data

  1. New Data
    - Insert employees with their details
    - Insert skills and link them to employees
    - Insert projects and their tech stack
    - Link employees with their projects

  2. Data Structure
    - All IDs use UUID type
    - Proper foreign key relationships
    - Maintains data integrity
*/

-- Insert employees
INSERT INTO employees (id, name, role, team, location, avatar, meowline, fun_fact, cat_nickname)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'Prince Kukreja', 'Frontend Developer', 'Web Development', 'Gurugram, INDIA', 'https://cdn.pixabay.com/photo/2024/08/01/11/26/animal-8936898_960_720.jpg', 'Turning coffee into purr-fect code!', 'Can type 120 WPM with just one paw', 'The Code Pouncer'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0852', 'Tyler Buell', 'Backend Developer', 'API Services', 'Detroit, Michigan', 'https://cdn.pixabay.com/photo/2020/11/15/18/31/cat-5746771_1280.png', 'Building robust purr-formance APIs with naps in between', 'Once debugged code while sleeping', 'The Backend Purrfessor'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0853', 'Maddy Martin', 'UX/UI Designer', 'Design', 'Portland, OR', 'https://cdn.pixabay.com/photo/2024/08/13/10/12/ai-generated-8965656_1280.png', 'Crafting pawsitively beautiful user experiences', 'Can judge the quality of a design in 0.5 seconds', 'The Design Claw'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0854', 'Nate Goodman', 'DevOps Engineer', 'Infrastructure', 'Seattle, WA', 'https://cdn.pixabay.com/photo/2019/09/22/04/48/cat-4495099_1280.png', 'Automating the litter box of deployment', 'Sleeps with a Kubernetes plushie', 'The Deployment Tiger'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0855', 'Bryan Garza', 'Full Stack Developer', 'Product Development', 'Chicago, IL', 'https://cdn.pixabay.com/photo/2025/05/16/01/25/cat-9602849_1280.png', 'Coding from whiskers to tail, full stack purr-velopment', 'Can recite the first 100 digits of Pi', 'The Stack Scratcher'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0856', 'Spencer Deering', 'QA Engineer', 'Quality Assurance', 'Boston, MA', 'https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png', 'Finding bugs before they hiss at the users', 'Has a collection of 42 rubber bugs', 'The Bug Hunter');

-- Insert skills with predefined UUIDs for referencing
INSERT INTO skills (id, name)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f0901', 'React'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0902', 'Vue'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0903', 'TypeScript'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0904', 'Tailwind'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0905', 'React Native'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0906', 'Angular'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0907', 'Node.js'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0908', 'Python'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0909', 'MongoDB'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0910', 'Docker'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0911', 'AWS'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0912', 'Figma'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0913', 'Adobe XD'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0914', 'Sketch'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0915', 'User Research'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0916', 'Prototyping'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0917', 'Kubernetes'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0918', 'Terraform'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0919', 'CI/CD'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0920', 'Linux'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0921', 'JavaScript'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0922', 'PostgreSQL'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0923', 'Selenium'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0924', 'Cypress'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0925', 'Jest'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0926', 'TestRail'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0927', 'JIRA');

-- Insert projects with predefined UUIDs
INSERT INTO projects (id, name, description, year, status, duration)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f1001', 'Orbit Four', 'Revamping the UX/UI of the Orbit Four platform', 2025, 'in-progress', '30 months'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1002', 'Andy Egan', 'Revamping the UX/UI of the PawsApp platform', 2025, 'in-progress', '36 months'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1003', 'GT Independence Dashboard', 'Data visualization dashboard for cat behavior analytics', 2024, 'completed', '9 months'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1004', 'Miller Johnson', 'Online store for premium cat products', 2023, 'completed', '8 months'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1005', 'MyObits App', 'Sleep tracking app for cat owners', 2022, 'planned', '6 months');

-- Link employees with their skills using the predefined UUIDs
INSERT INTO employee_skills (employee_id, skill_id, level)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0901', 'intermediate'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0902', 'expert'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0903', 'expert'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0904', 'advanced'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0905', 'intermediate'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f0906', 'intermediate');

-- Link projects with their tech stack
INSERT INTO project_tech_stack (project_id, tech_name)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f1001', 'Vue'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1001', 'NuxtJS'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1001', 'Tailwind'),
  ('d290f1ee-6c54-4b01-90e6-d701748f1001', 'Styled Components');

-- Link employees with their projects
INSERT INTO employee_projects (employee_id, project_id, project_type)
VALUES
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f1001', 'current'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f1002', 'current'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f1003', 'past'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f1004', 'past'),
  ('d290f1ee-6c54-4b01-90e6-d701748f0851', 'd290f1ee-6c54-4b01-90e6-d701748f1005', 'future');