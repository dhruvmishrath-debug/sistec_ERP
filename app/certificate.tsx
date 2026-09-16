import React from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import PrimaryButton from '@/components/PrimaryButton';
import EmptyState from '@/components/EmptyState';
import { FormLabel, FormInput, FormDropdown } from '@/components/FormElements';
import { Theme } from '@/constants/Theme';

export default function CertificateScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Certificate" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.formCard}>
          <FormLabel label="Select Certificate" />
          <FormDropdown placeholder="Select Certificate" />
          
          <View style={styles.spacing} />
          
          <View style={styles.row}>
            <View style={styles.feesContainer}>
              <Text style={styles.feesLabel}>Fees</Text>
              <Text style={styles.feesValue}>0.0</Text>
            </View>
            <View style={styles.numberDropdownContainer}>
              <FormDropdown placeholder="Select Number" />
            </View>
          </View>

          <View style={styles.spacing} />
          
          <FormInput 
            placeholder="Enter Reason" 
            multiline={true} 
          />

          <View style={styles.spacing} />

          <PrimaryButton 
            title="Apply" 
            onPress={() => Alert.alert("Success", "Certificate application submitted successfully.", [{ text: "OK" }])} 
          />
        </View>

        {/* Empty State under the form */}
        <View style={styles.emptyStateContainer}>
          <EmptyState 
            text="You have not applied for any certificate yet." 
            icon="database" 
          />
        </View>
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
    padding: Theme.spacing.lg,
  },
  formCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  spacing: {
    height: Theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F2F0', // Light teal background as in screenshot
    height: 48,
    borderRadius: 4,
    paddingHorizontal: Theme.spacing.md,
    marginRight: Theme.spacing.md,
  },
  feesLabel: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
    fontWeight: Theme.typography.weights.medium,
  },
  feesValue: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
  },
  numberDropdownContainer: {
    flex: 1,
  },
  emptyStateContainer: {
    marginTop: Theme.spacing.xl,
  }
});
