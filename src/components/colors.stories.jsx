import { colors, semanticColors } from '../colors';

export default {
  title: 'SILICA Design System/Colors',
  parameters: {
    layout: 'padded',
  },
};

// Helper component to display a color swatch
const ColorSwatch = ({ color, name, shade, isBaseline = false }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '80px',
    }}
  >
    <div
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: color,
        borderRadius: '8px',
        border: color === '#ffffff' || color === '#fff' ? '1px solid #e5e7eb' : 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '8px',
      }}
    />
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>
        {shade}
      </div>
      <div style={{ fontSize: '11px', color: '#6B7280', fontFamily: 'monospace' }}>
        {color}
      </div>
    </div>
  </div>
);

// Helper component for color scale row
const ColorScale = ({ title, scale, variant }) => (
  <div style={{ marginBottom: '48px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {Object.entries(scale).map(([shade, color]) => (
        <ColorSwatch key={shade} color={color} shade={shade} />
      ))}
    </div>
  </div>
);

// All Colors Overview
export const AllColors = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', color: '#111827' }}>
          SILICA Color System
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.5' }}>
          A comprehensive color palette based on Tailwind principles with Orange, Green, Blue, Red, Gray, and Neutral colors.
          Each color has Light, Primary, and Dark variants with shades from 50 to 950.
        </p>
      </div>

      {/* Orange Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Orange
        </h2>
        <ColorScale title="Orange Light" scale={colors.orange.light} />
        <ColorScale title="Orange Primary" scale={colors.orange.primary} />
        <ColorScale title="Orange Dark" scale={colors.orange.dark} />
      </div>

      {/* Green Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Green
        </h2>
        <ColorScale title="Green Light" scale={colors.green.light} />
        <ColorScale title="Green Primary" scale={colors.green.primary} />
        <ColorScale title="Green Dark" scale={colors.green.dark} />
      </div>

      {/* Blue Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Blue
        </h2>
        <ColorScale title="Blue Light" scale={colors.blue.light} />
        <ColorScale title="Blue Primary" scale={colors.blue.primary} />
        <ColorScale title="Blue Dark" scale={colors.blue.dark} />
      </div>

      {/* Red Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Red
        </h2>
        <ColorScale title="Red" scale={colors.red} />
      </div>

      {/* Gray Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Gray
        </h2>
        <ColorScale title="Gray Light" scale={colors.gray.light} />
        <ColorScale title="Gray Primary" scale={colors.gray.primary} />
        <ColorScale title="Gray Dark" scale={colors.gray.dark} />
      </div>

      {/* Neutral Colors */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
          Neutral
        </h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <ColorSwatch color={colors.neutral.white} shade="White" name="white" />
          <ColorSwatch color={colors.neutral.offBlack} shade="Off-Black" name="off-black" />
          <ColorSwatch color={colors.neutral.black} shade="Black" name="black" />
        </div>
      </div>
    </div>
  ),
};

// Semantic Colors
export const SemanticColors = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
        Semantic Colors
      </h2>
      <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>
        Pre-defined colors for common use cases in your application.
      </p>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Status Colors</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ColorSwatch color={semanticColors.primary} shade="Primary" name="primary" />
          <ColorSwatch color={semanticColors.secondary} shade="Secondary" name="secondary" />
          <ColorSwatch color={semanticColors.success} shade="Success" name="success" />
          <ColorSwatch color={semanticColors.warning} shade="Warning" name="warning" />
          <ColorSwatch color={semanticColors.error} shade="Error" name="error" />
          <ColorSwatch color={semanticColors.info} shade="Info" name="info" />
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Text Colors</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ColorSwatch color={semanticColors.text.primary} shade="Primary" name="text-primary" />
          <ColorSwatch color={semanticColors.text.secondary} shade="Secondary" name="text-secondary" />
          <ColorSwatch color={semanticColors.text.disabled} shade="Disabled" name="text-disabled" />
          <ColorSwatch color={semanticColors.text.inverse} shade="Inverse" name="text-inverse" />
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Background Colors</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ColorSwatch color={semanticColors.background.primary} shade="Primary" name="bg-primary" />
          <ColorSwatch color={semanticColors.background.secondary} shade="Secondary" name="bg-secondary" />
          <ColorSwatch color={semanticColors.background.tertiary} shade="Tertiary" name="bg-tertiary" />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Border Colors</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ColorSwatch color={semanticColors.border.default} shade="Default" name="border-default" />
          <ColorSwatch color={semanticColors.border.hover} shade="Hover" name="border-hover" />
          <ColorSwatch color={semanticColors.border.focus} shade="Focus" name="border-focus" />
        </div>
      </div>
    </div>
  ),
};

