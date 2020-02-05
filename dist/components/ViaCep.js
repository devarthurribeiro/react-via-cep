"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ViaCepHook(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  (0, _react.useEffect)(function () {
    if (props.lazy) return;
    getCep();
  }, [props.lazy]);

  function getCep() {
    setLoading(true);
    fetch("https://viacep.com.br/ws/" + props.cep + "/json/").then(function (response) {
      return response.json();
    }).then(function (data) {
      setData(data);
      setError(false);
      props.onSuccess(data);
    }).catch(function (err) {
      setError(true);
    }).finally(function () {
      return setLoading(false);
    });
  }

  return props.children({
    loading: loading,
    data: data,
    error: error,
    fetch: getCep
  }) || null;
}

ViaCepHook.propTypes = {
  cep: _propTypes2.default.string.isRequired,
  lazy: _propTypes2.default.bool,
  onSuccess: _propTypes2.default.func
};

exports.default = ViaCepHook;