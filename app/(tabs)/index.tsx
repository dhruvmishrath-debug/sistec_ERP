import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Theme } from '@/constants/Theme';
import { useAuth } from '../../context/AuthContext';

import DashboardIcon from '../../assets/menu_icon/dashboard.png';
import AttendanceIcon from '../../assets/menu_icon/ic_attendance.png';
import ClassScheduleIcon from '../../assets/menu_icon/ic_class_schedule.png';
import ExamTimeTableIcon from '../../assets/menu_icon/ic_exam_time_table.png';
import ExamHallTicketIcon from '../../assets/menu_icon/ic_exam_hall_ticket.png';
import ResultIcon from '../../assets/menu_icon/ic_result.png';
import InternalMarkIcon from '../../assets/menu_icon/ic_internal_mark.png';
import LmsIcon from '../../assets/menu_icon/ic_lms.png';
import FeesPaidIcon from '../../assets/menu_icon/ic_fees_paid.png';
import RegisterSubjectIcon from '../../assets/menu_icon/ic_register_subject.png';
import CalendarIcon from '../../assets/menu_icon/ic_calender.png';
import CertificateIcon from '../../assets/menu_icon/ic_certificate.png';
import BonafideCertificateIcon from '../../assets/menu_icon/ic_bonafied_certificate.png';
import RailwayConcessionIcon from '../../assets/menu_icon/ic_railway_concession.png';

const { width } = Dimensions.get('window');

const CircularProgress = ({ title, percentage, color, emptyColor = '#E0E0E0' }: { title: string, percentage: number, color: string, emptyColor?: string }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.circle, { borderColor: percentage === 0 ? emptyColor : color }]}>
        <Text style={styles.percentageText}>{percentage.toFixed(2)}%</Text>
      </View>
      <Text style={styles.progressTitle}>{title}</Text>
    </View>
  );
};

const GridItem = ({ Icon, title, route }: { Icon: any, title: string, route?: any }) => {
  const router = useRouter();
  
  return (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => {
        if (route) router.push(route);
      }}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {Icon ? <Image source={Icon} style={{ width: 28, height: 28, tintColor: Theme.colors.primary }} resizeMode="contain" /> : null}
      </View>
      <Text style={styles.gridText} numberOfLines={2}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
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
              <Text style={styles.name}>{user?.name || 'STUDENT'}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
             <TouchableOpacity onPress={() => router.push('/message')} style={styles.headerIcon}>
               <FontAwesome name="envelope-o" size={24} color={Theme.colors.primary} />
               <View style={styles.badge} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => router.push('/notice')} style={styles.headerIcon}>
               <FontAwesome name="bell-o" size={24} color={Theme.colors.primary} />
               <View style={styles.badge} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerSubtitle}>SAGAR INSTITUTE OF SCIENCE & TECHNOLOGY (SISTec)</Text>
          <Text style={styles.bannerSession}>2026-2027</Text>
          <View style={styles.bannerImagePlaceholder}>
            <Text style={styles.bannerImageText}>Team SISTec</Text>
            <Text style={styles.bannerImageSubText}>Nurturing Young Minds</Text>
          </View>
        </View>

        {/* Attendance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attendance</Text>
          <View style={styles.attendanceRow}>
            <CircularProgress title="Theory" percentage={85.37} color={Theme.colors.success} />
            <CircularProgress title="Practical" percentage={0.0} color={Theme.colors.error} />
            <CircularProgress title="Overall" percentage={85.37} color={Theme.colors.success} />
          </View>
        </View>

        {/* Academic */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic</Text>
          <View style={styles.grid}>
            <GridItem Icon={DashboardIcon} title="Dashboard" />
            <GridItem Icon={AttendanceIcon} title="Attendance" route="/attendance" />
            <GridItem Icon={ClassScheduleIcon} title="Class Schedule" route="/class-schedule" />
            <GridItem Icon={ExamTimeTableIcon} title="Exam Time Table" route="/exam-timetable" />
            <GridItem Icon={ExamHallTicketIcon} title="Exam Hall Ticket" route="/exam-hall-ticket" />
            <GridItem Icon={ResultIcon} title="Result" route="/result" />
            <GridItem Icon={InternalMarkIcon} title="Internal Mark" route="/internal-mark" />
            <GridItem Icon={LmsIcon} title="iTLE" route="/itle" />
            <GridItem Icon={FeesPaidIcon} title="Fees Paid" route="/fees" />
            <GridItem Icon={RegisterSubjectIcon} title="Registered Subjects" route="/registered-subjects" />
            <GridItem Icon={CalendarIcon} title="Calendar" route="/calendar" />
          </View>
        </View>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.grid}>
            <GridItem Icon={CertificateIcon} title="Certificate" route="/certificate" />
            <GridItem Icon={BonafideCertificateIcon} title="Bonafide Certificate" route="/bonafide-certificate" />
            <GridItem Icon={RailwayConcessionIcon} title="Railway Concession Apply" route="/railway-concession" />
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
  headerIcon: { marginLeft: Theme.spacing.lg, position: 'relative' },
  badge: { position: 'absolute', top: -2, right: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: Theme.colors.error },
  bannerContainer: { backgroundColor: Theme.colors.surface, paddingVertical: Theme.spacing.lg, paddingHorizontal: Theme.spacing.lg, alignItems: 'center', marginBottom: Theme.spacing.sm },
  bannerSubtitle: { fontSize: Theme.typography.sizes.sm, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, textAlign: 'center', marginBottom: Theme.spacing.xs },
  bannerSession: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, marginBottom: Theme.spacing.md },
  bannerImagePlaceholder: { width: '100%', height: 140, backgroundColor: '#354E59', borderRadius: Theme.layout.borderRadius, justifyContent: 'center', alignItems: 'center' },
  bannerImageText: { color: Theme.colors.surface, fontSize: Theme.typography.sizes.xxl, fontWeight: Theme.typography.weights.bold },
  bannerImageSubText: { color: Theme.colors.surface, fontSize: Theme.typography.sizes.md, marginTop: Theme.spacing.xs },
  section: { backgroundColor: Theme.colors.surface, paddingHorizontal: Theme.spacing.lg, paddingVertical: Theme.spacing.lg, marginBottom: Theme.spacing.sm },
  sectionTitle: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary, marginBottom: Theme.spacing.lg },
  attendanceRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  progressContainer: { alignItems: 'center' },
  circle: { width: 76, height: 76, borderRadius: 38, borderWidth: 6, justifyContent: 'center', alignItems: 'center', marginBottom: Theme.spacing.sm },
  percentageText: { fontSize: Theme.typography.sizes.md, fontWeight: Theme.typography.weights.bold, color: Theme.colors.textPrimary },
  progressTitle: { fontSize: Theme.typography.sizes.sm, color: Theme.colors.textSecondary, fontWeight: Theme.typography.weights.medium },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  gridItem: { width: '33.33%', alignItems: 'center', marginBottom: Theme.spacing.xl, paddingHorizontal: 5 },
  iconContainer: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: Theme.spacing.sm },
  gridText: { fontSize: Theme.typography.sizes.xs, color: Theme.colors.textPrimary, textAlign: 'center', fontWeight: Theme.typography.weights.medium, lineHeight: 14 }
});
