import { supabase } from './supabase';
import type { Database } from '@/types/supabase';

export type Employee = Database['public']['Tables']['employees']['Row'] & {
  skills: Array<{
    id: string;
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }>;
  currentProjects: Project[];
  pastProjects: Project[];
  futureProjects: Project[];
};

export type Project = Database['public']['Tables']['projects']['Row'] & {
  techStack: string[];
};

export async function getEmployees(): Promise<Employee[]> {
  const { data: employees, error: employeesError } = await supabase
    .from('employees')
    .select('*');

  if (employeesError) {
    console.error('Error fetching employees:', employeesError);
    return [];
  }

  const enrichedEmployees = await Promise.all(
    employees.map(async (employee) => {
      // Fetch skills
      const { data: skills } = await supabase
        .from('employee_skills')
        .select(`
          id,
          level,
          skills (
            id,
            name
          )
        `)
        .eq('employee_id', employee.id);

      // Fetch projects
      const { data: projects } = await supabase
        .from('employee_projects')
        .select(`
          project_type,
          projects (
            id,
            name,
            description,
            year,
            status,
            duration
          )
        `)
        .eq('employee_id', employee.id);

      // Fetch tech stack for each project
      const projectsWithTech = await Promise.all(
        (projects || []).map(async (ep) => {
          const { data: techStack } = await supabase
            .from('project_tech_stack')
            .select('tech_name')
            .eq('project_id', ep.projects.id);

          return {
            ...ep.projects,
            techStack: techStack?.map(t => t.tech_name) || []
          };
        })
      );

      // Group projects by type
      const currentProjects = projectsWithTech.filter(
        p => projects?.find(ep => ep.projects.id === p.id)?.project_type === 'current'
      );
      const pastProjects = projectsWithTech.filter(
        p => projects?.find(ep => ep.projects.id === p.id)?.project_type === 'past'
      );
      const futureProjects = projectsWithTech.filter(
        p => projects?.find(ep => ep.projects.id === p.id)?.project_type === 'future'
      );

      return {
        ...employee,
        skills: skills?.map(s => ({
          id: s.id,
          name: s.skills.name,
          level: s.level
        })) || [],
        currentProjects,
        pastProjects,
        futureProjects
      };
    })
  );

  return enrichedEmployees;
}

export async function getAllSkills(): Promise<string[]> {
  const { data: skills, error } = await supabase
    .from('skills')
    .select('name');

  if (error) {
    console.error('Error fetching skills:', error);
    return [];
  }

  return skills.map(s => s.name).sort();
}

export async function getAllTechStack(): Promise<string[]> {
  const { data: techStack, error } = await supabase
    .from('project_tech_stack')
    .select('tech_name')
    .distinct();

  if (error) {
    console.error('Error fetching tech stack:', error);
    return [];
  }

  return techStack.map(t => t.tech_name).sort();
}