import React from 'react';
import { colors } from '../colors';

// Brand colors from SILICA Design System
const brandColors = {
  orange: colors.orange.primary[500],  // #F9B500
  blue: colors.blue.primary[500],      // #0EAFE0
  green: colors.green.primary[500],    // #69CA00
};

const NXPLogo = ({ width = 117, height = 40, ...props }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 117 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      {...props}
    >
      <path 
        d="M32.5081 0V24.125L12.128 0H0V40H12.128V15.875L32.5081 40L44.6362 20L32.5081 0Z" 
        fill={brandColors.orange}
      />
      <path 
        d="M66.7667 40L58.6397 26.75L50.5126 40H36.134L48.2621 20L36.134 0H50.3876L58.5146 13.25L66.7667 0H81.0203L68.8922 20L81.0203 40H66.7667Z" 
        fill={brandColors.blue}
      />
      <path 
        d="M102.026 0H84.7712L72.6432 20L84.7712 40V31.125H105.151C113.653 31.125 116.279 24.25 116.279 18.375V13.625C116.279 5.875 113.528 0 102.026 0ZM105.026 16.125C105.026 18.5 103.901 21.25 101.15 21.25H84.8962V9.875H100.025C103.651 9.875 105.026 11.375 105.026 14.125V16.125Z" 
        fill={brandColors.green}
      />
    </svg>
  );
};

export default NXPLogo;
