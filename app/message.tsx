import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

const messagesData = [
  { sender: 'Dr. Smith', preview: 'Please submit your assignment by EOD.', time: '10:30 AM', unread: true },
  { sender: 'Admin Dept', preview: 'Your railway concession is approved.', time: 'Yesterday', unread: false },
  { sender: 'Prof. Johnson', preview: 'Class cancelled for tomorrow.', time: '14 Sep', unread: false },
];

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Messages" />
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        {messagesData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.7}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.sender.charAt(0)}</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.headerRow}>
                <Text style={[styles.sender, item.unread && styles.bold]}>{item.sender}</Text>
                <Text style={[styles.time, item.unread && styles.bold]}>{item.time}</Text>
              </View>
              <Text style={styles.preview} numberOfLines={1}>{item.preview}</Text>
            </View>
            {item.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Theme.colors.surface },
  content: { flex: 1, backgroundColor: Theme.colors.surface }, // White bg for lists
  container: { padding: 0 },
  card: {
    padding: Theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: Theme.colors.primary, justifyContent: 'center', alignItems: 'center', marginRight: Theme.spacing.md },
  avatarText: { color: Theme.colors.surface, fontSize: 20, fontWeight: Theme.typography.weights.bold },
  infoContainer: { flex: 1 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  sender: { fontSize: Theme.typography.sizes.md, color: Theme.colors.textPrimary },
  bold: { fontWeight: Theme.typography.weights.bold },
  time: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textSecondary },
  preview: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, paddingRight: Theme.spacing.md },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: Theme.colors.primary, marginLeft: Theme.spacing.sm },
});
