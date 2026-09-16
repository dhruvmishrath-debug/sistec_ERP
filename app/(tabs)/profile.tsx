import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

const MenuItem = ({ icon, title, isLast, onPress }: { icon: any, title: string, isLast?: boolean, onPress: () => void }) => (
  <TouchableOpacity style={[styles.menuItem, isLast && styles.lastMenuItem]} activeOpacity={0.7} onPress={onPress}>
    <View style={styles.menuIconContainer}>
      <FontAwesome name={icon} size={20} color={Theme.colors.primary} />
    </View>
    <Text style={styles.menuTitle}>{title}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color={Theme.colors.border} />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleAlertAction = (title: string, message: string) => {
    Alert.alert(title, message, [{ text: "OK" }]);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/user_profile.png')} 
          style={styles.profilePic} 
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{user?.name || 'STUDENT'}</Text>
          <Text style={styles.studentId}>{user?.id || 'ID UNKNOWN'}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          <MenuItem icon="user-o" title="Profile Detail" onPress={() => router.push("/profile-detail")} />
          <MenuItem icon="phone" title="Contact Detail" onPress={() => router.push("/contact-detail")} />
          <MenuItem icon="envelope-o" title="Postal Detail" onPress={() => router.push("/postal-detail")} />
          <MenuItem icon="lock" title="Change Password" onPress={() => router.push("/change-password")} />
          <MenuItem icon="shield" title="Privacy Policies" onPress={() => router.push("/privacy-policies")} />
          <MenuItem icon="share-alt" title="Share App" onPress={() => handleAlertAction("Share App", "Native Share dialog would appear here.")} />
          <MenuItem icon="star-o" title="Rate App" isLast={true} onPress={() => handleAlertAction("Rate App", "Native App Store rating dialog would appear here.")} />
        </View>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={20} color={Theme.colors.error} style={{ marginRight: Theme.spacing.sm }} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Theme.spacing.xl,
    backgroundColor: Theme.colors.primary,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Theme.colors.surface,
    marginRight: Theme.spacing.lg,
  },
  headerTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: Theme.typography.sizes.xl,
    fontWeight: Theme.typography.weights.bold,
    color: Theme.colors.surface,
  },
  studentId: {
    fontSize: Theme.typography.sizes.md,
    color: '#E8F5E9',
    marginTop: Theme.spacing.xs,
  },
  content: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  menuContainer: {
    backgroundColor: Theme.colors.surface,
    marginTop: Theme.spacing.xl,
    marginHorizontal: Theme.spacing.lg,
    borderRadius: Theme.layout.borderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  menuTitle: {
    flex: 1,
    fontSize: Theme.typography.sizes.md,
    color: Theme.colors.textPrimary,
    fontWeight: Theme.typography.weights.medium,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: Theme.colors.surface,
    paddingVertical: Theme.spacing.md,
    marginHorizontal: Theme.spacing.lg,
    borderRadius: Theme.layout.borderRadius,
    borderWidth: 1,
    borderColor: Theme.colors.error,
  },
  logoutText: {
    fontSize: Theme.typography.sizes.lg,
    fontWeight: Theme.typography.weights.bold,
    color: Theme.colors.error,
  },
});