// Orange Scale Focus
export const OrangeScale = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Orange Scale</h2>
      <ColorScale title="Orange Light" scale={colors.orange.light} />
      <ColorScale title="Orange Primary" scale={colors.orange.primary} />
      <ColorScale title="Orange Dark (Brand)" scale={colors.orange.dark} />
      
      <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#FFF1E6', borderRadius: '8px', border: '2px solid #FF7400' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#FF7400' }}>
          Brand Color
        </h3>
        <p style={{ fontSize: '14px', color: '#662F00' }}>
          Orange Dark 500 (#FF7400) is your primary brand color used in buttons, links, and key UI elements.
        </p>
      </div>
    </div>
  ),
};

// Usage Examples
export const UsageExamples = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Usage Examples</h2>
      
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button style={{
            backgroundColor: semanticColors.primary,
            color: 'white',
            padding: '12px 24px',
            borderRadius: '24px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
          }}>
            Primary Button
          </button>
          <button style={{
            backgroundColor: semanticColors.secondary,
            color: 'white',
            padding: '12px 24px',
            borderRadius: '24px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
          }}>
            Secondary Button
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: semanticColors.primary,
            padding: '12px 24px',
            borderRadius: '24px',
            border: `2px solid ${semanticColors.primary}`,
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
          }}>
            Outline Button
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: `${semanticColors.success}15`,
            border: `1px solid ${semanticColors.success}`,
            color: colors.green.dark[800],
          }}>
            <strong>Success:</strong> Your changes have been saved successfully.
          </div>
          <div style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: `${semanticColors.warning}15`,
            border: `1px solid ${semanticColors.warning}`,
            color: colors.orange.dark[800],
          }}>
            <strong>Warning:</strong> Please review your information before submitting.
          </div>
          <div style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: `${semanticColors.error}15`,
            border: `1px solid ${semanticColors.error}`,
            color: colors.red[800],
          }}>
            <strong>Error:</strong> There was a problem processing your request.
          </div>
          <div style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: `${semanticColors.info}15`,
            border: `1px solid ${semanticColors.info}`,
            color: colors.blue.dark[800],
          }}>
            <strong>Info:</strong> New features are now available in your dashboard.
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{
            padding: '24px',
            backgroundColor: semanticColors.background.primary,
            border: `1px solid ${semanticColors.border.default}`,
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: semanticColors.text.primary, marginBottom: '8px' }}>
              Card Title
            </h4>
            <p style={{ fontSize: '14px', color: semanticColors.text.secondary }}>
              This is a card component using the color system.
            </p>
          </div>
          <div style={{
            padding: '24px',
            backgroundColor: colors.orange.light[50],
            border: `2px solid ${colors.orange.dark[500]}`,
            borderRadius: '12px',
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.orange.dark[900], marginBottom: '8px' }}>
              Featured Card
            </h4>
            <p style={{ fontSize: '14px', color: colors.orange.dark[700] }}>
              Highlighted content with brand colors.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Code Examples
export const CodeExamples = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Code Examples</h2>
      
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Importing Colors</h3>
        <pre style={{
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}>
{`import { colors, semanticColors } from '../colors';

// Using color scales
const primaryColor = colors.orange.dark[500];
const textColor = colors.gray.primary[900];

// Using semantic colors
const buttonColor = semanticColors.primary;
const successColor = semanticColors.success;`}
        </pre>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>CSS/Styled Components</h3>
        <pre style={{
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}>
{`// In CSS
.button-primary {
  background-color: #FF7400; /* orange.dark.500 */
  color: #ffffff;
}

// In styled-components
const Button = styled.button\`
  background-color: \${colors.orange.dark[500]};
  color: \${colors.neutral.white};
  
  &:hover {
    background-color: \${colors.orange.dark[700]};
  }
\`;`}
        </pre>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>React Component</h3>
        <pre style={{
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}>
{`import { semanticColors } from '../colors';

function Alert({ type, message }) {
  const alertColors = {
    success: semanticColors.success,
    warning: semanticColors.warning,
    error: semanticColors.error,
    info: semanticColors.info,
  };

  return (
    <div style={{
      backgroundColor: \`\${alertColors[type]}15\`,
      border: \`1px solid \${alertColors[type]}\`,
      padding: '16px',
      borderRadius: '8px',
    }}>
      {message}
    </div>
  );
}`}
        </pre>
      </div>
    </div>
  ),
};
