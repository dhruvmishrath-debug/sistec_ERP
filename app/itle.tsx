import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const itleData = [
  { type: 'pdf', title: 'Unit 1 Notes - Data Structure', date: '10 Sep 2026' },
  { type: 'video', title: 'Video Lecture: Trees & Graphs', date: '12 Sep 2026' },
  { type: 'pdf', title: 'Assignment 1 Details', date: '14 Sep 2026' },
];

export default function ItleScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="iTLE (E-Learning)" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {itleData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.7}>
            <View style={[styles.iconContainer, { backgroundColor: item.type === 'pdf' ? '#FEE2E2' : '#E0E7FF' }]}>
              <FontAwesome name={item.type === 'pdf' ? 'file-pdf-o' : 'play-circle'} size={24} color={item.type === 'pdf' ? '#EF4444' : '#3B82F6'} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <FontAwesome name="download" size={20} color={Theme.colors.primary} />
          </TouchableOpacity>
        ))}
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
    padding: Theme.spacing.lg,
    borderRadius: Theme.layout.borderRadius,
    marginBottom: Theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  iconContainer: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: Theme.spacing.md },
  infoContainer: { flex: 1 },
  title: { fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: 4 },
  date: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary },
});
