import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const contactData = [
  { label: 'Mobile No', value: '+91 9876543210' },
  { label: 'Email ID', value: 'dhruv.mishra@example.com' },
  { label: 'Parent Mobile No', value: '+91 9123456789' },
  { label: 'Guardian Mobile No', value: 'N/A' },
];

export default function ContactDetailScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Contact Details" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {contactData.map((item, index) => (
            <View key={index} style={[styles.row, index === contactData.length - 1 && styles.lastRow]}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
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
    padding: Theme.spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  row: { flexDirection: 'column', paddingVertical: Theme.spacing.md, borderBottomWidth: 1, borderBottomColor: Theme.colors.border },
  lastRow: { borderBottomWidth: 0 },
  label: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary, marginBottom: 4 },
  value: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.medium, color: Theme.colors.textPrimary },
});
