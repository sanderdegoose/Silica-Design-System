import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as T}from"./iframe-DTwLFOGa.js";import{c as n}from"./colors-CM_D8zru.js";import{a as k,t as D}from"./typography-CWLdSX6A.js";import{B as I,W as S,a as W,C}from"./Icons-CCe7VW4J.js";import"./preload-helper-PPVm8Dsz.js";const B={inform:{bg:n.blue.light[200],icon:n.blue.light[900],text:n.blue.light[900],closeIcon:n.blue.light[900]},warning:{bg:n.orange.light[200],icon:n.orange.light[900],text:n.orange.light[900],closeIcon:n.orange.light[900]},alert:{bg:n.red[100],icon:n.red[900],text:n.red[900],closeIcon:n.red[900]}},i=({variant:u="inform",children:g,onClose:m,closable:v=!0,...y})=>{const[b,N]=T.useState(!0),t=B[u],j={inform:W,warning:S,alert:I}[u],w=()=>{N(!1),m&&m()};return b?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",backgroundColor:t.bg,borderRadius:"0px",position:"relative"},...y,children:[e.jsx("div",{style:{flexShrink:0},children:e.jsx(j,{size:24,color:t.icon})}),e.jsx("div",{style:{flex:1,color:t.text,...k(D.body.regular.m)},children:g}),e.jsx("div",{style:{flexShrink:0,width:"28px",height:"28px"},children:v&&e.jsx("button",{onClick:w,style:{width:"28px",height:"28px",background:"none",border:"none",padding:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:t.closeIcon,transition:"opacity 0.2s"},onMouseEnter:x=>x.currentTarget.style.opacity="0.7",onMouseLeave:x=>x.currentTarget.style.opacity="1","aria-label":"Close notification",children:e.jsx(C,{size:20,color:t.closeIcon})})})]}):null};i.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{variant:{defaultValue:{value:"'inform'",computed:!1},required:!1},closable:{defaultValue:{value:"true",computed:!1},required:!1}}};const M={title:"SILICA Design System/Notification",component:i,argTypes:{variant:{control:"select",options:["inform","warning","alert"],description:"Notification variant"},closable:{control:"boolean",description:"Whether the notification can be closed"},children:{control:"text",description:"Notification content"}}},a={args:{variant:"inform",children:"This is a notification text and can even include a link.",closable:!0}},o={args:{variant:"inform",children:"This is a notification text and can even include a link.",closable:!1},parameters:{docs:{description:{story:"Inform notification without the close button."}}}},r={args:{variant:"warning",children:"This is a notification text and can even include a link.",closable:!0}},s={args:{variant:"warning",children:"This is a notification text and can even include a link.",closable:!1}},l={args:{variant:"alert",children:"This is a notification text and can even include a link.",closable:!0}},c={args:{variant:"alert",children:"This is a notification text and can even include a link.",closable:!1}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600"},children:"With Close Button"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(i,{variant:"inform",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]}),e.jsxs(i,{variant:"warning",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]}),e.jsxs(i,{variant:"alert",closable:!0,children:["This is a notification text and can even ",e.jsx("a",{href:"#",style:{textDecoration:"underline"},children:"include a link"}),"."]})]})]}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600"},children:"Without Close Button"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"inform",closable:!1,children:"This notification cannot be closed by the user."}),e.jsx(i,{variant:"warning",closable:!1,children:"This notification cannot be closed by the user."}),e.jsx(i,{variant:"alert",closable:!1,children:"This notification cannot be closed by the user."})]})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsx(i,{variant:"inform",children:"Short message."}),e.jsx(i,{variant:"warning",children:"This is a medium length notification message with more details about what happened."}),e.jsx(i,{variant:"alert",children:"This is a longer notification message that contains multiple sentences. It demonstrates how the notification component handles longer text content. The notification should expand vertically to accommodate all the content while maintaining proper spacing and alignment."})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsxs(i,{variant:"inform",children:["Your profile has been updated. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"View changes"})]}),e.jsxs(i,{variant:"warning",children:["Your session will expire in 5 minutes. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"Extend session"})]}),e.jsxs(i,{variant:"alert",children:["Your payment failed. ",e.jsx("a",{href:"#",style:{textDecoration:"underline",fontWeight:"600"},children:"Update payment method"})]})]})},h={render:()=>e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",width:"400px",display:"flex",flexDirection:"column",gap:"12px",zIndex:1e3},children:[e.jsx(i,{variant:"inform",children:"New message received from John Doe."}),e.jsx(i,{variant:"warning",children:"Your subscription will expire in 3 days."}),e.jsx(i,{variant:"alert",children:"Failed to save changes. Please try again."})]}),parameters:{docs:{description:{story:"Example of notifications stacked in the top-right corner of the screen."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inform',
    children: 'This is a notification text and can even include a link.',
    closable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Inform notification without the close button.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a notification text and can even include a link.',
    closable: false
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'alert',
    children: 'This is a notification text and can even include a link.',
    closable: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        fontWeight: '600'
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
        fontWeight: '600'
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
    </div>
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        story: 'Example of notifications stacked in the top-right corner of the screen.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const q=["Inform","InformNotClosable","Warning","WarningNotClosable","Alert","AlertNotClosable","AllVariants","DifferentLengths","WithLinks","StackedNotifications"];export{l as Alert,c as AlertNotClosable,d as AllVariants,f as DifferentLengths,a as Inform,o as InformNotClosable,h as StackedNotifications,r as Warning,s as WarningNotClosable,p as WithLinks,q as __namedExportsOrder,M as default};
