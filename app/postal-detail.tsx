import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

export default function PostalDetailScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Postal Details" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        
        <Text style={styles.sectionTitle}>Local Address</Text>
        <View style={styles.card}>
          <Text style={styles.addressText}>123, Student Hostel Block B</Text>
          <Text style={styles.addressText}>SISTec Campus, Gandhi Nagar</Text>
          <Text style={styles.addressText}>Bhopal, Madhya Pradesh</Text>
          <Text style={styles.addressText}>Pincode: 462036</Text>
        </View>

        <Text style={styles.sectionTitle}>Permanent Address</Text>
        <View style={styles.card}>
          <Text style={styles.addressText}>45, Rainbow Colony, MG Road</Text>
          <Text style={styles.addressText}>Near City Center</Text>
          <Text style={styles.addressText}>Indore, Madhya Pradesh</Text>
          <Text style={styles.addressText}>Pincode: 452001</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Theme.colors.surface },
  content: { flex: 1, backgroundColor: Theme.colors.background },
  container: { padding: Theme.spacing.lg },
  sectionTitle: { fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textSecondary, marginBottom: Theme.spacing.sm, marginLeft: Theme.spacing.xs },
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.xl,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  addressText: { fontSize: Theme.typography.sizes.md, color: Theme.colors.textPrimary, lineHeight: 24 },
});
