import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as W}from"./iframe-BYpa-oJ9.js";import"./preload-helper-PPVm8Dsz.js";const r={orange:{dark:{500:"#FF7400",700:"#994600"}},gray:{primary:{300:"#D1D5DB",600:"#4B5563",800:"#1F2937"}},blue:{dark:{500:"#3B82F6",800:"#1E40AF"}},neutral:{white:"#FFFFFF",black:"#000000"}},d={primary:{default:{bg:r.orange.dark[500],text:r.neutral.white,icon:r.neutral.white},hover:{bg:r.orange.dark[700],text:r.neutral.white,icon:r.neutral.white}},secondary:{default:{bg:r.neutral.black,text:r.neutral.white,icon:r.neutral.white},hover:{bg:r.gray.primary[600],text:r.neutral.white,icon:r.neutral.white}},tertiary:{default:{border:r.neutral.black,text:r.neutral.black,icon:r.neutral.black,bg:r.neutral.white},hover:{border:r.orange.dark[500],text:r.orange.dark[500],icon:r.orange.dark[500],bg:r.neutral.white}},textButton:{default:{text:r.blue.dark[500],icon:r.blue.dark[500],bg:"transparent"},hover:{text:r.blue.dark[800],icon:r.blue.dark[800],bg:"transparent"}},disabled:{bg:r.gray.primary[300],text:r.gray.primary[800],icon:r.gray.primary[800]}},q={xs:"8px"},H={button:{fontSize:"14px",fontWeight:"500"}},t=({variant:w="primary",size:k="medium",children:F,disabled:s=!1,onClick:D,icon:i,iconOnly:c=!1,iconPosition:L="left",...O})=>{const C=()=>{if(s)return{backgroundColor:d.disabled.bg,color:d.disabled.text,border:"2px solid transparent",cursor:"not-allowed"};const n=d[w];return{backgroundColor:n.default.bg,color:n.default.text,border:n.default.border?`2px solid ${n.default.border}`:"2px solid transparent"}},T=()=>{if(s)return{};const n=d[w];return{backgroundColor:n.hover.bg,color:n.hover.text,border:n.hover.border?`2px solid ${n.hover.border}`:"2px solid transparent"}},A=()=>{if(c)switch(k){case"small":return{width:"32px",height:"32px",padding:"0",fontSize:"14px"};case"large":return{width:"48px",height:"48px",padding:"0",fontSize:"20px"};default:return{width:"40px",height:"40px",padding:"0",fontSize:"16px"}}switch(k){case"small":return{padding:"8px 16px",fontSize:"12px",height:"32px"};case"large":return{padding:"14px 24px",fontSize:"16px",height:"48px"};default:return{padding:"10px 20px",fontSize:H.button.fontSize,height:"40px"}}},z={...C(),...A(),fontWeight:H.button.fontWeight,borderRadius:c?"50%":"24px",cursor:s?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:q.xs,fontFamily:"system-ui, -apple-system, sans-serif",transition:"background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",outline:"none",boxSizing:"border-box",minWidth:c?"auto":"80px"},[M,l]=W.useState(!1),P=M&&!s?{...z,...T()}:z;return c?e.jsx("button",{style:P,disabled:s,onClick:D,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),...O,children:i}):e.jsxs("button",{style:P,disabled:s,onClick:D,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),...O,children:[i&&L==="left"&&e.jsx("span",{style:{display:"flex",alignItems:"center"},children:i}),F,i&&L==="right"&&e.jsx("span",{style:{display:"flex",alignItems:"center"},children:i})]})};t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},iconOnly:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const a=()=>e.jsx("span",{style:{fontSize:"18px",fontWeight:"bold"},children:"+"}),o=()=>e.jsx("span",{style:{fontSize:"18px",fontWeight:"bold"},children:"•••"}),B=()=>e.jsx("span",{style:{fontSize:"18px"},children:"←"}),$={title:"SILICA Design System/Button",component:t,argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant from design system"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},iconOnly:{control:"boolean",description:"Icon-only circular button"},children:{control:"text",description:"Button text"}}},p={args:{variant:"primary",children:"Label",icon:e.jsx(a,{})}},u={args:{variant:"primary",iconOnly:!0,icon:e.jsx(o,{})}},m={args:{variant:"secondary",children:"Label",icon:e.jsx(a,{})}},y={args:{variant:"secondary",iconOnly:!0,icon:e.jsx(o,{})}},x={args:{variant:"tertiary",children:"Label",icon:e.jsx(B,{})},parameters:{backgrounds:{default:"light"}}},g={args:{variant:"tertiary",iconOnly:!0,icon:e.jsx(o,{})},parameters:{backgrounds:{default:"light"}}},h={args:{variant:"primary",disabled:!0,children:"Label",icon:e.jsx(a,{})}},v={args:{variant:"primary",disabled:!0,iconOnly:!0,icon:e.jsx(o,{})}},b={args:{variant:"primary",size:"small",children:"Small",icon:e.jsx(a,{})}},f={args:{variant:"primary",size:"medium",children:"Medium",icon:e.jsx(a,{})}},j={args:{variant:"primary",size:"large",children:"Large",icon:e.jsx(a,{})}},S={render:()=>e.jsxs("div",{style:{padding:"40px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Primary"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",icon:e.jsx(a,{}),children:"Label"}),e.jsx(t,{variant:"primary",iconOnly:!0,icon:e.jsx(o,{})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Secondary"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",icon:e.jsx(a,{}),children:"Label"}),e.jsx(t,{variant:"secondary",iconOnly:!0,icon:e.jsx(o,{})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Tertiary"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"tertiary",icon:e.jsx(B,{}),children:"Label"}),e.jsx(t,{variant:"tertiary",iconOnly:!0,icon:e.jsx(o,{})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Disabled"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",disabled:!0,icon:e.jsx(a,{}),children:"Label"}),e.jsx(t,{variant:"primary",disabled:!0,iconOnly:!0,icon:e.jsx(o,{})})]})]})]}),parameters:{docs:{description:{story:"Complete button showcase matching the SILICA Design System. Hover over buttons to see state changes."}}}},I={render:()=>e.jsxs("div",{style:{padding:"40px"},children:[e.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Hover over these buttons to see the color transitions:"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",icon:e.jsx(a,{}),children:"Primary Hover"}),e.jsx(t,{variant:"secondary",icon:e.jsx(a,{}),children:"Secondary Hover"}),e.jsx(t,{variant:"tertiary",icon:e.jsx(B,{}),children:"Tertiary Hover"})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Label',
    icon: <PlusIcon />
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    iconOnly: true,
    icon: <DotsIcon />
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Label',
    icon: <PlusIcon />
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    iconOnly: true,
    icon: <DotsIcon />
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Label',
    icon: <ArrowIcon />
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    iconOnly: true,
    icon: <DotsIcon />
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Label',
    icon: <PlusIcon />
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    iconOnly: true,
    icon: <DotsIcon />
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
    icon: <PlusIcon />
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
    icon: <PlusIcon />
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
    icon: <PlusIcon />
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
          <Button variant="primary" icon={<PlusIcon />}>Label</Button>
          <Button variant="primary" iconOnly icon={<DotsIcon />} />
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
          <Button variant="secondary" icon={<PlusIcon />}>Label</Button>
          <Button variant="secondary" iconOnly icon={<DotsIcon />} />
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
          <Button variant="tertiary" icon={<ArrowIcon />}>Label</Button>
          <Button variant="tertiary" iconOnly icon={<DotsIcon />} />
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
          <Button variant="primary" disabled icon={<PlusIcon />}>Label</Button>
          <Button variant="primary" disabled iconOnly icon={<DotsIcon />} />
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
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
        <Button variant="primary" icon={<PlusIcon />}>Primary Hover</Button>
        <Button variant="secondary" icon={<PlusIcon />}>Secondary Hover</Button>
        <Button variant="tertiary" icon={<ArrowIcon />}>Tertiary Hover</Button>
      </div>
    </div>
}`,...I.parameters?.docs?.source}}};const N=["Primary","PrimaryIconOnly","Secondary","SecondaryIconOnly","Tertiary","TertiaryIconOnly","Disabled","DisabledIconOnly","SmallButton","MediumButton","LargeButton","CompleteShowcase","HoverStatesDemo"];export{S as CompleteShowcase,h as Disabled,v as DisabledIconOnly,I as HoverStatesDemo,j as LargeButton,f as MediumButton,p as Primary,u as PrimaryIconOnly,m as Secondary,y as SecondaryIconOnly,b as SmallButton,x as Tertiary,g as TertiaryIconOnly,N as __namedExportsOrder,$ as default};
