import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft, Moon, Sun } from 'lucide-react-native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export function Header({ title, showBack = false }: HeaderProps) {
  const router = useRouter();
  const { theme, themeType, toggleTheme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        {showBack ? (
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ) : (
          <View style={styles.logoContainer}>
            <Text style={[styles.logo, { color: theme.colors.primary }]}>
              Meow
            </Text>
            <Text style={[styles.logoSecondary, { color: theme.colors.accent }]}>
              klers
            </Text>
          </View>
        )}
        
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
        
        <TouchableOpacity 
          style={styles.themeToggle} 
          onPress={toggleTheme}
        >
          {themeType === 'light' ? (
            <Moon size={24} color={theme.colors.text} />
          ) : (
            <Sun size={24} color={theme.colors.text} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logo: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 24,
  },
  logoSecondary: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 24,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: -1,
  },
  themeToggle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});