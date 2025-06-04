import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { GlassmorphicCard } from './GlassmorphicCard';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ 
  value, 
  onChangeText, 
  placeholder = 'Search...' 
}: SearchBarProps) {
  const { theme } = useTheme();
  
  const handleClear = () => {
    onChangeText('');
  };
  
  return (
    <GlassmorphicCard style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconWrapper}>
          <Search
            size={24}
            color={theme.colors.textSecondary}
            style={styles.icon}
          />
        </View>
        <TextInput
          style={[styles.input, { color: theme.colors.text }]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textSecondary}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <X 
              size={20} 
              color={theme.colors.textSecondary} 
            />
          </TouchableOpacity>
        )}
      </View>
    </GlassmorphicCard>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});