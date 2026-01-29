import * as Icons from './Icons';

export default {
  title: 'SILICA Design System/Icons',
  parameters: {
    layout: 'padded',
  },
};

// Get all icon components
const allIcons = Object.keys(Icons)
  .filter(key => key !== 'default' && key.endsWith('Icon'))
  .sort()
  .map(key => ({
    name: key,
    component: Icons[key],
  }));

// All Icons Showcase - Main story
export const AllIcons = {
  render: () => {
    return (
      <div style={{ padding: '40px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '8px' }}>
            SILICA Icon Library
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280' }}>
            {allIcons.length} icons from your design system
          </p>
        </div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '16px',
          }}
        >
          {allIcons.map(({ name, component: IconComponent }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                transition: 'all 0.2s',
                cursor: 'pointer',
                backgroundColor: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF7400';
                e.currentTarget.style.backgroundColor = '#FFF1E6';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IconComponent size={32} color="#252423" />
              <span
                style={{
                  marginTop: '12px',
                  fontSize: '11px',
                  color: '#6B7280',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  wordBreak: 'break-word',
                  lineHeight: '1.3',
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Icon Sizes Demo
export const IconSizes = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>Icon Sizes</h3>
      <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Icons.AddIcon size={16} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>16px - Small</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.AddIcon size={20} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>20px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.AddIcon size={24} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>24px - Default</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.AddIcon size={32} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>32px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.AddIcon size={48} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>48px - Large</p>
        </div>
      </div>
    </div>
  ),
};

// Icon Colors Demo
export const IconColors = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>Icon Colors</h3>
      <div style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Icons.HeartIcon size={40} color="#252423" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>Black #252423</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.HeartIcon size={40} color="#FF7400" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>Orange #FF7400</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.HeartIcon size={40} color="#3B82F6" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>Blue #3B82F6</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Icons.HeartIcon size={40} color="#10B981" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280' }}>Green #10B981</p>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: '16px', 
          backgroundColor: '#1F2937', 
          borderRadius: '8px' 
        }}>
          <Icons.HeartIcon size={40} color="#FFFFFF" />
          <p style={{ marginTop: '12px', fontSize: '12px', color: '#9CA3AF' }}>White #FFFFFF</p>
        </div>
      </div>
    </div>
  ),
};

// Category Showcases
export const NavigationIcons = {
  render: () => {
    const navIcons = allIcons.filter(({ name }) => 
      name.includes('Arrow') || 
      name.includes('Chevron') || 
      name.includes('Navigation') ||
      name.includes('Menu')
    );
    
    return (
      <div style={{ padding: '40px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>
          Navigation Icons ({navIcons.length})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {navIcons.map(({ name, component: IconComponent }) => (
            <div key={name} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '16px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}>
              <IconComponent size={32} color="#252423" />
              <span style={{ marginTop: '12px', fontSize: '11px', color: '#6B7280', textAlign: 'center', fontFamily: 'monospace' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ActionIcons = {
  render: () => {
    const actionIcons = allIcons.filter(({ name }) => 
      name.includes('Add') || 
      name.includes('Delete') || 
      name.includes('Edit') ||
      name.includes('Remove') ||
      name.includes('Close') ||
      name.includes('Save') ||
      name.includes('Trash')
    );
    
    return (
      <div style={{ padding: '40px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>
          Action Icons ({actionIcons.length})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {actionIcons.map(({ name, component: IconComponent }) => (
            <div key={name} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '16px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}>
              <IconComponent size={32} color="#252423" />
              <span style={{ marginTop: '12px', fontSize: '11px', color: '#6B7280', textAlign: 'center', fontFamily: 'monospace' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const StatusIcons = {
  render: () => {
    const statusIcons = allIcons.filter(({ name }) => 
      name.includes('Badge') || 
      name.includes('Check') || 
      name.includes('Cross') ||
      name.includes('Alert') ||
      name.includes('Warning') ||
      name.includes('Info') ||
      name.includes('Question')
    );
    
    return (
      <div style={{ padding: '40px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>
          Status Icons ({statusIcons.length})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {statusIcons.map(({ name, component: IconComponent }) => (
            <div key={name} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '16px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}>
              <IconComponent size={32} color="#252423" />
              <span style={{ marginTop: '12px', fontSize: '11px', color: '#6B7280', textAlign: 'center', fontFamily: 'monospace' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const FileIcons = {
  render: () => {
    const fileIcons = allIcons.filter(({ name }) => 
      name.includes('File') || 
      name.includes('Document') || 
      name.includes('Pdf') ||
      name.includes('Csv') ||
      name.includes('Xls') ||
      name.includes('Download') ||
      name.includes('Upload')
    );
    
    return (
      <div style={{ padding: '40px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600' }}>
          File & Document Icons ({fileIcons.length})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {fileIcons.map(({ name, component: IconComponent }) => (
            <div key={name} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '16px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}>
              <IconComponent size={32} color="#252423" />
              <span style={{ marginTop: '12px', fontSize: '11px', color: '#6B7280', textAlign: 'center', fontFamily: 'monospace' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
