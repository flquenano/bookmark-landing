webpackHotUpdate("app",{

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var assets_logo_bookmark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/logo-bookmark.svg */ "./src/assets/logo-bookmark.svg");
/* harmony import */ var assets_icon_hamburger_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icon-hamburger.svg */ "./src/assets/icon-hamburger.svg");
/* harmony import */ var assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icon-close.svg */ "./src/assets/icon-close.svg");
/* harmony import */ var assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icon-facebook.svg */ "./src/assets/icon-facebook.svg");
/* harmony import */ var assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icon-twitter.svg */ "./src/assets/icon-twitter.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      navVisible = _useState2[0],
      setNavVisible = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(assets_logo_bookmark_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], {
    className: "nav__logo ".concat(navVisible && "opacity")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__list-item"
  }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__list-item"
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__list-item"
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__list-item"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "nav mobile",
    id: "nav__checkbox",
    className: "nav__show"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nav__checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_icon_hamburger_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Hamburger Icon",
    className: "nav__mobile ".concat(navVisible && "opacity"),
    onClick: function onClick() {
      return setNavVisible(!navVisible);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    in: navVisible,
    timeout: 150,
    classNames: "navAnimation",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__mobile-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__mobile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__mobile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(assets_logo_bookmark_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], {
    className: "nav__mobile-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Close Icon",
    onClick: function onClick() {
      return setNavVisible(!navVisible);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav__mobile-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__mobile-item"
  }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__mobile-item"
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__mobile-item"
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__mobile-item"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__mobile-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Facebook Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Twitter Icon"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsIm5hdlZpc2libGUiLCJzZXROYXZWaXNpYmxlIiwiQnVyZ2VyIiwiQ3Jvc3MiLCJGYWNlYm9vayIsIlR3aXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxLQUFELENBRHpCO0FBQUE7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFFbkIsc0JBQ0Usd0ZBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyx1RUFBRDtBQUFNLGFBQVMsc0JBQWVELFVBQVUsSUFBSSxTQUE3QjtBQUFmLElBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQkFERixlQUVFO0FBQUksYUFBUyxFQUFDO0FBQWQsZUFGRixlQUdFO0FBQUksYUFBUyxFQUFDO0FBQWQsZUFIRixlQUlFO0FBQUksYUFBUyxFQUFDO0FBQWQsYUFKRixDQURGLENBRkYsZUFXRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsWUFGUDtBQUdFLE1BQUUsRUFBQyxlQUhMO0FBSUUsYUFBUyxFQUFDO0FBSlosSUFERixlQU9FO0FBQU8sV0FBTyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxPQUFHLEVBQUVFLGlFQURQO0FBRUUsT0FBRyxFQUFDLGdCQUZOO0FBR0UsYUFBUyx3QkFBaUJGLFVBQVUsSUFBSSxTQUEvQixDQUhYO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsYUFBYSxDQUFDLENBQUNELFVBQUYsQ0FBbkI7QUFBQTtBQUpYLElBREYsQ0FQRixlQWdCRSwyREFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBRUEsVUFETjtBQUVFLFdBQU8sRUFBRSxHQUZYO0FBR0UsY0FBVSxFQUFDLGNBSGI7QUFJRSxpQkFBYTtBQUpmLGtCQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLHVFQUFEO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBREYsZUFFRTtBQUNFLE9BQUcsRUFBRUcsNkRBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1GLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQW5CO0FBQUE7QUFIWCxJQUZGLENBREYsZUFTRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsZ0JBREYsZUFFRTtBQUFJLGFBQVMsRUFBQztBQUFkLGVBRkYsZUFHRTtBQUFJLGFBQVMsRUFBQztBQUFkLGVBSEYsZUFJRTtBQUFJLGFBQVMsRUFBQztBQUFkLGFBSkYsQ0FURixlQWVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxPQUFHLEVBQUVJLGdFQUFWO0FBQW9CLE9BQUcsRUFBQztBQUF4QixJQURGLGVBRUU7QUFBSyxPQUFHLEVBQUVDLCtEQUFWO0FBQW1CLE9BQUcsRUFBQztBQUF2QixJQUZGLENBZkYsQ0FERixDQU5GLENBaEJGLENBWEYsQ0FERixDQURGO0FBOERELENBaEVEOztBQWtFZVAscUVBQWYsRSIsImZpbGUiOiJhcHAuMGQzYjEwN2QzOGRmZGY5ZDQ5NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIExvZ28gfSBmcm9tIFwiYXNzZXRzL2xvZ28tYm9va21hcmsuc3ZnXCI7XHJcbmltcG9ydCBCdXJnZXIgZnJvbSBcImFzc2V0cy9pY29uLWhhbWJ1cmdlci5zdmdcIjtcclxuaW1wb3J0IENyb3NzIGZyb20gXCJhc3NldHMvaWNvbi1jbG9zZS5zdmdcIjtcclxuXHJcbmltcG9ydCBGYWNlYm9vayBmcm9tIFwiYXNzZXRzL2ljb24tZmFjZWJvb2suc3ZnXCI7XHJcbmltcG9ydCBUd2l0dGVyIGZyb20gXCJhc3NldHMvaWNvbi10d2l0dGVyLnN2Z1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYXZWaXNpYmxlLCBzZXROYXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8TG9nbyBjbGFzc05hbWU9e2BuYXZfX2xvZ28gJHtuYXZWaXNpYmxlICYmIFwib3BhY2l0eVwifWB9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2Rlc2t0b3BcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2xpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9fbGlzdC1pdGVtXCI+RmVhdHVyZXM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19saXN0LWl0ZW1cIj5QcmljaW5nPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9fbGlzdC1pdGVtXCI+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2xpc3QtaXRlbVwiPkxvZ2luPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19tb2JpbGVcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmF2IG1vYmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2X19jaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdl9fc2hvd1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXZfX2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e0J1cmdlcn1cclxuICAgICAgICAgICAgICBhbHQ9XCJIYW1idXJnZXIgSWNvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2X19tb2JpbGUgJHtuYXZWaXNpYmxlICYmIFwib3BhY2l0eVwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2VmlzaWJsZSghbmF2VmlzaWJsZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGluPXtuYXZWaXNpYmxlfVxyXG4gICAgICAgICAgICB0aW1lb3V0PXsxNTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJuYXZBbmltYXRpb25cIlxyXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19tb2JpbGUtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19tb2JpbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbW9iaWxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TG9nbyBjbGFzc05hbWU9XCJuYXZfX21vYmlsZS1sb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Q3Jvc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2xvc2UgSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2VmlzaWJsZSghbmF2VmlzaWJsZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX21vYmlsZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX21vYmlsZS1pdGVtXCI+RmVhdHVyZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19tb2JpbGUtaXRlbVwiPlByaWNpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19tb2JpbGUtaXRlbVwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19tb2JpbGUtaXRlbVwiPkxvZ2luPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbW9iaWxlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17RmFjZWJvb2t9IGFsdD1cIkZhY2Vib29rIEljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VHdpdHRlcn0gYWx0PVwiVHdpdHRlciBJY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9