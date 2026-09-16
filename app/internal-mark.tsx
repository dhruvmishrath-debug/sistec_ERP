import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const internalData = [
  { subject: 'DATA STRUCTURE', marks: '18', total: '20' },
  { subject: 'ARTIFICIAL INTELLIGENCE', marks: '19', total: '20' },
  { subject: 'COMPETITIVE PROGRAMMING', marks: '15', total: '20' },
  { subject: 'SOFTWARE ENGINEERING', marks: '17', total: '20' },
];

export default function InternalMarkScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Internal Marks" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {internalData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.subject}>{item.subject}</Text>
            <View style={styles.marksContainer}>
              <Text style={styles.marksText}>{item.marks}</Text>
              <Text style={styles.totalText}> / {item.total}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  subject: { flex: 1, fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, paddingRight: Theme.spacing.md },
  marksContainer: { flexDirection: 'row', alignItems: 'baseline', backgroundColor: '#E6F2F0', paddingHorizontal: Theme.spacing.md, paddingVertical: Theme.spacing.sm, borderRadius: 8 },
  marksText: { fontSize: Theme.typography.sizes.lg, fontWeight: Theme.typography.weights.bold, color: Theme.colors.primary },
  totalText: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary },
});
