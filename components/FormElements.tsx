import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

export const FormLabel = ({ label }: { label: string }) => (
  <Text style={styles.label}>{label}</Text>
);

export const FormInput = ({ placeholder, multiline = false, value = '', style, ...rest }: any) => (
  <TextInput
    style={[
      styles.input, 
      multiline && styles.textArea,
      style
    ]}
    placeholder={placeholder}
    placeholderTextColor={Theme.colors.textSecondary}
    multiline={multiline}
    textAlignVertical={multiline ? 'top' : 'center'}
    value={value}
    {...rest}
  />
);

export const FormDropdown = ({ placeholder, value }: any) => (
  <TouchableOpacity style={styles.dropdown} activeOpacity={0.7}>
    <Text style={[styles.inputText, !value && { color: Theme.colors.textSecondary }]}>
      {value || placeholder}
    </Text>
    <FontAwesome name="caret-down" size={16} color={Theme.colors.textPrimary} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
    fontWeight: Theme.typography.weights.medium,
    marginBottom: Theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: 4,
    paddingHorizontal: Theme.spacing.md,
    height: 48,
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
    backgroundColor: Theme.colors.surface,
  },
  textArea: {
    height: 120,
    paddingTop: Theme.spacing.md,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
    borderRadius: 4,
    paddingHorizontal: Theme.spacing.md,
    height: 48,
    backgroundColor: Theme.colors.surface,
  },
  inputText: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
  }
});
