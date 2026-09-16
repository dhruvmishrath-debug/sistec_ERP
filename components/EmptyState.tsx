import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

export default function EmptyState({ text, icon = "database" }: { text: string, icon?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} size={40} color={Theme.colors.primary} />
        {/* Simulating the warning triangle seen in screenshots */}
        <View style={styles.warningBadge}>
          <FontAwesome name="exclamation-triangle" size={16} color={Theme.colors.surface} style={styles.warningIcon} />
        </View>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.spacing.xl,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#E6F2F0', // Light teal background
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  warningBadge: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: Theme.colors.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningIcon: {
    marginTop: -2, // Center the FontAwesome exclamation slightly
  },
  text: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textSecondary,
    fontWeight: Theme.typography.weights.medium,
    textAlign: 'center',
  }
});
