// SILICA Design System - Typography
// Font: Poppins (from Google Fonts)
// Weights: Regular (400), SemiBold (600)

export const typography = {
  // Heading styles
  heading: {
    desktop: {
      xl: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '48px',
        lineHeight: '56px',
      },
      l: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '40px',
      },
      m: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '32px',
      },
      s: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '28px',
      },
    },
    mobile: {
      xl: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '40px',
      },
      l: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '36px',
      },
      m: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '32px',
      },
      s: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '28px',
      },
    },
  },

  // Body text regular
  body: {
    regular: {
      l: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '32px',
      },
      m: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '28px',
      },
      s: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '24px',
      },
      xs: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '20px',
      },
    },
    bold: {
      l: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '32px',
      },
      m: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '28px',
      },
      s: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',
      },
      xs: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '20px',
      },
    },
  },

  // Link text
  link: {
    l: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '32px',
      textDecoration: 'underline',
    },
    m: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '28px',
      textDecoration: 'underline',
    },
    s: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      textDecoration: 'underline',
    },
    xs: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
      textDecoration: 'underline',
    },
  },

  // Button text
  button: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  },

  // Label text
  label: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '20px',
  },
};

// Helper function to apply typography styles
export const applyTypography = (style) => {
  return {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
    fontSize: style.fontSize,
    lineHeight: style.lineHeight,
    ...(style.textDecoration && { textDecoration: style.textDecoration }),
  };
};

// CSS string for importing Poppins font
export const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
`;

// Global font family setting
export const fontFamily = "'Poppins', sans-serif";

export default typography;
