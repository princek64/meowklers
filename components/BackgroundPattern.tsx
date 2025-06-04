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
  Easing,
} from 'react-native-reanimated';

export function BackgroundPattern() {
  const { theme, themeType } = useTheme();
  const opacity = useSharedValue(themeType === 'dark' ? 0.08 : 0.05);
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const scale4 = useSharedValue(1);
  const scale5 = useSharedValue(1);
  const scale6 = useSharedValue(1);
  const scale7 = useSharedValue(1);

  useEffect(() => {
    const duration = 6000;
    const scales = [scale1, scale2, scale3, scale4, scale5, scale6, scale7];
    
    scales.forEach((scale, index) => {
      scale.value = withRepeat(
        withDelay(
          index * 600,
          withSequence(
            withTiming(1.15, { 
              duration: duration / 2,
              easing: Easing.bezier(0.4, 0, 0.2, 1)
            }),
            withTiming(1, { 
              duration: duration / 2,
              easing: Easing.bezier(0.4, 0, 0.2, 1)
            })
          )
        ),
        -1,
        true
      );
    });
  }, []);

  const animatedStyles = (scale: Animated.SharedValue<number>, rotation: string) =>
    useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { rotate: rotation }],
      opacity: opacity.value,
    }));

  const renderPaw = (style: any, scale: Animated.SharedValue<number>, rotation: string, color: string) => (
    <Animated.View style={[styles.paw, style, animatedStyles(scale, rotation)]}>
      <View style={[styles.pawPad, { backgroundColor: color }]} />
      <View style={[styles.pawToe, styles.pawToe1, { backgroundColor: color }]} />
      <View style={[styles.pawToe, styles.pawToe2, { backgroundColor: color }]} />
      <View style={[styles.pawToe, styles.pawToe3, { backgroundColor: color }]} />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.patternContainer}>
        {renderPaw(styles.paw1, scale1, '45deg', theme.colors.primary)}
        {renderPaw(styles.paw2, scale2, '-15deg', theme.colors.secondary)}
        {renderPaw(styles.paw3, scale3, '30deg', theme.colors.accent)}
        {renderPaw(styles.paw4, scale4, '-45deg', theme.colors.primary)}
        {renderPaw(styles.paw5, scale5, '15deg', theme.colors.secondary)}
        {renderPaw(styles.paw6, scale6, '-30deg', theme.colors.accent)}
        {renderPaw(styles.paw7, scale7, '60deg', theme.colors.primary)}
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
  },
  pawPad: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 35,
    height: 35,
    marginLeft: -17.5,
    borderRadius: 17.5,
    opacity: 0.2,
  },
  pawToe: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    opacity: 0.2,
  },
  pawToe1: {
    top: 0,
    left: '50%',
    marginLeft: -10,
  },
  pawToe2: {
    top: 8,
    left: 0,
  },
  pawToe3: {
    top: 8,
    right: 0,
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
    bottom: '35%',
    left: '25%',
  },
  paw4: {
    bottom: '15%',
    right: '15%',
  },
  paw5: {
    top: '50%',
    left: '40%',
  },
  paw6: {
    top: '20%',
    right: '35%',
  },
  paw7: {
    bottom: '25%',
    left: '60%',
  },
});