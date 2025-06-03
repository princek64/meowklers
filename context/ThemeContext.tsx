import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define theme types
type ThemeType = 'light' | 'dark';

// Define colors for each theme
const themes = {
  light: {
    colors: {
      primary: '#8A4FFF',
      secondary: '#00D1C5',
      accent: '#FF6AC2',
      background: '#F8F9FF',
      card: 'rgba(255, 255, 255, 0.7)',
      cardBorder: 'rgba(255, 255, 255, 0.9)',
      text: '#333333',
      textSecondary: '#666666',
      success: '#34D399',
      warning: '#FBBF24',
      error: '#F87171',
    },
  },
  dark: {
    colors: {
      primary: '#A78BFF',
      secondary: '#2DD4CA',
      accent: '#FF8DD3',
      background: '#121330',
      card: 'rgba(30, 30, 60, 0.7)',
      cardBorder: 'rgba(50, 50, 80, 0.7)',
      text: '#FFFFFF',
      textSecondary: '#CCCCDD',
      success: '#34D399',
      warning: '#FBBF24',
      error: '#F87171',
    },
  },
};

// Create theme context
interface ThemeContextType {
  theme: typeof themes.light;
  themeType: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  themeType: 'light',
  toggleTheme: () => {},
});

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeType, setThemeType] = useState<ThemeType>('light');
  
  const toggleTheme = () => {
    setThemeType(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = themes[themeType];

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}