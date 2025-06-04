import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { employees, Project } from '@/data/employees';
import { ProjectCard } from '@/components/ProjectCard';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ProjectsScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  
  // Get all projects from all employees
  const allProjects = employees.flatMap(employee => 
    [...employee.currentProjects, ...employee.pastProjects, ...(employee.futureProjects || [])]
  );
  
  // Get unique statuses
  const statusOptions = ['completed', 'in-progress', 'planned'];
  
  // Filter projects based on search query and selected status
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch =
      searchQuery === '' ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesStatus =
      !selectedStatus ||
      project.status === selectedStatus.replace(' ', '-');

    return matchesSearch && matchesStatus;
  });

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(prev =>
      prev === status ? null : status
    );
  };
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Projects" />
      
      <SearchBar 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
        placeholder="Search projects..." 
      />
      
      <FilterChips
        options={statusOptions.map(s => s.replace('-', ' '))}
        selectedOptions={selectedStatus ? [selectedStatus.replace('-', ' ')] : []}
        onSelect={handleStatusSelect}
        label="Filter by status"
      />
      
      {filteredProjects.length > 0 ? (
        <FlatList
          data={filteredProjects}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          contentContainerStyle={styles.listContent}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 100).springify()}>
              <ProjectCard project={item} />
            </Animated.View>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
            No projects match your search criteria
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