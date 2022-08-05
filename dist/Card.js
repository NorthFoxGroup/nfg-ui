"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Card = _ref => {
  let {
    cls,
    heading,
    para,
    readMore,
    targetBlank,
    readMoreCls,
    headingCls,
    paraCls,
    hover,
    img,
    imgCls,
    icon,
    iconCls
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: hover ? "transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 ".concat(cls) : "flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white ".concat(cls)
  }, icon !== "" && img !== "" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-orange-200 rounded-full p-3 ".concat(iconCls, " ").concat(imgCls)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: "",
    className: "w-10 ".concat(imgCls)
  }), icon) : "Please Pass Any One Image or Icon , Not Both", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xl text-center font-medium my-5 text-black ".concat(headingCls)
  }, heading), /*#__PURE__*/_react.default.createElement("p", {
    className: "my-2 text-center ".concat(paraCls)
  }, para), targetBlank ? /*#__PURE__*/_react.default.createElement("a", {
    href: readMore,
    target: "_blank",
    rel: "noreferrer",
    className: "font-medium lg:text-sm text-cyan-500 ".concat(readMoreCls)
  }, "Read More...") : /*#__PURE__*/_react.default.createElement("a", {
    href: readMore,
    className: "font-medium lg:text-sm text-cyan-500 ".concat(readMoreCls)
  }, "Read More..."))));
};

var _default = Card;
exports.default = _default;