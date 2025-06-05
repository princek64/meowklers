import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import { EmployeeCard } from '@/components/EmployeeCard';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeIn } from 'react-native-reanimated';
import { getEmployees, getAllSkills, getAllTechStack } from '@/lib/data';
import type { Employee } from '@/lib/data';

export default function SearchScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [techStack, setTechStack] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [employeesData, skillsData, techStackData] = await Promise.all([
        getEmployees(),
        getAllSkills(),
        getAllTechStack()
      ]);
      
      setEmployees(employeesData);
      setSkills(skillsData);
      setTechStack(techStackData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }
  
  const filteredEmployees = employees.filter(employee => {
    // Search by name or role
    const matchesSearch = 
      searchQuery === '' || 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.meowline.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected skills
    const matchesSkills = 
      selectedSkills.length === 0 || 
      employee.skills.some(skill => 
        selectedSkills.includes(skill.name)
      );
    
    // Filter by selected tech stack
    const matchesTech = 
      selectedTech.length === 0 || 
      [...employee.currentProjects, ...employee.pastProjects, ...employee.futureProjects].some(project => 
        project.techStack.some(tech => selectedTech.includes(tech))
      );
    
    return matchesSearch && matchesSkills && matchesTech;
  });
  
  const handleSkillSelect = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };
  
  const handleTechSelect = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };
  
  if (loading) {
    return (
      <View style={[styles.container, styles.loading, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Search" />
      
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="Search employees..." 
      />
      
      <FilterChips 
        options={skills} 
        selectedOptions={selectedSkills} 
        onSelect={handleSkillSelect} 
        label="Filter by skills" 
      />
      
      <FilterChips 
        options={techStack} 
        selectedOptions={selectedTech} 
        onSelect={handleTechSelect} 
        label="Filter by tech stack" 
      />
      
      {filteredEmployees.length > 0 ? (
        <Animated.View entering={FadeIn.duration(300)}>
          <FlatList
            data={filteredEmployees}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => <EmployeeCard employee={item} />}
          />
        </Animated.View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
            No employees match your search criteria
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});