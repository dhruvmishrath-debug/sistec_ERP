import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

export default function PrivacyPoliciesScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Privacy Policies" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        
        <View style={styles.card}>
          <Text style={styles.title}>Data Collection and Usage</Text>
          <Text style={styles.paragraph}>
            This application collects necessary academic and personal information to provide you with ERP services. 
            This includes attendance records, examination results, fee payment details, and contact information.
          </Text>

          <Text style={styles.title}>Data Security</Text>
          <Text style={styles.paragraph}>
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, 
            we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
          </Text>

          <Text style={styles.title}>Third-Party Services</Text>
          <Text style={styles.paragraph}>
            We do not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
          </Text>
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
    padding: Theme.spacing.xl,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  title: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.sm },
  paragraph: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, lineHeight: 22, marginBottom: Theme.spacing.lg },
});
