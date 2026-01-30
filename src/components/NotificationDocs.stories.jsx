import Notification from './Notification';

export default {
  title: 'SILICA Design System/Notification',
  component: Notification,
};

export const Documentation = () => (
  <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '48px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Notification Component
    </h1>
    
    <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '40px', fontFamily: 'Poppins, sans-serif' }}>
      The Notification component is a versatile alert banner used to display informational, warning, or critical messages to users.
    </p>

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Component Specifications
    </h2>
    
    <ul style={{ fontSize: '16px', lineHeight: '32px', fontFamily: 'Poppins, sans-serif' }}>
      <li><strong>Height</strong>: Minimum 56px (grows with content on smaller screens)</li>
      <li><strong>Width</strong>: 100% (adapts to container)</li>
      <li><strong>Typography</strong>: Poppins Regular, 16px / 28px</li>
      <li><strong>Border</strong>: None (straight edges)</li>
    </ul>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Variants
    </h2>

    <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Inform (Blue)
    </h3>
    <p style={{ fontSize: '16px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Used for general information, updates, and tips.
    </p>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '24px' }}>
      <Notification variant="inform">
        This is an informational message. Your profile has been updated successfully.
      </Notification>
    </div>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Colors</strong>: Background #A3E3FC • Text #053D50
    </p>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Use Cases</strong>: System updates, feature announcements, status confirmations, general notifications
    </p>

    <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Warning (Yellow/Orange)
    </h3>
    <p style={{ fontSize: '16px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Used for important notices that require attention.
    </p>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '24px' }}>
      <Notification variant="warning">
        Your session will expire in 5 minutes. Please save your work.
      </Notification>
    </div>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Colors</strong>: Background #FFEF99 • Text #443900
    </p>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Use Cases</strong>: Cautionary messages, session warnings, actions requiring attention, configuration warnings
    </p>

    <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Alert (Red/Pink)
    </h3>
    <p style={{ fontSize: '16px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Used for errors and critical situations.
    </p>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '24px' }}>
      <Notification variant="alert">
        Payment failed. Please update your payment method.
      </Notification>
    </div>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Colors</strong>: Background #FAD4D7 • Text #3F0B0F
    </p>
    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      <strong>Use Cases</strong>: Error messages, failed operations, critical system issues, security alerts
    </p>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Props
    </h2>

    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
          <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Prop</th>
          <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Type</th>
          <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Default</th>
          <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>variant</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>'inform' | 'warning' | 'alert'</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>'inform'</td>
          <td style={{ padding: '12px' }}>Determines the notification type and styling</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>children</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>ReactNode</td>
          <td style={{ padding: '12px' }}>-</td>
          <td style={{ padding: '12px' }}>The notification message content</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>closable</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>boolean</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>true</td>
          <td style={{ padding: '12px' }}>Whether the notification can be dismissed</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>onClose</td>
          <td style={{ padding: '12px', fontFamily: 'monospace' }}>() =&gt; void</td>
          <td style={{ padding: '12px' }}>undefined</td>
          <td style={{ padding: '12px' }}>Callback function triggered when notification is closed</td>
        </tr>
      </tbody>
    </table>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Usage Examples
    </h2>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Basic Usage
    </h3>
    <pre style={{ backgroundColor: '#1F2937', color: '#F9FAFB', padding: '20px', borderRadius: '8px', overflow: 'auto', fontFamily: 'monospace', fontSize: '14px' }}>
{`import Notification from './components/Notification';

// Inform notification
<Notification variant="inform">
  Your profile has been updated successfully.
</Notification>

// Warning notification
<Notification variant="warning">
  Your session will expire in 5 minutes.
</Notification>

// Alert notification
<Notification variant="alert">
  Payment failed. Please update your payment method.
</Notification>`}
    </pre>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Without Close Button
    </h3>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <Notification variant="warning" closable={false}>
        System maintenance in progress. This message cannot be dismissed.
      </Notification>
    </div>
    <pre style={{ backgroundColor: '#1F2937', color: '#F9FAFB', padding: '20px', borderRadius: '8px', overflow: 'auto', fontFamily: 'monospace', fontSize: '14px', marginBottom: '32px' }}>
{`<Notification variant="warning" closable={false}>
  System maintenance in progress.
</Notification>`}
    </pre>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      With Links
    </h3>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <Notification variant="warning">
        Your subscription expires soon.{' '}
        <a href="#" style={{ textDecoration: 'underline', fontWeight: 600, color: 'inherit' }}>
          Renew now
        </a>
      </Notification>
    </div>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Stacked Notifications
    </h3>
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Notification variant="inform">
          Your changes have been saved successfully.
        </Notification>
        <Notification variant="warning">
          Some fields require your attention before submitting.
        </Notification>
        <Notification variant="alert">
          Failed to upload file. Please try again.
        </Notification>
      </div>
    </div>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Best Practices
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif', color: '#059669' }}>
          ✅ Do's
        </h3>
        <ul style={{ fontSize: '14px', lineHeight: '28px', fontFamily: 'Poppins, sans-serif' }}>
          <li>Keep messages concise and clear</li>
          <li>Use action-oriented language</li>
          <li>Include links when users can take action</li>
          <li>Front-load important information</li>
          <li>Use sentence case</li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Poppins, sans-serif', color: '#DC2626' }}>
          ❌ Don'ts
        </h3>
        <ul style={{ fontSize: '14px', lineHeight: '28px', fontFamily: 'Poppins, sans-serif' }}>
          <li>Use technical jargon</li>
          <li>Write paragraphs of text</li>
          <li>Use ALL CAPS for emphasis</li>
          <li>Include multiple messages in one notification</li>
        </ul>
      </div>
    </div>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Design Tokens
    </h2>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Colors (from SILICA Design System)
    </h3>
    <pre style={{ backgroundColor: '#1F2937', color: '#F9FAFB', padding: '20px', borderRadius: '8px', overflow: 'auto', fontFamily: 'monospace', fontSize: '14px', marginBottom: '24px' }}>
{`// Inform (Blue)
colors.blue.light[200]    // Background: #A3E3FC
colors.blue.light[900]    // Text/Icon: #053D50

// Warning (Orange)
colors.orange.light[200]  // Background: #FFEF99
colors.orange.light[900]  // Text/Icon: #443900

// Alert (Red)
colors.red[100]           // Background: #FAD4D7
colors.red[900]           // Text/Icon: #3F0B0F`}
    </pre>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Typography
    </h3>
    <pre style={{ backgroundColor: '#1F2937', color: '#F9FAFB', padding: '20px', borderRadius: '8px', overflow: 'auto', fontFamily: 'monospace', fontSize: '14px', marginBottom: '24px' }}>
{`typography.body.regular.m
// Font: Poppins Regular
// Size: 16px
// Line Height: 28px
// Weight: 400`}
    </pre>

    <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
      Icons (from SILICA Icon Library)
    </h3>
    <ul style={{ fontSize: '14px', lineHeight: '28px', fontFamily: 'Poppins, sans-serif', marginBottom: '32px' }}>
      <li><strong>BadgeinfoIcon</strong> - Inform variant (24px)</li>
      <li><strong>WarningIcon</strong> - Warning variant (24px)</li>
      <li><strong>BadgealertIcon</strong> - Alert variant (24px)</li>
      <li><strong>CloseIcon</strong> - Close button (20px)</li>
    </ul>

    <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>
      Related Components
    </h2>
    <ul style={{ fontSize: '16px', lineHeight: '32px', fontFamily: 'Poppins, sans-serif' }}>
      <li><strong>Button</strong> - For call-to-action within notifications</li>
      <li><strong>Icons</strong> - Source of notification icons (134 icons from SILICA library)</li>
      <li><strong>Typography</strong> - Text styling system with Poppins font</li>
      <li><strong>Colors</strong> - Complete 330+ color palette from design system</li>
    </ul>
  </div>
);

Documentation.parameters = {
  docs: {
    description: {
      story: 'Complete documentation for the Notification component including specifications, variants, props, usage examples, and design tokens.',
    },
  },
};
