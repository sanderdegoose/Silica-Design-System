import{j as e}from"./jsx-runtime-u17CrQMm.js";import{N as i}from"./Notification-Ckfv_YZr.js";import"./iframe-BSRPPBb8.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-CM_D8zru.js";import"./typography-CWLdSX6A.js";import"./Icons-CLW_9TjV.js";const v={title:"SILICA Design System/Notification",component:i,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:"select",options:["inform","warning","alert"],description:"The notification variant/type",table:{type:{summary:"string"},defaultValue:{summary:"inform"}}},closable:{control:"boolean",description:"Whether the notification can be closed by the user",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},children:{control:"text",description:"The notification message content",table:{type:{summary:"ReactNode"}}},onClose:{description:"Callback function when notification is closed",table:{type:{summary:"() => void"}}}}},t={args:{variant:"inform",children:"This is a notification text and can even include a link.",closable:!0},parameters:{docs:{description:{story:"Inform notifications are used for general information, updates, and non-critical messages. Background: #A3E3FC, Text: #053D50"}}}},n={args:{variant:"inform",children:"This is a notification text and can even include a link.",closable:!1},parameters:{docs:{description:{story:"Inform notification without the close button. Height remains 56px."}}}},a={args:{variant:"warning",children:"This is a notification text and can even include a link.",closable:!0},parameters:{docs:{description:{story:"Warning notifications are used for important notices and cautions. Background: #FFEF99, Text: #443900"}}}},o={args:{variant:"warning",children:"This is a notification text and can even include a link.",closable:!1},parameters:{docs:{description:{story:"Warning notification without the close button."}}}},r={args:{variant:"alert",children:"This is a notification text and can even include a link.",closable:!0},parameters:{docs:{description:{story:"Alert notifications are used for errors and critical situations. Background: #FAD4D7, Text: #3F0B0F"}}}},s={args:{variant:"alert",children:"This is a notification text and can even include a link.",closable:!1},parameters:{docs:{description:{story:"Alert notification without the close button."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600",fontFamily:"Poppins, sans-serif"},children:"With Close Button"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(i,{variant:"inform",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]}),e.jsxs(i,{variant:"warning",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]}),e.jsxs(i,{variant:"alert",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]})]})]}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600",fontFamily:"Poppins, sans-serif"},children:"Without Close Button"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"inform",closable:!1,children:"This notification cannot be closed by the user."}),e.jsx(i,{variant:"warning",closable:!1,children:"This notification cannot be closed by the user."}),e.jsx(i,{variant:"alert",closable:!1,children:"This notification cannot be closed by the user."})]})]})]}),parameters:{docs:{description:{story:"Complete showcase of all three notification variants with and without close buttons. Note that the height remains consistent at 56px in all cases."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsx(i,{variant:"inform",children:"Short message."}),e.jsx(i,{variant:"warning",children:"This is a medium length notification message with more details about what happened."}),e.jsx(i,{variant:"alert",children:"This is a longer notification message that contains multiple sentences. It demonstrates how the notification component handles longer text content. The notification should expand vertically to accommodate all the content while maintaining proper spacing and alignment."})]}),parameters:{docs:{description:{story:"Notifications with different content lengths. The component adapts its height while maintaining 56px minimum height and proper vertical alignment."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsxs(i,{variant:"inform",children:["Your profile has been updated. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"View changes"})]}),e.jsxs(i,{variant:"warning",children:["Your session will expire in 5 minutes. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"Extend session"})]}),e.jsxs(i,{variant:"alert",children:["Your payment failed. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"Update payment method"})]})]}),parameters:{docs:{description:{story:"Notifications with interactive links. Links should be styled with underline and bold weight for emphasis."}}}},p={render:()=>e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",width:"400px",display:"flex",flexDirection:"column",gap:"12px",zIndex:1e3},children:[e.jsx(i,{variant:"inform",children:"New message received from John Doe."}),e.jsx(i,{variant:"warning",children:"Your subscription will expire in 3 days."}),e.jsx(i,{variant:"alert",children:"Failed to save changes. Please try again."})]}),parameters:{docs:{description:{story:"Example of notifications stacked in the top-right corner of the screen (toast-style). Use a gap of 12px between notifications."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Inform notifications are used for general information, updates, and non-critical messages. Background: #A3E3FC, Text: #053D50'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Inform notification without the close button. Height remains 56px.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning notifications are used for important notices and cautions. Background: #FFEF99, Text: #443900'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning notification without the close button.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert notifications are used for errors and critical situations. Background: #FAD4D7, Text: #3F0B0F'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert notification without the close button.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Poppins, sans-serif'
      }}>
          With Close Button
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Notification variant="inform" closable={true}>
            This is a notification text and can even <a href="#" style={{
            textDecoration: 'underline'
          }}>include a link</a>.
          </Notification>
          <Notification variant="warning" closable={true}>
            This is a notification text and can even <a href="#" style={{
            textDecoration: 'underline'
          }}>include a link</a>.
          </Notification>
          <Notification variant="alert" closable={true}>
            This is a notification text and can even <a href="#" style={{
            textDecoration: 'underline'
          }}>include a link</a>.
          </Notification>
        </div>
      </div>

      <div style={{
      marginTop: '24px'
    }}>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Poppins, sans-serif'
      }}>
          Without Close Button
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all three notification variants with and without close buttons. Note that the height remains consistent at 56px in all cases.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  }}>
      <Notification variant="inform">
        Short message.
      </Notification>
      <Notification variant="warning">
        This is a medium length notification message with more details about what happened.
      </Notification>
      <Notification variant="alert">
        This is a longer notification message that contains multiple sentences. It demonstrates how the notification component handles longer text content. The notification should expand vertically to accommodate all the content while maintaining proper spacing and alignment.
      </Notification>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Notifications with different content lengths. The component adapts its height while maintaining 56px minimum height and proper vertical alignment.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  }}>
      <Notification variant="inform">
        Your profile has been updated. <a href="#" style={{
        textDecoration: 'underline',
        fontWeight: '600'
      }}>View changes</a>
      </Notification>
      <Notification variant="warning">
        Your session will expire in 5 minutes. <a href="#" style={{
        textDecoration: 'underline',
        fontWeight: '600'
      }}>Extend session</a>
      </Notification>
      <Notification variant="alert">
        Your payment failed. <a href="#" style={{
        textDecoration: 'underline',
        fontWeight: '600'
      }}>Update payment method</a>
      </Notification>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Notifications with interactive links. Links should be styled with underline and bold weight for emphasis.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 1000
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of notifications stacked in the top-right corner of the screen (toast-style). Use a gap of 12px between notifications.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const b=["Inform","InformNotClosable","Warning","WarningNotClosable","Alert","AlertNotClosable","AllVariants","DifferentLengths","WithLinks","StackedNotifications"];export{r as Alert,s as AlertNotClosable,c as AllVariants,l as DifferentLengths,t as Inform,n as InformNotClosable,p as StackedNotifications,a as Warning,o as WarningNotClosable,d as WithLinks,b as __namedExportsOrder,v as default};
