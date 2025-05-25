import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DmM0KDA7.js";import{I as re}from"./input-Byt05_PM.js";import{I as se}from"./icon-Bz48yz4e.js";import{c as E}from"./index-CrEZfznw.js";import{a as m}from"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";function ne(n,r=300){const[t,a]=o.useState(n);return o.useEffect(()=>{const c=window.setTimeout(()=>{a(n)},r);return()=>{clearTimeout(c)}},[n,r]),t}function ae(n,r){o.useEffect(()=>{const t=a=>{!n.current||n.current.contains(a.target)||r(a)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[n,r])}const i=n=>{const{fetchSuggestions:r,onSelect:t,renderOption:a,value:c,...g}=n,[T,x]=o.useState(c),[l,u]=o.useState([]),[W,D]=o.useState(!1),[p,L]=o.useState(-1),C=o.useRef(!1),A=o.useRef(null),j=ne(T,500);ae(A,()=>{u([])}),o.useEffect(()=>{if(j&&C.current){const s=r(j);s instanceof Promise?(console.log("triggered"),D(!0),s.then(d=>{D(!1),u(d)})):u(s)}else u([]);L(-1)},[j]);const O=s=>{s<0&&(s=0),s>=l.length&&(s=l.length-1),L(s)},X=s=>{switch(s.key){case"Enter":l[p]&&q(l[p]);break;case"ArrowUp":O(p-1);break;case"ArrowDown":O(p+1);break;case"Escape":u([]);break}},Y=s=>{const d=s.target.value.trim();x(d),C.current=!0},q=s=>{x(s.value),u([]),t==null||t(s),C.current=!1},Z=s=>a?a(s):s.value,ee=()=>e.jsx("ul",{className:E({show:l.length>0}),children:l.map((s,d)=>{const te=E("suggestion-item",{"item-highlighted":d===p});return e.jsx("li",{className:te,onClick:()=>q(s),children:Z(s)},d)})});return e.jsxs("div",{className:"yjy-auto-complete",ref:A,children:[e.jsx(re,{value:T,onChange:Y,onKeyDown:X,...g}),W&&e.jsx("ul",{children:e.jsx(se,{icon:"spinner",spin:!0})}),l.length>0&&ee()]})};i.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:"(str: string) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>",signature:{arguments:[{type:{name:"string"},name:"str"}],return:{name:"union",raw:"DataSourceType<T>[] | Promise<DataSourceType<T>[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType<T>[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType<T>[]"}],raw:"Promise<DataSourceType<T>[]>"}]}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType<T>) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"void"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType<T>) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactElement"}}},description:""}},composes:["Omit"]};const me={title:"Components/AutoComplete",component:i,parameters:{docs:{description:{component:"支持异步搜索、键盘导航、自定义渲染的下拉自动完成组件"}}},tags:["autodocs"]},v=[{value:"James",number:23,position:"SF"},{value:"Curry",number:30,position:"PG"},{value:"Durant",number:7,position:"SF"},{value:"Jokic",number:15,position:"C"},{value:"Luka",number:77,position:"PG"}],h={render:n=>e.jsx(i,{...n,fetchSuggestions:r=>v.filter(t=>t.value.toLowerCase().includes(r.toLowerCase())),onSelect:m("selected"),placeholder:"输入球员姓名..."})},y={render:n=>e.jsx(i,{...n,fetchSuggestions:r=>v.filter(t=>t.value.toLowerCase().includes(r.toLowerCase())),renderOption:r=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx("b",{children:"姓名:"})," ",r.value]}),e.jsxs("span",{children:[e.jsx("b",{children:"号码:"})," ",r.number]}),e.jsxs("span",{children:[e.jsx("b",{children:"位置:"})," ",r.position]})]}),onSelect:m("selected"),placeholder:"输入球员姓名查看详情..."})},f={render:n=>{const r=t=>fetch(`https://api.github.com/search/users?q=${t}`).then(a=>a.json()).then(a=>{var c;return((c=a.items)==null?void 0:c.slice(0,5).map(g=>({value:g.login,...g})))||[]});return e.jsx(i,{...n,fetchSuggestions:r,renderOption:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("img",{src:t.avatar_url,alt:t.login,style:{width:24,height:24,borderRadius:"50%",marginRight:8}}),e.jsxs("span",{children:[t.login," (ID: ",t.id,")"]})]}),onSelect:m("github-user-selected"),placeholder:"搜索 GitHub 用户..."})}},S={render:n=>e.jsx(i,{...n,fetchSuggestions:r=>[],placeholder:"禁用的输入框",disabled:!0})},b={render:n=>{const r=t=>new Promise(a=>{setTimeout(()=>{a(v.filter(c=>c.value.toLowerCase().includes(t.toLowerCase())))},1500)});return e.jsx(i,{...n,fetchSuggestions:r,onSelect:m("selected"),placeholder:"输入查看延迟加载效果..."})}},w={render:n=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:16},children:"尝试使用 ↑ ↓ 键导航，Enter 键选择"}),e.jsx(i,{...n,fetchSuggestions:r=>v.filter(t=>t.value.toLowerCase().includes(r.toLowerCase())),onSelect:m("keyboard-selected"),placeholder:"测试键盘导航..."})]})};var k,P,I;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <AutoComplete {...args} fetchSuggestions={query => players.filter(player => player.value.toLowerCase().includes(query.toLowerCase()))} onSelect={action('selected')} placeholder="输入球员姓名..." />
}`,...(I=(P=h.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var R,F,G;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <AutoComplete<PlayerProps> {...args} fetchSuggestions={query => players.filter(player => player.value.toLowerCase().includes(query.toLowerCase()))} renderOption={item => <div style={{
    display: 'flex',
    justifyContent: 'space-between'
  }}>\r
          <span><b>姓名:</b> {item.value}</span>\r
          <span><b>号码:</b> {item.number}</span>\r
          <span><b>位置:</b> {item.position}</span>\r
        </div>} onSelect={action('selected')} placeholder="输入球员姓名查看详情..." />
}`,...(G=(F=y.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var N,_,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const handleFetch = (query: string): Promise<DataSourceType<GithubUser>[]> => {
      return fetch(\`https://api.github.com/search/users?q=\${query}\`).then(res => res.json()).then(data => {
        return data.items?.slice(0, 5).map((item: GithubUser) => ({
          value: item.login,
          ...item
        })) || [];
      });
    };
    return <AutoComplete<GithubUser> {...args} fetchSuggestions={handleFetch} renderOption={item => <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>\r
            <img src={item.avatar_url} alt={item.login} style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        marginRight: 8
      }} />\r
            <span>{item.login} (ID: {item.id})</span>\r
          </div>} onSelect={action('github-user-selected')} placeholder="搜索 GitHub 用户..." />;
  }
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var B,K,U;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <AutoComplete {...args} fetchSuggestions={query => []} placeholder="禁用的输入框" disabled />
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var H,J,$;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const delayedFetch = (query: string) => {
      return new Promise<DataSourceType[]>(resolve => {
        setTimeout(() => {
          resolve(players.filter(player => player.value.toLowerCase().includes(query.toLowerCase())));
        }, 1500);
      });
    };
    return <AutoComplete {...args} fetchSuggestions={delayedFetch} onSelect={action('selected')} placeholder="输入查看延迟加载效果..." />;
  }
}`,...($=(J=b.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var z,M,Q;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div>\r
      <p style={{
      marginBottom: 16
    }}>尝试使用 ↑ ↓ 键导航，Enter 键选择</p>\r
      <AutoComplete {...args} fetchSuggestions={query => players.filter(player => player.value.toLowerCase().includes(query.toLowerCase()))} onSelect={action('keyboard-selected')} placeholder="测试键盘导航..." />\r
    </div>
}`,...(Q=(M=w.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const ge=["BasicAutoComplete","CustomRenderOption","AsyncSearch","DisabledAutoComplete","LoadingState","KeyboardNavigation"];export{f as AsyncSearch,h as BasicAutoComplete,y as CustomRenderOption,S as DisabledAutoComplete,w as KeyboardNavigation,b as LoadingState,ge as __namedExportsOrder,me as default};
