/*
  # Insert mock data into Supabase

  1. Data Population
    - Insert employees data
    - Insert skills data
    - Create employee-skill relationships
    - Insert projects data
    - Create project tech stack entries
    - Create employee-project relationships

  2. Data Integrity
    - Maintains referential integrity
    - Preserves existing relationships
*/

-- Insert employees
INSERT INTO employees (id, name, role, team, location, avatar, meowline, fun_fact, cat_nickname)
VALUES
  ('1', 'Prince Kukreja', 'Frontend Developer', 'Web Development', 'Gurugram, INDIA', 'https://cdn.pixabay.com/photo/2024/08/01/11/26/animal-8936898_960_720.jpg', 'Turning coffee into purr-fect code!', 'Can type 120 WPM with just one paw', 'The Code Pouncer'),
  ('2', 'Tyler Buell', 'Backend Developer', 'API Services', 'Detroit, Michigan', 'https://cdn.pixabay.com/photo/2020/11/15/18/31/cat-5746771_1280.png', 'Building robust purr-formance APIs with naps in between', 'Once debugged code while sleeping', 'The Backend Purrfessor'),
  ('3', 'Maddy Martin', 'UX/UI Designer', 'Design', 'Portland, OR', 'https://cdn.pixabay.com/photo/2024/08/13/10/12/ai-generated-8965656_1280.png', 'Crafting pawsitively beautiful user experiences', 'Can judge the quality of a design in 0.5 seconds', 'The Design Claw'),
  ('4', 'Nate Goodman', 'DevOps Engineer', 'Infrastructure', 'Seattle, WA', 'https://cdn.pixabay.com/photo/2019/09/22/04/48/cat-4495099_1280.png', 'Automating the litter box of deployment', 'Sleeps with a Kubernetes plushie', 'The Deployment Tiger'),
  ('5', 'Bryan Garza', 'Full Stack Developer', 'Product Development', 'Chicago, IL', 'https://cdn.pixabay.com/photo/2025/05/16/01/25/cat-9602849_1280.png', 'Coding from whiskers to tail, full stack purr-velopment', 'Can recite the first 100 digits of Pi', 'The Stack Scratcher'),
  ('6', 'Spencer Deering', 'QA Engineer', 'Quality Assurance', 'Boston, MA', 'https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png', 'Finding bugs before they hiss at the users', 'Has a collection of 42 rubber bugs', 'The Bug Hunter');

-- Insert skills
INSERT INTO skills (id, name)
VALUES
  (gen_random_uuid(), 'React'),
  (gen_random_uuid(), 'Vue'),
  (gen_random_uuid(), 'TypeScript'),
  (gen_random_uuid(), 'Tailwind'),
  (gen_random_uuid(), 'React Native'),
  (gen_random_uuid(), 'Angular'),
  (gen_random_uuid(), 'Node.js'),
  (gen_random_uuid(), 'Python'),
  (gen_random_uuid(), 'MongoDB'),
  (gen_random_uuid(), 'Docker'),
  (gen_random_uuid(), 'AWS'),
  (gen_random_uuid(), 'Figma'),
  (gen_random_uuid(), 'Adobe XD'),
  (gen_random_uuid(), 'Sketch'),
  (gen_random_uuid(), 'User Research'),
  (gen_random_uuid(), 'Prototyping'),
  (gen_random_uuid(), 'Kubernetes'),
  (gen_random_uuid(), 'Terraform'),
  (gen_random_uuid(), 'CI/CD'),
  (gen_random_uuid(), 'Linux'),
  (gen_random_uuid(), 'JavaScript'),
  (gen_random_uuid(), 'PostgreSQL'),
  (gen_random_uuid(), 'Selenium'),
  (gen_random_uuid(), 'Cypress'),
  (gen_random_uuid(), 'Jest'),
  (gen_random_uuid(), 'TestRail'),
  (gen_random_uuid(), 'JIRA');

-- Link employees with their skills
INSERT INTO employee_skills (employee_id, skill_id, level)
SELECT '1', id, 'intermediate' FROM skills WHERE name = 'React'
UNION ALL
SELECT '1', id, 'expert' FROM skills WHERE name = 'Vue'
UNION ALL
SELECT '1', id, 'expert' FROM skills WHERE name = 'TypeScript'
UNION ALL
SELECT '1', id, 'advanced' FROM skills WHERE name = 'Tailwind'
UNION ALL
SELECT '1', id, 'intermediate' FROM skills WHERE name = 'React Native'
UNION ALL
SELECT '1', id, 'intermediate' FROM skills WHERE name = 'Angular';

-- Insert projects
INSERT INTO projects (id, name, description, year, status, duration)
VALUES
  (gen_random_uuid(), 'Orbit Four', 'Revamping the UX/UI of the Orbit Four platform', 2025, 'in-progress', '30 months'),
  (gen_random_uuid(), 'Andy Egan', 'Revamping the UX/UI of the PawsApp platform', 2025, 'in-progress', '36 months'),
  (gen_random_uuid(), 'GT Independence Dashboard', 'Data visualization dashboard for cat behavior analytics', 2024, 'completed', '9 months'),
  (gen_random_uuid(), 'Miller Johnson', 'Online store for premium cat products', 2023, 'completed', '8 months'),
  (gen_random_uuid(), 'MyObits App', 'Sleep tracking app for cat owners', 2022, 'planned', '6 months');

-- Link projects with their tech stack
INSERT INTO project_tech_stack (project_id, tech_name)
SELECT id, 'Vue' FROM projects WHERE name = 'Orbit Four'
UNION ALL
SELECT id, 'NuxtJS' FROM projects WHERE name = 'Orbit Four'
UNION ALL
SELECT id, 'Tailwind' FROM projects WHERE name = 'Orbit Four'
UNION ALL
SELECT id, 'Styled Components' FROM projects WHERE name = 'Orbit Four';

-- Link employees with their projects
INSERT INTO employee_projects (employee_id, project_id, project_type)
SELECT '1', id, 'current' FROM projects WHERE name = 'Orbit Four'
UNION ALL
SELECT '1', id, 'current' FROM projects WHERE name = 'Andy Egan'
UNION ALL
SELECT '1', id, 'past' FROM projects WHERE name = 'GT Independence Dashboard'
UNION ALL
SELECT '1', id, 'past' FROM projects WHERE name = 'Miller Johnson'
UNION ALL
SELECT '1', id, 'future' FROM projects WHERE name = 'MyObits App';