import Notification from './Notification';

export default {
  title: 'SILICA Design System/Notification',
  component: Notification,
  argTypes: {
    variant: {
      control: 'select',
      options: ['inform', 'warning', 'alert'],
      description: 'Notification variant',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the notification can be closed',
    },
    children: {
      control: 'text',
      description: 'Notification content',
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
        story: 'Inform notification without the close button.',
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
};

export const WarningNotClosable = {
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: false,
  },
};

// Alert variant (red/pink)
export const Alert = {
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: true,
  },
};

export const AlertNotClosable = {
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: false,
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>
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
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>
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
        story: 'Example of notifications stacked in the top-right corner of the screen.',
      },
    },
  },
};
