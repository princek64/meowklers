import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

interface SkillTagProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export function SkillTag({ name, level }: SkillTagProps) {
  const { theme } = useTheme();
  
  // Determine background color based on skill level
  const getBackgroundColor = () => {
    switch (level) {
      case 'beginner':
        return 'rgba(138, 79, 255, 0.2)';
      case 'intermediate':
        return 'rgba(138, 79, 255, 0.4)';
      case 'advanced':
        return 'rgba(138, 79, 255, 0.6)';
      case 'expert':
        return 'rgba(138, 79, 255, 0.8)';
      default:
        return 'rgba(138, 79, 255, 0.5)';
    }
  };
  
  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: getBackgroundColor() }
      ]}
    >
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {name}
        {level && ` • ${level.charAt(0).toUpperCase() + level.slice(1)}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});