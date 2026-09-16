import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const subjects = [
  "CRT (APTITUTE)",
  "CRT (COMMUNICATION SKILL)",
  "AMCAT-DSA",
  "MENTORING (TG)",
  "LIBRARY (SELF STUDY)",
  "DATA STRUCTURE",
  "ARTIFICIAL INTELLIGENCE",
  "OBJECT ORIENTED PROGRAMMING &\nMETHODOLOGY",
  "EVALUATION OF INTERNSHIP-1",
  "AMCAT-Automat",
  "AIDS-ACTIVITIES",
  "Competitive Programming"
];

export default function RegisteredSubjectsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Registered Subjects" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {subjects.map((subject, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.subjectText}>{subject}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.surface,
  },
  content: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  contentContainer: {
    padding: Theme.spacing.md,
  },
  card: {
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.sm,
    borderRadius: 4, // Very slight border radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  subjectText: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
    fontWeight: Theme.typography.weights.medium,
    lineHeight: 22,
  }
});
