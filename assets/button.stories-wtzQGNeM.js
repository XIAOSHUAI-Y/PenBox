import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a as B}from"./index-B-lxVbXh.js";import{B as r}from"./button-Bw3tcr3z.js";import"./v4-CtRu48qb.js";import"./index-DmM0KDA7.js";import"./index-CrEZfznw.js";const j={title:"Components/Button",component:r,parameters:{docs:{description:{component:"这是一个通用的 Button 组件，可用于各种交互。"}}},argTypes:{btnType:{control:"select",options:["primary","danger","link"],description:"按钮的类型，可选 `primary`、`danger` 和 `link`。"},size:{control:"select",options:["lg","sm"],description:"按钮的尺寸，可选 `lg` 和 `sm`。"}}},e={args:{children:"默认 Button"}},n={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(r,{size:"lg",onClick:B("clicked"),children:"Large Button"}),t.jsx(r,{size:"sm",children:"Small Button"})]})},o={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(r,{btnType:"primary",children:"Primary Button"}),t.jsx(r,{btnType:"danger",children:"Danger Button"}),t.jsx(r,{btnType:"link",href:"https://google.com",children:"Link Button"})]})};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "默认 Button"
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <>\r
      <Button size="lg" onClick={action('clicked')}>Large Button</Button>\r
      <Button size="sm">Small Button</Button>\r
    </>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,l,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>\r
      <Button btnType="primary">Primary Button</Button>\r
      <Button btnType="danger">Danger Button</Button>\r
      <Button btnType="link" href="https://google.com">\r
        Link Button\r
      </Button>\r
    </>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Default","ButtonWithSize","ButtonWithType"];export{n as ButtonWithSize,o as ButtonWithType,e as Default,f as __namedExportsOrder,j as default};
