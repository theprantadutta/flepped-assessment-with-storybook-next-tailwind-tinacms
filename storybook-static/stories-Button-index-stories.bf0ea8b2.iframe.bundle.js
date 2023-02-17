(self.webpackChunkflepped_assesment_with_storybook_next_tailwind=self.webpackChunkflepped_assesment_with_storybook_next_tailwind||[]).push([[105],{"./src/stories/Button/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,default:()=>index_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","primary","secondary","size","uppercase","children"],__jsx=react.createElement,Button=function Button(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Button":_ref$title,primary=_ref.primary,size=(_ref.secondary,_ref.size),_ref$uppercase=_ref.uppercase,uppercase=void 0!==_ref$uppercase&&_ref$uppercase,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),sizeClassNames=(0,react.useMemo)((function(){return"small"===size?"px-2 py-1 text-[10px]":"large"===size?"px-6 py-3 text-xl":"px-4 py-2 text-sm"}),[size]);return __jsx("button",(0,esm_extends.Z)({"aria-label":"Button"},props,{className:"".concat(sizeClassNames," ").concat(primary?"bg-primary text-white":"bg-gray-200 text-black"," ").concat(uppercase?"uppercase":"capitalize"," mx-2 my-1 rounded-lg font-semibold")}),null!=children?children:title)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{defaultValue:{value:"'Button'",computed:!1},required:!1},uppercase:{defaultValue:{value:"false",computed:!1},required:!1}}};const stories_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:null,description:"Is this primary button, will have primary colors",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Is this the secondary button, will have secondary color",name:"secondary",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:{value:"Button"},description:"Button Title",name:"title",required:!1,type:{name:"string"}},uppercase:{defaultValue:{value:"false"},description:"Make the button uppercase",name:"uppercase",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,dist_esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const index_stories={title:"Components/Button",component:stories_Button,tags:["autodocs"],parameters:{layout:"fullscreen"}};var Default={},Primary={args:{primary:!0,title:"Button"}};Primary.play=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var canvasElement,canvas,button;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:canvasElement=_ref.canvasElement,canvas=(0,dist_esm.uh)(canvasElement),button=canvas.getByLabelText("Button"),(0,esm.l)(button).toBeTruthy();case 4:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}(),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    primary: true,\n    title: 'Button'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"?4f7e":()=>{}}]);