(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1270:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),Box=__webpack_require__(44),CssBaseline=__webpack_require__(1206),List=__webpack_require__(308),ListItem=__webpack_require__(370),objectWithoutPropertiesLoose=__webpack_require__(8),esm_extends=__webpack_require__(3),clsx_m=(__webpack_require__(4),__webpack_require__(5)),composeClasses=__webpack_require__(305),styled=__webpack_require__(7),useThemeProps=__webpack_require__(10),capitalize=__webpack_require__(11),generateUtilityClass=__webpack_require__(156),generateUtilityClasses=__webpack_require__(171);function getListSubheaderUtilityClass(slot){return Object(generateUtilityClass.a)("MuiListSubheader",slot)}Object(generateUtilityClasses.a)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var jsx_runtime=__webpack_require__(0);const _excluded=["className","color","component","disableGutters","disableSticky","inset"],ListSubheaderRoot=Object(styled.a)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${Object(capitalize.a)(ownerState.color)}`],!ownerState.disableGutters&&styles.gutters,ownerState.inset&&styles.inset,!ownerState.disableSticky&&styles.sticky]}})((({theme:theme,ownerState:ownerState})=>Object(esm_extends.a)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:theme.palette.text.secondary,fontFamily:theme.typography.fontFamily,fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.pxToRem(14)},"primary"===ownerState.color&&{color:theme.palette.primary.main},"inherit"===ownerState.color&&{color:"inherit"},!ownerState.disableGutters&&{paddingLeft:16,paddingRight:16},ownerState.inset&&{paddingLeft:72},!ownerState.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:theme.palette.background.paper})));var material_ListSubheader_ListSubheader=react.forwardRef((function ListSubheader(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiListSubheader"}),{className:className,color:color="default",component:component="li",disableGutters:disableGutters=!1,disableSticky:disableSticky=!1,inset:inset=!1}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{color:color,component:component,disableGutters:disableGutters,disableSticky:disableSticky,inset:inset}),classes=(ownerState=>{const{classes:classes,color:color,disableGutters:disableGutters,inset:inset,disableSticky:disableSticky}=ownerState,slots={root:["root","default"!==color&&`color${Object(capitalize.a)(color)}`,!disableGutters&&"gutters",inset&&"inset",!disableSticky&&"sticky"]};return Object(composeClasses.a)(slots,getListSubheaderUtilityClass,classes)})(ownerState);return Object(jsx_runtime.jsx)(ListSubheaderRoot,Object(esm_extends.a)({as:component,className:Object(clsx_m.a)(classes.root,className),ref:ref,ownerState:ownerState},other))})),ListItemText=__webpack_require__(667),IconButton=__webpack_require__(372),Root=__webpack_require__(70),Header=__webpack_require__(471),EdgeTrigger=__webpack_require__(669),EdgeSidebar=__webpack_require__(469),SidebarContent=__webpack_require__(1232),Content=__webpack_require__(1233),Menu=__webpack_require__(475),Menu_default=__webpack_require__.n(Menu),ArrowLeft=__webpack_require__(455),ArrowLeft_default=__webpack_require__.n(ArrowLeft),ControlEdgeSidebar_TriggerUsingHook=function TriggerUsingHook(){var _useLayoutCtx=Object(Root.b)(),leftEdgeSidebar=_useLayoutCtx.state.leftEdgeSidebar,toggleLeftSidebarOpen=_useLayoutCtx.toggleLeftSidebarOpen;return Object(jsx_runtime.jsx)(ListItem.a,{button:!0,onClick:toggleLeftSidebarOpen,children:null!=leftEdgeSidebar&&leftEdgeSidebar.open?"Close":"Open"})};__webpack_exports__.default=function ControlEdgeSidebar(){return Object(jsx_runtime.jsxs)(Root.a,{scheme:{header:{config:{xs:{position:"sticky",height:56}}},leftEdgeSidebar:{config:{sm:{variant:"persistent",persistentBehavior:"fit",width:256,collapsible:!0,collapsedWidth:120,headerMagnetEnabled:!0}}}},initialState:{leftEdgeSidebar:{open:!0,collapsed:!0}},children:[Object(jsx_runtime.jsx)(CssBaseline.a,{}),Object(jsx_runtime.jsx)(Header.a,{children:Object(jsx_runtime.jsxs)(Box.a,{display:"flex",alignItems:"center",gap:1,px:1,children:[Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"open"},children:function children(open,setOpen){return Object(jsx_runtime.jsx)(IconButton.a,{onClick:function onClick(){return setOpen(!open)},children:open?Object(jsx_runtime.jsx)(ArrowLeft_default.a,{}):Object(jsx_runtime.jsx)(Menu_default.a,{})})}}),Object(jsx_runtime.jsx)("div",{children:"Header"})]})}),Object(jsx_runtime.jsx)(EdgeSidebar.a,{anchor:"left",children:function children(_ref){var leftEdgeSidebar=_ref.state.leftEdgeSidebar,toggleLeftSidebarCollapsed=_ref.toggleLeftSidebarCollapsed;return Object(jsx_runtime.jsx)(SidebarContent.a,{children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(material_ListSubheader_ListSubheader,{children:"Trigger"}),Object(jsx_runtime.jsx)(ListItem.a,{button:!0,onClick:toggleLeftSidebarCollapsed,children:Object(jsx_runtime.jsx)(ListItemText.a,{children:null!=leftEdgeSidebar&&leftEdgeSidebar.collapsed?"Expand":"Collapse"})})]})})}}),Object(jsx_runtime.jsx)(Content.a,{children:Object(jsx_runtime.jsx)(Box.a,{p:2,children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(material_ListSubheader_ListSubheader,{children:"Using Layout Hook"}),Object(jsx_runtime.jsx)(ControlEdgeSidebar_TriggerUsingHook,{})]})})})]})}}}]);