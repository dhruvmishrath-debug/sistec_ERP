import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const noticeData = [
  { title: 'Mid-Sem Examination Dates Announced', date: '15 Sep 2026', desc: 'The mid-semester examinations will commence from 15th October.' },
  { title: 'Holiday on Friday', date: '10 Sep 2026', desc: 'The institute will remain closed on Friday on account of the local festival.' },
  { title: 'Fee Submission Deadline', date: '05 Sep 2026', desc: 'Last date to submit semester fees without late fine is 20th September.' },
];

export default function NoticeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Notice Board" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {noticeData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.7}>
            <View style={styles.iconContainer}>
              <FontAwesome name="bullhorn" size={20} color={Theme.colors.primary} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
            </View>
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
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  iconContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E6F2F0', justifyContent: 'center', alignItems: 'center', marginRight: Theme.spacing.md },
  infoContainer: { flex: 1 },
  title: { fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: 4 },
  date: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary, marginBottom: Theme.spacing.sm },
  desc: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, lineHeight: 20 },
});
