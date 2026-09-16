import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

const { width } = Dimensions.get('window');

export default function IdCardScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoPlaceholder}>
              <FontAwesome name="graduation-cap" size={24} color={Theme.colors.surface} />
            </View>
            <Text style={styles.headerText}>SAGAR INSTITUTE OF SCIENCE & TECHNOLOGY (SISTec)</Text>
          </View>
          
          {/* Photo */}
          <View style={styles.photoContainer}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
              style={styles.photo} 
            />
          </View>

          {/* Name */}
          <Text style={styles.name}>DHRUV MISHRA</Text>
          
          <View style={styles.studentIdContainer}>
            <Text style={styles.studentIdLabel}>Student ID</Text>
            <Text style={styles.studentId}>5979719</Text>
          </View>

          {/* Details Grid */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Branch :</Text>
              <Text style={styles.detailValue}>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Semester :</Text>
              <Text style={styles.detailValue}>SEM 3</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Session :</Text>
              <Text style={styles.detailValue}>2026-2027</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Roll No. :</Text>
              <Text style={styles.detailValue}>0187AS251044</Text>
            </View>
          </View>

          {/* Barcode Placeholder */}
          <View style={styles.barcodeContainer}>
             {/* Simulating a barcode with borders */}
            <View style={styles.barcodeMock}>
              {[1,3,2,1,4,1,2,3,1,2,2,1,3].map((w, i) => (
                <View key={i} style={[styles.barcodeLine, { width: w * 2 }]} />
              ))}
            </View>
            <Text style={styles.barcodeText}>5979719</Text>
          </View>

          {/* Signature */}
          <View style={styles.signatureContainer}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureText}>Principal</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.surface,
  },
  container: {
    flexGrow: 1,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background,
  },
  card: {
    width: width - 40,
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderTopWidth: 6,
    borderTopColor: Theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
    paddingBottom: Theme.spacing.md,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: Theme.colors.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Theme.spacing.sm,
  },
  headerText: {
    flex: 1,
    fontSize: Theme.typography.sizes.sm,
    fontWeight: Theme.typography.weights.bold,
    color: Theme.colors.secondary,
    textAlign: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  photo: {
    width: 100,
    height: 120, // Portrait ratio
    borderRadius: 4, // Slight rounding
    borderWidth: 2,
    borderColor: Theme.colors.border,
  },
  name: {
    fontSize: Theme.typography.sizes.lg,
    fontWeight: Theme.typography.weights.bold,
    color: Theme.colors.secondary,
    textAlign: 'center',
    marginBottom: Theme.spacing.sm,
  },
  studentIdContainer: {
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  studentIdLabel: {
    fontSize: Theme.typography.sizes.xs,
    color: Theme.colors.textSecondary,
    marginBottom: 2,
  },
  studentId: {
    fontSize: Theme.typography.sizes.sm,
    fontWeight: Theme.typography.weights.bold,
    color: Theme.colors.primary,
  },
  detailsContainer: {
    marginBottom: Theme.spacing.xl,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: Theme.spacing.sm,
  },
  detailLabel: {
    width: 80,
    fontSize: Theme.typography.sizes.xs,
    color: Theme.colors.textSecondary,
    fontWeight: Theme.typography.weights.bold,
  },
  detailValue: {
    flex: 1,
    fontSize: Theme.typography.sizes.xs,
    color: Theme.colors.textPrimary,
    fontWeight: Theme.typography.weights.medium,
  },
  barcodeContainer: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  barcodeMock: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  barcodeLine: {
    backgroundColor: '#000',
    height: '100%',
    marginRight: 2,
  },
  barcodeText: {
    fontSize: Theme.typography.sizes.sm,
    letterSpacing: 3,
    color: Theme.colors.textPrimary,
  },
  signatureContainer: {
    alignItems: 'flex-end',
    marginTop: Theme.spacing.md,
  },
  signatureLine: {
    width: 80,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.textSecondary,
    marginBottom: 5,
  },
  signatureText: {
    fontSize: Theme.typography.sizes.xs,
    color: Theme.colors.textPrimary,
    marginRight: 15,
  },
});
