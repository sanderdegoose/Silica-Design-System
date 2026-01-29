import { typography, applyTypography } from '../typography';

export default {
  title: 'SILICA Design System/Typography',
  parameters: {
    layout: 'padded',
  },
};

// Helper component to display a type specimen
const TypeSpecimen = ({ label, style, text = 'The quick brown fox jumps over the lazy dog' }) => (
  <div style={{ marginBottom: '32px' }}>
    <div style={{ 
      fontSize: '12px', 
      color: '#6B7280', 
      marginBottom: '8px',
      fontFamily: 'monospace',
    }}>
      {label}
    </div>
    <div style={applyTypography(style)}>
      {text}
    </div>
    <div style={{ 
      fontSize: '11px', 
      color: '#9CA3AF', 
      marginTop: '4px',
      fontFamily: 'monospace',
    }}>
      {style.fontSize} / {style.lineHeight} • {style.fontWeight === 600 ? 'SemiBold' : 'Regular'}
    </div>
  </div>
);

// All Typography Overview
export const AllTypography = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '1200px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');`}</style>
      
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
          SILICA Typography System
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Using Poppins font family with Regular (400) and SemiBold (600) weights
        </p>
      </div>

      {/* Headings Desktop */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Headings - Desktop
        </h2>
        <TypeSpecimen 
          label="Heading Desktop XL"
          style={typography.heading.desktop.xl}
          text="Extra Large Heading"
        />
        <TypeSpecimen 
          label="Heading Desktop L"
          style={typography.heading.desktop.l}
          text="Large Heading"
        />
        <TypeSpecimen 
          label="Heading Desktop M"
          style={typography.heading.desktop.m}
          text="Medium Heading"
        />
        <TypeSpecimen 
          label="Heading Desktop S"
          style={typography.heading.desktop.s}
          text="Small Heading"
        />
      </section>

      {/* Headings Mobile */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Headings - Mobile
        </h2>
        <TypeSpecimen 
          label="Heading Mobile XL"
          style={typography.heading.mobile.xl}
          text="Extra Large Heading"
        />
        <TypeSpecimen 
          label="Heading Mobile L"
          style={typography.heading.mobile.l}
          text="Large Heading"
        />
        <TypeSpecimen 
          label="Heading Mobile M"
          style={typography.heading.mobile.m}
          text="Medium Heading"
        />
        <TypeSpecimen 
          label="Heading Mobile S"
          style={typography.heading.mobile.s}
          text="Small Heading"
        />
      </section>

      {/* Body Text Regular */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Body Text - Regular
        </h2>
        <TypeSpecimen 
          label="Body Regular L"
          style={typography.body.regular.l}
        />
        <TypeSpecimen 
          label="Body Regular M"
          style={typography.body.regular.m}
        />
        <TypeSpecimen 
          label="Body Regular S"
          style={typography.body.regular.s}
        />
        <TypeSpecimen 
          label="Body Regular XS"
          style={typography.body.regular.xs}
        />
      </section>

      {/* Body Text Bold */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Body Text - Bold
        </h2>
        <TypeSpecimen 
          label="Body Bold L"
          style={typography.body.bold.l}
        />
        <TypeSpecimen 
          label="Body Bold M"
          style={typography.body.bold.m}
        />
        <TypeSpecimen 
          label="Body Bold S"
          style={typography.body.bold.s}
        />
        <TypeSpecimen 
          label="Body Bold XS"
          style={typography.body.bold.xs}
        />
      </section>

      {/* Link Text */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Link Text
        </h2>
        <TypeSpecimen 
          label="Link L"
          style={typography.link.l}
          text="This is a link you can click"
        />
        <TypeSpecimen 
          label="Link M"
          style={typography.link.m}
          text="This is a link you can click"
        />
        <TypeSpecimen 
          label="Link S"
          style={typography.link.s}
          text="This is a link you can click"
        />
        <TypeSpecimen 
          label="Link XS"
          style={typography.link.xs}
          text="This is a link you can click"
        />
      </section>

      {/* Special Text Styles */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
          Special Text Styles
        </h2>
        <TypeSpecimen 
          label="Button Text"
          style={typography.button}
          text="Button Text"
        />
        <TypeSpecimen 
          label="Label"
          style={typography.label}
          text="LABEL TEXT"
        />
      </section>
    </div>
  ),
};

// Typography in Context
export const TypographyInContext = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');`}</style>
      
      <article>
        <h1 style={applyTypography(typography.heading.desktop.xl)}>
          Article Title Goes Here
        </h1>
        
        <p style={{ ...applyTypography(typography.body.regular.s), color: '#6B7280', marginTop: '16px', marginBottom: '32px' }}>
          Published on January 29, 2026 • 5 min read
        </p>
        
        <h2 style={{ ...applyTypography(typography.heading.desktop.l), marginTop: '32px', marginBottom: '16px' }}>
          Introduction
        </h2>
        
        <p style={{ ...applyTypography(typography.body.regular.m), marginBottom: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        
        <p style={{ ...applyTypography(typography.body.regular.m), marginBottom: '24px' }}>
          This paragraph demonstrates the <span style={applyTypography(typography.body.bold.m)}>body bold text</span> within regular text, and also shows how <a href="#" style={{ ...applyTypography(typography.link.m), color: '#0080E6' }}>links appear</a> in context.
        </p>
        
        <h3 style={{ ...applyTypography(typography.heading.desktop.m), marginTop: '32px', marginBottom: '16px' }}>
          Key Features
        </h3>
        
        <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
          <li style={{ ...applyTypography(typography.body.regular.m), marginBottom: '8px' }}>
            Comprehensive typography system
          </li>
          <li style={{ ...applyTypography(typography.body.regular.m), marginBottom: '8px' }}>
            Consistent font sizes and line heights
          </li>
          <li style={{ ...applyTypography(typography.body.regular.m), marginBottom: '8px' }}>
            Poppins font family throughout
          </li>
        </ul>
        
        <div style={{ 
          backgroundColor: '#F3F4F6', 
          padding: '24px', 
          borderRadius: '8px',
          marginTop: '32px',
          marginBottom: '32px',
        }}>
          <h4 style={{ ...applyTypography(typography.heading.desktop.s), marginBottom: '12px' }}>
            Pro Tip
          </h4>
          <p style={applyTypography(typography.body.regular.s)}>
            Use the typography helper function <code style={{ 
              backgroundColor: '#E5E7EB', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}>applyTypography()</code> to easily apply text styles to your components.
          </p>
        </div>
        
        <button style={{
          ...applyTypography(typography.button),
          backgroundColor: '#FF7400',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '24px',
          cursor: 'pointer',
        }}>
          Read More
        </button>
      </article>
    </div>
  ),
};

// Code Examples
export const CodeExamples = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
        Usage Examples
      </h2>
      
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Importing Typography
        </h3>
        <pre style={{
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}>
{`import { typography, applyTypography } from './typography';

// Apply a complete style
<h1 style={applyTypography(typography.heading.desktop.xl)}>
  Title
</h1>

// Use individual properties
<p style={{
  fontFamily: typography.body.regular.m.fontFamily,
  fontSize: typography.body.regular.m.fontSize,
  lineHeight: typography.body.regular.m.lineHeight,
}}>
  Paragraph text
</p>`}
        </pre>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Adding Poppins Font
        </h3>
        <pre style={{
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}>
{`// In your HTML or Storybook preview-head.html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

// Or in CSS
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');`}
        </pre>
      </div>
    </div>
  ),
};
