import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{a as U}from"./index-B-lxVbXh.js";import{r as M,R as f}from"./index-DmM0KDA7.js";import{c as G}from"./index-CrEZfznw.js";import{I as Me,l as Ce}from"./icon-Bz48yz4e.js";import{i as Se}from"./index-DpYKL7K5.js";import{h as R}from"./index-D_Kw7eWP.js";import"./v4-CtRu48qb.js";import"./index-nLeaPAJ8.js";const V=M.createContext({index:"0"}),S=n=>{const{className:a,mode:l="horizontal",style:e,children:r,defaultIndex:t="0",onSelect:i}=n,[s,o]=M.useState(t),c=G("yjy-menu",a,{"menu-vertical":l==="vertical","menu-horizontal":l!=="vertical"}),p={index:s||"0",onSelect:v=>{o(v),i&&i(v)},mode:l},h=()=>{let v=0;return f.Children.map(r,(T,X)=>{if(f.isValidElement(T)){const N=T;if(typeof N.type=="function"){const{displayName:y}=N.type;if(y==="MenuItem"||y==="SubMenu")return f.cloneElement(N,{index:(v++).toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}else console.error("Warning: Menu has an invalid child")}return T})};return u.jsx("ul",{className:c,style:e,"data-testid":"test-menu",children:u.jsx(V.Provider,{value:p,children:h()})})};S.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{defaultIndex:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedIndex"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=n=>{const{index:a,disabled:l,className:e,style:r,children:t}=n,i=M.useContext(V),s=G("menu-item",e,{"is-disabled":l,"is-active":i.index===a&&!l}),o=()=>{i.onSelect&&!l&&typeof a=="string"&&i.onSelect(a)};return u.jsx("li",{className:s,style:r,onClick:o,children:t})};d.displayName="MenuItem";d.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{index:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function D(){return D=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var e in l)({}).hasOwnProperty.call(l,e)&&(n[e]=l[e])}return n},D.apply(null,arguments)}function he(n,a){if(n==null)return{};var l={};for(var e in n)if({}.hasOwnProperty.call(n,e)){if(a.indexOf(e)!==-1)continue;l[e]=n[e]}return l}function $(n,a){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,e){return l.__proto__=e,l},$(n,a)}function xe(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,$(n,a)}function Ne(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function Ie(n,a){n.classList?n.classList.add(a):Ne(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function H(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function be(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=H(n.className,a):n.setAttribute("class",H(n.className&&n.className.baseVal||"",a))}const F={disabled:!1},ve=f.createContext(null);var Ee=function(a){return a.scrollTop},j="unmounted",E="exited",g="entering",b="entered",A="exiting",x=function(n){xe(a,n);function a(e,r){var t;t=n.call(this,e,r)||this;var i=r,s=i&&!i.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?s?(o=E,t.appearStatus=g):o=b:e.unmountOnExit||e.mountOnEnter?o=j:o=E,t.state={status:o},t.nextCallback=null,t}a.getDerivedStateFromProps=function(r,t){var i=r.in;return i&&t.status===j?{status:E}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(r){var t=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==g&&i!==b&&(t=g):(i===g||i===b)&&(t=A)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var r=this.props.timeout,t,i,s;return t=i=s=r,r!=null&&typeof r!="number"&&(t=r.exit,i=r.enter,s=r.appear!==void 0?r.appear:i),{exit:t,enter:i,appear:s}},l.updateStatus=function(r,t){if(r===void 0&&(r=!1),t!==null)if(this.cancelNextCallback(),t===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:R.findDOMNode(this);i&&Ee(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:j})},l.performEnter=function(r){var t=this,i=this.props.enter,s=this.context?this.context.isMounting:r,o=this.props.nodeRef?[s]:[R.findDOMNode(this),s],c=o[0],m=o[1],p=this.getTimeouts(),h=s?p.appear:p.enter;if(!r&&!i||F.disabled){this.safeSetState({status:b},function(){t.props.onEntered(c)});return}this.props.onEnter(c,m),this.safeSetState({status:g},function(){t.props.onEntering(c,m),t.onTransitionEnd(h,function(){t.safeSetState({status:b},function(){t.props.onEntered(c,m)})})})},l.performExit=function(){var r=this,t=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:R.findDOMNode(this);if(!t||F.disabled){this.safeSetState({status:E},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:A},function(){r.props.onExiting(s),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:E},function(){r.props.onExited(s)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(r,t){t=this.setNextCallback(t),this.setState(r,t)},l.setNextCallback=function(r){var t=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,t.nextCallback=null,r(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},l.onTransitionEnd=function(r,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:R.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=o[0],m=o[1];this.props.addEndListener(c,m)}r!=null&&setTimeout(this.nextCallback,r)},l.render=function(){var r=this.state.status;if(r===j)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=he(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(ve.Provider,{value:null},typeof i=="function"?i(r,s):f.cloneElement(f.Children.only(i),s))},a}(f.Component);x.contextType=ve;x.propTypes={};function I(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:I,onEntering:I,onEntered:I,onExit:I,onExiting:I,onExited:I};x.UNMOUNTED=j;x.EXITED=E;x.ENTERING=g;x.ENTERED=b;x.EXITING=A;var Te=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return Ie(a,e)})},P=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return be(a,e)})},W=function(n){xe(a,n);function a(){for(var e,r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];return e=n.call.apply(n,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(s,o){var c=e.resolveArguments(s,o),m=c[0],p=c[1];e.removeClasses(m,"exit"),e.addClass(m,p?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(s,o)},e.onEntering=function(s,o){var c=e.resolveArguments(s,o),m=c[0],p=c[1],h=p?"appear":"enter";e.addClass(m,h,"active"),e.props.onEntering&&e.props.onEntering(s,o)},e.onEntered=function(s,o){var c=e.resolveArguments(s,o),m=c[0],p=c[1],h=p?"appear":"enter";e.removeClasses(m,h),e.addClass(m,h,"done"),e.props.onEntered&&e.props.onEntered(s,o)},e.onExit=function(s){var o=e.resolveArguments(s),c=o[0];e.removeClasses(c,"appear"),e.removeClasses(c,"enter"),e.addClass(c,"exit","base"),e.props.onExit&&e.props.onExit(s)},e.onExiting=function(s){var o=e.resolveArguments(s),c=o[0];e.addClass(c,"exit","active"),e.props.onExiting&&e.props.onExiting(s)},e.onExited=function(s){var o=e.resolveArguments(s),c=o[0];e.removeClasses(c,"exit"),e.addClass(c,"exit","done"),e.props.onExited&&e.props.onExited(s)},e.resolveArguments=function(s,o){return e.props.nodeRef?[e.props.nodeRef.current,s]:[s,o]},e.getClassNames=function(s){var o=e.props.classNames,c=typeof o=="string",m=c&&o?o+"-":"",p=c?""+m+s:o[s],h=c?p+"-active":o[s+"Active"],v=c?p+"-done":o[s+"Done"];return{baseClassName:p,activeClassName:h,doneClassName:v}},e}var l=a.prototype;return l.addClass=function(r,t,i){var s=this.getClassNames(t)[i+"ClassName"],o=this.getClassNames("enter"),c=o.doneClassName;t==="appear"&&i==="done"&&c&&(s+=" "+c),i==="active"&&r&&Ee(r),s&&(this.appliedClasses[t][i]=s,Te(r,s))},l.removeClasses=function(r,t){var i=this.appliedClasses[t],s=i.base,o=i.active,c=i.done;this.appliedClasses[t]={},s&&P(r,s),o&&P(r,o),c&&P(r,c)},l.render=function(){var r=this.props;r.classNames;var t=he(r,["classNames"]);return f.createElement(x,D({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);W.defaultProps={classNames:""};W.propTypes={};const ge=n=>{const{children:a,classNames:l,animation:e,wrapper:r,nodeRef:t,...i}=n,s=M.useRef(null),o=t||s;return u.jsx(W,{nodeRef:o,classNames:l||e,...i,children:(c,m)=>{const p=typeof a=="function"?a(c,m):a;return r&&!t?u.jsx("div",{ref:o,children:p}):f.isValidElement(p)?f.cloneElement(p,{ref:o}):p}})};ge.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:`| 'zoom-in-top'\r
| 'zoom-in-left'\r
| 'zoom-in-bottom'\r
| 'zoom-in-right'`,elements:[{name:"literal",value:"'zoom-in-top'"},{name:"literal",value:"'zoom-in-left'"},{name:"literal",value:"'zoom-in-bottom'"},{name:"literal",value:"'zoom-in-right'"}]},description:""},wrapper:{required:!1,tsType:{name:"boolean"},description:""},nodeRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""}}};Ce.add(Se);const C=({index:n,title:a,children:l,className:e})=>{const r=M.useContext(V),[t,i]=M.useState(!1),s=M.useRef(null),o=G("submenu-item menu-item",e,{"is-active":r.index===n,"is-visible":t}),c=()=>{r.mode==="horizontal"&&i(!0)},m=()=>{r.mode==="horizontal"&&i(!1)},p=()=>{r.mode==="vertical"&&i(!t)},h=()=>{const v=f.Children.map(l,(T,X)=>{const N=T,{displayName:y}=N.type;if(y==="MenuItem")return f.cloneElement(N,{index:`${n}-${X}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return u.jsx(ge,{in:t,timeout:300,animation:"zoom-in-top",nodeRef:s,unmountOnExit:!0,children:u.jsx("ul",{className:"yjy-submenu",ref:s,children:v})})};return u.jsxs("li",{className:o,onMouseEnter:c,onMouseLeave:m,onClick:p,children:[u.jsxs("div",{className:"submenu-title",children:[a,u.jsx(Me,{icon:"angle-down",className:"arrow-icon"})]}),h()]},n)};C.displayName="SubMenu";C.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{index:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const qe={title:"components/Menu",component:S,parameters:{docs:{description:{component:"一个多功能菜单组件，支持水平和垂直布局，并具有子菜单功能"}}},argTypes:{mode:{control:"select",options:["horizontal","vertical"],description:"菜单方向 - 水平或垂直"},defaultIndex:{control:"text",description:"默认选中的菜单项索引"},onSelect:{action:"selected",description:"菜单项被选中时的回调函数"}},tags:["autodocs"]},O={render:n=>u.jsxs(S,{...n,children:[u.jsx(d,{children:"菜单项 1"}),u.jsx(d,{children:"菜单项 2"}),u.jsx(d,{disabled:!0,children:"禁用项"}),u.jsx(d,{children:"菜单项 4"})]}),args:{mode:"horizontal",defaultIndex:"0",onSelect:U("菜单项被选中")}},_={render:n=>u.jsxs(S,{...n,children:[u.jsx(d,{children:"菜单项 1"}),u.jsx(d,{children:"菜单项 2"}),u.jsxs(C,{title:"子菜单",children:[u.jsx(d,{children:"子项 1"}),u.jsx(d,{children:"子项 2"})]}),u.jsx(d,{children:"菜单项 4"})]}),args:{mode:"vertical",defaultIndex:"0",onSelect:U("菜单项被选中")}},z={render:n=>u.jsxs(S,{...n,children:[u.jsx(d,{children:"首页"}),u.jsxs(C,{title:"产品",children:[u.jsx(d,{children:"产品 1"}),u.jsx(d,{children:"产品 2"}),u.jsx(d,{children:"产品 3"})]}),u.jsxs(C,{title:"服务",children:[u.jsx(d,{children:"服务 1"}),u.jsx(d,{children:"服务 2"})]}),u.jsx(d,{children:"关于"}),u.jsx(d,{children:"联系我们"})]}),args:{mode:"horizontal",defaultIndex:"0",onSelect:U("菜单项被选中")}},k={args:{children:"菜单项"}},w={args:{children:"禁用项",disabled:!0}},L={render:n=>u.jsx(S,{mode:"horizontal",children:u.jsxs(C,{...n,children:[u.jsx(d,{children:"子项 1"}),u.jsx(d,{children:"子项 2"})]})}),args:{title:"子菜单"}},q={render:n=>u.jsx(S,{mode:"vertical",children:u.jsxs(C,{...n,children:[u.jsx(d,{children:"子项 1"}),u.jsx(d,{children:"子项 2"})]})}),args:{title:"垂直子菜单"}};var B,J,K;O.parameters={...O.parameters,docs:{...(B=O.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
      <MenuItem>菜单项 1</MenuItem>\r
      <MenuItem>菜单项 2</MenuItem>\r
      <MenuItem disabled>禁用项</MenuItem>\r
      <MenuItem>菜单项 4</MenuItem>\r
    </Menu>,
  args: {
    mode: "horizontal",
    // 水平模式
    defaultIndex: "0",
    // 默认选中第一项
    onSelect: action('菜单项被选中') // 选中回调
  }
}`,...(K=(J=O.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
      <MenuItem>菜单项 1</MenuItem>\r
      <MenuItem>菜单项 2</MenuItem>\r
      <SubMenu title="子菜单">\r
        <MenuItem>子项 1</MenuItem>\r
        <MenuItem>子项 2</MenuItem>\r
      </SubMenu>\r
      <MenuItem>菜单项 4</MenuItem>\r
    </Menu>,
  args: {
    mode: "vertical",
    // 垂直模式
    defaultIndex: "0",
    // 默认选中第一项
    onSelect: action('菜单项被选中') // 选中回调
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
      <MenuItem>首页</MenuItem>\r
      <SubMenu title="产品">\r
        <MenuItem>产品 1</MenuItem>\r
        <MenuItem>产品 2</MenuItem>\r
        <MenuItem>产品 3</MenuItem>\r
      </SubMenu>\r
      <SubMenu title="服务">\r
        <MenuItem>服务 1</MenuItem>\r
        <MenuItem>服务 2</MenuItem>\r
      </SubMenu>\r
      <MenuItem>关于</MenuItem>\r
      <MenuItem>联系我们</MenuItem>\r
    </Menu>,
  args: {
    mode: "horizontal",
    // 水平模式
    defaultIndex: "0",
    // 默认选中第一项
    onSelect: action('菜单项被选中') // 选中回调
  }
}`,...(ne=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ie;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    children: "菜单项"
  }
}`,...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ae,oe,le;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: "禁用项",
    disabled: true // 禁用状态
  }
}`,...(le=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ue,de;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <Menu mode="horizontal">\r
      <SubMenu {...args}>\r
        <MenuItem>子项 1</MenuItem>\r
        <MenuItem>子项 2</MenuItem>\r
      </SubMenu>\r
    </Menu>,
  args: {
    title: "子菜单"
  }
}`,...(de=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <Menu mode="vertical">\r
      <SubMenu {...args}>\r
        <MenuItem>子项 1</MenuItem>\r
        <MenuItem>子项 2</MenuItem>\r
      </SubMenu>\r
    </Menu>,
  args: {
    title: "垂直子菜单"
  }
}`,...(fe=(me=q.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Pe=["默认水平菜单","垂直菜单","带子菜单的菜单","默认菜单项","禁用菜单项","默认子菜单","垂直子菜单"];export{Pe as __namedExportsOrder,qe as default,q as 垂直子菜单,_ as 垂直菜单,z as 带子菜单的菜单,w as 禁用菜单项,L as 默认子菜单,O as 默认水平菜单,k as 默认菜单项};
