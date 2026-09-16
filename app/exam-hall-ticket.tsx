import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import InnerHeader from '@/components/InnerHeader';
import PrimaryButton from '@/components/PrimaryButton';
import { Theme } from '@/constants/Theme';

export default function ExamHallTicketScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Exam Hall Ticket" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.ticketCard}>
          <View style={styles.ticketHeader}>
            <Text style={styles.universityName}>Sagar Institute of Science & Technology</Text>
            <Text style={styles.ticketTitle}>MID SEMESTER EXAMINATION 2026</Text>
          </View>
          
          <View style={styles.studentInfo}>
            <Text style={styles.infoLabel}>Name: <Text style={styles.infoValue}>DHRUV MISHRA</Text></Text>
            <Text style={styles.infoLabel}>Enrollment No: <Text style={styles.infoValue}>0112AI221021</Text></Text>
            <Text style={styles.infoLabel}>Branch: <Text style={styles.infoValue}>ARTIFICIAL INTELLIGENCE</Text></Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.subjectsTitle}>Eligible Subjects:</Text>
          {['CS501 (AI)', 'CS502 (DSA)', 'CS503 (SE)'].map((sub, i) => (
             <Text key={i} style={styles.subjectItem}>• {sub}</Text>
          ))}

          <View style={styles.divider} />

          <View style={styles.barcodeContainer}>
            <FontAwesome name="barcode" size={60} color="#333" />
            <Text style={styles.barcodeText}>0112AI221021</Text>
          </View>
        </View>

        <PrimaryButton title="Download PDF" onPress={() => {}} style={styles.downloadBtn} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Theme.colors.surface },
  content: { flex: 1, backgroundColor: Theme.colors.background },
  container: { padding: Theme.spacing.lg },
  ticketCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.xl,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  ticketHeader: { alignItems: 'center', marginBottom: Theme.spacing.lg },
  universityName: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.primary, textAlign: 'center' },
  ticketTitle: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginTop: 4 },
  studentInfo: { marginBottom: Theme.spacing.lg },
  infoLabel: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: 4 },
  infoValue: { color: Theme.colors.textPrimary, fontWeight: Theme.typography.weights.bold },
  divider: { height: 1, backgroundColor: Theme.colors.border, borderStyle: 'dashed', marginVertical: Theme.spacing.lg },
  subjectsTitle: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.sm },
  subjectItem: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: 4, marginLeft: Theme.spacing.sm },
  barcodeContainer: { alignItems: 'center' },
  barcodeText: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary, marginTop: 4, letterSpacing: 2 },
  downloadBtn: { marginTop: Theme.spacing.xl },
});
