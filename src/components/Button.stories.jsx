import Button from './Button';

// Simple icon components for demonstration
const PlusIcon = () => <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>;
const DotsIcon = () => <span style={{ fontSize: '18px', fontWeight: 'bold' }}>•••</span>;
const ArrowIcon = () => <span style={{ fontSize: '18px' }}>←</span>;

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
    icon: <PlusIcon />,
  },
};

export const PrimaryIconOnly = {
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: <DotsIcon />,
  },
};

// Secondary Button Stories
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Label',
    icon: <PlusIcon />,
  },
};

export const SecondaryIconOnly = {
  args: {
    variant: 'secondary',
    iconOnly: true,
    icon: <DotsIcon />,
  },
};

// Tertiary Button Stories (White with border)
export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Label',
    icon: <ArrowIcon />,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const TertiaryIconOnly = {
  args: {
    variant: 'tertiary',
    iconOnly: true,
    icon: <DotsIcon />,
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
    icon: <PlusIcon />,
  },
};

export const DisabledIconOnly = {
  args: {
    variant: 'primary',
    disabled: true,
    iconOnly: true,
    icon: <DotsIcon />,
  },
};

// Size Variations
export const SmallButton = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
    icon: <PlusIcon />,
  },
};

export const MediumButton = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
    icon: <PlusIcon />,
  },
};

export const LargeButton = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
    icon: <PlusIcon />,
  },
};

// Complete Showcase - matching the Figma screenshot layout
export const CompleteShowcase = {
  render: () => (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" icon={<PlusIcon />}>Label</Button>
          <Button variant="primary" iconOnly icon={<DotsIcon />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Secondary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="secondary" icon={<PlusIcon />}>Label</Button>
          <Button variant="secondary" iconOnly icon={<DotsIcon />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Tertiary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="tertiary" icon={<ArrowIcon />}>Label</Button>
          <Button variant="tertiary" iconOnly icon={<DotsIcon />} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Disabled</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" disabled icon={<PlusIcon />}>Label</Button>
          <Button variant="primary" disabled iconOnly icon={<DotsIcon />} />
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
        <Button variant="primary" icon={<PlusIcon />}>Primary Hover</Button>
        <Button variant="secondary" icon={<PlusIcon />}>Secondary Hover</Button>
        <Button variant="tertiary" icon={<ArrowIcon />}>Tertiary Hover</Button>
      </div>
    </div>
  ),
};
