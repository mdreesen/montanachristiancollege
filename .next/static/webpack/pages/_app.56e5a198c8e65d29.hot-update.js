"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@react-aria/ssr/dist/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@react-aria/ssr/dist/module.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SSRProvider\": function() { return /* binding */ $9d939cbc98267846$export$9f8ac96af4b1b2ae; },\n/* harmony export */   \"useSSRSafeId\": function() { return /* binding */ $9d939cbc98267846$export$619500959fc48b26; },\n/* harmony export */   \"useIsSSR\": function() { return /* binding */ $9d939cbc98267846$export$535bd6ca7f90a273; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction $parcel$export(e, n, v, s) {\n  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});\n}\nvar $9d939cbc98267846$exports = {};\n\n$parcel$export($9d939cbc98267846$exports, \"SSRProvider\", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);\n$parcel$export($9d939cbc98267846$exports, \"useSSRSafeId\", () => $9d939cbc98267846$export$619500959fc48b26);\n$parcel$export($9d939cbc98267846$exports, \"useIsSSR\", () => $9d939cbc98267846$export$535bd6ca7f90a273);\n\n// Default context value to use in case there is no SSRProvider. This is fine for\n// client-only apps. In order to support multiple copies of React Aria potentially\n// being on the page at once, the prefix is set to a random number. SSRProvider\n// will reset this to zero for consistency between server and client, so in the\n// SSR case multiple copies of React Aria is not supported.\nconst $9d939cbc98267846$var$defaultContext = {\n    prefix: String(Math.round(Math.random() * 10000000000)),\n    current: 0\n};\nconst $9d939cbc98267846$var$SSRContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext($9d939cbc98267846$var$defaultContext);\nfunction $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {\n    let cur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);\n    let value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n            // If this is the first SSRProvider, start with an empty string prefix, otherwise\n            // append and increment the counter.\n            prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,\n            current: 0\n        })\n    , [\n        cur\n    ]);\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($9d939cbc98267846$var$SSRContext.Provider, {\n        value: value\n    }, props.children));\n}\nlet $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction $9d939cbc98267846$export$619500959fc48b26(defaultId) {\n    let ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);\n    // If we are rendering in a non-DOM environment, and there's no SSRProvider,\n    // provide a warning to hint to the developer to add one.\n    if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`\n    , [\n        defaultId\n    ]);\n}\nfunction $9d939cbc98267846$export$535bd6ca7f90a273() {\n    let cur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9d939cbc98267846$var$SSRContext);\n    let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;\n    let [isSSR, setIsSSR] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isInSSRContext);\n    // If on the client, and the component was initially server rendered,\n    // then schedule a layout effect to update the component after hydration.\n    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe\n    // because the condition never changes after mounting.\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{\n        setIsSSR(false);\n    }, []);\n    return isSSR;\n}\n\n\n\n\n\n//# sourceMappingURL=module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvc3NyL2Rpc3QvbW9kdWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVLOztBQUV2SztBQUNBLCtCQUErQixxREFBcUQ7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDBEQUEwQjtBQUNqRjtBQUNBLGNBQWMsaURBQWlCO0FBQy9CLGdCQUFnQiw4Q0FBYztBQUM5QjtBQUNBO0FBQ0EsMkVBQTJFLFdBQVcsR0FBRyxjQUFjO0FBQ3ZHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwREFBMEI7QUFDbkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBYywrQkFBK0IsV0FBVyxHQUFHLGNBQWM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQWlCO0FBQy9CO0FBQ0EsNEJBQTRCLCtDQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFzQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7OztBQUtvTDtBQUNwTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvc3NyL2Rpc3QvbW9kdWxlLmpzP2QzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRjZ1dUSSRyZWFjdCwge3VzZUNvbnRleHQgYXMgJGNnV1RJJHVzZUNvbnRleHQsIHVzZU1lbW8gYXMgJGNnV1RJJHVzZU1lbW8sIHVzZVN0YXRlIGFzICRjZ1dUSSR1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0IGFzICRjZ1dUSSR1c2VMYXlvdXRFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydChlLCBuLCB2LCBzKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBuLCB7Z2V0OiB2LCBzZXQ6IHMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xufVxudmFyICQ5ZDkzOWNiYzk4MjY3ODQ2JGV4cG9ydHMgPSB7fTtcblxuJHBhcmNlbCRleHBvcnQoJDlkOTM5Y2JjOTgyNjc4NDYkZXhwb3J0cywgXCJTU1JQcm92aWRlclwiLCAoKSA9PiAkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnQkOWY4YWM5NmFmNGIxYjJhZSk7XG4kcGFyY2VsJGV4cG9ydCgkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnRzLCBcInVzZVNTUlNhZmVJZFwiLCAoKSA9PiAkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnQkNjE5NTAwOTU5ZmM0OGIyNik7XG4kcGFyY2VsJGV4cG9ydCgkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnRzLCBcInVzZUlzU1NSXCIsICgpID0+ICQ5ZDkzOWNiYzk4MjY3ODQ2JGV4cG9ydCQ1MzViZDZjYTdmOTBhMjczKTtcblxuLy8gRGVmYXVsdCBjb250ZXh0IHZhbHVlIHRvIHVzZSBpbiBjYXNlIHRoZXJlIGlzIG5vIFNTUlByb3ZpZGVyLiBUaGlzIGlzIGZpbmUgZm9yXG4vLyBjbGllbnQtb25seSBhcHBzLiBJbiBvcmRlciB0byBzdXBwb3J0IG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIHBvdGVudGlhbGx5XG4vLyBiZWluZyBvbiB0aGUgcGFnZSBhdCBvbmNlLCB0aGUgcHJlZml4IGlzIHNldCB0byBhIHJhbmRvbSBudW1iZXIuIFNTUlByb3ZpZGVyXG4vLyB3aWxsIHJlc2V0IHRoaXMgdG8gemVybyBmb3IgY29uc2lzdGVuY3kgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCwgc28gaW4gdGhlXG4vLyBTU1IgY2FzZSBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3QgJDlkOTM5Y2JjOTgyNjc4NDYkdmFyJGRlZmF1bHRDb250ZXh0ID0ge1xuICAgIHByZWZpeDogU3RyaW5nKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwKSksXG4gICAgY3VycmVudDogMFxufTtcbmNvbnN0ICQ5ZDkzOWNiYzk4MjY3ODQ2JHZhciRTU1JDb250ZXh0ID0gLyojX19QVVJFX18qLyAkY2dXVEkkcmVhY3QuY3JlYXRlQ29udGV4dCgkOWQ5MzljYmM5ODI2Nzg0NiR2YXIkZGVmYXVsdENvbnRleHQpO1xuZnVuY3Rpb24gJDlkOTM5Y2JjOTgyNjc4NDYkZXhwb3J0JDlmOGFjOTZhZjRiMWIyYWUocHJvcHMpIHtcbiAgICBsZXQgY3VyID0gJGNnV1RJJHVzZUNvbnRleHQoJDlkOTM5Y2JjOTgyNjc4NDYkdmFyJFNTUkNvbnRleHQpO1xuICAgIGxldCB2YWx1ZSA9ICRjZ1dUSSR1c2VNZW1vKCgpPT4oe1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgU1NSUHJvdmlkZXIsIHN0YXJ0IHdpdGggYW4gZW1wdHkgc3RyaW5nIHByZWZpeCwgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBhcHBlbmQgYW5kIGluY3JlbWVudCB0aGUgY291bnRlci5cbiAgICAgICAgICAgIHByZWZpeDogY3VyID09PSAkOWQ5MzljYmM5ODI2Nzg0NiR2YXIkZGVmYXVsdENvbnRleHQgPyAnJyA6IGAke2N1ci5wcmVmaXh9LSR7KytjdXIuY3VycmVudH1gLFxuICAgICAgICAgICAgY3VycmVudDogMFxuICAgICAgICB9KVxuICAgICwgW1xuICAgICAgICBjdXJcbiAgICBdKTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyAkY2dXVEkkcmVhY3QuY3JlYXRlRWxlbWVudCgkOWQ5MzljYmM5ODI2Nzg0NiR2YXIkU1NSQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9LCBwcm9wcy5jaGlsZHJlbikpO1xufVxubGV0ICQ5ZDkzOWNiYzk4MjY3ODQ2JHZhciRjYW5Vc2VET00gPSBCb29sZWFuKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiAkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnQkNjE5NTAwOTU5ZmM0OGIyNihkZWZhdWx0SWQpIHtcbiAgICBsZXQgY3R4ID0gJGNnV1RJJHVzZUNvbnRleHQoJDlkOTM5Y2JjOTgyNjc4NDYkdmFyJFNTUkNvbnRleHQpO1xuICAgIC8vIElmIHdlIGFyZSByZW5kZXJpbmcgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBhbmQgdGhlcmUncyBubyBTU1JQcm92aWRlcixcbiAgICAvLyBwcm92aWRlIGEgd2FybmluZyB0byBoaW50IHRvIHRoZSBkZXZlbG9wZXIgdG8gYWRkIG9uZS5cbiAgICBpZiAoY3R4ID09PSAkOWQ5MzljYmM5ODI2Nzg0NiR2YXIkZGVmYXVsdENvbnRleHQgJiYgISQ5ZDkzOWNiYzk4MjY3ODQ2JHZhciRjYW5Vc2VET00pIGNvbnNvbGUud2FybignV2hlbiBzZXJ2ZXIgcmVuZGVyaW5nLCB5b3UgbXVzdCB3cmFwIHlvdXIgYXBwbGljYXRpb24gaW4gYW4gPFNTUlByb3ZpZGVyPiB0byBlbnN1cmUgY29uc2lzdGVudCBpZHMgYXJlIGdlbmVyYXRlZCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlci4nKTtcbiAgICByZXR1cm4gJGNnV1RJJHVzZU1lbW8oKCk9PmRlZmF1bHRJZCB8fCBgcmVhY3QtYXJpYSR7Y3R4LnByZWZpeH0tJHsrK2N0eC5jdXJyZW50fWBcbiAgICAsIFtcbiAgICAgICAgZGVmYXVsdElkXG4gICAgXSk7XG59XG5mdW5jdGlvbiAkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnQkNTM1YmQ2Y2E3ZjkwYTI3MygpIHtcbiAgICBsZXQgY3VyID0gJGNnV1RJJHVzZUNvbnRleHQoJDlkOTM5Y2JjOTgyNjc4NDYkdmFyJFNTUkNvbnRleHQpO1xuICAgIGxldCBpc0luU1NSQ29udGV4dCA9IGN1ciAhPT0gJDlkOTM5Y2JjOTgyNjc4NDYkdmFyJGRlZmF1bHRDb250ZXh0O1xuICAgIGxldCBbaXNTU1IsIHNldElzU1NSXSA9ICRjZ1dUSSR1c2VTdGF0ZShpc0luU1NSQ29udGV4dCk7XG4gICAgLy8gSWYgb24gdGhlIGNsaWVudCwgYW5kIHRoZSBjb21wb25lbnQgd2FzIGluaXRpYWxseSBzZXJ2ZXIgcmVuZGVyZWQsXG4gICAgLy8gdGhlbiBzY2hlZHVsZSBhIGxheW91dCBlZmZlY3QgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgYWZ0ZXIgaHlkcmF0aW9uLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luU1NSQ29udGV4dCkgLy8gVGhpcyBpZiBzdGF0ZW1lbnQgdGVjaG5pY2FsbHkgYnJlYWtzIHRoZSBydWxlcyBvZiBob29rcywgYnV0IGlzIHNhZmVcbiAgICAvLyBiZWNhdXNlIHRoZSBjb25kaXRpb24gbmV2ZXIgY2hhbmdlcyBhZnRlciBtb3VudGluZy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAkY2dXVEkkdXNlTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIHNldElzU1NSKGZhbHNlKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGlzU1NSO1xufVxuXG5cblxuXG5leHBvcnQgeyQ5ZDkzOWNiYzk4MjY3ODQ2JGV4cG9ydCQ5ZjhhYzk2YWY0YjFiMmFlIGFzIFNTUlByb3ZpZGVyLCAkOWQ5MzljYmM5ODI2Nzg0NiRleHBvcnQkNjE5NTAwOTU5ZmM0OGIyNiBhcyB1c2VTU1JTYWZlSWQsICQ5ZDkzOWNiYzk4MjY3ODQ2JGV4cG9ydCQ1MzViZDZjYTdmOTBhMjczIGFzIHVzZUlzU1NSfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@react-aria/ssr/dist/module.js\n");

