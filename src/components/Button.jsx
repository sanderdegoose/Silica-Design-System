import React from 'react';
import { buttonTokens, spacing, typography } from '../tokens';

const Button = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  onClick,
  icon,
  iconOnly = false,
  iconPosition = 'left',
  ...props 
}) => {
  // Get the appropriate token based on variant
  const getButtonStyles = () => {
    if (disabled) {
      return {
        backgroundColor: buttonTokens.disabled.bg,
        color: buttonTokens.disabled.text,
        border: '2px solid transparent',
        cursor: 'not-allowed',
      };
    }

    const tokens = buttonTokens[variant];
    
    const baseStyles = {
      backgroundColor: tokens.default.bg,
      color: tokens.default.text,
      border: tokens.default.border ? `2px solid ${tokens.default.border}` : '2px solid transparent',
    };

    return baseStyles;
  };

  const getHoverStyles = () => {
    if (disabled) return {};
    
    const tokens = buttonTokens[variant];
    return {
      backgroundColor: tokens.hover.bg,
      color: tokens.hover.text,
      border: tokens.hover.border ? `2px solid ${tokens.hover.border}` : '2px solid transparent',
    };
  };

  const getSizeStyles = () => {
    if (iconOnly) {
      // Circular icon-only buttons
      switch (size) {
        case 'small':
          return {
            width: '32px',
            height: '32px',
            padding: '0',
            fontSize: '14px',
          };
        case 'large':
          return {
            width: '48px',
            height: '48px',
            padding: '0',
            fontSize: '20px',
          };
        default: // medium
          return {
            width: '40px',
            height: '40px',
            padding: '0',
            fontSize: '16px',
          };
      }
    }

    // Regular buttons with text
    switch (size) {
      case 'small':
        return {
          padding: `8px 16px`,
          fontSize: '12px',
          height: '32px',
        };
      case 'large':
        return {
          padding: `14px 24px`,
          fontSize: '16px',
          height: '48px',
        };
      default: // medium
        return {
          padding: `10px 20px`,
          fontSize: typography.button.fontSize,
          height: '40px',
        };
    }
  };

  const buttonStyles = {
    ...getButtonStyles(),
    ...getSizeStyles(),
    fontFamily: typography.button.fontFamily,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    lineHeight: typography.button.lineHeight,
    borderRadius: iconOnly ? '50%' : '24px', // Circular for icon-only, pill-shaped for regular
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box',
    minWidth: iconOnly ? 'auto' : '80px', // Prevents width fluctuation
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const currentStyles = isHovered && !disabled 
    ? { ...buttonStyles, ...getHoverStyles() }
    : buttonStyles;

  // Render icon-only button
  if (iconOnly) {
    return (
      <button
        style={currentStyles}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {icon}
      </button>
    );
  }

  // Render regular button with optional icon
  return (
    <button
      style={currentStyles}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
