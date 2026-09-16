import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const examData = [
  { date: '15 Oct 2026', time: '10:00 AM - 01:00 PM', subject: 'ARTIFICIAL INTELLIGENCE', code: 'CS501' },
  { date: '18 Oct 2026', time: '10:00 AM - 01:00 PM', subject: 'DATA STRUCTURE', code: 'CS502' },
  { date: '21 Oct 2026', time: '10:00 AM - 01:00 PM', subject: 'SOFTWARE ENGINEERING', code: 'CS503' },
];

export default function ExamTimeTableScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Exam Time Table" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {examData.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.dateBlock}>
              <Text style={styles.dateText}>{item.date.split(' ')[0]}</Text>
              <Text style={styles.monthText}>{item.date.split(' ')[1]}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.codeText}>Code: {item.code}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
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
    borderRadius: Theme.layout.borderRadius,
    marginBottom: Theme.spacing.md,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  dateBlock: {
    backgroundColor: Theme.colors.primary,
    padding: Theme.spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  dateText: { fontSize: 24, fontWeight: Theme.typography.weights.bold, color: Theme.colors.surface },
  monthText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.surface, textTransform: 'uppercase' },
  infoBlock: { padding: Theme.spacing.lg, flex: 1, justifyContent: 'center' },
  subject: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: 4 },
  codeText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: 4 },
  timeText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.primary, fontWeight: Theme.typography.weights.medium },
});
