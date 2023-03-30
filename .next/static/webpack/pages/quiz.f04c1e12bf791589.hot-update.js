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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n\n\nfunction usePopup() {\n    const renderPopup = (selectedAnswer, currentQuestionData, goodFeedback, badFeedback)=>{\n        if (selectedAnswer == null) {\n            return null;\n        }\n        let isCorrect;\n        if (selectedAnswer === currentQuestionData.correctAnswer || selectedAnswer === currentQuestionData.correctAnswerTwo) {\n            isCorrect = true;\n            console.log(\"render\");\n        } else {\n            isCorrect = false;\n            console.log(\"render\");\n        }\n        // Render the Popup component\n        const popup = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: isCorrect ? \"#24CF16\" : \"#B91A1A\",\n            paragraph: isCorrect ? goodFeedback : badFeedback\n        }, void 0, false, {\n            fileName: \"/Users/payne/Desktop/brrilliant/hooks/usePopup.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n        return popup;\n    };\n    const nextQuestion = ()=>{\n        setCurrentQuestion(currentQuestion + 1);\n        setSelectedAnswer(null);\n    };\n    return {\n        renderPopup,\n        nextQuestion\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VQb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUV4QixTQUFTQyxXQUFXO0lBQ2pDLE1BQU1DLGNBQWMsQ0FDbEJDLGdCQUNBQyxxQkFDQUMsY0FDQUMsY0FDRztRQUNILElBQUlILGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVELElBQUlJO1FBQ0osSUFDRUosbUJBQW1CQyxvQkFBb0JJLGFBQWEsSUFDcERMLG1CQUFtQkMsb0JBQW9CSyxnQkFBZ0IsRUFDdkQ7WUFDQUYsWUFBWSxJQUFJO1lBQ2hCRyxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBQ0xKLFlBQVksS0FBSztZQUNqQkcsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUVELDZCQUE2QjtRQUM3QixNQUFNQyxzQkFDSiw4REFBQ1oseURBQUtBO1lBQ0phLE9BQU9OLFlBQVksWUFBWSxTQUFTO1lBQ3hDTyxXQUFXUCxZQUFZRixlQUFlQyxXQUFXOzs7Ozs7UUFJckQsT0FBT007SUFDVDtJQUVBLE1BQU1HLGVBQWUsSUFBTTtRQUN6QkMsbUJBQW1CQyxrQkFBa0I7UUFDckNDLGtCQUFrQixJQUFJO0lBQ3hCO0lBRUEsT0FBTztRQUFFaEI7UUFBYWE7SUFBYTtBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVBvcHVwLmpzPzI1ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwIGZyb20gXCJAL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUG9wdXAoKSB7XG4gIGNvbnN0IHJlbmRlclBvcHVwID0gKFxuICAgIHNlbGVjdGVkQW5zd2VyLFxuICAgIGN1cnJlbnRRdWVzdGlvbkRhdGEsXG4gICAgZ29vZEZlZWRiYWNrLFxuICAgIGJhZEZlZWRiYWNrXG4gICkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFuc3dlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgaXNDb3JyZWN0O1xuICAgIGlmIChcbiAgICAgIHNlbGVjdGVkQW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIgfHxcbiAgICAgIHNlbGVjdGVkQW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXJUd29cbiAgICApIHtcbiAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbmRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbmRlclwiKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgdGhlIFBvcHVwIGNvbXBvbmVudFxuICAgIGNvbnN0IHBvcHVwID0gKFxuICAgICAgPFBvcHVwXG4gICAgICAgIGNvbG9yPXtpc0NvcnJlY3QgPyBcIiMyNENGMTZcIiA6IFwiI0I5MUExQVwifVxuICAgICAgICBwYXJhZ3JhcGg9e2lzQ29ycmVjdCA/IGdvb2RGZWVkYmFjayA6IGJhZEZlZWRiYWNrfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgcmV0dXJuIHBvcHVwO1xuICB9O1xuXG4gIGNvbnN0IG5leHRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyUG9wdXAsIG5leHRRdWVzdGlvbiB9O1xufVxuIl0sIm5hbWVzIjpbIlBvcHVwIiwidXNlUG9wdXAiLCJyZW5kZXJQb3B1cCIsInNlbGVjdGVkQW5zd2VyIiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImdvb2RGZWVkYmFjayIsImJhZEZlZWRiYWNrIiwiaXNDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RBbnN3ZXJUd28iLCJjb25zb2xlIiwibG9nIiwicG9wdXAiLCJjb2xvciIsInBhcmFncmFwaCIsIm5leHRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsInNldFNlbGVjdGVkQW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/usePopup.js\n"));

/***/ })

});