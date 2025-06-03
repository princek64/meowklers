import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

interface FilterChipsProps {
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
  label?: string;
}

export function FilterChips({ 
  options, 
  selectedOptions, 
  onSelect, 
  label 
}: FilterChipsProps) {
  const { theme } = useTheme();
  
  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.text }]}>
          {label}
        </Text>
      )}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.chip,
                {
                  backgroundColor: isSelected 
                    ? theme.colors.primary 
                    : 'rgba(138, 79, 255, 0.2)',
                },
              ]}
              onPress={() => onSelect(option)}
            >
              <Text
                style={[
                  styles.chipText,
                  { color: isSelected ? 'white' : theme.colors.text },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  chipText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});