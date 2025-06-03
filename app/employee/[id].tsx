import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { employees } from '@/data/employees';
import { Header } from '@/components/Header';
import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { SkillTag } from '@/components/SkillTag';
import { ProjectCard } from '@/components/ProjectCard';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function EmployeeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  
  // Find employee by ID
  const employee = employees.find(emp => emp.id === id);
  
  if (!employee) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Header title="Employee Not Found" showBack />
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: theme.colors.error }]}>
            Employee not found
          </Text>
        </View>
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title={employee.name} showBack />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown.duration(500)}>
          <GlassmorphicCard style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <Image 
                source={{ uri: employee.avatar }} 
                style={styles.avatar} 
              />
              <View style={styles.profileInfo}>
                <Text style={[styles.name, { color: theme.colors.text }]}>
                  {employee.name}
                </Text>
                <Text style={[styles.role, { color: theme.colors.primary }]}>
                  {employee.role}
                </Text>
                <Text style={[styles.teamLocation, { color: theme.colors.textSecondary }]}>
                  {employee.team} • {employee.location}
                </Text>
              </View>
            </View>
            
            <View style={styles.meowlineContainer}>
              <Text style={[styles.meowline, { color: theme.colors.accent }]}>
                "{employee.meowline}"
              </Text>
            </View>
            
            <View style={styles.funFactContainer}>
              <Text style={[styles.funFactLabel, { color: theme.colors.text }]}>
                Fun Fact:
              </Text>
              <Text style={[styles.funFact, { color: theme.colors.textSecondary }]}>
                {employee.funFact}
              </Text>
            </View>
            
            <View style={styles.catNicknameContainer}>
              <Text style={[styles.catNicknameLabel, { color: theme.colors.text }]}>
                Cat Nickname:
              </Text>
              <Text style={[styles.catNickname, { color: theme.colors.secondary }]}>
                {employee.catNickname}
              </Text>
            </View>
          </GlassmorphicCard>
        </Animated.View>
        
        <Animated.View entering={FadeInUp.delay(100).duration(500)}>
          <GlassmorphicCard style={styles.skillsCard}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Skills
            </Text>
            <View style={styles.skillsContainer}>
              {employee.skills.map((skill) => (
                <SkillTag 
                  key={skill.id} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </View>
          </GlassmorphicCard>
        </Animated.View>
        
        {employee.currentProjects.length > 0 && (
          <Animated.View entering={FadeInUp.delay(200).duration(500)}>
            <View style={styles.projectsSection}>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                Current Projects
              </Text>
              {employee.currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </View>
          </Animated.View>
        )}

        {(employee.futureProjects || []).length > 0 && (
          <Animated.View entering={FadeInUp.delay(300).duration(500)}>
            <View style={styles.projectsSection}>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                Future Projects
              </Text>
              {(employee.futureProjects || []).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </View>
          </Animated.View>
        )}
        
        {employee.pastProjects.length > 0 && (
          <Animated.View entering={FadeInUp.delay(300).duration(500)}>
            <View style={styles.projectsSection}>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                Past Projects
              </Text>
              {employee.pastProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </View>
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  profileCard: {
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  role: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  teamLocation: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  meowlineContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(138, 79, 255, 0.1)',
  },
  meowline: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontStyle: 'italic',
  },
  funFactContainer: {
    marginBottom: 12,
  },
  funFactLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  funFact: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  catNicknameContainer: {
    marginBottom: 8,
  },
  catNicknameLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  catNickname: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  skillsCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  projectsSection: {
    marginBottom: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});