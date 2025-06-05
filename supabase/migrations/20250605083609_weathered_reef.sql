/*
  # Initial Schema Setup for Employee Directory

  1. New Tables
    - employees
      - id (uuid, primary key)
      - name (text)
      - role (text)
      - team (text)
      - location (text)
      - avatar (text)
      - meowline (text)
      - fun_fact (text)
      - cat_nickname (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - skills
      - id (uuid, primary key)
      - name (text)
      - created_at (timestamptz)

    - employee_skills
      - id (uuid, primary key)
      - employee_id (uuid, references employees)
      - skill_id (uuid, references skills)
      - level (text)
      - created_at (timestamptz)

    - projects
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - year (integer)
      - status (text)
      - duration (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - project_tech_stack
      - id (uuid, primary key)
      - project_id (uuid, references projects)
      - tech_name (text)
      - created_at (timestamptz)

    - employee_projects
      - id (uuid, primary key)
      - employee_id (uuid, references employees)
      - project_id (uuid, references projects)
      - project_type (text) -- 'current', 'past', or 'future'
      - created_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
*/

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  team text NOT NULL,
  location text NOT NULL,
  avatar text NOT NULL,
  meowline text NOT NULL,
  fun_fact text NOT NULL,
  cat_nickname text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create employee_skills junction table
CREATE TABLE IF NOT EXISTS employee_skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid REFERENCES employees(id) ON DELETE CASCADE,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE,
  level text NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(employee_id, skill_id)
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  year integer NOT NULL,
  status text NOT NULL CHECK (status IN ('completed', 'in-progress', 'planned')),
  duration text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_tech_stack table
CREATE TABLE IF NOT EXISTS project_tech_stack (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  tech_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(project_id, tech_name)
);

-- Create employee_projects junction table
CREATE TABLE IF NOT EXISTS employee_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid REFERENCES employees(id) ON DELETE CASCADE,
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  project_type text NOT NULL CHECK (project_type IN ('current', 'past', 'future')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(employee_id, project_id)
);

-- Enable Row Level Security
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tech_stack ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_projects ENABLE ROW LEVEL SECURITY;

-- Create policies for reading data
CREATE POLICY "Allow public read access to employees" ON employees
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to skills" ON skills
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to employee_skills" ON employee_skills
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to project_tech_stack" ON project_tech_stack
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to employee_projects" ON employee_projects
  FOR SELECT USING (true);

-- Create functions to handle timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updating timestamps
CREATE TRIGGER update_employees_updated_at
  BEFORE UPDATE ON employees
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();