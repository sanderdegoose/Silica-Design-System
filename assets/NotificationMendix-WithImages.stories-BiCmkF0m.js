const i={title:"Mendix Integration/Notification Widget",tags:["autodocs"],parameters:{docs:{description:{component:`
# Notification Widget - Mendix Integration

The SILICA Notification component has been implemented as a Mendix pluggable widget, allowing you to use the same design system in your Mendix applications.

## Visual Reference

### Inform Variant
![Inform Notification](https://via.placeholder.com/600x80/2563eb/1e3a8a?text=Inform+Notification)

Used for successful operations, helpful information, and status updates.

---

### Warning Variant
![Warning Notification](https://via.placeholder.com/600x80/ea580c/7c2d12?text=Warning+Notification)

Used for important notices, potential issues, and upcoming changes.

---

### Alert Variant
![Alert Notification](https://via.placeholder.com/600x80/dc2626/7f1d1d?text=Alert+Notification)

Used for critical errors, failed operations, and urgent actions.

---

## Installation

1. Download the \`SilicaNotification.mpk\` file from the widget package
2. In Mendix Studio Pro, go to the App Explorer
3. Right-click on your project and select "Import Module Package"
4. Select the \`SilicaNotification.mpk\` file
5. The widget will be available in the "Add-on widgets" section of the toolbox

## Widget Properties

### General Tab

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **Variant** | Enumeration | Yes | The notification type: inform, warning, or alert |
| **Title** | Text | Yes | The main heading text for the notification |
| **Message** | Text | Yes | The detailed message content |
| **Show Icon** | Boolean | No | Whether to display the variant icon (default: true) |
| **Dismissible** | Boolean | No | Whether to show close button (default: false) |

### Action Tab

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **On Close** | Action | No | Microflow or nanoflow to execute when notification is dismissed |

### Appearance Tab

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **Class** | String | No | Additional CSS classes for custom styling |

## Property Mapping: React to Mendix

Understanding how the React component props map to Mendix widget properties:

| React Component Prop | Mendix Widget Property | Notes |
|---------------------|------------------------|-------|
| variant | variant | Direct mapping: "inform", "warning", "alert" |
| title | title | Text template in Mendix (supports expressions) |
| message | message | Text template in Mendix (supports expressions) |
| showIcon | showIcon | Boolean property |
| onClose | onClose | Action property (executes microflow/nanoflow) |
| dismissible | dismissible | Boolean property (shows/hides close button) |
| className | class | Standard Mendix class property |

## Design Token Integration

The Mendix widget uses the same SILICA design tokens as the React component:

### Colors

- **Inform**: \`--silica-color-blue-600\` (background), \`--silica-color-blue-900\` (text)
- **Warning**: \`--silica-color-orange-600\` (background), \`--silica-color-orange-900\` (text)
- **Alert**: \`--silica-color-red-600\` (background), \`--silica-color-red-900\` (text)

### Typography

- **Title**: Poppins Semi Bold, 16px (\`--silica-font-size-md\`)
- **Message**: Poppins Regular, 14px (\`--silica-font-size-sm\`)

### Spacing

- Padding: \`--silica-spacing-4\` (16px)
- Gap between icon and text: \`--silica-spacing-3\` (12px)

## Usage Examples

### Basic Inform Notification

\`\`\`xml
<container>
    <silicaNotification
        variant="inform"
        title="Success"
        message="Your changes have been saved successfully."
        showIcon="true"
        dismissible="true"
    />
</container>
\`\`\`

### Warning Notification

\`\`\`xml
<container>
    <silicaNotification
        variant="warning"
        title="System Maintenance Scheduled"
        message="The system will be unavailable on Sunday from 2:00 AM to 4:00 AM EST."
        showIcon="true"
        dismissible="true"
        onClose="ACT_DismissNotification"
    />
</container>
\`\`\`

### Alert Notification

\`\`\`xml
<container>
    <silicaNotification
        variant="alert"
        title="Action Required"
        message="Your session will expire in 5 minutes. Please save your work."
        showIcon="true"
        dismissible="false"
    />
</container>
\`\`\`

## Responsive Behavior

The Mendix widget inherits the responsive behavior from the React component:

- **Mobile (< 768px)**: Full width with stacked content
- **Tablet (768px - 1024px)**: Flexible width with adaptive icon sizing
- **Desktop (> 1024px)**: Maximum width with optimal spacing

## Best Practices

### When to Use Each Variant

**Inform** - Use for:
- Successful operations
- Helpful tips and information
- Status updates
- General announcements

**Warning** - Use for:
- Important notices that require attention
- Potential issues or conflicts
- Upcoming changes or deadlines
- Caution messages

**Alert** - Use for:
- Critical errors
- Failed operations
- Security issues
- Urgent actions required

### Accessibility

The widget follows WCAG 2.1 AA standards:

- Proper ARIA roles and labels
- Keyboard navigation support (Tab, Enter, Escape)
- Sufficient color contrast ratios (4.5:1 minimum)
- Screen reader compatible

### Performance Considerations

- Limit the number of simultaneous notifications (max 3 recommended)
- Use dismissible notifications for non-critical messages
- Consider using a notification queue for multiple messages
- Clean up dismissed notifications to prevent memory leaks

## Troubleshooting

### Notification Not Displaying

**Problem**: Widget appears in toolbox but doesn't render

**Solution**: Ensure the widget's CSS is imported in your theme

**Check**: Verify the design token variables are defined in your theme

### Icons Not Showing

**Problem**: Icons are missing or showing as boxes

**Solution**: Import the SILICA icon font or SVG sprite sheet

**Check**: Verify \`showIcon\` property is set to \`true\`

### Styling Issues

**Problem**: Colors or spacing don't match the design system

**Solution**: Import the complete SILICA design tokens into your Mendix theme

**Check**: Ensure CSS custom properties are supported in your browser

## Related Components

- **Notification React Component** - The original React implementation in SILICA
- **Design Tokens** - SILICA design token documentation
- **Color System** - Complete color palette with 330+ colors
- **Typography** - Poppins font system

---

**Widget Version**: 1.0.0  
**Mendix Compatibility**: 9.x and above  
**Last Updated**: February 2026

---

## Adding Visual Examples

To add actual screenshots of the Mendix widget:

1. Run the widget in a Mendix application
2. Take screenshots of each variant (Inform, Warning, Alert)
3. Save the images in your Storybook's \`public\` folder (e.g., \`public/images/mendix/\`)
4. Replace the placeholder image URLs above with your actual image paths:
   - \`![Inform Notification](./images/mendix/notification-inform.png)\`
   - \`![Warning Notification](./images/mendix/notification-warning.png)\`
   - \`![Alert Notification](./images/mendix/notification-alert.png)\`
        `}}}},e={render:()=>null};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => null
}`,...e.parameters?.docs?.source}}};const o=["Documentation"];export{e as Documentation,o as __namedExportsOrder,i as default};
