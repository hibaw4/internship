"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HospitalEmployee = /*#__PURE__*/function () {
  function HospitalEmployee(name) {
    _classCallCheck(this, HospitalEmployee);
    this._name = name;
    this._remainingVacationDays = 20;
  }
  return _createClass(HospitalEmployee, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "remainingVacationDays",
    get: function get() {
      return this._remainingVacationDays;
    }
  }, {
    key: "takeVacationDays",
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }], [{
    key: "generatePassword",
    value: function generatePassword() {
      return Math.floor(Math.random() * 10000);
    }
  }]);
}();
var Nurse = /*#__PURE__*/function (_HospitalEmployee) {
  function Nurse(name, certifications) {
    var _this;
    _classCallCheck(this, Nurse);
    _this = _callSuper(this, Nurse, [name]);
    _this._certifications = certifications;
    return _this;
  }
  _inherits(Nurse, _HospitalEmployee);
  return _createClass(Nurse, [{
    key: "certifications",
    get: function get() {
      return this._certifications;
    }
  }, {
    key: "addCertification",
    value: function addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }]);
}(HospitalEmployee);
var nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
var nurseDurant = new Nurse('Durant', ['Orthopedics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
module.exports = HospitalEmployee;