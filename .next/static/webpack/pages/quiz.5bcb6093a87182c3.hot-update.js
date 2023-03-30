"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./hooks/usePopup.js":
/*!***************************!*\
  !*** ./hooks/usePopup.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n\n\nfunction usePopup() {\n    const renderPopup = (selectedAnswer, currentQuestionData)=>{\n        if (selectedAnswer == null) {\n            return null;\n        }\n        let isCorrect;\n        if (selectedAnswer === currentQuestionData.correctAnswer || selectedAnswer === currentQuestionData.correctAnswerTwo) {\n            isCorrect = true;\n            console.log(\"render\");\n        } else {\n            isCorrect = false;\n            console.log(\"render\");\n        }\n        // Render the Popup component\n        const popup = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: isCorrect ? \"#24CF16\" : \"#B91A1A\",\n            paragraph: isCorrect ? \"Great job!\" : \"Keep trying!\"\n        }, void 0, false, {\n            fileName: \"/Users/payne/Desktop/brrilliant/hooks/usePopup.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this);\n        return popup;\n    };\n    return {\n        renderPopup\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VQb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUV4QixTQUFTQyxXQUFXO0lBQ2pDLE1BQU1DLGNBQWMsQ0FBQ0MsZ0JBQWdCQyxzQkFBd0I7UUFDM0QsSUFBSUQsa0JBQWtCLElBQUksRUFBRTtZQUMxQixPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsSUFBSUU7UUFDSixJQUNFRixtQkFBbUJDLG9CQUFvQkUsYUFBYSxJQUNwREgsbUJBQW1CQyxvQkFBb0JHLGdCQUFnQixFQUN2RDtZQUNBRixZQUFZLElBQUk7WUFDaEJHLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU87WUFDTEosWUFBWSxLQUFLO1lBQ2pCRyxRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU1DLHNCQUNKLDhEQUFDVix5REFBS0E7WUFDSlcsT0FBT04sWUFBWSxZQUFZLFNBQVM7WUFDeENPLFdBQVdQLFlBQVksZUFBZSxjQUFjOzs7Ozs7UUFJeEQsT0FBT0s7SUFDVDtJQUNBLE9BQU87UUFBRVI7SUFBWTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVBvcHVwLmpzPzI1ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwIGZyb20gXCJAL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUG9wdXAoKSB7XG4gIGNvbnN0IHJlbmRlclBvcHVwID0gKHNlbGVjdGVkQW5zd2VyLCBjdXJyZW50UXVlc3Rpb25EYXRhKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQW5zd2VyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBpc0NvcnJlY3Q7XG4gICAgaWYgKFxuICAgICAgc2VsZWN0ZWRBbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciB8fFxuICAgICAgc2VsZWN0ZWRBbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlclR3b1xuICAgICkge1xuICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB0aGUgUG9wdXAgY29tcG9uZW50XG4gICAgY29uc3QgcG9wdXAgPSAoXG4gICAgICA8UG9wdXBcbiAgICAgICAgY29sb3I9e2lzQ29ycmVjdCA/IFwiIzI0Q0YxNlwiIDogXCIjQjkxQTFBXCJ9XG4gICAgICAgIHBhcmFncmFwaD17aXNDb3JyZWN0ID8gXCJHcmVhdCBqb2IhXCIgOiBcIktlZXAgdHJ5aW5nIVwifVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgcmV0dXJuIHBvcHVwO1xuICB9O1xuICByZXR1cm4geyByZW5kZXJQb3B1cCB9O1xufVxuIl0sIm5hbWVzIjpbIlBvcHVwIiwidXNlUG9wdXAiLCJyZW5kZXJQb3B1cCIsInNlbGVjdGVkQW5zd2VyIiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImlzQ29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiY29uc29sZSIsImxvZyIsInBvcHVwIiwiY29sb3IiLCJwYXJhZ3JhcGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/usePopup.js\n"));

/***/ })

});