import React from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { Header } from '@/components/Header';
import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Info, Heart, Globe, Cat } from 'lucide-react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

export default function SettingsScreen() {
  const { theme, themeType, toggleTheme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Settings" />
      
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.delay(100).springify()}>
          <GlassmorphicCard style={styles.card}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Appearance
            </Text>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                {themeType === 'light' ? (
                  <Sun size={24} color={theme.colors.text} style={styles.icon} />
                ) : (
                  <Moon size={24} color={theme.colors.text} style={styles.icon} />
                )}
                <Text style={[styles.settingText, { color: theme.colors.text }]}>
                  Dark Mode
                </Text>
              </View>
              <Switch
                value={themeType === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: '#CBD5E1', true: theme.colors.primary }}
                thumbColor={'#FFFFFF'}
              />
            </View>
          </GlassmorphicCard>
        </Animated.View>
        
        <Animated.View entering={FadeInRight.delay(200).springify()}>
          <GlassmorphicCard style={styles.card}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              About
            </Text>
            
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Info size={24} color={theme.colors.text} style={styles.icon} />
                <Text style={[styles.settingText, { color: theme.colors.text }]}>
                  App Version
                </Text>
              </View>
              <Text style={[styles.versionText, { color: theme.colors.textSecondary }]}>
                1.0.0
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Cat size={24} color={theme.colors.text} style={styles.icon} />
                <Text style={[styles.settingText, { color: theme.colors.text }]}>
                  Made by SPARK Business Works
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Globe size={24} color={theme.colors.text} style={styles.icon} />
                <Text style={[styles.settingText, { color: theme.colors.text }]}>
                  Visit Website
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Heart size={24} color={theme.colors.accent} style={styles.icon} />
                <Text style={[styles.settingText, { color: theme.colors.text }]}>
                  Rate the App
                </Text>
              </View>
            </TouchableOpacity>
          </GlassmorphicCard>
        </Animated.View>
        
        <Animated.View entering={FadeInRight.delay(300).springify()}>
          <View style={styles.creditsContainer}>
            <Text style={[styles.creditsText, { color: theme.colors.textSecondary }]}>
              Meowklers © 2025 • All rights reserved
            </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  creditsContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  creditsText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});