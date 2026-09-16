import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

export default function InnerHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <FontAwesome name="arrow-left" size={20} color={Theme.colors.textPrimary} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.surface,
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
  },
  backButton: {
    marginRight: Theme.spacing.lg,
  },
  title: {
    fontSize: Theme.typography.sizes.lg,
    fontWeight: Theme.typography.weights.medium,
    color: Theme.colors.textPrimary,
  }
});
