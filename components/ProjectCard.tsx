import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Project } from '@/data/employees';
import { GlassmorphicCard } from './GlassmorphicCard';
import { SkillTag } from './SkillTag';
import { useTheme } from '@/context/ThemeContext';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();
  
  // Function to get status color
  const getStatusColor = () => {
    switch (project.status) {
      case 'completed':
        return theme.colors.success;
      case 'in-progress':
        return theme.colors.warning;
      case 'planned':
        return theme.colors.secondary;
      default:
        return theme.colors.textSecondary;
    }
  };
  
  return (
    <GlassmorphicCard style={styles.card}>
      <View style={styles.header}>
        <Text style={[styles.name, { color: theme.colors.text }]}>
          {project.name}
        </Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>
            {project.status.replace('-', ' ')}
          </Text>
        </View>
      </View>
      
      <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
        {project.description}
      </Text>
      
      <View style={styles.details}>
        <Text style={[styles.detail, { color: theme.colors.textSecondary }]}>
          {project.year} • {project.duration}
        </Text>
      </View>
      
      <View style={styles.techContainer}>
        <Text style={[styles.techTitle, { color: theme.colors.text }]}>
          Tech Stack:
        </Text>
        <View style={styles.techTags}>
          {project.techStack.map((tech, index) => (
            // <SkillTag key={index} name={tech} />
            <SkillTag key={`${project.id}-${tech}-${index}`} name={tech} />
          ))}
        </View>
      </View>
    </GlassmorphicCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  details: {
    marginBottom: 12,
  },
  detail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  techContainer: {
    marginTop: 8,
  },
  techTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});