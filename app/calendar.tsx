import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import InnerHeader from '@/components/InnerHeader';
import { Theme } from '@/constants/Theme';

// Hardcoding the exact calendar state shown in the screenshot
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calendarData = [
  { date: 30, isCurrentMonth: false }, { date: 31, isCurrentMonth: false }, { date: 1, isCurrentMonth: true }, { date: 2, isCurrentMonth: true }, { date: 3, isCurrentMonth: true }, { date: 4, isCurrentMonth: true, hasEvent: true }, { date: 5, isCurrentMonth: true },
  { date: 6, isCurrentMonth: true }, { date: 7, isCurrentMonth: true }, { date: 8, isCurrentMonth: true }, { date: 9, isCurrentMonth: true }, { date: 10, isCurrentMonth: true }, { date: 11, isCurrentMonth: true }, { date: 12, isCurrentMonth: true },
  { date: 13, isCurrentMonth: true }, { date: 14, isCurrentMonth: true, hasEvent: true }, { date: 15, isCurrentMonth: true }, { date: 16, isCurrentMonth: true, isSelected: true }, { date: 17, isCurrentMonth: true }, { date: 18, isCurrentMonth: true }, { date: 19, isCurrentMonth: true, hasEvent: true },
  { date: 20, isCurrentMonth: true }, { date: 21, isCurrentMonth: true }, { date: 22, isCurrentMonth: true }, { date: 23, isCurrentMonth: true }, { date: 24, isCurrentMonth: true }, { date: 25, isCurrentMonth: true }, { date: 26, isCurrentMonth: true },
  { date: 27, isCurrentMonth: true }, { date: 28, isCurrentMonth: true }, { date: 29, isCurrentMonth: true }, { date: 30, isCurrentMonth: true }, { date: 1, isCurrentMonth: false }, { date: 2, isCurrentMonth: false, hasEvent: true }, { date: 3, isCurrentMonth: false, hasEvent: true }
];

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <InnerHeader title="Calender" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.calendarCard}>
          
          {/* Calendar Header */}
          <View style={styles.calendarHeader}>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <FontAwesome name="chevron-left" size={16} color={Theme.colors.primary} />
            </TouchableOpacity>
            <Text style={styles.monthText}>Sep 2026</Text>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <FontAwesome name="chevron-right" size={16} color={Theme.colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Days of week */}
          <View style={styles.daysRow}>
            {daysOfWeek.map(day => (
              <View key={day} style={styles.dayCell}>
                <Text style={styles.dayText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.grid}>
            {calendarData.map((item, index) => (
              <View key={index} style={styles.dateCellWrapper}>
                <View style={[
                  styles.dateCell,
                  item.isSelected && styles.dateCellSelected,
                  item.hasEvent && styles.dateCellEvent
                ]}>
                  <Text style={[
                    styles.dateText,
                    !item.isCurrentMonth && styles.dateTextInactive,
                    item.isSelected && styles.dateTextSelected
                  ]}>
                    {item.date}
                  </Text>
                  {item.hasEvent && (
                    <View style={styles.eventDot} />
                  )}
                </View>
              </View>
            ))}
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
  content: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  contentContainer: {
    padding: Theme.spacing.lg,
  },
  calendarCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.layout.borderRadius,
    padding: Theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
    paddingHorizontal: Theme.spacing.md,
  },
  monthText: {
    fontSize: Theme.typography.sizes.lg,
    color: Theme.colors.primary,
    fontWeight: Theme.typography.weights.medium,
  },
  daysRow: {
    flexDirection: 'row',
    marginBottom: Theme.spacing.md,
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
  },
  dayText: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.primary,
    fontWeight: Theme.typography.weights.medium,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCellWrapper: {
    width: '14.28%', // 100 / 7
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  dateCell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCellSelected: {
    backgroundColor: Theme.colors.success, // Solid green
  },
  dateCellEvent: {
    borderWidth: 1,
    borderColor: '#FDE047', // Yellow outline
  },
  dateText: {
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
  },
  dateTextInactive: {
    color: '#D1D5DB', // Light grey for inactive month days
  },
  dateTextSelected: {
    color: Theme.colors.surface,
    fontWeight: Theme.typography.weights.bold,
  },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Theme.colors.error, // Red dot
    position: 'absolute',
    bottom: 4,
  }
});
