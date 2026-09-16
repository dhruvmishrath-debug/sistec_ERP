import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import PrimaryButton from '@/components/PrimaryButton';
import { FormLabel, FormInput } from '@/components/FormElements';
import { Theme } from '@/constants/Theme';

export default function ProfileDetailScreen() {
  const [name, setName] = useState('DHRUV MISHRA');
  const [enrollment, setEnrollment] = useState('0112AI221021');
  const [dob, setDob] = useState('15 Aug 2004');
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [fatherName, setFatherName] = useState('Mr. John Doe');
  const [motherName, setMotherName] = useState('Mrs. Jane Doe');
  const [category, setCategory] = useState('General');

  const handleSave = () => {
    Alert.alert("Profile Updated", "Your profile details have been saved successfully.", [{ text: "OK" }]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Edit Personal Details" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        
        <View style={styles.card}>
          <FormLabel label="Full Name" />
          <FormInput value={name} placeholder="Enter your full name" style={styles.input} />

          <FormLabel label="Enrollment No" />
          <FormInput value={enrollment} placeholder="Enter enrollment number" style={styles.input} />

          <FormLabel label="Date of Birth" />
          <FormInput value={dob} placeholder="DD MMM YYYY" style={styles.input} />

          <FormLabel label="Blood Group" />
          <FormInput value={bloodGroup} placeholder="e.g. O+" style={styles.input} />

          <FormLabel label="Father's Name" />
          <FormInput value={fatherName} placeholder="Enter father's name" style={styles.input} />

          <FormLabel label="Mother's Name" />
          <FormInput value={motherName} placeholder="Enter mother's name" style={styles.input} />

          <FormLabel label="Category" />
          <FormInput value={category} placeholder="e.g. General, OBC" style={styles.inputLast} />
        </View>

        <PrimaryButton title="Save Changes" onPress={handleSave} />

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
