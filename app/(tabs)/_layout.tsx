import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.tabIconSelected,
        tabBarInactiveTintColor: Theme.colors.tabIconDefault,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: Theme.colors.border,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: Theme.typography.sizes.sm,
          fontWeight: Theme.typography.weights.medium,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <FontAwesome name="envelope" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="id-card"
        options={{
          title: 'Id Card',
          tabBarIcon: ({ color }) => <FontAwesome name="id-card-o" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notice"
        options={{
          title: 'Notice',
          tabBarIcon: ({ color }) => <FontAwesome name="bell" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
