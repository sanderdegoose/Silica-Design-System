import NXPLogo from './Logo';

export default {
  title: 'SILICA Design System/Logo',
  component: NXPLogo,
  argTypes: {
    width: {
      control: { type: 'number', min: 50, max: 500, step: 10 },
      description: 'Width of the logo',
    },
    height: {
      control: { type: 'number', min: 20, max: 200, step: 5 },
      description: 'Height of the logo',
    },
  },
};

// Default logo
export const Default = {
  args: {
    width: 117,
    height: 40,
  },
};

// Different sizes
export const Sizes = {
  render: () => (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
          Extra Small (58px × 20px)
        </h3>
        <NXPLogo width={58} height={20} />
      </div>
      
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
          Small (88px × 30px)
        </h3>
        <NXPLogo width={88} height={30} />
      </div>
      
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
          Default (117px × 40px)
        </h3>
        <NXPLogo width={117} height={40} />
      </div>
      
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
          Large (175px × 60px)
        </h3>
        <NXPLogo width={175} height={60} />
      </div>
      
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
          Extra Large (234px × 80px)
        </h3>
        <NXPLogo width={234} height={80} />
      </div>
    </div>
  ),
};

// On different backgrounds
export const OnBackgrounds = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* White background */}
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '16px', 
          fontFamily: 'Poppins, sans-serif',
          color: '#6B7280',
        }}>
          White Background
        </h3>
        <NXPLogo width={117} height={40} />
      </div>
      
      {/* Light gray background */}
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#F9FAFB',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '16px', 
          fontFamily: 'Poppins, sans-serif',
          color: '#6B7280',
        }}>
          Light Gray Background
        </h3>
        <NXPLogo width={117} height={40} />
      </div>
      
      {/* Medium gray background */}
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#E5E7EB',
        borderBottom: '1px solid #9CA3AF',
      }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '16px', 
          fontFamily: 'Poppins, sans-serif',
          color: '#374151',
        }}>
          Medium Gray Background
        </h3>
        <NXPLogo width={117} height={40} />
      </div>
      
      {/* Dark background */}
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#1F2937',
      }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '16px', 
          fontFamily: 'Poppins, sans-serif',
          color: '#D1D5DB',
        }}>
          Dark Background
        </h3>
        <NXPLogo width={117} height={40} />
      </div>
    </div>
  ),
};

// In navigation bar
export const InNavigation = {
  render: () => (
    <div style={{ 
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <NXPLogo width={88} height={30} />
      <nav style={{ display: 'flex', gap: '24px' }}>
        <a href="#" style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          color: '#374151',
          textDecoration: 'none',
        }}>
          Products
        </a>
        <a href="#" style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          color: '#374151',
          textDecoration: 'none',
        }}>
          Solutions
        </a>
        <a href="#" style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          color: '#374151',
          textDecoration: 'none',
        }}>
          About
        </a>
        <a href="#" style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          color: '#374151',
          textDecoration: 'none',
        }}>
          Contact
        </a>
      </nav>
    </div>
  ),
};

// In footer
export const InFooter = {
  render: () => (
    <footer style={{ 
      backgroundColor: '#1F2937',
      padding: '48px 24px',
      color: '#D1D5DB',
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <NXPLogo width={117} height={40} />
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}>
          <div>
            <h4 style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#F9FAFB',
            }}>
              Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                }}>
                  Semiconductors
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                }}>
                  Processors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#F9FAFB',
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                }}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ 
          borderTop: '1px solid #374151',
          paddingTop: '24px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '12px',
          color: '#9CA3AF',
        }}>
          © 2026 NXP. All rights reserved.
        </div>
      </div>
    </footer>
  ),
};

// Logo colors breakdown
export const LogoColors = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        marginBottom: '24px',
        fontFamily: 'Poppins, sans-serif',
      }}>
        Logo Color Breakdown
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: '#6B7280',
        marginBottom: '32px',
        fontFamily: 'Poppins, sans-serif',
      }}>
        The NXP logo uses three brand colors from the SILICA Design System color palette.
      </p>
      
      <div style={{ display: 'flex', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
        <NXPLogo width={234} height={80} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#F9B500',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }} />
          <div>
            <div style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              "N" - Brand Orange (Orange Primary 500)
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#6B7280',
              fontFamily: 'monospace',
            }}>
              #F9B500
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#0EAFE0',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }} />
          <div>
            <div style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              "X" - Brand Blue (Blue Primary 500)
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#6B7280',
              fontFamily: 'monospace',
            }}>
              #0EAFE0
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#69CA00',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }} />
          <div>
            <div style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              "P" - Brand Green (Green Primary 500)
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#6B7280',
              fontFamily: 'monospace',
            }}>
              #69CA00
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '48px',
        padding: '24px',
        backgroundColor: '#F9FAFB',
        borderRadius: '8px',
        borderLeft: '4px solid #0EAFE0',
      }}>
        <h3 style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '8px',
        }}>
          Design System Integration
        </h3>
        <p style={{ 
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: '#6B7280',
          lineHeight: '1.5',
        }}>
          These colors are defined as brand colors in the design system and reference:
          <br />• <code style={{ backgroundColor: '#E5E7EB', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>colors.orange.primary[500]</code>
          <br />• <code style={{ backgroundColor: '#E5E7EB', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>colors.blue.primary[500]</code>
          <br />• <code style={{ backgroundColor: '#E5E7EB', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>colors.green.primary[500]</code>
        </p>
      </div>
    </div>
  ),
};