/***/ }),

/***/ "./node_modules/@restart/ui/esm/ssr.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/ssr.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSSRSafeId\": function() { return /* reexport safe */ _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__.useSSRSafeId; },\n/* harmony export */   \"useIsSSR\": function() { return /* reexport safe */ _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__.useIsSSR; },\n/* harmony export */   \"SSRProvider\": function() { return /* reexport safe */ _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__.SSRProvider; }\n/* harmony export */ });\n/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/ssr */ \"./node_modules/@react-aria/ssr/dist/module.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvdWkvZXNtL3Nzci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC91aS9lc20vc3NyLmpzPzQ4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU1NSU2FmZUlkLCB1c2VJc1NTUiwgU1NSUHJvdmlkZXIgfSBmcm9tICdAcmVhY3QtYXJpYS9zc3InO1xuZXhwb3J0IHsgdXNlU1NSU2FmZUlkLCB1c2VJc1NTUiwgU1NSUHJvdmlkZXIgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@restart/ui/esm/ssr.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/SSRProvider */ \"./node_modules/react-bootstrap/esm/SSRProvider.js\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: \"/Users/michaeldreesen/Documents/Programming/projects/montanachristiancollege/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/montanachristiancollege/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNlO0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVDQyxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLE1BQU0sNkVBQ0hILG1FQUFXOzhGQUNMRSxTQUFTLG9CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBR2xDLENBQUM7S0FOUUYsS0FBSztBQVFkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgU1NSUHJvdmlkZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NTUlByb3ZpZGVyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNTUlByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NTUlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiU1NSUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/SSRProvider.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/SSRProvider.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restart_ui_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @restart/ui/ssr */ \"./node_modules/@restart/ui/esm/ssr.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_restart_ui_ssr__WEBPACK_IMPORTED_MODULE_0__.SSRProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9TU1JQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUE4QztBQUM5QywrREFBZSx3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9TU1JQcm92aWRlci5qcz80YTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNTUlByb3ZpZGVyIH0gZnJvbSAnQHJlc3RhcnQvdWkvc3NyJztcbmV4cG9ydCBkZWZhdWx0IFNTUlByb3ZpZGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-bootstrap/esm/SSRProvider.js\n");

/***/ })

});