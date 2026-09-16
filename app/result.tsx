import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const resultsData = [
  { semester: 'Semester 4', sgpa: '8.45', status: 'PASS', date: 'June 2026' },
  { semester: 'Semester 3', sgpa: '8.20', status: 'PASS', date: 'Dec 2025' },
  { semester: 'Semester 2', sgpa: '7.95', status: 'PASS', date: 'June 2025' },
];

export default function ResultScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Results" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.cgpaCard}>
          <Text style={styles.cgpaLabel}>Overall CGPA</Text>
          <Text style={styles.cgpaValue}>8.20</Text>
        </View>

        {resultsData.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.semesterText}>{item.semester}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.cardBody}>
              <View>
                <Text style={styles.sgpaLabel}>SGPA</Text>
                <Text style={styles.sgpaValue}>{item.sgpa}</Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
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
  cgpaCard: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  cgpaLabel: { color: '#E8F5E9', fontSize: Theme.typography.sizes.md, marginBottom: 4 },
  cgpaValue: { color: Theme.colors.surface, fontSize: 36, fontWeight: Theme.typography.weights.bold },
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    marginBottom: Theme.spacing.md,
    padding: Theme.spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Theme.colors.border, paddingBottom: Theme.spacing.sm, marginBottom: Theme.spacing.sm },
  semesterText: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary },
  dateText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary },
  cardBody: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 },
  sgpaLabel: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary },
  sgpaValue: { fontSize: Theme.typography.sizes.xl, fontWeight: Theme.typography.weights.bold, color: Theme.colors.primary },
  statusBadge: { backgroundColor: Theme.colors.success, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  statusText: { color: Theme.colors.surface, fontSize: Theme.typography.sizes.xs, fontWeight: Theme.typography.weights.bold },
});
