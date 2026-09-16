import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter, useSegments } from 'expo-router';

export type Role = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, name: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = (id: string, name: string, role: Role) => {
    setUser({ id, name, role });
    // Navigate based on role
    if (role === 'teacher') {
      router.replace('/(teacher)');
    } else {
      router.replace('/(tabs)');
    }
  };

  const logout = () => {
    setUser(null);
    router.replace('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
