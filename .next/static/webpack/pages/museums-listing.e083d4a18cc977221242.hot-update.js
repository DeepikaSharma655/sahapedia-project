webpackHotUpdate_N_E("pages/museums-listing",{

/***/ "./pages/museums-listing.js":
/*!**********************************!*\
  !*** ./pages/museums-listing.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Dheerika\\sahapedia-project\\pages\\museums-listing.js";


 // posts will be populated at build time by getStaticProps()

function Blog(_ref) {
  var _this = this;

  var posts = _ref.posts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-section row",
        children: posts.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card col-md-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "card-img-top",
              src: "../images/download.svg",
              onError: function onError(e) {
                e.target.onerror = null;
                e.target.src = "../images/download.svg";
              },
              alt: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 3
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "card-title",
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "card-title",
                children: post.city
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 5
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(post.summary)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "btn btn-primary",
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 5
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 3
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
} // This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.


_c = Blog;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzZXVtcy1saXN0aW5nLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJlIiwidGFyZ2V0Iiwib25lcnJvciIsInNyYyIsInRpdGxlIiwiY2l0eSIsIlJlYWN0SHRtbFBhcnNlciIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBRXJCLHNCQUFRLHFFQUFDLDBEQUFEO0FBQUEsMkJBQVE7QUFBQSw2QkFDWjtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFDRUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNkO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0o7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBNkIsaUJBQUcsRUFBQyx3QkFBakM7QUFBMEQscUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRCxFQUFLO0FBQUNBLGlCQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxHQUFtQixJQUFuQjtBQUF5QkYsaUJBQUMsQ0FBQ0MsTUFBRixDQUFTRSxHQUFULEdBQWEsd0JBQWI7QUFBc0MsZUFBeEk7QUFBMkksaUJBQUcsRUFBRUosSUFBSSxDQUFDSztBQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURJLGVBRUo7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLDBCQUE0QkwsSUFBSSxDQUFDSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSSx5QkFBUyxFQUFDLFlBQWQ7QUFBQSwwQkFBNEJMLElBQUksQ0FBQ007QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUcseUJBQVMsRUFBQyxXQUFiO0FBQUEsMEJBQTBCQyx3REFBZSxDQUFDUCxJQUFJLENBQUNRLE9BQU47QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRixlQUlFO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQVkseUJBQVMsRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWtCRCxDLENBRUQ7QUFDQTtBQUNBOzs7S0F4Qk9YLEk7O0FBd0NRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tdXNldW1zLWxpc3RpbmcuZTA4M2Q0YTE4Y2M5NzcyMjEyNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIsIHsgcHJvY2Vzc05vZGVzLCBjb252ZXJ0Tm9kZVRvRWxlbWVudCwgaHRtbHBhcnNlcjIgfSBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4vLyBwb3N0cyB3aWxsIGJlIHBvcHVsYXRlZCBhdCBidWlsZCB0aW1lIGJ5IGdldFN0YXRpY1Byb3BzKClcclxuZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH0pIHtcclxuICBcclxuICAgIHJldHVybiAoPExheW91dD48ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zZWN0aW9uIHJvd1wiPlxyXG4gICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtbWQtM1wiPlxyXG4gIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJzcmM9XCIuLi9pbWFnZXMvZG93bmxvYWQuc3ZnXCIgb25FcnJvcj17KGUpPT57ZS50YXJnZXQub25lcnJvciA9IG51bGw7IGUudGFyZ2V0LnNyYz1cIi4uL2ltYWdlcy9kb3dubG9hZC5zdmdcIn19ICBhbHQ9e3Bvc3QudGl0bGV9Lz5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cG9zdC50aXRsZX08L2g1PlxyXG4gICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cG9zdC5jaXR5fTwvaDQ+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57UmVhY3RIdG1sUGFyc2VyKHBvc3Quc3VtbWFyeSkgfTwvcD5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+R28gc29tZXdoZXJlPC9hPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICkpfVxyXG4gICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXItc2lkZS5cclxuICAvLyBJdCB3b24ndCBiZSBjYWxsZWQgb24gY2xpZW50LXNpZGUsIHNvIHlvdSBjYW4gZXZlbiBkb1xyXG4gIC8vIGRpcmVjdCBkYXRhYmFzZSBxdWVyaWVzLiBTZWUgdGhlIFwiVGVjaG5pY2FsIGRldGFpbHNcIiBzZWN0aW9uLlxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5dXHJcbiAgICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzY1LjAuMTY3LjU5L3NhaGFwZWRpYTIuMC9iYWNrZW5kL2VudGl0eS9nZXRNdXNldW1zJylcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gICAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEJsb2dcclxuICAiXSwic291cmNlUm9vdCI6IiJ9