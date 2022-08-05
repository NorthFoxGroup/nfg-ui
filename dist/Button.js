"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    cls,
    text,
    border
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, border ? /*#__PURE__*/_react.default.createElement("button", {
    className: "border border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 hover:cursor-pointer transition px-2 py-1 rounded ".concat(cls)
  }, text) : /*#__PURE__*/_react.default.createElement("button", {
    className: "border bg-orange-400 text-white px-2 py-1 rounded ".concat(cls)
  }, text));
};

var _default = Button;
exports.default = _default;