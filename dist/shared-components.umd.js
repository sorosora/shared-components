(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
  (global = global || self, factory(global['shared-components'] = {}, global.React, global.styled));
}(this, function (exports, React, styled) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  var styled__default = 'default' in styled ? styled['default'] : styled;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );

          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var printWarning$1 = function() {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  function emptyFunction() {}

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var defaultTransition = 'all 0.5s';

  var getTransitionTime = function getTransitionTime(transition) {
    var values = transition.split(' ');
    var transitionTime = 0;
    values.forEach(function (value) {
      if (value.slice(-1) === 's') {
        transitionTime += parseFloat(value);
      }
    });
    return transitionTime * 1000; // ms
  };

  var Expander = styled__default.div.withConfig({
    displayName: "Expander",
    componentId: "bxis13-0"
  })(["max-height:", ";min-height:", ";overflow:", ";transition:", ";", "{max-height:", ";min-height:", ";overflow:", ";};", "{max-height:", ";min-height:", ";overflow:", ";};"], function (_ref) {
    var _ref$enabled = _slicedToArray(_ref.enabled, 1),
        enabled = _ref$enabled[0],
        maxHeight = _ref.maxHeight;

    return enabled ? "".concat(maxHeight, "px") : '100%';
  }, function (_ref2) {
    var _ref2$minHeight = _slicedToArray(_ref2.minHeight, 1),
        minHeight = _ref2$minHeight[0];

    return minHeight;
  }, function (_ref3) {
    var _ref3$enabled = _slicedToArray(_ref3.enabled, 1),
        enabled = _ref3$enabled[0],
        overflow = _ref3.overflow;

    return enabled ? overflow : 'visible';
  }, function (_ref4) {
    var transition = _ref4.transition;
    return transition;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.media.tablet;
  }, function (_ref6) {
    var _ref6$enabled = _slicedToArray(_ref6.enabled, 2),
        enabled = _ref6$enabled[1],
        maxHeight = _ref6.maxHeight;

    return enabled ? "".concat(maxHeight, "px") : '100%';
  }, function (_ref7) {
    var _ref7$minHeight = _slicedToArray(_ref7.minHeight, 2),
        minHeight = _ref7$minHeight[1];

    return minHeight;
  }, function (_ref8) {
    var _ref8$enabled = _slicedToArray(_ref8.enabled, 2),
        enabled = _ref8$enabled[1],
        overflow = _ref8.overflow;

    return enabled ? overflow : 'visible';
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.media.phone;
  }, function (_ref10) {
    var _ref10$enabled = _slicedToArray(_ref10.enabled, 3),
        enabled = _ref10$enabled[2],
        maxHeight = _ref10.maxHeight;

    return enabled ? "".concat(maxHeight, "px") : '100%';
  }, function (_ref11) {
    var _ref11$minHeight = _slicedToArray(_ref11.minHeight, 3),
        minHeight = _ref11$minHeight[2];

    return minHeight;
  }, function (_ref12) {
    var _ref12$enabled = _slicedToArray(_ref12.enabled, 3),
        enabled = _ref12$enabled[2],
        overflow = _ref12.overflow;

    return enabled ? overflow : 'visible';
  });
  var Clicker = styled__default.button.withConfig({
    displayName: "Clicker",
    componentId: "bxis13-1"
  })([""]);
  var CollapseWrapper = styled__default.div.withConfig({
    displayName: "CollapseWrapper",
    componentId: "bxis13-2"
  })(["position:relative;"]);

  var Collapse =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props) {
      var _this;

      _classCallCheck(this, Collapse);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOverflow", function (overflow) {
        if (overflow === 'visible') {
          _this.timeoutId = setTimeout(function () {
            _this.setState({
              overflow: overflow
            });
          }, getTransitionTime(_this.props.transition));
        } else {
          if (_this.timeoutId) {
            clearTimeout(_this.timeoutId);
            _this.timeoutId = undefined;
          }

          _this.setState({
            overflow: overflow
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActive", function (active) {
        _this.setState(typeof active === 'function' ? active : {
          active: active
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMaxHeight", function () {
        var initMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _this$props = _this.props,
            children = _this$props.children,
            value = _this$props.value;
        var maxHeight = {};

        if (!initMode) {
          children.forEach(function (child, key) {
            if (child.type.styledComponentId === Expander.styledComponentId) {
              var expander = _this.expanderRefs["".concat(key, "-expander")].current;

              maxHeight["".concat(key, "-expander")] = _this.state.active ? expander.scrollHeight : 0;
            }
          });
        } else {
          children.forEach(function (child, key) {
            if (child.type.styledComponentId === Expander.styledComponentId) {
              maxHeight["".concat(key, "-expander")] = value ? 99999 : 0;
            }
          });
        }

        return maxHeight;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
        _this.setActive(function (prevState) {
          return {
            active: !prevState.active
          };
        });
      });

      var _value = props.value,
          _children = props.children;
      _this.expanderRefs = {};
      _this._isMounted = false;
      _this.state = {
        overflow: _value ? 'visible' : 'hidden',
        active: _value
      };

      _children.forEach(function (child, key) {
        if (child.type.styledComponentId === Expander.styledComponentId) {
          _this.expanderRefs["".concat(key, "-expander")] = React.createRef();
        }
      });

      return _this;
    }

    _createClass(Collapse, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._isMounted = true;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var prevValue = prevProps.value;
        var prevActive = prevState.active;
        var onChange = this.props.onChange;

        if (prevActive !== this.state.active) {
          if (onChange) onChange(this.state.active);
          this.setOverflow(this.state.active ? 'visible' : 'hidden');
        }

        if (prevValue !== undefined && prevValue !== this.props.value) {
          this.setState({
            active: this.props.value
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._isMounted = false;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            children = _this$props2.children,
            enabled = _this$props2.enabled,
            transition = _this$props2.transition,
            otherProps = _objectWithoutProperties(_this$props2, ["children", "enabled", "transition"]);

        var maxHeight = this.getMaxHeight(!this._isMounted);
        return React.createElement(CollapseWrapper, otherProps, children.map(function (child, key) {
          var Element = child.type;

          if (Element.styledComponentId === Clicker.styledComponentId) {
            var CollapseClicker = child.type,
                _child$props = child.props,
                render = _child$props.render,
                _onClick = _child$props.onClick,
                collapseClickerProps = _objectWithoutProperties(_child$props, ["render", "onClick"]);

            if (render) {
              CollapseClicker = render.type;
              var _render$props = render.props;
              _onClick = _render$props.onClick;
              collapseClickerProps = _objectWithoutProperties(_render$props, ["onClick"]);
            }

            return React.createElement(CollapseClicker, _extends({}, collapseClickerProps, {
              onClick: function onClick(event) {
                _this2.handleClick();

                if (_onClick) _onClick(event);
              },
              key: "".concat(key, "-clicker")
            }));
          }

          if (Element.styledComponentId === Expander.styledComponentId) {
            var CollapseExpander = child.type,
                collapseExpanderProps = child.props;
            return React.createElement(CollapseExpander, _extends({}, collapseExpanderProps, {
              enabled: enabled,
              maxHeight: maxHeight["".concat(key, "-expander")],
              overflow: _this2.state.overflow,
              transition: transition,
              key: "".concat(key, "-expander"),
              ref: _this2.expanderRefs["".concat(key, "-expander")]
            }));
          }
        }));
      }
    }]);

    return Collapse;
  }(React.Component);

  Collapse.propTypes = {
    onChange: propTypes.func,
    children: propTypes.node.isRequired,
    enabled: propTypes.arrayOf(propTypes.bool),
    transition: propTypes.string,
    value: propTypes.bool
  };
  Collapse.defaultProps = {
    onChange: undefined,
    enabled: [true, true, true],
    transition: defaultTransition,
    value: undefined
  };
  Clicker.propTypes = {
    render: propTypes.element
  };
  Clicker.defaultProps = {
    render: undefined
  };
  Expander.propTypes = {
    minHeight: propTypes.arrayOf(propTypes.string)
  };
  Expander.defaultProps = {
    minHeight: ['0', '0', '0']
  };
  Collapse.Clicker = Clicker;
  Collapse.Expander = Expander;

  /**
   * styled-components ConditionalWrap@0.1.1 by sorosora
   */

  var ConditionalWrap = function ConditionalWrap(props) {
    var condition = props.condition,
        _props$wrap = props.wrap,
        wrapForTrue = _props$wrap.wrapForTrue,
        wrapForFalse = _props$wrap.wrapForFalse,
        wrap = props.wrap,
        children = props.children;

    if (wrapForTrue && wrapForFalse) {
      return condition ? wrapForTrue(children) : wrapForFalse(children);
    }

    return condition ? wrap(children) : children;
  };

  var wrapPropTypes = propTypes.oneOfType([propTypes.func, propTypes.shape({
    wrapForTrue: propTypes.func.isRequired,
    wrapForFalse: propTypes.func.isRequired
  })]);
  ConditionalWrap.propTypes = {
    condition: propTypes.bool.isRequired,
    wrap: wrapPropTypes.isRequired,
    children: propTypes.node.isRequired
  };

  /**
   * styled-components InlineCenter@0.1.0 by sorosora
   */
  var InlineCenter = styled__default.span.withConfig({
    displayName: "InlineCenter",
    componentId: "ws8jre-0"
  })(["display:inline-flex;align-items:center;max-height:1em;:before{content:'\u200B';}"]);
  InlineCenter.propTypes = {
    children: propTypes.node.isRequired
  };

  var typeList = {
    cover: styled.css(["width:100%;height:100%;object-fit:cover;font-family:", ";"], function (_ref) {
      var ie = _ref.ie;
      return ie ? 'object-fit: cover;' : '';
    }),
    contain: styled.css(["width:100%;height:100%;object-fit:contain;font-family:", ";"], function (_ref2) {
      var ie = _ref2.ie;
      return ie ? 'object-fit: contain;' : '';
    }),
    width: styled.css(["width:100%;"]),
    height: styled.css(["height:100%;"])
  };
  var NormalImg = styled__default.img.withConfig({
    displayName: "NormalImg",
    componentId: "alppnm-0"
  })(["", ";"], function (_ref3) {
    var type = _ref3.type;
    return typeList[type] || '';
  });
  NormalImg.propTypes = {
    type: propTypes.string,
    src: propTypes.string.isRequired,
    alt: propTypes.string
  };
  NormalImg.defaultProps = {
    alt: ''
  };

  var getMedia = function getMedia(media, breakpoint) {
    var mediaString = media[breakpoint];
    return mediaString.replace('@media', '').trim();
  };

  var Source = styled__default.source.attrs(function (_ref4) {
    var theme = _ref4.theme,
        breakpoint = _ref4.breakpoint;
    return {
      media: getMedia(theme.media, breakpoint)
    };
  }).withConfig({
    displayName: "Source",
    componentId: "alppnm-1"
  })([""]);
  var Img = styled__default(function (props) {
    var picture = props.picture,
        otherProps = _objectWithoutProperties(props, ["picture"]);

    return React.createElement(ConditionalWrap, {
      condition: !!picture,
      wrap: function wrap(children) {
        return React.createElement("picture", null, picture.phone ? React.createElement(Source, {
          srcSet: picture.phone,
          breakpoint: "phone"
        }) : null, picture.tablet ? React.createElement(Source, {
          srcSet: picture.tablet,
          breakpoint: "tablet"
        }) : null, children);
      }
    }, React.createElement(NormalImg, otherProps));
  }).withConfig({
    displayName: "Img",
    componentId: "alppnm-2"
  })([""]);
  var picturePropTypes = propTypes.shape({
    phone: propTypes.string,
    tablet: propTypes.string
  });
  Img.propTypes = {
    type: propTypes.string,
    src: propTypes.string.isRequired,
    alt: propTypes.string,
    picture: picturePropTypes
  };
  Img.defaultProps = {
    alt: ''
  };

  var checkBreak = function checkBreak(value, trueValue, falseValue) {
    return value === 'break' ? trueValue : falseValue;
  };

  var calcRatio = function calcRatio(ratioString) {
    var _ratioString$split = ratioString.split(':'),
        _ratioString$split2 = _slicedToArray(_ratioString$split, 2),
        width = _ratioString$split2[0],
        height = _ratioString$split2[1];

    return "".concat(height / width * 100, "%");
  };

  var setProp = function setProp(prop, size, func) {
    return func(prop[size] || prop[0]);
  };

  var RatioContainer = styled__default.div.withConfig({
    displayName: "RatioContainer",
    componentId: "pjwv5a-0"
  })([""]);
  var RatioWrapper = styled__default.div.withConfig({
    displayName: "RatioWrapper",
    componentId: "pjwv5a-1"
  })(["position:relative;padding-bottom:", ";", "{position:", ";top:0;left:0;right:0;bottom:0;}", "{padding-bottom:", ";", "{position:", ";}}", "{padding-bottom:", ";", "{position:", ";}}"], function (props) {
    return setProp(props.ratio, 0, function (ratio) {
      return checkBreak(ratio, 0, calcRatio(ratio));
    });
  }, RatioContainer, function (props) {
    return setProp(props.ratio, 0, function (ratio) {
      return checkBreak(ratio, 'relative', 'absolute');
    });
  }, function (_ref) {
    var theme = _ref.theme;
    return theme.media.tablet;
  }, function (props) {
    return setProp(props.ratio, 1, function (ratio) {
      return checkBreak(ratio, 0, calcRatio(ratio));
    });
  }, RatioContainer, function (props) {
    return setProp(props.ratio, 1, function (ratio) {
      return checkBreak(ratio, 'relative', 'absolute');
    });
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.media.phone;
  }, function (props) {
    return setProp(props.ratio, 2, function (ratio) {
      return checkBreak(ratio, 0, calcRatio(ratio));
    });
  }, RatioContainer, function (props) {
    return setProp(props.ratio, 2, function (ratio) {
      return checkBreak(ratio, 'relative', 'absolute');
    });
  });

  var RatioBox = function RatioBox(props) {
    var children = props.children,
        otherProps = _objectWithoutProperties(props, ["children"]);

    return React.createElement(RatioWrapper, otherProps, React.createElement(RatioContainer, null, children));
  };

  RatioBox.propTypes = {
    children: propTypes.node.isRequired,
    ratio: propTypes.arrayOf(propTypes.string).isRequired
  };

  exports.Collapse = Collapse;
  exports.ConditionalWrap = ConditionalWrap;
  exports.InlineCenter = InlineCenter;
  exports.Img = Img;
  exports.RatioBox = RatioBox;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
