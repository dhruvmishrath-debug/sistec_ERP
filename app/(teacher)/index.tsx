import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Theme } from '@/constants/Theme';
import { useAuth } from '../../context/AuthContext';

const DashboardIcon = require('../../assets/menu_icon/dashboard.png');
const AttendanceIcon = require('../../assets/menu_icon/ic_attendance.png');
const ClassScheduleIcon = require('../../assets/menu_icon/ic_class_schedule.png');
const ResultIcon = require('../../assets/menu_icon/ic_result.png');
const LmsIcon = require('../../assets/menu_icon/ic_lms.png');
const NoticeIcon = require('../../assets/menu_icon/ic_feedback.png');
const CertificateIcon = require('../../assets/menu_icon/ic_certificate.png');

const GridItem = ({ Icon, iconName, title, route, isLogout }: { Icon?: any, iconName?: any, title: string, route?: any, isLogout?: boolean }) => {
  const router = useRouter();
  const { logout } = useAuth();
  
  return (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => {
        if (isLogout) {
          logout();
        } else if (route) {
          router.push(route);
        }
      }}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, isLogout && { backgroundColor: '#FFE5E5' }]}>
        {Icon ? (
          <Image source={Icon} style={{ width: 24, height: 24, tintColor: Theme.colors.primary }} resizeMode="contain" />
        ) : iconName ? (
          <FontAwesome name={iconName} size={24} color={isLogout ? Theme.colors.error : Theme.colors.primary} />
        ) : null}
      </View>
      <Text style={styles.gridText} numberOfLines={2}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function TeacherDashboard() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image 
              source={require('../../assets/images/user_profile.png')} 
              style={styles.profilePic} 
            />
            <View>
              <Text style={styles.greeting}>Hi,</Text>
              <Text style={styles.name}>{user?.name || 'TEACHER'}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
             <TouchableOpacity style={styles.headerIcon}>
               <FontAwesome name="envelope-o" size={24} color={Theme.colors.primary} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.headerIcon}>
               <FontAwesome name="bell-o" size={24} color={Theme.colors.primary} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerSubtitle}>TEACHER PORTAL</Text>
          <Text style={styles.bannerSession}>Academic Year 2026-2027</Text>
          <View style={styles.bannerImagePlaceholder}>
            <Text style={styles.bannerImageText}>Faculty Control</Text>
            <Text style={styles.bannerImageSubText}>Manage classes effectively</Text>
          </View>
        </View>

        {/* Teaching Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.overviewRow}>
             <View style={styles.overviewCard}>
                <Text style={styles.overviewCount}>3</Text>
                <Text style={styles.overviewLabel}>Classes Today</Text>
             </View>
             <View style={styles.overviewCard}>
                <Text style={styles.overviewCount}>15</Text>
                <Text style={styles.overviewLabel}>Leaves Pending</Text>
             </View>
          </View>
        </View>

        {/* Administration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Administration</Text>
          <View style={styles.grid}>
            <GridItem Icon={DashboardIcon} title="Dashboard" />
            <GridItem Icon={AttendanceIcon} title="Mark Attendance" route="/teacher/attendance" />
            <GridItem Icon={ClassScheduleIcon} title="My Schedule" route="/teacher/schedule" />
            <GridItem Icon={ResultIcon} title="Upload Results" route="/teacher/results" />
            <GridItem Icon={CertificateIcon} title="Student Leaves" route="/teacher/leaves" />
            <GridItem Icon={LmsIcon} title="LMS Uploads" route="/teacher/lms" />
            <GridItem Icon={NoticeIcon} title="Publish Notice" route="/teacher/notice" />
            <GridItem iconName="sign-out" title="Logout" isLogout={true} />
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Theme.colors.surface },
  container: { flex: 1, backgroundColor: Theme.colors.background },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg, paddingVertical: Theme.spacing.md,
    backgroundColor: Theme.colors.surface, marginBottom: Theme.spacing.sm,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  profilePic: { width: 44, height: 44, borderRadius: 22, marginRight: Theme.spacing.md },
  greeting: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: 2 },
  name: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary },
  headerRight: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  headerIcon: { marginLeft: Theme.spacing.lg },
  bannerContainer: { backgroundColor: Theme.colors.surface, paddingVertical: Theme.spacing.lg, paddingHorizontal: Theme.spacing.lg, alignItems: 'center', marginBottom: Theme.spacing.sm },
  bannerSubtitle: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, textAlign: 'center', marginBottom: Theme.spacing.xs },
  bannerSession: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: Theme.spacing.md },
  bannerImagePlaceholder: { width: '100%', height: 140, backgroundColor: '#8B4513', borderRadius: Theme.layout.borderRadius, justifyContent: 'center', alignItems: 'center' },
  bannerImageText: { color: Theme.colors.surface, fontSize: Theme.typography.sizes.xxl, fontWeight: Theme.typography.weights.bold },
  bannerImageSubText: { color: Theme.colors.surface, fontSize: Theme.typography.sizes.md, marginTop: Theme.spacing.xs },
  section: { backgroundColor: Theme.colors.surface, paddingHorizontal: Theme.spacing.lg, paddingVertical: Theme.spacing.lg, marginBottom: Theme.spacing.sm },
  sectionTitle: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.lg },
  overviewRow: { flexDirection: 'row', justifyContent: 'space-between' },
  overviewCard: { flex: 1, backgroundColor: '#F0F8FF', borderRadius: Theme.layout.borderRadius, padding: Theme.spacing.lg, alignItems: 'center', marginHorizontal: 5 },
  overviewCount: { fontSize: 32, fontWeight: Theme.typography.weights.bold, color: Theme.colors.primary, marginBottom: 5 },
  overviewLabel: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, fontWeight: Theme.typography.weights.medium },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  gridItem: { width: '33.33%', alignItems: 'center', marginBottom: Theme.spacing.xl, paddingHorizontal: 5 },
  iconContainer: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: Theme.spacing.sm },
  gridText: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textPrimary, textAlign: 'center', fontWeight: Theme.typography.weights.medium, lineHeight: 14 }
});
