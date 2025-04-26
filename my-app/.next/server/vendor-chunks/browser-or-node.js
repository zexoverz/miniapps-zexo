"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-or-node";
exports.ids = ["vendor-chunks/browser-or-node"];
exports.modules = {

/***/ "(ssr)/./node_modules/browser-or-node/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/browser-or-node/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isDeno: () => (/* binding */ isDeno),\n/* harmony export */   isJsDom: () => (/* binding */ isJsDom),\n/* harmony export */   isNode: () => (/* binding */ isNode),\n/* harmony export */   isWebWorker: () => (/* binding */ isWebWorker)\n/* harmony export */ });\n// src/index.ts\nvar isBrowser = typeof window !== \"undefined\" && typeof window.document !== \"undefined\";\nvar isNode = (\n  // @ts-expect-error\n  typeof process !== \"undefined\" && // @ts-expect-error\n  process.versions != null && // @ts-expect-error\n  process.versions.node != null\n);\nvar isWebWorker = typeof self === \"object\" && self.constructor && self.constructor.name === \"DedicatedWorkerGlobalScope\";\nvar isJsDom = typeof window !== \"undefined\" && window.name === \"nodejs\" || typeof navigator !== \"undefined\" && \"userAgent\" in navigator && typeof navigator.userAgent === \"string\" && (navigator.userAgent.includes(\"Node.js\") || navigator.userAgent.includes(\"jsdom\"));\nvar isDeno = (\n  // @ts-expect-error\n  typeof Deno !== \"undefined\" && // @ts-expect-error\n  typeof Deno.version !== \"undefined\" && // @ts-expect-error\n  typeof Deno.version.deno !== \"undefined\"\n);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1vci1ub2RlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPRSIsInNvdXJjZXMiOlsiL1VzZXJzL3pleG8vRG9jdW1lbnRzL3Byb2dyYW1taW5nL3BlcnNvbmFsL21hdGVyaS13ZWIzL01pbmlBcHBXZWIzdGVtcGxhdGUvbXktYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLW9yLW5vZGUvZGlzdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIGlzTm9kZSA9IChcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHByb2Nlc3MudmVyc2lvbnMgIT0gbnVsbCAmJiAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPSBudWxsXG4pO1xudmFyIGlzV2ViV29ya2VyID0gdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZi5jb25zdHJ1Y3RvciAmJiBzZWxmLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGVcIjtcbnZhciBpc0pzRG9tID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubmFtZSA9PT0gXCJub2RlanNcIiB8fCB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIFwidXNlckFnZW50XCIgaW4gbmF2aWdhdG9yICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSBcInN0cmluZ1wiICYmIChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTm9kZS5qc1wiKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwianNkb21cIikpO1xudmFyIGlzRGVubyA9IChcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICB0eXBlb2YgRGVubyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHR5cGVvZiBEZW5vLnZlcnNpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgLy8gQHRzLWV4cGVjdC1lcnJvclxuICB0eXBlb2YgRGVuby52ZXJzaW9uLmRlbm8gIT09IFwidW5kZWZpbmVkXCJcbik7XG5leHBvcnQge1xuICBpc0Jyb3dzZXIsXG4gIGlzRGVubyxcbiAgaXNKc0RvbSxcbiAgaXNOb2RlLFxuICBpc1dlYldvcmtlclxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/browser-or-node/dist/index.mjs\n");

/***/ })

};
;