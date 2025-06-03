import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { employees, getAllSkills, getAllTechStack } from '@/data/employees';
import { EmployeeCard } from '@/components/EmployeeCard';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SearchScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  
  const allSkills = getAllSkills();
  const allTechStack = getAllTechStack();
  
  useEffect(() => {
    // Filter employees based on search query and selected filters
    const filtered = employees.filter(employee => {
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
        employee.currentProjects.concat(employee.pastProjects).concat((employee.futureProjects || [])).some(project => 
          project.techStack.some(tech => selectedTech.includes(tech))
        );
      
      return matchesSearch && matchesSkills && matchesTech;
    });
    
    setFilteredEmployees(filtered);
  }, [searchQuery, selectedSkills, selectedTech]);
  
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
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Search" />
      
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="Search employees..." 
      />
      
      <FilterChips 
        options={allSkills} 
        selectedOptions={selectedSkills} 
        onSelect={handleSkillSelect} 
        label="Filter by skills" 
      />
      
      <FilterChips 
        options={allTechStack} 
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
  listContent: {
    padding: 16,
    paddingBottom: 80, // Add extra padding for the tab bar
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