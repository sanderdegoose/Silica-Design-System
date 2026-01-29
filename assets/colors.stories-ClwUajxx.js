import{j as o}from"./jsx-runtime-u17CrQMm.js";const r={orange:{light:{50:"#FFFBE6",100:"#FFF7CC",200:"#FFEF99",300:"#FFE766",400:"#FFDF33",500:"#FFD800",600:"#CCAD00",700:"#998200",800:"#665600",900:"#443900",950:"#221D00"},primary:{50:"#FEF8E6",100:"#FEF1CC",200:"#FDE399",300:"#FCD566",400:"#FAC533",500:"#F9B500",600:"#C79100",700:"#956D00",800:"#644800",900:"#423000",950:"#211800"},dark:{50:"#FFF1E6",100:"#FFE3CC",200:"#FFC799",300:"#FFAB66",400:"#FF8F33",500:"#FF7400",600:"#CC5D00",700:"#994600",800:"#662F00",900:"#441F00",950:"#221000"}},green:{light:{50:"#F9FEE6",100:"#F4FDCC",200:"#E9FB99",300:"#DDF966",400:"#D5F533",500:"#C6EB00",600:"#9EBC00",700:"#778D00",800:"#4F5E00",900:"#353F00",950:"#1A1F00"},primary:{50:"#F0FBE6",100:"#E1F7CC",200:"#C3EF99",300:"#A5E766",400:"#87D933",500:"#69CA00",600:"#54A200",700:"#3F7900",800:"#2A5100",900:"#1C3600",950:"#0E1B00"},dark:{50:"#E6F9E6",100:"#CCF3CC",200:"#99E799",300:"#66DB66",400:"#33C133",500:"#00A700",600:"#008600",700:"#006400",800:"#004300",900:"#002C00",950:"#001600"}},blue:{light:{50:"#E8F8FE",100:"#D1F1FD",200:"#A3E3FC",300:"#75D5FA",400:"#59D0FC",500:"#3ECAFB",600:"#0EB2E8",700:"#0A8AB4",800:"#075C78",900:"#053D50",950:"#021F28"},primary:{50:"#E6F8FD",100:"#CCEFFA",200:"#99E0F6",300:"#5BD2F0",400:"#2FC1E8",500:"#0EAFE0",600:"#0B8CB9",700:"#096A8C",800:"#06485E",900:"#04303E",950:"#021820"},dark:{50:"#E6F1FE",100:"#CCE3FD",200:"#99C7FB",300:"#66ABF9",400:"#338AF1",500:"#0068DF",600:"#0054B3",700:"#004086",800:"#002B59",900:"#001C3B",950:"#000E1E"}},red:{50:"#FEE7EB",100:"#FDCFD7",200:"#FBA0AF",300:"#F97087",400:"#F0385A",500:"#D60B2D",600:"#AB0924",700:"#80071B",800:"#560512",900:"#37030C",950:"#1C0206"},gray:{light:{50:"#FEFEFE",100:"#FCFCFB",200:"#FAF9F7",300:"#F9F7F4",400:"#F8F6F2",500:"#F7F5F1",600:"#D9D4CC",700:"#ADA79D",800:"#6E6860",900:"#4A453F",950:"#252320"},primary:{50:"#F7F7F6",100:"#EFEEEE",200:"#DEDDDC",300:"#CECCCB",400:"#ABA9A7",500:"#898683",600:"#6E6B69",700:"#53514F",800:"#373635",900:"#252423",950:"#131212"},dark:{50:"#FDFCFB",100:"#F8F6F3",200:"#F4F1EB",300:"#EFECE4",400:"#EDEAE0",500:"#EBE7DD",600:"#CEC7B8",700:"#A69C8A",800:"#6B6459",900:"#47433B",950:"#24221E"}},neutral:{white:"#FFFFFF",offBlack:"#262626",black:"#000000"}},e={primary:r.orange.dark[500],secondary:r.neutral.black,success:r.green.primary[500],warning:r.orange.primary[500],error:r.red[500],info:r.blue.primary[500],text:{primary:r.gray.primary[900],secondary:r.gray.primary[600],disabled:r.gray.primary[400],inverse:r.neutral.white},background:{primary:r.neutral.white,secondary:r.gray.light[50],tertiary:r.gray.light[100]},border:{default:r.gray.light[200],hover:r.orange.dark[500],focus:r.blue.primary[500]}},y={title:"SILICA Design System/Colors",parameters:{layout:"padded"}},n=({color:a,name:x,shade:m,isBaseline:p=!1})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"80px"},children:[o.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:a,borderRadius:"8px",border:a==="#ffffff"||a==="#fff"?"1px solid #e5e7eb":"none",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",marginBottom:"8px"}}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"#374151",marginBottom:"4px"},children:m}),o.jsx("div",{style:{fontSize:"11px",color:"#6B7280",fontFamily:"monospace"},children:a})]})]}),t=({title:a,scale:x,variant:m})=>o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#111827"},children:a}),o.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:Object.entries(x).map(([p,g])=>o.jsx(n,{color:g,shade:p},p))})]}),s={render:()=>o.jsxs("div",{style:{padding:"40px",maxWidth:"1400px"},children:[o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"},children:"SILICA Color System"}),o.jsx("p",{style:{fontSize:"16px",color:"#6B7280",lineHeight:"1.5"},children:"A comprehensive color palette based on Tailwind principles with Orange, Green, Blue, Red, Gray, and Neutral colors. Each color has Light, Primary, and Dark variants with shades from 50 to 950."})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Orange"}),o.jsx(t,{title:"Orange Light",scale:r.orange.light}),o.jsx(t,{title:"Orange Primary",scale:r.orange.primary}),o.jsx(t,{title:"Orange Dark",scale:r.orange.dark})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Green"}),o.jsx(t,{title:"Green Light",scale:r.green.light}),o.jsx(t,{title:"Green Primary",scale:r.green.primary}),o.jsx(t,{title:"Green Dark",scale:r.green.dark})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Blue"}),o.jsx(t,{title:"Blue Light",scale:r.blue.light}),o.jsx(t,{title:"Blue Primary",scale:r.blue.primary}),o.jsx(t,{title:"Blue Dark",scale:r.blue.dark})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Red"}),o.jsx(t,{title:"Red",scale:r.red})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Gray"}),o.jsx(t,{title:"Gray Light",scale:r.gray.light}),o.jsx(t,{title:"Gray Primary",scale:r.gray.primary}),o.jsx(t,{title:"Gray Dark",scale:r.gray.dark})]}),o.jsxs("div",{style:{marginBottom:"64px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px",color:"#111827"},children:"Neutral"}),o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(n,{color:r.neutral.white,shade:"White",name:"white"}),o.jsx(n,{color:r.neutral.offBlack,shade:"Off-Black",name:"off-black"}),o.jsx(n,{color:r.neutral.black,shade:"Black",name:"black"})]})]})]})},i={render:()=>o.jsxs("div",{style:{padding:"40px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"16px",color:"#111827"},children:"Semantic Colors"}),o.jsx("p",{style:{fontSize:"14px",color:"#6B7280",marginBottom:"32px"},children:"Pre-defined colors for common use cases in your application."}),o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Status Colors"}),o.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[o.jsx(n,{color:e.primary,shade:"Primary",name:"primary"}),o.jsx(n,{color:e.secondary,shade:"Secondary",name:"secondary"}),o.jsx(n,{color:e.success,shade:"Success",name:"success"}),o.jsx(n,{color:e.warning,shade:"Warning",name:"warning"}),o.jsx(n,{color:e.error,shade:"Error",name:"error"}),o.jsx(n,{color:e.info,shade:"Info",name:"info"})]})]}),o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Text Colors"}),o.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[o.jsx(n,{color:e.text.primary,shade:"Primary",name:"text-primary"}),o.jsx(n,{color:e.text.secondary,shade:"Secondary",name:"text-secondary"}),o.jsx(n,{color:e.text.disabled,shade:"Disabled",name:"text-disabled"}),o.jsx(n,{color:e.text.inverse,shade:"Inverse",name:"text-inverse"})]})]}),o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Background Colors"}),o.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[o.jsx(n,{color:e.background.primary,shade:"Primary",name:"bg-primary"}),o.jsx(n,{color:e.background.secondary,shade:"Secondary",name:"bg-secondary"}),o.jsx(n,{color:e.background.tertiary,shade:"Tertiary",name:"bg-tertiary"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Border Colors"}),o.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[o.jsx(n,{color:e.border.default,shade:"Default",name:"border-default"}),o.jsx(n,{color:e.border.hover,shade:"Hover",name:"border-hover"}),o.jsx(n,{color:e.border.focus,shade:"Focus",name:"border-focus"})]})]})]})},l={render:()=>o.jsxs("div",{style:{padding:"40px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px"},children:"Orange Scale"}),o.jsx(t,{title:"Orange Light",scale:r.orange.light}),o.jsx(t,{title:"Orange Primary",scale:r.orange.primary}),o.jsx(t,{title:"Orange Dark (Brand)",scale:r.orange.dark}),o.jsxs("div",{style:{marginTop:"40px",padding:"24px",backgroundColor:"#FFF1E6",borderRadius:"8px",border:"2px solid #FF7400"},children:[o.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#FF7400"},children:"Brand Color"}),o.jsx("p",{style:{fontSize:"14px",color:"#662F00"},children:"Orange Dark 500 (#FF7400) is your primary brand color used in buttons, links, and key UI elements."})]})]})},d={render:()=>o.jsxs("div",{style:{padding:"40px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"16px"},children:"Usage Examples"}),o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Buttons"}),o.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[o.jsx("button",{style:{backgroundColor:e.primary,color:"white",padding:"12px 24px",borderRadius:"24px",border:"none",fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Primary Button"}),o.jsx("button",{style:{backgroundColor:e.secondary,color:"white",padding:"12px 24px",borderRadius:"24px",border:"none",fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Secondary Button"}),o.jsx("button",{style:{backgroundColor:"transparent",color:e.primary,padding:"12px 24px",borderRadius:"24px",border:`2px solid ${e.primary}`,fontSize:"14px",fontWeight:"500",cursor:"pointer"},children:"Outline Button"})]})]}),o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Alerts"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsxs("div",{style:{padding:"16px",borderRadius:"8px",backgroundColor:`${e.success}15`,border:`1px solid ${e.success}`,color:r.green.dark[800]},children:[o.jsx("strong",{children:"Success:"})," Your changes have been saved successfully."]}),o.jsxs("div",{style:{padding:"16px",borderRadius:"8px",backgroundColor:`${e.warning}15`,border:`1px solid ${e.warning}`,color:r.orange.dark[800]},children:[o.jsx("strong",{children:"Warning:"})," Please review your information before submitting."]}),o.jsxs("div",{style:{padding:"16px",borderRadius:"8px",backgroundColor:`${e.error}15`,border:`1px solid ${e.error}`,color:r.red[800]},children:[o.jsx("strong",{children:"Error:"})," There was a problem processing your request."]}),o.jsxs("div",{style:{padding:"16px",borderRadius:"8px",backgroundColor:`${e.info}15`,border:`1px solid ${e.info}`,color:r.blue.dark[800]},children:[o.jsx("strong",{children:"Info:"})," New features are now available in your dashboard."]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Cards"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:e.background.primary,border:`1px solid ${e.border.default}`,borderRadius:"12px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[o.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",color:e.text.primary,marginBottom:"8px"},children:"Card Title"}),o.jsx("p",{style:{fontSize:"14px",color:e.text.secondary},children:"This is a card component using the color system."})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:r.orange.light[50],border:`2px solid ${r.orange.dark[500]}`,borderRadius:"12px"},children:[o.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",color:r.orange.dark[900],marginBottom:"8px"},children:"Featured Card"}),o.jsx("p",{style:{fontSize:"14px",color:r.orange.dark[700]},children:"Highlighted content with brand colors."})]})]})]})]})},c={render:()=>o.jsxs("div",{style:{padding:"40px",maxWidth:"800px"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",marginBottom:"24px"},children:"Code Examples"}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Importing Colors"}),o.jsx("pre",{style:{backgroundColor:"#1F2937",color:"#E5E7EB",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"14px",fontFamily:"monospace"},children:`import { colors, semanticColors } from '../colors';

// Using color scales
const primaryColor = colors.orange.dark[500];
const textColor = colors.gray.primary[900];

// Using semantic colors
const buttonColor = semanticColors.primary;
const successColor = semanticColors.success;`})]}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"CSS/Styled Components"}),o.jsx("pre",{style:{backgroundColor:"#1F2937",color:"#E5E7EB",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"14px",fontFamily:"monospace"},children:`// In CSS
.button-primary {
  background-color: #FF7400; /* orange.dark.500 */
  color: #ffffff;
}

// In styled-components
const Button = styled.button\`
  background-color: \${colors.orange.dark[500]};
  color: \${colors.neutral.white};
  
  &:hover {
    background-color: \${colors.orange.dark[700]};
  }
\`;`})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"React Component"}),o.jsx("pre",{style:{backgroundColor:"#1F2937",color:"#E5E7EB",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"14px",fontFamily:"monospace"},children:`import { semanticColors } from '../colors';

function Alert({ type, message }) {
  const alertColors = {
    success: semanticColors.success,
    warning: semanticColors.warning,
    error: semanticColors.error,
    info: semanticColors.info,
  };

  return (
    <div style={{
      backgroundColor: \`\${alertColors[type]}15\`,
      border: \`1px solid \${alertColors[type]}\`,
      padding: '16px',
      borderRadius: '8px',
    }}>
      {message}
    </div>
  );
}`})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px',
    maxWidth: '1400px'
  }}>
      <div style={{
      marginBottom: '48px'
    }}>
        <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '8px',
        color: '#111827'
      }}>
          SILICA Color System
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6B7280',
        lineHeight: '1.5'
      }}>
          A comprehensive color palette based on Tailwind principles with Orange, Green, Blue, Red, Gray, and Neutral colors.
          Each color has Light, Primary, and Dark variants with shades from 50 to 950.
        </p>
      </div>

      {/* Orange Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Orange
        </h2>
        <ColorScale title="Orange Light" scale={colors.orange.light} />
        <ColorScale title="Orange Primary" scale={colors.orange.primary} />
        <ColorScale title="Orange Dark" scale={colors.orange.dark} />
      </div>

      {/* Green Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Green
        </h2>
        <ColorScale title="Green Light" scale={colors.green.light} />
        <ColorScale title="Green Primary" scale={colors.green.primary} />
        <ColorScale title="Green Dark" scale={colors.green.dark} />
      </div>

      {/* Blue Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Blue
        </h2>
        <ColorScale title="Blue Light" scale={colors.blue.light} />
        <ColorScale title="Blue Primary" scale={colors.blue.primary} />
        <ColorScale title="Blue Dark" scale={colors.blue.dark} />
      </div>

      {/* Red Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Red
        </h2>
        <ColorScale title="Red" scale={colors.red} />
      </div>

      {/* Gray Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Gray
        </h2>
        <ColorScale title="Gray Light" scale={colors.gray.light} />
        <ColorScale title="Gray Primary" scale={colors.gray.primary} />
        <ColorScale title="Gray Dark" scale={colors.gray.dark} />
      </div>

      {/* Neutral Colors */}
      <div style={{
      marginBottom: '64px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#111827'
      }}>
          Neutral
        </h2>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <ColorSwatch color={colors.neutral.white} shade="White" name="white" />
          <ColorSwatch color={colors.neutral.offBlack} shade="Off-Black" name="off-black" />
          <ColorSwatch color={colors.neutral.black} shade="Black" name="black" />
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#111827'
    }}>
        Semantic Colors
      </h2>
      <p style={{
      fontSize: '14px',
      color: '#6B7280',
      marginBottom: '32px'
    }}>
        Pre-defined colors for common use cases in your application.
      </p>

      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Status Colors</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <ColorSwatch color={semanticColors.primary} shade="Primary" name="primary" />
          <ColorSwatch color={semanticColors.secondary} shade="Secondary" name="secondary" />
          <ColorSwatch color={semanticColors.success} shade="Success" name="success" />
          <ColorSwatch color={semanticColors.warning} shade="Warning" name="warning" />
          <ColorSwatch color={semanticColors.error} shade="Error" name="error" />
          <ColorSwatch color={semanticColors.info} shade="Info" name="info" />
        </div>
      </div>

      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Text Colors</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <ColorSwatch color={semanticColors.text.primary} shade="Primary" name="text-primary" />
          <ColorSwatch color={semanticColors.text.secondary} shade="Secondary" name="text-secondary" />
          <ColorSwatch color={semanticColors.text.disabled} shade="Disabled" name="text-disabled" />
          <ColorSwatch color={semanticColors.text.inverse} shade="Inverse" name="text-inverse" />
        </div>
      </div>

      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Background Colors</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <ColorSwatch color={semanticColors.background.primary} shade="Primary" name="bg-primary" />
          <ColorSwatch color={semanticColors.background.secondary} shade="Secondary" name="bg-secondary" />
          <ColorSwatch color={semanticColors.background.tertiary} shade="Tertiary" name="bg-tertiary" />
        </div>
      </div>

      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Border Colors</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <ColorSwatch color={semanticColors.border.default} shade="Default" name="border-default" />
          <ColorSwatch color={semanticColors.border.hover} shade="Hover" name="border-hover" />
          <ColorSwatch color={semanticColors.border.focus} shade="Focus" name="border-focus" />
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '24px'
    }}>Orange Scale</h2>
      <ColorScale title="Orange Light" scale={colors.orange.light} />
      <ColorScale title="Orange Primary" scale={colors.orange.primary} />
      <ColorScale title="Orange Dark (Brand)" scale={colors.orange.dark} />
      
      <div style={{
      marginTop: '40px',
      padding: '24px',
      backgroundColor: '#FFF1E6',
      borderRadius: '8px',
      border: '2px solid #FF7400'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '8px',
        color: '#FF7400'
      }}>
          Brand Color
        </h3>
        <p style={{
        fontSize: '14px',
        color: '#662F00'
      }}>
          Orange Dark 500 (#FF7400) is your primary brand color used in buttons, links, and key UI elements.
        </p>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '16px'
    }}>Usage Examples</h2>
      
      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Buttons</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <button style={{
          backgroundColor: semanticColors.primary,
          color: 'white',
          padding: '12px 24px',
          borderRadius: '24px',
          border: 'none',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Primary Button
          </button>
          <button style={{
          backgroundColor: semanticColors.secondary,
          color: 'white',
          padding: '12px 24px',
          borderRadius: '24px',
          border: 'none',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Secondary Button
          </button>
          <button style={{
          backgroundColor: 'transparent',
          color: semanticColors.primary,
          padding: '12px 24px',
          borderRadius: '24px',
          border: \`2px solid \${semanticColors.primary}\`,
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Outline Button
          </button>
        </div>
      </div>

      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Alerts</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div style={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: \`\${semanticColors.success}15\`,
          border: \`1px solid \${semanticColors.success}\`,
          color: colors.green.dark[800]
        }}>
            <strong>Success:</strong> Your changes have been saved successfully.
          </div>
          <div style={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: \`\${semanticColors.warning}15\`,
          border: \`1px solid \${semanticColors.warning}\`,
          color: colors.orange.dark[800]
        }}>
            <strong>Warning:</strong> Please review your information before submitting.
          </div>
          <div style={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: \`\${semanticColors.error}15\`,
          border: \`1px solid \${semanticColors.error}\`,
          color: colors.red[800]
        }}>
            <strong>Error:</strong> There was a problem processing your request.
          </div>
          <div style={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: \`\${semanticColors.info}15\`,
          border: \`1px solid \${semanticColors.info}\`,
          color: colors.blue.dark[800]
        }}>
            <strong>Info:</strong> New features are now available in your dashboard.
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Cards</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px'
      }}>
          <div style={{
          padding: '24px',
          backgroundColor: semanticColors.background.primary,
          border: \`1px solid \${semanticColors.border.default}\`,
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <h4 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: semanticColors.text.primary,
            marginBottom: '8px'
          }}>
              Card Title
            </h4>
            <p style={{
            fontSize: '14px',
            color: semanticColors.text.secondary
          }}>
              This is a card component using the color system.
            </p>
          </div>
          <div style={{
          padding: '24px',
          backgroundColor: colors.orange.light[50],
          border: \`2px solid \${colors.orange.dark[500]}\`,
          borderRadius: '12px'
        }}>
            <h4 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: colors.orange.dark[900],
            marginBottom: '8px'
          }}>
              Featured Card
            </h4>
            <p style={{
            fontSize: '14px',
            color: colors.orange.dark[700]
          }}>
              Highlighted content with brand colors.
            </p>
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px',
    maxWidth: '800px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '24px'
    }}>Code Examples</h2>
      
      <div style={{
      marginBottom: '32px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Importing Colors</h3>
        <pre style={{
        backgroundColor: '#1F2937',
        color: '#E5E7EB',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '14px',
        fontFamily: 'monospace'
      }}>
        {\`import { colors, semanticColors } from '../colors';

// Using color scales
const primaryColor = colors.orange.dark[500];
const textColor = colors.gray.primary[900];

// Using semantic colors
const buttonColor = semanticColors.primary;
const successColor = semanticColors.success;\`}
        </pre>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>CSS/Styled Components</h3>
        <pre style={{
        backgroundColor: '#1F2937',
        color: '#E5E7EB',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '14px',
        fontFamily: 'monospace'
      }}>
        {\`// In CSS
.button-primary {
  background-color: #FF7400; /* orange.dark.500 */
  color: #ffffff;
}

// In styled-components
const Button = styled.button\\\`
  background-color: \\\${colors.orange.dark[500]};
  color: \\\${colors.neutral.white};
  
  &:hover {
    background-color: \\\${colors.orange.dark[700]};
  }
\\\`;\`}
        </pre>
      </div>

      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>React Component</h3>
        <pre style={{
        backgroundColor: '#1F2937',
        color: '#E5E7EB',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '14px',
        fontFamily: 'monospace'
      }}>
        {\`import { semanticColors } from '../colors';

function Alert({ type, message }) {
  const alertColors = {
    success: semanticColors.success,
    warning: semanticColors.warning,
    error: semanticColors.error,
    info: semanticColors.info,
  };

  return (
    <div style={{
      backgroundColor: \\\`\\\${alertColors[type]}15\\\`,
      border: \\\`1px solid \\\${alertColors[type]}\\\`,
      padding: '16px',
      borderRadius: '8px',
    }}>
      {message}
    </div>
  );
}\`}
        </pre>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const f=["AllColors","SemanticColors","OrangeScale","UsageExamples","CodeExamples"];export{s as AllColors,c as CodeExamples,l as OrangeScale,i as SemanticColors,d as UsageExamples,f as __namedExportsOrder,y as default};
