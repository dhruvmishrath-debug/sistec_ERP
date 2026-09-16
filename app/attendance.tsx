import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const attendanceData = [
  { subject: 'DATA STRUCTURE', total: 40, attended: 35 },
  { subject: 'ARTIFICIAL INTELLIGENCE', total: 42, attended: 38 },
  { subject: 'COMPETITIVE PROGRAMMING', total: 30, attended: 20 },
  { subject: 'SOFTWARE ENGINEERING', total: 35, attended: 30 },
  { subject: 'DATABASE MANAGEMENT', total: 40, attended: 15 },
];

export default function AttendanceScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Attendance" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {attendanceData.map((item, index) => {
          const percentage = (item.attended / item.total) * 100;
          const isLow = percentage < 75;
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.subject}>{item.subject}</Text>
              <View style={styles.statsRow}>
                <Text style={styles.statText}>Total Classes: {item.total}</Text>
                <Text style={styles.statText}>Attended: {item.attended}</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: `${percentage}%`, backgroundColor: isLow ? Theme.colors.error : Theme.colors.success }
                  ]} 
                />
              </View>
              <Text style={[styles.percentageText, { color: isLow ? Theme.colors.error : Theme.colors.success }]}>
                {percentage.toFixed(1)}%
              </Text>
            </View>
          );
        })}
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
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  subject: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.sm },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Theme.spacing.md },
  statText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary },
  progressBarContainer: { height: 8, backgroundColor: '#E0E0E0', borderRadius: 4, overflow: 'hidden', marginBottom: Theme.spacing.sm },
  progressBar: { height: '100%', borderRadius: 4 },
  percentageText: { textAlign: 'right', fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, marginTop: 4 }
});
