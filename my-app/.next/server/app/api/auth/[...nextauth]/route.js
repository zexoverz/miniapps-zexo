/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_zexo_Documents_programming_personal_materi_web3_MiniAppWeb3template_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/zexo/Documents/programming/personal/materi-web3/MiniAppWeb3template/my-app/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_zexo_Documents_programming_personal_materi_web3_MiniAppWeb3template_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnpleG8lMkZEb2N1bWVudHMlMkZwcm9ncmFtbWluZyUyRnBlcnNvbmFsJTJGbWF0ZXJpLXdlYjMlMkZNaW5pQXBwV2ViM3RlbXBsYXRlJTJGbXktYXBwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnpleG8lMkZEb2N1bWVudHMlMkZwcm9ncmFtbWluZyUyRnBlcnNvbmFsJTJGbWF0ZXJpLXdlYjMlMkZNaW5pQXBwV2ViM3RlbXBsYXRlJTJGbXktYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5RTtBQUN0SjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3pleG8vRG9jdW1lbnRzL3Byb2dyYW1taW5nL3BlcnNvbmFsL21hdGVyaS13ZWIzL01pbmlBcHBXZWIzdGVtcGxhdGUvbXktYXBwL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvemV4by9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvcGVyc29uYWwvbWF0ZXJpLXdlYjMvTWluaUFwcFdlYjN0ZW1wbGF0ZS9teS1hcHAvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ \"(rsc)/./src/app/api/auth/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDSztBQUV0QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsOENBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZXhvL0RvY3VtZW50cy9wcm9ncmFtbWluZy9wZXJzb25hbC9tYXRlcmktd2ViMy9NaW5pQXBwV2ViM3RlbXBsYXRlL215LWFwcC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/auth.ts":
/*!**********************************!*\
  !*** ./src/app/api/auth/auth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @worldcoin/minikit-js */ \"(rsc)/./node_modules/@worldcoin/minikit-js/build/index.js\");\n\nconst authOptions = {\n    providers: [\n        {\n            id: \"worldcoin-wallet\",\n            name: \"Worldcoin Wallet\",\n            type: \"credentials\",\n            credentials: {\n                message: {\n                    type: \"text\"\n                },\n                signature: {\n                    type: \"text\"\n                },\n                address: {\n                    type: \"text\"\n                },\n                nonce: {\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.signature || !credentials?.message || !credentials?.address || !credentials?.nonce) {\n                    return null;\n                }\n                try {\n                    const validMessage = await (0,_worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.verifySiweMessage)({\n                        status: \"success\",\n                        message: credentials.message,\n                        signature: credentials.signature,\n                        address: credentials.address,\n                        version: 1\n                    }, credentials.nonce);\n                    if (!validMessage.isValid || !validMessage.siweMessageData.address) {\n                        return null;\n                    }\n                    const userProfile = await _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.MiniKit.getUserByAddress(validMessage.siweMessageData.address);\n                    console.log({\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    });\n                    return {\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    };\n                } catch (e) {\n                    console.error(\"Error verifying message:\", e);\n                    return null;\n                }\n            }\n        }\n    ],\n    callbacks: {\n        redirect () {\n            return process.env.NEXT_PUBLIC_APP_URL;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.address = token.sub;\n            }\n            return session;\n        },\n        async jwt ({ token }) {\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFHNUQsTUFBTUUsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVDtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxTQUFTO29CQUFFRixNQUFNO2dCQUFPO2dCQUN4QkcsV0FBVztvQkFBRUgsTUFBTTtnQkFBTztnQkFDMUJJLFNBQVM7b0JBQUVKLE1BQU07Z0JBQU87Z0JBQ3hCSyxPQUFPO29CQUFFTCxNQUFNO2dCQUFPO1lBQ3hCO1lBQ0EsTUFBTU0sV0FBVUwsV0FBVztnQkFDekIsSUFDRSxDQUFDQSxhQUFhRSxhQUNkLENBQUNGLGFBQWFDLFdBQ2QsQ0FBQ0QsYUFBYUcsV0FDZCxDQUFDSCxhQUFhSSxPQUNkO29CQUNBLE9BQU87Z0JBQ1Q7Z0JBQ0EsSUFBSTtvQkFDRixNQUFNRSxlQUFlLE1BQU1aLHdFQUFpQkEsQ0FDMUM7d0JBQ0VhLFFBQVE7d0JBQ1JOLFNBQVNELFlBQVlDLE9BQU87d0JBQzVCQyxXQUFXRixZQUFZRSxTQUFTO3dCQUNoQ0MsU0FBU0gsWUFBWUcsT0FBTzt3QkFDNUJLLFNBQVM7b0JBQ1gsR0FDQVIsWUFBWUksS0FBSztvQkFHbkIsSUFBSSxDQUFDRSxhQUFhRyxPQUFPLElBQUksQ0FBQ0gsYUFBYUksZUFBZSxDQUFDUCxPQUFPLEVBQUU7d0JBQ2xFLE9BQU87b0JBQ1Q7b0JBRUEsTUFBTVEsY0FBYyxNQUFNbEIsMERBQU9BLENBQUNtQixnQkFBZ0IsQ0FDaEROLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTztvQkFFdENVLFFBQVFDLEdBQUcsQ0FBQzt3QkFDVmpCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7b0JBQ0EsT0FBTzt3QkFDTHJCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7Z0JBQ0YsRUFBRSxPQUFPQyxHQUFHO29CQUNWTixRQUFRTyxLQUFLLENBQUMsNEJBQTRCRDtvQkFDMUMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxXQUFXO1FBQ1RDO1lBQ0UsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUI7UUFDeEM7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNELFFBQVFFLElBQUksRUFBRTtnQkFDekJGLFFBQVFFLElBQUksQ0FBQ3pCLE9BQU8sR0FBR3dCLE1BQU1FLEdBQUc7WUFDbEM7WUFDQSxPQUFPSDtRQUNUO1FBQ0EsTUFBTUksS0FBSSxFQUFFSCxLQUFLLEVBQUU7WUFDakIsT0FBT0E7UUFDVDtJQUNGO0lBQ0FJLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL3pleG8vRG9jdW1lbnRzL3Byb2dyYW1taW5nL3BlcnNvbmFsL21hdGVyaS13ZWIzL01pbmlBcHBXZWIzdGVtcGxhdGUvbXktYXBwL3NyYy9hcHAvYXBpL2F1dGgvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW5pS2l0LCB2ZXJpZnlTaXdlTWVzc2FnZSB9IGZyb20gXCJAd29ybGRjb2luL21pbmlraXQtanNcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgaWQ6IFwid29ybGRjb2luLXdhbGxldFwiLFxuICAgICAgbmFtZTogXCJXb3JsZGNvaW4gV2FsbGV0XCIsXG4gICAgICB0eXBlOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHNpZ25hdHVyZTogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBhZGRyZXNzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIG5vbmNlOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhY3JlZGVudGlhbHM/LnNpZ25hdHVyZSB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8ubWVzc2FnZSB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8uYWRkcmVzcyB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8ubm9uY2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB2YWxpZE1lc3NhZ2UgPSBhd2FpdCB2ZXJpZnlTaXdlTWVzc2FnZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogY3JlZGVudGlhbHMubWVzc2FnZSxcbiAgICAgICAgICAgICAgc2lnbmF0dXJlOiBjcmVkZW50aWFscy5zaWduYXR1cmUsXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGNyZWRlbnRpYWxzLmFkZHJlc3MsXG4gICAgICAgICAgICAgIHZlcnNpb246IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHMubm9uY2VcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKCF2YWxpZE1lc3NhZ2UuaXNWYWxpZCB8fCAhdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IE1pbmlLaXQuZ2V0VXNlckJ5QWRkcmVzcyhcbiAgICAgICAgICAgIHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgaWQ6IHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgYWRkcmVzczogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyUHJvZmlsZS51c2VybmFtZSxcbiAgICAgICAgICAgIGltYWdlOiB1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgYWRkcmVzczogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyUHJvZmlsZS51c2VybmFtZSxcbiAgICAgICAgICAgIGltYWdlOiB1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVVybCxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHZlcmlmeWluZyBtZXNzYWdlOlwiLCBlKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICByZWRpcmVjdCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMIGFzIHN0cmluZztcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5hZGRyZXNzID0gdG9rZW4uc3ViO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL1wiLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJNaW5pS2l0IiwidmVyaWZ5U2l3ZU1lc3NhZ2UiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsInR5cGUiLCJjcmVkZW50aWFscyIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJhZGRyZXNzIiwibm9uY2UiLCJhdXRob3JpemUiLCJ2YWxpZE1lc3NhZ2UiLCJzdGF0dXMiLCJ2ZXJzaW9uIiwiaXNWYWxpZCIsInNpd2VNZXNzYWdlRGF0YSIsInVzZXJQcm9maWxlIiwiZ2V0VXNlckJ5QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvd2VyQ2FzZSIsInVzZXJuYW1lIiwiaW1hZ2UiLCJwcm9maWxlUGljdHVyZVVybCIsImUiLCJlcnJvciIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwic3ViIiwiand0IiwicGFnZXMiLCJzaWduSW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/auth.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/viem","vendor-chunks/next","vendor-chunks/@worldcoin","vendor-chunks/ox","vendor-chunks/@noble","vendor-chunks/buffer","vendor-chunks/abitype","vendor-chunks/base64-js","vendor-chunks/ieee754","vendor-chunks/browser-or-node","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzexo%2FDocuments%2Fprogramming%2Fpersonal%2Fmateri-web3%2FMiniAppWeb3template%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();