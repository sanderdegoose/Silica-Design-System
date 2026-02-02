import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CG3nbhpT.js";import"./iframe-DookfvhP.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,n.jsx(e.h1,{id:"notification-widget---mendix-integration",children:"Notification Widget - Mendix Integration"}),`
`,n.jsx(e.p,{children:"The SILICA Notification component has been implemented as a Mendix pluggable widget, allowing you to use the same design system in your Mendix applications."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Mendix Notification widget provides the same three variants available in the React component:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inform"})," - For general information and updates"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning"})," - For caution messages and important notices"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert"})," - For critical errors and urgent attention"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Download the ",n.jsx(e.code,{children:"SilicaNotification.mpk"})," file from the widget package"]}),`
`,n.jsx(e.li,{children:"In Mendix Studio Pro, go to the App Explorer"}),`
`,n.jsx(e.li,{children:'Right-click on your project and select "Import Module Package"'}),`
`,n.jsxs(e.li,{children:["Select the ",n.jsx(e.code,{children:"SilicaNotification.mpk"})," file"]}),`
`,n.jsx(e.li,{children:'The widget will be available in the "Add-on widgets" section of the toolbox'}),`
`]}),`
`,n.jsx(e.h2,{id:"widget-properties",children:"Widget Properties"}),`
`,n.jsx(e.h3,{id:"general-tab",children:"General Tab"}),`
`,n.jsxs(e.p,{children:[`| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `,n.jsx(e.strong,{children:"Variant"}),` | Enumeration | Yes | The notification type: inform, warning, or alert |
| `,n.jsx(e.strong,{children:"Title"}),` | Text | Yes | The main heading text for the notification |
| `,n.jsx(e.strong,{children:"Message"}),` | Text | Yes | The detailed message content |
| `,n.jsx(e.strong,{children:"Show Icon"}),` | Boolean | No | Whether to display the variant icon (default: true) |
| `,n.jsx(e.strong,{children:"Dismissible"})," | Boolean | No | Whether to show close button (default: false) |"]}),`
`,n.jsx(e.h3,{id:"action-tab",children:"Action Tab"}),`
`,n.jsxs(e.p,{children:[`| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `,n.jsx(e.strong,{children:"On Close"})," | Action | No | Microflow or nanoflow to execute when notification is dismissed |"]}),`
`,n.jsx(e.h3,{id:"appearance-tab",children:"Appearance Tab"}),`
`,n.jsxs(e.p,{children:[`| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `,n.jsx(e.strong,{children:"Class"})," | String | No | Additional CSS classes for custom styling |"]}),`
`,n.jsx(e.h2,{id:"property-mapping-react-to-mendix",children:"Property Mapping: React to Mendix"}),`
`,n.jsx(e.p,{children:"Understanding how the React component props map to Mendix widget properties:"}),`
`,n.jsx(e.p,{children:`| React Component Prop | Mendix Widget Property | Notes |
|---------------------|------------------------|-------|
| variant | variant | Direct mapping: "inform", "warning", "alert" |
| title | title | Text template in Mendix (supports expressions) |
| message | message | Text template in Mendix (supports expressions) |
| showIcon | showIcon | Boolean property |
| onClose | onClose | Action property (executes microflow/nanoflow) |
| dismissible | dismissible | Boolean property (shows/hides close button) |
| className | class | Standard Mendix class property |`}),`
`,n.jsx(e.h2,{id:"design-token-integration",children:"Design Token Integration"}),`
`,n.jsx(e.p,{children:"The Mendix widget uses the same SILICA design tokens as the React component:"}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inform"}),": ",n.jsx(e.code,{children:"--silica-color-blue-600"})," (background), ",n.jsx(e.code,{children:"--silica-color-blue-900"})," (text)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning"}),": ",n.jsx(e.code,{children:"--silica-color-orange-600"})," (background), ",n.jsx(e.code,{children:"--silica-color-orange-900"})," (text)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert"}),": ",n.jsx(e.code,{children:"--silica-color-red-600"})," (background), ",n.jsx(e.code,{children:"--silica-color-red-900"})," (text)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),": Poppins Semi Bold, 16px (",n.jsx(e.code,{children:"--silica-font-size-md"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Message"}),": Poppins Regular, 14px (",n.jsx(e.code,{children:"--silica-font-size-sm"}),")"]}),`
`]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Padding: ",n.jsx(e.code,{children:"--silica-spacing-4"})," (16px)"]}),`
`,n.jsxs(e.li,{children:["Gap between icon and text: ",n.jsx(e.code,{children:"--silica-spacing-3"})," (12px)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"basic-inform-notification",children:"Basic Inform Notification"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-xml",children:`<container>
    <silicaNotification
        variant="inform"
        title="Success"
        message="Your changes have been saved successfully."
        showIcon="true"
        dismissible="true"
    />
</container>
`})}),`
`,n.jsx(e.h3,{id:"warning-notification",children:"Warning Notification"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-xml",children:`<container>
    <silicaNotification
        variant="warning"
        title="System Maintenance Scheduled"
        message="The system will be unavailable on Sunday from 2:00 AM to 4:00 AM EST."
        showIcon="true"
        dismissible="true"
        onClose="ACT_DismissNotification"
    />
</container>
`})}),`
`,n.jsx(e.h3,{id:"alert-notification",children:"Alert Notification"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-xml",children:`<container>
    <silicaNotification
        variant="alert"
        title="Action Required"
        message="Your session will expire in 5 minutes. Please save your work."
        showIcon="true"
        dismissible="false"
    />
</container>
`})}),`
`,n.jsx(e.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,n.jsx(e.p,{children:"The Mendix widget inherits the responsive behavior from the React component:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile (< 768px)"}),": Full width with stacked content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tablet (768px - 1024px)"}),": Flexible width with adaptive icon sizing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Desktop (> 1024px)"}),": Maximum width with optimal spacing"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"when-to-use-each-variant",children:"When to Use Each Variant"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Inform"})," - Use for:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Successful operations"}),`
`,n.jsx(e.li,{children:"Helpful tips and information"}),`
`,n.jsx(e.li,{children:"Status updates"}),`
`,n.jsx(e.li,{children:"General announcements"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Warning"})," - Use for:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Important notices that require attention"}),`
`,n.jsx(e.li,{children:"Potential issues or conflicts"}),`
`,n.jsx(e.li,{children:"Upcoming changes or deadlines"}),`
`,n.jsx(e.li,{children:"Caution messages"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Alert"})," - Use for:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Critical errors"}),`
`,n.jsx(e.li,{children:"Failed operations"}),`
`,n.jsx(e.li,{children:"Security issues"}),`
`,n.jsx(e.li,{children:"Urgent actions required"}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The widget follows WCAG 2.1 AA standards:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper ARIA roles and labels"}),`
`,n.jsx(e.li,{children:"Keyboard navigation support (Tab, Enter, Escape)"}),`
`,n.jsx(e.li,{children:"Sufficient color contrast ratios (4.5:1 minimum)"}),`
`,n.jsx(e.li,{children:"Screen reader compatible"}),`
`]}),`
`,n.jsx(e.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Limit the number of simultaneous notifications (max 3 recommended)"}),`
`,n.jsx(e.li,{children:"Use dismissible notifications for non-critical messages"}),`
`,n.jsx(e.li,{children:"Consider using a notification queue for multiple messages"}),`
`,n.jsx(e.li,{children:"Clean up dismissed notifications to prevent memory leaks"}),`
`]}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h3,{id:"notification-not-displaying",children:"Notification Not Displaying"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Problem"}),": Widget appears in toolbox but doesn't render"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Solution"}),": Ensure the widget's CSS is imported in your theme"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Check"}),": Verify the design token variables are defined in your theme"]}),`
`,n.jsx(e.h3,{id:"icons-not-showing",children:"Icons Not Showing"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Problem"}),": Icons are missing or showing as boxes"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Solution"}),": Import the SILICA icon font or SVG sprite sheet"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Check"}),": Verify ",n.jsx(e.code,{children:"showIcon"})," property is set to ",n.jsx(e.code,{children:"true"})]}),`
`,n.jsx(e.h3,{id:"styling-issues",children:"Styling Issues"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Problem"}),": Colors or spacing don't match the design system"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Solution"}),": Import the complete SILICA design tokens into your Mendix theme"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Check"}),": Ensure CSS custom properties are supported in your browser"]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Notification React Component"})," - The original React implementation in SILICA"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Design Tokens"})," - SILICA design token documentation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Color System"})," - Complete color palette with 330+ colors"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Typography"})," - Poppins font system"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Widget Version"}),": 1.0.0",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"Mendix Compatibility"}),": 9.x and above",n.jsx(e.br,{}),`
`,n.jsx(e.strong,{children:"Last Updated"}),": February 2026"]})]})}function d(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{d as default};
