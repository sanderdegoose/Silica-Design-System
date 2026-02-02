import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as W}from"./iframe-BsLiMRGq.js";import{A as t,M as n,a as I}from"./Icons-CLEodJiL.js";import"./preload-helper-PPVm8Dsz.js";const e={orange:{dark:{500:"#FF7400",700:"#994600"}},gray:{primary:{300:"#D1D5DB",600:"#4B5563",800:"#1F2937"}},neutral:{white:"#FFFFFF",black:"#000000"}},u={primary:{default:{bg:e.orange.dark[500],text:e.neutral.white,icon:e.neutral.white},hover:{bg:e.orange.dark[700],text:e.neutral.white,icon:e.neutral.white}},secondary:{default:{bg:e.neutral.black,text:e.neutral.white,icon:e.neutral.white},hover:{bg:e.gray.primary[600],text:e.neutral.white,icon:e.neutral.white}},tertiary:{default:{border:e.neutral.black,text:e.neutral.black,icon:e.neutral.black,bg:e.neutral.white},hover:{border:e.orange.dark[500],text:e.orange.dark[500],icon:e.orange.dark[500],bg:e.neutral.white}},disabled:{bg:e.gray.primary[300],text:e.gray.primary[800],icon:e.gray.primary[800]}},q={xs:"8px"},c={button:{fontFamily:"Poppins, sans-serif",fontSize:"14px",fontWeight:600,lineHeight:"24px"}},o=({variant:B="primary",size:O="medium",children:M,disabled:s=!1,onClick:L,icon:i,iconOnly:l=!1,iconPosition:w="left",...k})=>{const D=()=>{if(s)return{backgroundColor:u.disabled.bg,color:u.disabled.text,border:"2px solid transparent",cursor:"not-allowed"};const a=u[B];return{backgroundColor:a.default.bg,color:a.default.text,border:a.default.border?`2px solid ${a.default.border}`:"2px solid transparent"}},F=()=>{if(s)return{};const a=u[B];return{backgroundColor:a.hover.bg,color:a.hover.text,border:a.hover.border?`2px solid ${a.hover.border}`:"2px solid transparent"}},T=()=>{if(l)switch(O){case"small":return{width:"32px",height:"32px",padding:"0",fontSize:"14px"};case"large":return{width:"48px",height:"48px",padding:"0",fontSize:"20px"};default:return{width:"40px",height:"40px",padding:"0",fontSize:"16px"}}switch(O){case"small":return{padding:"8px 16px",fontSize:"12px",height:"32px"};case"large":return{padding:"14px 24px",fontSize:"16px",height:"48px"};default:return{padding:"10px 20px",fontSize:c.button.fontSize,height:"40px"}}},A={...D(),...T(),fontFamily:c.button.fontFamily,fontSize:c.button.fontSize,fontWeight:c.button.fontWeight,lineHeight:c.button.lineHeight,borderRadius:l?"50%":"24px",cursor:s?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:q.xs,transition:"background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",outline:"none",boxSizing:"border-box",minWidth:l?"auto":"80px"},[P,d]=W.useState(!1),H=P&&!s?{...A,...F()}:A;return l?r.jsx("button",{style:H,disabled:s,onClick:L,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),...k,children:i}):r.jsxs("button",{style:H,disabled:s,onClick:L,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),...k,children:[i&&w==="left"&&r.jsx("span",{style:{display:"flex",alignItems:"center"},children:i}),M,i&&w==="right"&&r.jsx("span",{style:{display:"flex",alignItems:"center"},children:i})]})};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},iconOnly:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const N={title:"SILICA Design System/Button",component:o,argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant from design system"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},iconOnly:{control:"boolean",description:"Icon-only circular button"},children:{control:"text",description:"Button text"}}},p={args:{variant:"primary",children:"Label",icon:r.jsx(t,{size:18,color:"currentColor"})}},m={args:{variant:"primary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})}},y={args:{variant:"secondary",children:"Label",icon:r.jsx(t,{size:18,color:"currentColor"})}},g={args:{variant:"secondary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})}},x={args:{variant:"tertiary",children:"Label",icon:r.jsx(I,{size:18,color:"currentColor"})},parameters:{backgrounds:{default:"light"}}},h={args:{variant:"tertiary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})},parameters:{backgrounds:{default:"light"}}},v={args:{variant:"primary",disabled:!0,children:"Label",icon:r.jsx(t,{size:18,color:"currentColor"})}},b={args:{variant:"primary",disabled:!0,iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})}},f={args:{variant:"primary",size:"small",children:"Small",icon:r.jsx(t,{size:14,color:"currentColor"})}},z={args:{variant:"primary",size:"medium",children:"Medium",icon:r.jsx(t,{size:18,color:"currentColor"})}},j={args:{variant:"primary",size:"large",children:"Large",icon:r.jsx(t,{size:20,color:"currentColor"})}},S={render:()=>r.jsxs("div",{style:{padding:"40px",display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Primary"}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{variant:"primary",icon:r.jsx(t,{size:18,color:"currentColor"}),children:"Label"}),r.jsx(o,{variant:"primary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Secondary"}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{variant:"secondary",icon:r.jsx(t,{size:18,color:"currentColor"}),children:"Label"}),r.jsx(o,{variant:"secondary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Tertiary"}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{variant:"tertiary",icon:r.jsx(I,{size:18,color:"currentColor"}),children:"Label"}),r.jsx(o,{variant:"tertiary",iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Disabled"}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{variant:"primary",disabled:!0,icon:r.jsx(t,{size:18,color:"currentColor"}),children:"Label"}),r.jsx(o,{variant:"primary",disabled:!0,iconOnly:!0,icon:r.jsx(n,{size:18,color:"currentColor"})})]})]})]}),parameters:{docs:{description:{story:"Complete button showcase matching the SILICA Design System. Hover over buttons to see state changes."}}}},C={render:()=>r.jsxs("div",{style:{padding:"40px"},children:[r.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Hover over these buttons to see the color transitions:"}),r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(o,{variant:"primary",icon:r.jsx(t,{size:18,color:"currentColor"}),children:"Primary Hover"}),r.jsx(o,{variant:"secondary",icon:r.jsx(t,{size:18,color:"currentColor"}),children:"Secondary Hover"}),r.jsx(o,{variant:"tertiary",icon:r.jsx(I,{size:18,color:"currentColor"}),children:"Tertiary Hover"})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Label',
    icon: <ArrowLeftIcon size={18} color="currentColor" />
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Label',
    icon: <AddIcon size={18} color="currentColor" />
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    iconOnly: true,
    icon: <MoreOptionsIcon size={18} color="currentColor" />
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
    icon: <AddIcon size={14} color="currentColor" />
  }
}`,...f.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
    icon: <AddIcon size={18} color="currentColor" />
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
    icon: <AddIcon size={20} color="currentColor" />
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Primary</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Button variant="primary" icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="primary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Secondary</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Button variant="secondary" icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="secondary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Tertiary</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Button variant="tertiary" icon={<ArrowLeftIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="tertiary" iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Disabled</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Button variant="primary" disabled icon={<AddIcon size={18} color="currentColor" />}>Label</Button>
          <Button variant="primary" disabled iconOnly icon={<MoreOptionsIcon size={18} color="currentColor" />} />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete button showcase matching the SILICA Design System. Hover over buttons to see state changes.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>
        Hover over these buttons to see the color transitions:
      </p>
      <div style={{
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" icon={<AddIcon size={18} color="currentColor" />}>Primary Hover</Button>
        <Button variant="secondary" icon={<AddIcon size={18} color="currentColor" />}>Secondary Hover</Button>
        <Button variant="tertiary" icon={<ArrowLeftIcon size={18} color="currentColor" />}>Tertiary Hover</Button>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}};const G=["Primary","PrimaryIconOnly","Secondary","SecondaryIconOnly","Tertiary","TertiaryIconOnly","Disabled","DisabledIconOnly","SmallButton","MediumButton","LargeButton","CompleteShowcase","HoverStatesDemo"];export{S as CompleteShowcase,v as Disabled,b as DisabledIconOnly,C as HoverStatesDemo,j as LargeButton,z as MediumButton,p as Primary,m as PrimaryIconOnly,y as Secondary,g as SecondaryIconOnly,f as SmallButton,x as Tertiary,h as TertiaryIconOnly,G as __namedExportsOrder,N as default};
