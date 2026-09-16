import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '@/constants/Theme';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function PrimaryButton({ title, onPress, style, textStyle }: PrimaryButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 14,
    borderRadius: Theme.layout.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: Theme.colors.surface,
    fontSize: Theme.typography.sizes.md,
    fontWeight: Theme.typography.weights.medium,
  }
});
