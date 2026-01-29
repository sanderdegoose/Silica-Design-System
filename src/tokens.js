// Design tokens extracted from SILICA Design System
// This file contains the color and component tokens from Figma

// Primitive color scales (kept here for backward compatibility)
export const colors = {
  orange: {
    dark: {
      500: '#FF7400',
      700: '#994600',
    },
  },
  gray: {
    primary: {
      300: '#D1D5DB',
      600: '#4B5563',
      800: '#1F2937',
      900: '#111827',
    },
  },
  blue: {
    dark: {
      500: '#3B82F6',
      800: '#1E40AF',
    },
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    offBlack: '#1A1A1A',
  },
};

// Button semantic tokens
export const buttonTokens = {
  primary: {
    default: {
      bg: colors.orange.dark[500],
      text: colors.neutral.white,
      icon: colors.neutral.white,
    },
    hover: {
      bg: colors.orange.dark[700],
      text: colors.neutral.white,
      icon: colors.neutral.white,
    },
  },
  secondary: {
    default: {
      bg: colors.neutral.black,
      text: colors.neutral.white,
      icon: colors.neutral.white,
    },
    hover: {
      bg: colors.gray.primary[600],
      text: colors.neutral.white,
      icon: colors.neutral.white,
    },
  },
  tertiary: {
    default: {
      border: colors.neutral.black,
      text: colors.neutral.black,
      icon: colors.neutral.black,
      bg: colors.neutral.white,
    },
    hover: {
      border: colors.orange.dark[500],
      text: colors.orange.dark[500],
      icon: colors.orange.dark[500],
      bg: colors.neutral.white,
    },
  },
  disabled: {
    bg: colors.gray.primary[300],
    text: colors.gray.primary[800],
    icon: colors.gray.primary[800],
  },
};

// Spacing tokens (you can adjust these based on your Figma spacing)
export const spacing = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

// Typography tokens - Button uses Body Bold S from design system
export const typography = {
  button: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '24px',
  },
};
