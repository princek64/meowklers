import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Employee } from '@/data/employees';
import { GlassmorphicCard } from './GlassmorphicCard';
import { useTheme } from '@/context/ThemeContext';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const scale = useSharedValue(1);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const handlePressIn = () => {
    scale.value = withSpring(0.97);
  };
  
  const handlePressOut = () => {
    scale.value = withSpring(1);
  };
  
  const handlePress = () => {
    router.push(`/employee/${employee.id}`);
  };
  
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <GlassmorphicCard style={styles.card}>
          <Image 
            source={{ uri: employee.avatar }} 
            style={styles.avatar} 
          />
          <View style={styles.infoContainer}>
            <Text style={[styles.name, { color: theme.colors.text }]}>
              {employee.name}
            </Text>
            <Text style={[styles.role, { color: theme.colors.textSecondary }]}>
              {employee.role}
            </Text>
            <Text style={[styles.meowline, { color: theme.colors.primary }]}>
              "{employee.meowline}"
            </Text>
          </View>
        </GlassmorphicCard>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  role: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
  },
  meowline: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    fontStyle: 'italic',
  },
});