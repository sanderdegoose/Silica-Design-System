import Button from './Button';
import { AddIcon, MoreOptionsIcon, ArrowLeftIcon } from './Icons';

export default {
  title: 'SILICA Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button variant from design system',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only circular button',
    },
    children: {
      control: 'text',
      description: 'Button text',
    },
  },
};

// Primary Button Stories
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />,
  },
};

export const PrimaryIconOnly = {
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />,
  },
};

// Secondary Button Stories
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />,
  },
};

export const SecondaryIconOnly = {
  args: {
    variant: 'secondary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />,
  },
};

// Tertiary Button Stories (White with border)
export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Label',
    icon: <ArrowLeftIcon size={18} color="currentColor" />,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const TertiaryIconOnly = {
  args: {
    variant: 'tertiary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

// Disabled State
export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />,
  },
};

export const DisabledIconOnly = {
  args: {
    variant: 'primary',
    disabled: true,
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />,
  },
};

// Size Variations
export const SmallButton = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
    icon: <AddIcon size={14} color="currentColor" />,
  },
};

export const MediumButton = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
    icon: <AddIcon size={18} color="currentColor" />,
  },
};

export const LargeButton = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
    icon: <AddIcon size={20} color="currentColor" />,
  },
};

// Complete Showcase - matching the Figma screenshot layout
export const CompleteShowcase = {
  render: () => (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="primary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Secondary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="secondary" icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="secondary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Tertiary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="tertiary" icon={<ArrowLeftIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="tertiary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Disabled</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" disabled icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="primary" disabled iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete button showcase matching the SILICA Design System. Hover over buttons to see state changes.',
      },
    },
  },
};

// Hover States Demo
export const HoverStatesDemo = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        Hover over these buttons to see the color transitions:
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="primary" icon={<AddIcon size={18} color="currentColor" />}>Primary Hover</Button>
        <Button variant="secondary" icon={<AddIcon size={18} color="currentColor" />}>Secondary Hover</Button>
        <Button variant="tertiary" icon={<ArrowLeftIcon size={18} color="currentColor" />}>Tertiary Hover</Button>
      </div>
    </div>
  ),
};
