import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

export function BackgroundPattern() {
  const { theme, themeType } = useTheme();
  const opacity = useSharedValue(themeType === 'dark' ? 0.05 : 0.03);
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const scale4 = useSharedValue(1);
  const scale5 = useSharedValue(1);

  useEffect(() => {
    const duration = 4000;
    const scales = [scale1, scale2, scale3, scale4, scale5];
    
    scales.forEach((scale, index) => {
      scale.value = withRepeat(
        withDelay(
          index * 800,
          withSequence(
            withTiming(1.2, { duration: duration / 2 }),
            withTiming(1, { duration: duration / 2 })
          )
        ),
        -1,
        true
      );
    });
  }, []);

  const animatedStyles = (scale: Animated.SharedValue<number>) =>
    useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { rotate: '45deg' }],
    }));

  return (
    <View style={[styles.container, { opacity: themeType === 'dark' ? 0.05 : 0.03 }]}>
      <View style={styles.patternContainer}>
        <Animated.View style={[styles.paw, styles.paw1, animatedStyles(scale1)]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.primary }]} />
        </Animated.View>
        <Animated.View style={[styles.paw, styles.paw2, animatedStyles(scale2)]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.secondary }]} />
        </Animated.View>
        <Animated.View style={[styles.paw, styles.paw3, animatedStyles(scale3)]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.accent }]} />
        </Animated.View>
        <Animated.View style={[styles.paw, styles.paw4, animatedStyles(scale4)]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.primary }]} />
        </Animated.View>
        <Animated.View style={[styles.paw, styles.paw5, animatedStyles(scale5)]}>
          <View style={[styles.pawImage, { backgroundColor: theme.colors.secondary }]} />
        </Animated.View>
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
    width: 80,
    height: 80,
  },
  pawImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    opacity: 0.3,
  },
  paw1: {
    top: '15%',
    left: '20%',
  },
  paw2: {
    top: '35%',
    right: '25%',
  },
  paw3: {
    bottom: '30%',
    left: '30%',
  },
  paw4: {
    bottom: '20%',
    right: '20%',
  },
  paw5: {
    top: '55%',
    left: '45%',
  },
});