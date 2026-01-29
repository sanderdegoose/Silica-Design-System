import React, { useState } from 'react';
import { colors } from '../colors';
import { typography, applyTypography } from '../typography';
import { BadgeinfoIcon, WarningIcon, BadgealertIcon, CloseIcon } from './Icons';

// Notification tokens from design system
const notificationTokens = {
  inform: {
    bg: colors.blue.light[200],      // #A3E3FC
    icon: colors.blue.light[900],    // #053D50
    text: colors.blue.light[900],    // #053D50
    closeIcon: colors.blue.light[900], // #053D50
  },
  warning: {
    bg: colors.orange.light[200],    // #FFEF99
    icon: colors.orange.light[900],  // #443900
    text: colors.orange.light[900],  // #443900
    closeIcon: colors.orange.light[900], // #443900
  },
  alert: {
    bg: colors.red[100],             // #FAD4D7
    icon: colors.red[900],           // #3F0B0F
    text: colors.red[900],           // #3F0B0F
    closeIcon: colors.red[900],      // #3F0B0F
  },
};

const Notification = ({ 
  variant = 'inform', 
  children, 
  onClose,
  closable = true,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const tokens = notificationTokens[variant];
  
  // Icon mapping for each variant
  const iconMap = {
    inform: BadgeinfoIcon,
    warning: WarningIcon,
    alert: BadgealertIcon,
  };
  
  const IconComponent = iconMap[variant];
  
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        backgroundColor: tokens.bg,
        borderRadius: '0px',
        position: 'relative',
      }}
      {...props}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0 }}>
        <IconComponent size={24} color={tokens.icon} />
      </div>
      
      {/* Content */}
      <div style={{ 
        flex: 1, 
        color: tokens.text,
        ...applyTypography(typography.body.regular.m),
      }}>
        {children}
      </div>
      
      {/* Close button (optional) - always reserves space */}
      <div style={{ flexShrink: 0, width: '28px', height: '28px' }}>
        {closable && (
          <button
            onClick={handleClose}
            style={{
              width: '28px',
              height: '28px',
              background: 'none',
              border: 'none',
              padding: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: tokens.closeIcon,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            aria-label="Close notification"
          >
            <CloseIcon size={20} color={tokens.closeIcon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
