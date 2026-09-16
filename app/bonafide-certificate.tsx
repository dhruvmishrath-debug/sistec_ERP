import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import PrimaryButton from '@/components/PrimaryButton';
import { FormLabel, FormInput, FormDropdown } from '@/components/FormElements';
import { Theme } from '@/constants/Theme';

export default function BonafideCertificateScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Bonafide Certificate" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.formCard}>
          <FormLabel label="Select Certificate" />
          <FormDropdown placeholder="Select Course" />
          
          <View style={styles.spacing} />
          
          <FormInput 
            placeholder="Enter Reason" 
            multiline={true} 
          />
        </View>

        <PrimaryButton 
          title="Submit" 
          onPress={() => Alert.alert("Success", "Bonafide Certificate application submitted successfully.", [{ text: "OK" }])} 
          style={styles.submitButton}
        />
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
    backgroundColor: Theme.colors.background, // F5F7FA as in screenshot
  },
  contentContainer: {
    padding: Theme.spacing.lg,
  },
  formCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.lg,
    // Add subtle shadow as seen in the white card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  spacing: {
    height: Theme.spacing.lg,
  },
  submitButton: {
    marginTop: Theme.spacing.sm,
  }
});
