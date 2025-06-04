import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export function BackgroundPattern() {
  const { theme, themeType } = useTheme();
  
  return (
    <View style={[styles.container, { opacity: themeType === 'dark' ? 0.05 : 0.03 }]}>
      <View style={styles.patternContainer}>
        {/* Cat paw pattern images */}
        <View style={[styles.paw, styles.paw1]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.primary }]} />
        </View>
        <View style={[styles.paw, styles.paw2]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.secondary }]} />
        </View>
        <View style={[styles.paw, styles.paw3]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.accent }]} />
        </View>
        <View style={[styles.paw, styles.paw4]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.primary }]} />
        </View>
        <View style={[styles.paw, styles.paw5]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.secondary }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: -1,
  },
  patternContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  paw: {
    position: 'absolute',
    width: 60,
    height: 60,
    transform: [{ rotate: '45deg' }],
  },
  pawImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    opacity: 0.3,
  },
  paw1: {
    top: '10%',
    left: '15%',
  },
  paw2: {
    top: '30%',
    right: '20%',
  },
  paw3: {
    bottom: '25%',
    left: '25%',
  },
  paw4: {
    bottom: '15%',
    right: '15%',
  },
  paw5: {
    top: '50%',
    left: '50%',
  },
});