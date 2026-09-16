import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function MessageScreen() {
  const [activeTab, setActiveTab] = useState('Message');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Message</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Message' && styles.activeTab]}
          onPress={() => setActiveTab('Message')}
        >
          <Text style={[styles.tabText, activeTab === 'Message' && styles.activeTabText]}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Broadcast' && styles.activeTab]}
          onPress={() => setActiveTab('Broadcast')}
        >
          <Text style={[styles.tabText, activeTab === 'Broadcast' && styles.activeTabText]}>Broadcast</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <FontAwesome name="inbox" size={80} color="#ddd" style={styles.emptyIcon} />
        <Text style={styles.emptyText}>No data found</Text>
      </View>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 15,
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#transparent',
    backgroundColor: '#F5F7FA',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#007A65',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
    marginTop: 15,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
