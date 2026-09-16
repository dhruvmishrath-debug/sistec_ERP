import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

export default function FeesScreen() {
  const [activeTab, setActiveTab] = useState('Academic Fees');

  const tabs = ['Academic Fees', 'Scholarship', 'Other Fees'];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Fees Paid" />
      
      <View style={styles.courseSelect}>
        <Text style={styles.courseSelectLabel}>Select course</Text>
        <View style={styles.dropdownPlaceholder}>
          <Text>AIDS 3 SEM 2 YR</Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total Fees</Text>
            <Text style={styles.summaryValue}>₹ 104300.00</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Balance</Text>
            <Text style={styles.summaryValue}>₹ 51350.00</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Concession</Text>
            <Text style={styles.summaryValue}>₹ 0.00</Text>
          </View>
        </View>

        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleLabel}>Fees paid</Text>
            <Text style={styles.circleAmount}>₹52950.0</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>StudentId</Text>
            <Text style={styles.detailValue}>5979719</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Basic Course</Text>
            <Text style={styles.detailValue}>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Semester</Text>
            <Text style={styles.detailValue}>SEM 3</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>SessionName</Text>
            <Text style={styles.detailValue}>2026-2027</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount</Text>
            <Text style={styles.detailValue}>52950.00</Text>
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
  courseSelect: {
    padding: 15,
    backgroundColor: '#fff',
  },
  courseSelectLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  dropdownPlaceholder: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007A65',
  },
  tabText: {
    fontSize: 12,
    color: '#007A65',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#007A65',
  },
  content: {
    flex: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  circleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: '#007A65',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLabel: {
    fontSize: 14,
    color: '#666',
  },
  circleAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007A65',
  },
  payButton: {
    backgroundColor: '#007A65',
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    width: 100,
    fontSize: 12,
    color: '#666',
  },
  detailValue: {
    flex: 1,
    fontSize: 12,
    color: '#333',
  },
});
