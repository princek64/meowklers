import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/context/ThemeContext';

interface GlassmorphicCardProps {
  children: ReactNode;
  style?: ViewStyle;
  intensity?: number;
}

export function GlassmorphicCard({ 
  children, 
  style, 
  intensity = 40 
}: GlassmorphicCardProps) {
  const { theme, themeType } = useTheme();
  
  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: themeType === 'light' 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(30, 30, 60, 0.7)',
        borderColor: themeType === 'light'
          ? 'rgba(0, 0, 0, 0.1)'
          : 'rgba(255, 255, 255, 0.2)',
      },
      style
    ]}>
      <BlurView
        intensity={intensity}
        tint={themeType}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  content: {
    padding: 16,
  },
});