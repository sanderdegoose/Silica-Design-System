import Notification from './Notification';

export default {
  title: 'SILICA Design System/Notification',
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: `
The Notification component is a versatile alert banner for displaying informational, warning, or critical messages.

**Specifications:**
- Height: 56px (fixed)
- Typography: Poppins Regular 16px/28px
- Border Radius: 0px (straight edges)

**Variants:**
- **Inform** (Blue): General information, updates, tips
- **Warning** (Yellow): Important notices, cautions
- **Alert** (Red): Errors, critical issues

All colors and typography come from the SILICA Design System.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['inform', 'warning', 'alert'],
      description: 'The notification variant/type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inform' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the notification can be closed by the user',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    children: {
      control: 'text',
      description: 'The notification message content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClose: {
      description: 'Callback function when notification is closed',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

// Inform variant (blue)
export const Inform = {
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Inform notifications are used for general information, updates, and non-critical messages. Background: #A3E3FC, Text: #053D50',
      },
    },
  },
};

export const InformNotClosable = {
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Inform notification without the close button. Height remains 56px.',
      },
    },
  },
};

// Warning variant (yellow/orange)
export const Warning = {
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning notifications are used for important notices and cautions. Background: #FFEF99, Text: #443900',
      },
    },
  },
};

export const WarningNotClosable = {
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning notification without the close button.',
      },
    },
  },
};

// Alert variant (red/pink)
export const Alert = {
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert notifications are used for errors and critical situations. Background: #FAD4D7, Text: #3F0B0F',
      },
    },
  },
};

export const AlertNotClosable = {
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert notification without the close button.',
      },
    },
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
          With Close Button
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Notification variant="inform" closable={true}>
            This is a notification text and can even <a href="#" style={{ textDecoration: 'underline' }}>include a link</a>.
          </Notification>
          <Notification variant="warning" closable={true}>
            This is a notification text and can even <a href="#" style={{ textDecoration: 'underline' }}>include a link</a>.
          </Notification>
          <Notification variant="alert" closable={true}>
            This is a notification text and can even <a href="#" style={{ textDecoration: 'underline' }}>include a link</a>.
          </Notification>
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
          Without Close Button
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Notification variant="inform" closable={false}>
            This notification cannot be closed by the user.
          </Notification>
          <Notification variant="warning" closable={false}>
            This notification cannot be closed by the user.
          </Notification>
          <Notification variant="alert" closable={false}>
            This notification cannot be closed by the user.
          </Notification>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all three notification variants with and without close buttons. Note that the height remains consistent at 56px in all cases.',
      },
    },
  },
};

// With different content lengths
export const DifferentLengths = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <Notification variant="inform">
        Short message.
      </Notification>
      <Notification variant="warning">
        This is a medium length notification message with more details about what happened.
      </Notification>
      <Notification variant="alert">
        This is a longer notification message that contains multiple sentences. It demonstrates how the notification component handles longer text content. The notification should expand vertically to accommodate all the content while maintaining proper spacing and alignment.
      </Notification>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Notifications with different content lengths. The component adapts its height while maintaining 56px minimum height and proper vertical alignment.',
      },
    },
  },
};

// Interactive example with links
export const WithLinks = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <Notification variant="inform">
        Your profile has been updated. <a href="#" style={{ textDecoration: 'underline', fontWeight: '600' }}>View changes</a>
      </Notification>
      <Notification variant="warning">
        Your session will expire in 5 minutes. <a href="#" style={{ textDecoration: 'underline', fontWeight: '600' }}>Extend session</a>
      </Notification>
      <Notification variant="alert">
        Your payment failed. <a href="#" style={{ textDecoration: 'underline', fontWeight: '600' }}>Update payment method</a>
      </Notification>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Notifications with interactive links. Links should be styled with underline and bold weight for emphasis.',
      },
    },
  },
};

// Stacked notifications
export const StackedNotifications = {
  render: () => (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 1000,
    }}>
      <Notification variant="inform">
        New message received from John Doe.
      </Notification>
      <Notification variant="warning">
        Your subscription will expire in 3 days.
      </Notification>
      <Notification variant="alert">
        Failed to save changes. Please try again.
      </Notification>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of notifications stacked in the top-right corner of the screen (toast-style). Use a gap of 12px between notifications.',
      },
    },
  },
};
