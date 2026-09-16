import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import EmptyState from '@/components/EmptyState';
import PrimaryButton from '@/components/PrimaryButton';
import { Theme } from '@/constants/Theme';

export default function RailwayConcessionScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Railway Concession Apply" />
      
      <View style={styles.content}>
        <View style={styles.emptyStateContainer}>
          <EmptyState text="No Data Available" icon="database" />
        </View>
        
        <View style={styles.footer}>
          <PrimaryButton 
            title="New Application" 
            onPress={() => Alert.alert("Railway Concession", "New application flow would start here.", [{ text: "OK" }])} 
          />
        </View>
      </View>
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
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: Theme.spacing.xl,
    backgroundColor: Theme.colors.background, // Match screen background as seen in screenshot
    paddingBottom: Theme.spacing.xl * 2, // Extra padding for bottom SafeArea if needed
  }
});
