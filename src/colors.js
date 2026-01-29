// SILICA Design System - Color Palette
// Extracted from Figma variables.json
// Based on Tailwind-inspired color scales

export const colors = {
  "orange": {
    "light": {
      "50": "#FFFBE6",
      "100": "#FFF7CC",
      "200": "#FFEF99",
      "300": "#FFE766",
      "400": "#FFDF33",
      "500": "#FFD800",
      "600": "#CCAD00",
      "700": "#998200",
      "800": "#665600",
      "900": "#443900",
      "950": "#221D00"
    },
    "primary": {
      "50": "#FEF8E6",
      "100": "#FEF1CC",
      "200": "#FDE399",
      "300": "#FCD566",
      "400": "#FAC533",
      "500": "#F9B500",
      "600": "#C79100",
      "700": "#956D00",
      "800": "#644800",
      "900": "#423000",
      "950": "#211800"
    },
    "dark": {
      "50": "#FFF1E6",
      "100": "#FFE3CC",
      "200": "#FFC799",
      "300": "#FFAB66",
      "400": "#FF8F33",
      "500": "#FF7400",
      "600": "#CC5D00",
      "700": "#994600",
      "800": "#662F00",
      "900": "#441F00",
      "950": "#221000"
    }
  },
  "green": {
    "light": {
      "50": "#F9FEE6",
      "100": "#F4FDCC",
      "200": "#E9FB99",
      "300": "#DDF966",
      "400": "#D5F533",
      "500": "#C6EB00",
      "600": "#9EBC00",
      "700": "#778D00",
      "800": "#4F5E00",
      "900": "#353F00",
      "950": "#1A1F00"
    },
    "primary": {
      "50": "#F0FBE6",
      "100": "#E1F7CC",
      "200": "#C3EF99",
      "300": "#A5E766",
      "400": "#87D933",
      "500": "#69CA00",
      "600": "#54A200",
      "700": "#3F7900",
      "800": "#2A5100",
      "900": "#1C3600",
      "950": "#0E1B00"
    },
    "dark": {
      "50": "#E6F9E6",
      "100": "#CCF3CC",
      "200": "#99E799",
      "300": "#66DB66",
      "400": "#33C133",
      "500": "#00A700",
      "600": "#008600",
      "700": "#006400",
      "800": "#004300",
      "900": "#002C00",
      "950": "#001600"
    }
  },
  "blue": {
    "light": {
      "50": "#E8F8FE",
      "100": "#D1F1FD",
      "200": "#A3E3FC",
      "300": "#75D5FA",
      "400": "#59D0FC",
      "500": "#3ECAFB",
      "600": "#0EB2E8",
      "700": "#0A8AB4",
      "800": "#075C78",
      "900": "#053D50",
      "950": "#021F28"
    },
    "primary": {
      "50": "#E6F8FD",
      "100": "#CCEFFA",
      "200": "#99E0F6",
      "300": "#5BD2F0",
      "400": "#2FC1E8",
      "500": "#0EAFE0",
      "600": "#0B8CB9",
      "700": "#096A8C",
      "800": "#06485E",
      "900": "#04303E",
      "950": "#021820"
    },
    "dark": {
      "50": "#E6F1FE",
      "100": "#CCE3FD",
      "200": "#99C7FB",
      "300": "#66ABF9",
      "400": "#338AF1",
      "500": "#0068DF",
      "600": "#0054B3",
      "700": "#004086",
      "800": "#002B59",
      "900": "#001C3B",
      "950": "#000E1E"
    }
  },
  "red": {
    "50": "#FEE7EB",
    "100": "#FDCFD7",
    "200": "#FBA0AF",
    "300": "#F97087",
    "400": "#F0385A",
    "500": "#D60B2D",
    "600": "#AB0924",
    "700": "#80071B",
    "800": "#560512",
    "900": "#37030C",
    "950": "#1C0206"
  },
  "gray": {
    "light": {
      "50": "#FEFEFE",
      "100": "#FCFCFB",
      "200": "#FAF9F7",
      "300": "#F9F7F4",
      "400": "#F8F6F2",
      "500": "#F7F5F1",
      "600": "#D9D4CC",
      "700": "#ADA79D",
      "800": "#6E6860",
      "900": "#4A453F",
      "950": "#252320"
    },
    "primary": {
      "50": "#F7F7F6",
      "100": "#EFEEEE",
      "200": "#DEDDDC",
      "300": "#CECCCB",
      "400": "#ABA9A7",
      "500": "#898683",
      "600": "#6E6B69",
      "700": "#53514F",
      "800": "#373635",
      "900": "#252423",
      "950": "#131212"
    },
    "dark": {
      "50": "#FDFCFB",
      "100": "#F8F6F3",
      "200": "#F4F1EB",
      "300": "#EFECE4",
      "400": "#EDEAE0",
      "500": "#EBE7DD",
      "600": "#CEC7B8",
      "700": "#A69C8A",
      "800": "#6B6459",
      "900": "#47433B",
      "950": "#24221E"
    }
  },
  "neutral": {
    "white": "#FFFFFF",
    "offBlack": "#262626",
    "black": "#000000"
  }
};

// Semantic color mappings (for easier usage in components)
export const semanticColors = {
  primary: colors.orange.dark[500],
  secondary: colors.neutral.black,
  success: colors.green.primary[500],
  warning: colors.orange.primary[500],
  error: colors.red[500],
  info: colors.blue.primary[500],
  
  text: {
    primary: colors.gray.primary[900],
    secondary: colors.gray.primary[600],
    disabled: colors.gray.primary[400],
    inverse: colors.neutral.white,
  },
  
  background: {
    primary: colors.neutral.white,
    secondary: colors.gray.light[50],
    tertiary: colors.gray.light[100],
  },
  
  border: {
    default: colors.gray.light[200],
    hover: colors.orange.dark[500],
    focus: colors.blue.primary[500],
  },
};

// Export individual color scales for convenience
export const orange = colors.orange;
export const green = colors.green;
export const blue = colors.blue;
export const red = colors.red;
export const gray = colors.gray;
export const neutral = colors.neutral;

export default colors;
