import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as C}from"./index-DmM0KDA7.js";import{h as J}from"./index-D_Kw7eWP.js";import{B as x}from"./button-Bw3tcr3z.js";import"./index-nLeaPAJ8.js";import"./index-CrEZfznw.js";function $(l,e,i,L=!0){u.useEffect(()=>{if(L&&l)return l.addEventListener(e,i),()=>{l.removeEventListener(e,i)}},[L,e,i,l])}const D={topLeft:["bl","tl"],top:["bc","tc"],topRight:["br","tr"],leftTop:["tr","tl"],left:["cr","cl"],leftBottom:["br","bl"],rightTop:["tl","tr"],right:["cl","cr"],rightBottom:["bl","br"],bottomLeft:["tl","bl"],bottom:["tc","bc"],bottomRight:["tr","br"]};function W({target:l,overlay:e,placement:i,points:L=["tl","bl"],beforePosition:w}){if(!l||!e)return{};const{width:y,height:d,left:n,top:f}=l.getBoundingClientRect(),{width:c,height:a}=e.getBoundingClientRect(),b=document.documentElement||document.body,{scrollTop:h,scrollLeft:N}=b;function P(r){let s=L;r&&r in D&&(s=D[r]);let m=f+h,R=n+N;switch(s[1][0]){case"t":m+=0;break;case"c":m+=d/2;break;case"b":m+=d;break}switch(s[1][1]){case"l":R+=0;break;case"c":R+=y/2;break;case"r":R+=y;break}switch(s[0][0]){case"t":m+=0;break;case"c":m-=a/2;break;case"b":m-=a;break}switch(s[0][1]){case"l":R+=0;break;case"c":R-=c/2;break;case"r":R-=c;break}return{left:R,top:m}}let T=i,{left:o,top:g}=P(i);o=Number(o),g=Number(g);let p={position:"absolute",top:g,left:o};if(o<0||g<0||o+c>window.innerWidth||g+a>window.innerHeight){let r=i;if(!r)return p;g<0&&(r=r.replace("top","bottom")),o<0&&(r=r.replace("left","right")),g+a>window.innerHeight&&(r=r.replace("bottom","top")),o+c>window.innerWidth&&(r=r.replace("right","left"));const s=P(r);p.left=s.left,p.top=s.top,T=r}return p.left=Math.max(0,p.left),p.top=Math.max(0,p.top),typeof w=="function"&&(p=w(p,{target:{width:y,height:d},placement:T})),p}const I=l=>{const{className:e,children:i,style:L,hasMask:w,visible:y,onVisibleChange:d,target:n,points:f,placement:c,beforePosition:a,...b}=l,[h,N]=u.useState(y||!1),[P,T]=u.useState({}),o=u.useRef(null);u.useEffect(()=>{"visible"in l&&N(y)},[y]),$(window,"mousedown",v=>{const B=[];o.current&&B.push(o.current);const M=v.target;for(let S=0;S<B.length;S++){const q=B[S];if(q&&q.contains(M))return}d==null||d(!1)},h),$(window,"keydown",v=>{!h||!o.current||v.key==="Escape"&&(d==null||d(!1))},h),u.useEffect(()=>{if(h&&o.current&&n){const v=typeof n=="function"?n():n;if(!v)return;const B=W({target:v,overlay:o.current,points:f,placement:c,beforePosition:a});T(B)}},[h,n,f,c,a]);const r=u.useCallback(v=>{if(o.current=v,v&&n){const B=typeof n=="function"?n():n;if(!B)return;const M=W({target:B,overlay:v,points:f,placement:c,beforePosition:a});T(M)}},[n,f,c,a]);if(!h||!i)return null;const s=C.Children.only(i);if(!C.isValidElement(s))return null;const m=s.props,R={...b,ref:r,style:{...P,...m.style},className:`overlay-content ${m.className||""}`.trim()},G=C.cloneElement(s,R);return J.createPortal(t.jsxs("div",{className:`overlay-container ${e||""}`.trim(),children:[w?t.jsx("div",{className:"overlay-mask"}):null,G]}),document.body)},O=l=>{const{placement:e="bottomLeft",trigger:i,triggerType:L="click",children:w,contentClassName:y="",...d}=l,n=u.useRef(null),[f,c]=u.useState(!1),a=u.useRef(null),b=u.useRef(null),h=u.useCallback(m=>{n.current=m},[]),N=()=>{b.current&&(clearTimeout(b.current),b.current=null),!a.current&&!f&&(a.current=window.setTimeout(()=>{c(!0)},100))},P=()=>{a.current&&(clearTimeout(a.current),a.current=null),!b.current&&f&&(b.current=window.setTimeout(()=>{c(!1)},100))},T={},o={ref:h,className:"overlay-trigger-button"};L==="hover"?(o.onMouseEnter=N,o.onMouseLeave=P,T.onMouseEnter=N,T.onMouseLeave=P):o.onClick=()=>{c(!f)};const g=m=>{c(m)},p=typeof i=="string"?t.jsx("span",{children:i}):i,r=u.cloneElement(p,o),s=`overlay-content ${y}`.trim();return t.jsxs(t.Fragment,{children:[r,t.jsx(I,{...d,...T,placement:e,target:()=>n.current,visible:f,onVisibleChange:g,children:typeof w=="string"?t.jsx("div",{className:s,children:w}):C.cloneElement(w,{className:s})})]})};O.__docgenInfo={description:"",methods:[],displayName:"Popup",props:{trigger:{required:!0,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'topLeft'\r
| 'top'\r
| 'topRight'\r
| 'leftTop'\r
| 'left'\r
| 'leftBottom'\r
| 'rightTop'\r
| 'right'\r
| 'rightBottom'\r
| 'bottomLeft'\r
| 'bottom'\r
| 'bottomRight'`,elements:[{name:"literal",value:"'topLeft'"},{name:"literal",value:"'top'"},{name:"literal",value:"'topRight'"},{name:"literal",value:"'leftTop'"},{name:"literal",value:"'left'"},{name:"literal",value:"'leftBottom'"},{name:"literal",value:"'rightTop'"},{name:"literal",value:"'right'"},{name:"literal",value:"'rightBottom'"},{name:"literal",value:"'bottomLeft'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottomRight'"}]},description:""},triggerType:{required:!1,tsType:{name:"union",raw:"'hover' | 'click'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"}]},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const z=I;z.Popup=O;const k=O,te={title:"Components/Overlay",component:z,tags:["autodocs"],argTypes:{placement:{control:"select",options:["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"]}}},j={render:()=>t.jsx(k,{trigger:t.jsx(x,{children:"Click Me"}),placement:"bottomLeft",children:t.jsx("div",{className:"overlay-content overlay-content-small",children:"Popup Content"})})},E={render:()=>{const l={topLeft:"TL",top:"Top",topRight:"TR",leftTop:"LT",left:"Left",leftBottom:"LB",rightTop:"RT",right:"Right",rightBottom:"RB",bottomLeft:"BL",bottom:"Bottom",bottomRight:"BR"};return t.jsxs("div",{className:"overlay-demo-container",children:[t.jsx("div",{className:"overlay-demo-row overlay-demo-row-top",children:["topLeft","top","topRight"].map(e=>t.jsx(k,{placement:e,trigger:t.jsx(x,{children:l[e]}),children:t.jsx("div",{className:"overlay-content overlay-content-small",children:e})},e))}),t.jsx("div",{className:"overlay-demo-column overlay-demo-column-left",children:["leftTop","left","leftBottom"].map(e=>t.jsx(k,{placement:e,trigger:t.jsx(x,{children:l[e]}),children:t.jsx("div",{className:"overlay-content overlay-content-small",children:e})},e))}),t.jsx("div",{className:"overlay-demo-column overlay-demo-column-right",children:["rightTop","right","rightBottom"].map(e=>t.jsx(k,{placement:e,trigger:t.jsx(x,{children:l[e]}),children:t.jsx("div",{className:"overlay-content overlay-content-small",children:e})},e))}),t.jsx("div",{className:"overlay-demo-row overlay-demo-row-bottom",children:["bottomLeft","bottom","bottomRight"].map(e=>t.jsx(k,{placement:e,trigger:t.jsx(x,{children:l[e]}),children:t.jsx("div",{className:"overlay-content overlay-content-small",children:e})},e))})]})}};var _,A,H;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Popup trigger={<Button>Click Me</Button>} placement="bottomLeft">\r
      <div className="overlay-content overlay-content-small">\r
        Popup Content\r
      </div>\r
    </Popup>
}`,...(H=(A=j.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var K,V,F;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const placements: PlacementType[] = ['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'];
    const labels: Record<PlacementType, string> = {
      topLeft: 'TL',
      top: 'Top',
      topRight: 'TR',
      leftTop: 'LT',
      left: 'Left',
      leftBottom: 'LB',
      rightTop: 'RT',
      right: 'Right',
      rightBottom: 'RB',
      bottomLeft: 'BL',
      bottom: 'Bottom',
      bottomRight: 'BR'
    };
    return <div className="overlay-demo-container">\r
        <div className="overlay-demo-row overlay-demo-row-top">\r
          {['topLeft', 'top', 'topRight'].map(placement => <Popup key={placement} placement={placement as PlacementType} trigger={<Button>{labels[placement as PlacementType]}</Button>}>\r
              <div className="overlay-content overlay-content-small">\r
                {placement}\r
              </div>\r
            </Popup>)}\r
        </div>\r
\r
        <div className="overlay-demo-column overlay-demo-column-left">\r
          {['leftTop', 'left', 'leftBottom'].map(placement => <Popup key={placement} placement={placement as PlacementType} trigger={<Button>{labels[placement as PlacementType]}</Button>}>\r
              <div className="overlay-content overlay-content-small">\r
                {placement}\r
              </div>\r
            </Popup>)}\r
        </div>\r
\r
        <div className="overlay-demo-column overlay-demo-column-right">\r
          {['rightTop', 'right', 'rightBottom'].map(placement => <Popup key={placement} placement={placement as PlacementType} trigger={<Button>{labels[placement as PlacementType]}</Button>}>\r
              <div className="overlay-content overlay-content-small">\r
                {placement}\r
              </div>\r
            </Popup>)}\r
        </div>\r
\r
        <div className="overlay-demo-row overlay-demo-row-bottom">\r
          {['bottomLeft', 'bottom', 'bottomRight'].map(placement => <Popup key={placement} placement={placement as PlacementType} trigger={<Button>{labels[placement as PlacementType]}</Button>}>\r
              <div className="overlay-content overlay-content-small">\r
                {placement}\r
              </div>\r
            </Popup>)}\r
        </div>\r
      </div>;
  }
}`,...(F=(V=E.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const oe=["WithPopup","AllPlacements"];export{E as AllPlacements,j as WithPopup,oe as __namedExportsOrder,te as default};
