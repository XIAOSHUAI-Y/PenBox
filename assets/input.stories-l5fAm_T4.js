import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a}from"./index-B-lxVbXh.js";import{I as n}from"./input-Byt05_PM.js";import{f as C}from"./index-DpYKL7K5.js";import"./v4-CtRu48qb.js";import"./index-DmM0KDA7.js";import"./index-CrEZfznw.js";import"./icon-Bz48yz4e.js";const A={title:"Components/Input",component:n,parameters:{docs:{description:{component:"这是一个通用的 Input 组件，支持多种样式和功能。"}}},argTypes:{size:{control:"select",options:["lg","sm"],description:"输入框的尺寸，可选 `lg` 和 `sm`。"},disabled:{control:"boolean",description:"是否禁用输入框。"},icon:{table:{disable:!0},description:"输入框的图标（FontAwesome 图标）。"},prepend:{description:"输入框的前缀内容。"},append:{description:"输入框的后缀内容。"},onChange:{action:"changed",description:"输入内容变化时的回调函数。"}}},p={args:{placeholder:"请输入内容"}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{size:"lg",placeholder:"大号输入框",onChange:a("large input changed")}),e.jsx(n,{placeholder:"默认输入框",onChange:a("default input changed")}),e.jsx(n,{size:"sm",placeholder:"小号输入框",onChange:a("small input changed")})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{disabled:!0,placeholder:"禁用状态"}),e.jsx(n,{icon:C,placeholder:"带图标的输入框",onChange:a("icon input changed")})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{prepend:"https://",placeholder:"example.com",onChange:a("prepend input changed")}),e.jsx(n,{append:".com",placeholder:"example",onChange:a("append input changed")}),e.jsx(n,{prepend:"https://",append:".com",placeholder:"example",onChange:a("both affix input changed")})]})};var c,i,s;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "请输入内容"
  }
}`,...(s=(i=p.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,d,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
      <Input size="lg" placeholder="大号输入框" onChange={action('large input changed')} />\r
      <Input placeholder="默认输入框" onChange={action('default input changed')} />\r
      <Input size="sm" placeholder="小号输入框" onChange={action('small input changed')} />\r
    </div>
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
      <Input disabled placeholder="禁用状态" />\r
      <Input icon={faSearch} placeholder="带图标的输入框" onChange={action('icon input changed')} />\r
    </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>\r
      <Input prepend="https://" placeholder="example.com" onChange={action('prepend input changed')} />\r
      <Input append=".com" placeholder="example" onChange={action('append input changed')} />\r
      <Input prepend="https://" append=".com" placeholder="example" onChange={action('both affix input changed')} />\r
    </div>
}`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const E=["Default","InputWithSize","InputWithState","InputWithAffix"];export{p as Default,t as InputWithAffix,r as InputWithSize,o as InputWithState,E as __namedExportsOrder,A as default};
