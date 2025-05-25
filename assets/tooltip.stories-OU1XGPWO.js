import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-DmM0KDA7.js";const t=({content:h,children:v,position:x="bottom",showArrow:N=!0,theme:y="light",disabled:a=!1,className:T=""})=>{const[j,s]=R.useState(!1),w=()=>{a||s(!0)},b=()=>{a||s(!1)};return e.jsxs("div",{className:`tooltip-container ${y} ${T}`,onMouseEnter:w,onMouseLeave:b,children:[v,j&&e.jsx("div",{className:`tooltip ${x}`,children:h})]})};t.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'light'\r
| 'dark'\r
| 'primary'\r
| 'success'\r
| 'warning'\r
| 'danger'\r
| 'glass'\r
| 'minimal'\r
| 'soft'`,elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'soft'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"components/Tooltip",component:t,parameters:{docs:{description:{component:"悬浮提示组件，当用户悬停在元素上时显示额外信息。"}}},argTypes:{position:{control:"select",options:["top","bottom","left","right"],description:"提示框位置，可选值：'top' | 'bottom' | 'left' | 'right'"},content:{control:"text",description:"提示框内容文本"}},tags:["autodocs"]},n={args:{children:"悬停查看提示",content:"这是默认提示内容"},name:"基础用法"},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",justifyContent:"center",padding:"50px",flexWrap:"wrap"},children:[e.jsx(t,{content:"上方提示",position:"top",children:"上方提示"}),e.jsx(t,{content:"下方提示",position:"bottom",children:"下方提示"}),e.jsx(t,{content:"左侧提示",position:"left",children:"左侧提示"}),e.jsx(t,{content:"右侧提示",position:"right",children:"右侧提示"})]}),name:"位置示例",parameters:{docs:{description:{story:"展示提示框在不同位置的显示效果。"}}}},o={args:{children:"悬停查看自定义内容",content:e.jsxs("div",{style:{padding:"8px"},children:[e.jsx("h4",{style:{margin:0},children:"自定义标题"}),e.jsx("p",{style:{margin:"4px 0 0"},children:"支持富文本和样式自定义"})]}),position:"right"},name:"自定义内容"};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "悬停查看提示",
    // 中文示例文本
    content: "这是默认提示内容" // 中文示例文本
  },
  name: "基础用法" // 明确指定中文故事名
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "50px",
    flexWrap: "wrap"
  }}>\r
      <Tooltip content="上方提示" position="top">\r
        上方提示\r
      </Tooltip>\r
      <Tooltip content="下方提示" position="bottom">\r
        下方提示\r
      </Tooltip>\r
      <Tooltip content="左侧提示" position="left">\r
        左侧提示\r
      </Tooltip>\r
      <Tooltip content="右侧提示" position="right">\r
        右侧提示\r
      </Tooltip>\r
    </div>,
  name: "位置示例",
  // 中文故事名
  parameters: {
    docs: {
      description: {
        story: "展示提示框在不同位置的显示效果。" // 中文描述
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "悬停查看自定义内容",
    content: <div style={{
      padding: "8px"
    }}>\r
        <h4 style={{
        margin: 0
      }}>自定义标题</h4>\r
        <p style={{
        margin: "4px 0 0"
      }}>支持富文本和样式自定义</p>\r
      </div>,
    position: "right"
  },
  name: "自定义内容" // 中文故事名
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["基础用法","位置示例","自定义内容"];export{M as __namedExportsOrder,E as default,r as 位置示例,n as 基础用法,o as 自定义内容};
