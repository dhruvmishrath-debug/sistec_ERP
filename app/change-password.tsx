import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import PrimaryButton from '@/components/PrimaryButton';
import { FormLabel, FormInput } from '@/components/FormElements';
import { Theme } from '@/constants/Theme';

export default function ChangePasswordScreen() {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleUpdate = () => {
    Alert.alert("Success", "Password updated successfully.", [{ text: "OK" }]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Change Password" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        
        <View style={styles.card}>
          <FormLabel label="Current Password" />
          <FormInput value={current} placeholder="Enter current password" style={styles.input} />
          
          <FormLabel label="New Password" />
          <FormInput value={newPass} placeholder="Enter new password" style={styles.input} />
          
          <FormLabel label="Confirm New Password" />
          <FormInput value={confirm} placeholder="Confirm new password" style={styles.inputLast} />
        </View>

        <PrimaryButton title="Update Password" onPress={handleUpdate} />

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
    marginBottom: Theme.spacing.xl,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  input: { marginBottom: Theme.spacing.lg },
  inputLast: { marginBottom: 0 },
});
