import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const scheduleData = [
  { time: '10:00 AM - 11:00 AM', subject: 'ARTIFICIAL INTELLIGENCE', room: 'Room 302', faculty: 'Dr. Smith' },
  { time: '11:00 AM - 12:00 PM', subject: 'DATA STRUCTURE', room: 'Room 305', faculty: 'Prof. Johnson' },
  { time: '12:00 PM - 01:00 PM', subject: 'LUNCH BREAK', room: '-', faculty: '-' },
  { time: '01:00 PM - 03:00 PM', subject: 'COMPETITIVE PROGRAMMING (LAB)', room: 'Lab 1', faculty: 'Mr. Davis' },
];

export default function ClassScheduleScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Class Schedule (Today)" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {scheduleData.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.timeBadge}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <Text style={styles.subject}>{item.subject}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.detailText}>{item.room}</Text>
              <Text style={styles.detailText}>•</Text>
              <Text style={styles.detailText}>{item.faculty}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Theme.colors.surface },
  content: { flex: 1, backgroundColor: Theme.colors.background },
  container: { padding: Theme.spacing.lg },
  card: {
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.lg,
    borderRadius: Theme.layout.borderRadius,
    marginBottom: Theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: Theme.colors.primary,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  timeBadge: {
    backgroundColor: '#E6F2F0',
    alignSelf: 'flex-start',
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: Theme.spacing.sm,
  },
  timeText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.primary, fontWeight: Theme.typography.weights.bold },
  subject: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.sm },
  detailsRow: { flexDirection: 'row', alignItems: 'center', gap: Theme.spacing.sm },
  detailText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary },
});
