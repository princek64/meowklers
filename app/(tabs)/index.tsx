import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { employees } from '@/data/employees';
import { EmployeeCard } from '@/components/EmployeeCard';
import { Header } from '@/components/Header';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function TeamScreen() {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Directory" />
      
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <Animated.View 
            entering={FadeInDown.delay(index * 100).springify()} 
          >
            <EmployeeCard employee={item} />
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
});