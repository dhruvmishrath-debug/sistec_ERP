import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { Theme } from '@/constants/Theme';
import { FormLabel, FormInput } from '@/components/FormElements';
import PrimaryButton from '@/components/PrimaryButton';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const id = studentId.trim().toUpperCase();
    if (id.startsWith('T')) {
      // Mock teacher profile
      login(id, 'PROF. SARAH CONNOR', 'teacher');
    } else {
      // Mock student profile
      login(id, 'DHRUV MISHRA', 'student');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/login_background.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/login_logo.png')} 
              style={styles.logoImage} 
              resizeMode="contain" 
            />
          </View>

          <View style={styles.formContainer}>
            <FormLabel label="Student ID / Enrollment No" />
            <FormInput 
              value={studentId} 
              onChangeText={setStudentId}
              placeholder="e.g. 0112AI221021" 
              style={styles.input} 
            />
            
            <FormLabel label="Password" />
            <FormInput 
              value={password} 
              onChangeText={setPassword}
              placeholder="Enter your password" 
              secureTextEntry
              style={styles.inputLast} 
            />
            
            <Text style={styles.forgotPassword}>Forgot Password?</Text>

            <PrimaryButton title="Login" onPress={handleLogin} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#007A65' },
  keyboardView: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: Theme.spacing.xl },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoImage: {
    width: 200,
    height: 120,
    marginBottom: Theme.spacing.lg,
  },
  formContainer: {
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.xl,
    borderRadius: Theme.layout.borderRadius,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  input: { marginBottom: Theme.spacing.lg },
  inputLast: { marginBottom: Theme.spacing.sm },
  forgotPassword: { textAlign: 'right', color: Theme.colors.primary, fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.medium, marginBottom: Theme.spacing.xl },
});
