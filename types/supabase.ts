export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          id: string
          name: string
          role: string
          team: string
          location: string
          avatar: string
          meowline: string
          fun_fact: string
          cat_nickname: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          team: string
          location: string
          avatar: string
          meowline: string
          fun_fact: string
          cat_nickname: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          team?: string
          location?: string
          avatar?: string
          meowline?: string
          fun_fact?: string
          cat_nickname?: string
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      employee_skills: {
        Row: {
          id: string
          employee_id: string
          skill_id: string
          level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          created_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          skill_id: string
          level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          created_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          skill_id?: string
          level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
          created_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          name: string
          description: string
          year: number
          status: 'completed' | 'in-progress' | 'planned'
          duration: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          year: number
          status: 'completed' | 'in-progress' | 'planned'
          duration: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          year?: number
          status?: 'completed' | 'in-progress' | 'planned'
          duration?: string
          created_at?: string
          updated_at?: string
        }
      }
      project_tech_stack: {
        Row: {
          id: string
          project_id: string
          tech_name: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          tech_name: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          tech_name?: string
          created_at?: string
        }
      }
      employee_projects: {
        Row: {
          id: string
          employee_id: string
          project_id: string
          project_type: 'current' | 'past' | 'future'
          created_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          project_id: string
          project_type: 'current' | 'past' | 'future'
          created_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          project_id?: string
          project_type?: 'current' | 'past' | 'future'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}