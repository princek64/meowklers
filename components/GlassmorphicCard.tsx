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
  const { themeType } = useTheme();
  
  return (
    <View style={[styles.container, style]}>
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
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  content: {
    padding: 16,
  },
});