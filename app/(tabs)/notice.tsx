import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const mockNotices = Array(10).fill({
  id: Math.random().toString(),
  title: 'Updated Attendance Notification',
  message: 'Attendance for Python Programming for AIDS (Training) on 10/09/2026 has been updated by PROF MADHURI WALIA.',
  date: '16/09/2026 10:07:01',
}).map((item, index) => ({ ...item, id: index.toString() }));

export default function NoticeScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.noticeCard}>
      <View style={styles.noticeHeader}>
        <Text style={styles.noticeTitle}>{item.title}</Text>
        <View style={styles.dateContainer}>
          <FontAwesome name="calendar" size={12} color="#007A65" style={{ marginRight: 5 }} />
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.noticeMessage}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notice</Text>
      </View>
      
      <FlatList
        data={mockNotices}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    padding: 15,
    backgroundColor: '#F5F7FA',
  },
  noticeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#007A65',
  },
  noticeHeader: {
    marginBottom: 10,
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  dateText: {
    fontSize: 10,
    color: '#007A65',
    fontWeight: 'bold',
  },
  noticeMessage: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
});
