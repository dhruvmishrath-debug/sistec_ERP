export const Theme = {
  colors: {
    primary: '#007A65', // Teal/Green
    secondary: '#003366', // Navy Blue
    background: '#F5F7FA', // Light grey app background
    surface: '#FFFFFF', // White cards
    textPrimary: '#333333',
    textSecondary: '#666666',
    success: '#4CAF50',
    error: '#F44336',
    border: '#EEEEEE',
    tabIconDefault: '#999999',
    tabIconSelected: '#007A65',
    cardShadow: 'rgba(0, 0, 0, 0.05)',
  },
  typography: {
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      xxl: 24,
    },
    weights: {
      regular: '400' as const,
      medium: '500' as const,
      bold: '700' as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  layout: {
    borderRadius: 8,
    cardRadius: 15,
  }
};
