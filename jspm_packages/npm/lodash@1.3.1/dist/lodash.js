/* */ 
"format cjs";
(function(process) {
  ;
  (function(window) {
    var undefined;
    var arrayPool = [],
        objectPool = [];
    var idCounter = 0;
    var indicatorObject = {};
    var keyPrefix = +new Date + '';
    var largeArraySize = 75;
    var maxPoolSize = 40;
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reInterpolate = /<%=([\s\S]+?)%>/g;
    var reThis = (reThis = /\bthis\b/) && reThis.test(runInContext) && reThis;
    var whitespace = (' \t\x0B\f\xA0\ufeff' + '\n\r\u2028\u2029' + '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');
    var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');
    var reNoMatch = /($^)/;
    var reUnescapedHtml = /[&<>"']/g;
    var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
    var contextProps = ['Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object', 'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN', 'parseInt', 'setImmediate', 'setTimeout'];
    var templateCounter = 0;
    var argsClass = '[object Arguments]',
        arrayClass = '[object Array]',
        boolClass = '[object Boolean]',
        dateClass = '[object Date]',
        errorClass = '[object Error]',
        funcClass = '[object Function]',
        numberClass = '[object Number]',
        objectClass = '[object Object]',
        regexpClass = '[object RegExp]',
        stringClass = '[object String]';
    var cloneableClasses = {};
    cloneableClasses[funcClass] = false;
    cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var stringEscapes = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    var freeExports = objectTypes[typeof exports] && exports;
    var freeModule = objectTypes[typeof module] && module && module.exports == freeExports && module;
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      window = freeGlobal;
    }
    function basicIndexOf(array, value, fromIndex) {
      var index = (fromIndex || 0) - 1,
          length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function cacheIndexOf(cache, value) {
      var type = typeof value;
      cache = cache.cache;
      if (type == 'boolean' || value == null) {
        return cache[value];
      }
      if (type != 'number' && type != 'string') {
        type = 'object';
      }
      var key = type == 'number' ? value : keyPrefix + value;
      cache = cache[type] || (cache[type] = {});
      return type == 'object' ? (cache[key] && basicIndexOf(cache[key], value) > -1 ? 0 : -1) : (cache[key] ? 0 : -1);
    }
    function cachePush(value) {
      var cache = this.cache,
          type = typeof value;
      if (type == 'boolean' || value == null) {
        cache[value] = true;
      } else {
        if (type != 'number' && type != 'string') {
          type = 'object';
        }
        var key = type == 'number' ? value : keyPrefix + value,
            typeCache = cache[type] || (cache[type] = {});
        if (type == 'object') {
          if ((typeCache[key] || (typeCache[key] = [])).push(value) == this.array.length) {
            cache[type] = false;
          }
        } else {
          typeCache[key] = true;
        }
      }
    }
    function charAtCallback(value) {
      return value.charCodeAt(0);
    }
    function compareAscending(a, b) {
      var ai = a.index,
          bi = b.index;
      a = a.criteria;
      b = b.criteria;
      if (a !== b) {
        if (a > b || typeof a == 'undefined') {
          return 1;
        }
        if (a < b || typeof b == 'undefined') {
          return -1;
        }
      }
      return ai < bi ? -1 : 1;
    }
    function createCache(array) {
      var index = -1,
          length = array.length;
      var cache = getObject();
      cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;
      var result = getObject();
      result.array = array;
      result.cache = cache;
      result.push = cachePush;
      while (++index < length) {
        result.push(array[index]);
      }
      return cache.object === false ? (releaseObject(result), null) : result;
    }
    function escapeStringChar(match) {
      return '\\' + stringEscapes[match];
    }
    function getArray() {
      return arrayPool.pop() || [];
    }
    function getObject() {
      return objectPool.pop() || {
        'array': null,
        'cache': null,
        'criteria': null,
        'false': false,
        'index': 0,
        'leading': false,
        'maxWait': 0,
        'null': false,
        'number': null,
        'object': null,
        'push': null,
        'string': null,
        'trailing': false,
        'true': false,
        'undefined': false,
        'value': null
      };
    }
    function noop() {}
    function releaseArray(array) {
      array.length = 0;
      if (arrayPool.length < maxPoolSize) {
        arrayPool.push(array);
      }
    }
    function releaseObject(object) {
      var cache = object.cache;
      if (cache) {
        releaseObject(cache);
      }
      object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
      if (objectPool.length < maxPoolSize) {
        objectPool.push(object);
      }
    }
    function slice(array, start, end) {
      start || (start = 0);
      if (typeof end == 'undefined') {
        end = array ? array.length : 0;
      }
      var index = -1,
          length = end - start || 0,
          result = Array(length < 0 ? 0 : length);
      while (++index < length) {
        result[index] = array[start + index];
      }
      return result;
    }
    function runInContext(context) {
      context = context ? _.defaults(window.Object(), context, _.pick(window, contextProps)) : window;
      var Array = context.Array,
          Boolean = context.Boolean,
          Date = context.Date,
          Function = context.Function,
          Math = context.Math,
          Number = context.Number,
          Object = context.Object,
          RegExp = context.RegExp,
          String = context.String,
          TypeError = context.TypeError;
      var arrayRef = [];
      var objectProto = Object.prototype,
          stringProto = String.prototype;
      var oldDash = context._;
      var reNative = RegExp('^' + String(objectProto.valueOf).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$');
      var ceil = Math.ceil,
          clearTimeout = context.clearTimeout,
          concat = arrayRef.concat,
          floor = Math.floor,
          fnToString = Function.prototype.toString,
          getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
          hasOwnProperty = objectProto.hasOwnProperty,
          push = arrayRef.push,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          setImmediate = context.setImmediate,
          setTimeout = context.setTimeout,
          toString = objectProto.toString;
      var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind,
          nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate,
          nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
          nativeIsFinite = context.isFinite,
          nativeIsNaN = context.isNaN,
          nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
          nativeMax = Math.max,
          nativeMin = Math.min,
          nativeParseInt = context.parseInt,
          nativeRandom = Math.random,
          nativeSlice = arrayRef.slice;
      var isIeOpera = reNative.test(context.attachEvent),
          isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);
      var ctorByClass = {};
      ctorByClass[arrayClass] = Array;
      ctorByClass[boolClass] = Boolean;
      ctorByClass[dateClass] = Date;
      ctorByClass[funcClass] = Function;
      ctorByClass[objectClass] = Object;
      ctorByClass[numberClass] = Number;
      ctorByClass[regexpClass] = RegExp;
      ctorByClass[stringClass] = String;
      function lodash(value) {
        return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__')) ? value : new lodashWrapper(value);
      }
      function lodashWrapper(value) {
        this.__wrapped__ = value;
      }
      lodashWrapper.prototype = lodash.prototype;
      var support = lodash.support = {};
      support.fastBind = nativeBind && !isV8;
      lodash.templateSettings = {
        'escape': /<%-([\s\S]+?)%>/g,
        'evaluate': /<%([\s\S]+?)%>/g,
        'interpolate': reInterpolate,
        'variable': '',
        'imports': {'_': lodash}
      };
      function createBound(func, thisArg, partialArgs, indicator) {
        var isFunc = isFunction(func),
            isPartial = !partialArgs,
            key = thisArg;
        if (isPartial) {
          var rightIndicator = indicator;
          partialArgs = thisArg;
        } else if (!isFunc) {
          if (!indicator) {
            throw new TypeError;
          }
          thisArg = func;
        }
        function bound() {
          var args = arguments,
              thisBinding = isPartial ? this : thisArg;
          if (!isFunc) {
            func = thisArg[key];
          }
          if (partialArgs.length) {
            args = args.length ? (args = nativeSlice.call(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs;
          }
          if (this instanceof bound) {
            thisBinding = createObject(func.prototype);
            var result = func.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          }
          return func.apply(thisBinding, args);
        }
        return bound;
      }
      function createObject(prototype) {
        return isObject(prototype) ? nativeCreate(prototype) : {};
      }
      function escapeHtmlChar(match) {
        return htmlEscapes[match];
      }
      function getIndexOf(array, value, fromIndex) {
        var result = (result = lodash.indexOf) === indexOf ? basicIndexOf : result;
        return result;
      }
      function overloadWrapper(func) {
        return function(array, flag, callback, thisArg) {
          if (typeof flag != 'boolean' && flag != null) {
            thisArg = callback;
            callback = !(thisArg && thisArg[flag] === array) ? flag : undefined;
            flag = false;
          }
          if (callback != null) {
            callback = lodash.createCallback(callback, thisArg);
          }
          return func(array, flag, callback, thisArg);
        };
      }
      function shimIsPlainObject(value) {
        var ctor,
            result;
        if (!(value && toString.call(value) == objectClass) || (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
          return false;
        }
        forIn(value, function(value, key) {
          result = key;
        });
        return result === undefined || hasOwnProperty.call(value, result);
      }
      function unescapeHtmlChar(match) {
        return htmlUnescapes[match];
      }
      function isArguments(value) {
        return toString.call(value) == argsClass;
      }
      var isArray = nativeIsArray;
      var shimKeys = function(object) {
        var index,
            iterable = object,
            result = [];
        if (!iterable)
          return result;
        if (!(objectTypes[typeof object]))
          return result;
        for (index in iterable) {
          if (hasOwnProperty.call(iterable, index)) {
            result.push(index);
          }
        }
        return result;
      };
      var keys = !nativeKeys ? shimKeys : function(object) {
        if (!isObject(object)) {
          return [];
        }
        return nativeKeys(object);
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      var htmlUnescapes = invert(htmlEscapes);
      var assign = function(object, source, guard) {
        var index,
            iterable = object,
            result = iterable;
        if (!iterable)
          return result;
        var args = arguments,
            argsIndex = 0,
            argsLength = typeof guard == 'number' ? 2 : args.length;
        if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
          var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);
        } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
          callback = args[--argsLength];
        }
        while (++argsIndex < argsLength) {
          iterable = args[argsIndex];
          if (iterable && objectTypes[typeof iterable]) {
            var ownIndex = -1,
                ownProps = objectTypes[typeof iterable] && keys(iterable),
                length = ownProps ? ownProps.length : 0;
            while (++ownIndex < length) {
              index = ownProps[ownIndex];
              result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
            }
          }
        }
        return result;
      };
      function clone(value, deep, callback, thisArg, stackA, stackB) {
        var result = value;
        if (typeof deep != 'boolean' && deep != null) {
          thisArg = callback;
          callback = deep;
          deep = false;
        }
        if (typeof callback == 'function') {
          callback = (typeof thisArg == 'undefined') ? callback : lodash.createCallback(callback, thisArg, 1);
          result = callback(result);
          if (typeof result != 'undefined') {
            return result;
          }
          result = value;
        }
        var isObj = isObject(result);
        if (isObj) {
          var className = toString.call(result);
          if (!cloneableClasses[className]) {
            return result;
          }
          var isArr = isArray(result);
        }
        if (!isObj || !deep) {
          return isObj ? (isArr ? slice(result) : assign({}, result)) : result;
        }
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return new ctor(+result);
          case numberClass:
          case stringClass:
            return new ctor(result);
          case regexpClass:
            return ctor(result.source, reFlags.exec(result));
        }
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(result.length) : {};
        if (isArr) {
          if (hasOwnProperty.call(value, 'index')) {
            result.index = value.index;
          }
          if (hasOwnProperty.call(value, 'input')) {
            result.input = value.input;
          }
        }
        stackA.push(value);
        stackB.push(result);
        (isArr ? forEach : forOwn)(value, function(objValue, key) {
          result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
        });
        if (initedStack) {
          releaseArray(stackA);
          releaseArray(stackB);
        }
        return result;
      }
      function cloneDeep(value, callback, thisArg) {
        return clone(value, true, callback, thisArg);
      }
      var defaults = function(object, source, guard) {
        var index,
            iterable = object,
            result = iterable;
        if (!iterable)
          return result;
        var args = arguments,
            argsIndex = 0,
            argsLength = typeof guard == 'number' ? 2 : args.length;
        while (++argsIndex < argsLength) {
          iterable = args[argsIndex];
          if (iterable && objectTypes[typeof iterable]) {
            var ownIndex = -1,
                ownProps = objectTypes[typeof iterable] && keys(iterable),
                length = ownProps ? ownProps.length : 0;
            while (++ownIndex < length) {
              index = ownProps[ownIndex];
              if (typeof result[index] == 'undefined')
                result[index] = iterable[index];
            }
          }
        }
        return result;
      };
      function findKey(object, callback, thisArg) {
        var result;
        callback = lodash.createCallback(callback, thisArg);
        forOwn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      var forIn = function(collection, callback, thisArg) {
        var index,
            iterable = collection,
            result = iterable;
        if (!iterable)
          return result;
        if (!objectTypes[typeof iterable])
          return result;
        callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
        for (index in iterable) {
          if (callback(iterable[index], index, collection) === false)
            return result;
        }
        return result;
      };
      var forOwn = function(collection, callback, thisArg) {
        var index,
            iterable = collection,
            result = iterable;
        if (!iterable)
          return result;
        if (!objectTypes[typeof iterable])
          return result;
        callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;
        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (callback(iterable[index], index, collection) === false)
            return result;
        }
        return result;
      };
      function functions(object) {
        var result = [];
        forIn(object, function(value, key) {
          if (isFunction(value)) {
            result.push(key);
          }
        });
        return result.sort();
      }
      function has(object, property) {
        return object ? hasOwnProperty.call(object, property) : false;
      }
      function invert(object) {
        var index = -1,
            props = keys(object),
            length = props.length,
            result = {};
        while (++index < length) {
          var key = props[index];
          result[object[key]] = key;
        }
        return result;
      }
      function isBoolean(value) {
        return value === true || value === false || toString.call(value) == boolClass;
      }
      function isDate(value) {
        return value ? (typeof value == 'object' && toString.call(value) == dateClass) : false;
      }
      function isElement(value) {
        return value ? value.nodeType === 1 : false;
      }
      function isEmpty(value) {
        var result = true;
        if (!value) {
          return result;
        }
        var className = toString.call(value),
            length = value.length;
        if ((className == arrayClass || className == stringClass || className == argsClass) || (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
          return !length;
        }
        forOwn(value, function() {
          return (result = false);
        });
        return result;
      }
      function isEqual(a, b, callback, thisArg, stackA, stackB) {
        var whereIndicator = callback === indicatorObject;
        if (typeof callback == 'function' && !whereIndicator) {
          callback = lodash.createCallback(callback, thisArg, 2);
          var result = callback(a, b);
          if (typeof result != 'undefined') {
            return !!result;
          }
        }
        if (a === b) {
          return a !== 0 || (1 / a == 1 / b);
        }
        var type = typeof a,
            otherType = typeof b;
        if (a === a && (!a || (type != 'function' && type != 'object')) && (!b || (otherType != 'function' && otherType != 'object'))) {
          return false;
        }
        if (a == null || b == null) {
          return a === b;
        }
        var className = toString.call(a),
            otherClass = toString.call(b);
        if (className == argsClass) {
          className = objectClass;
        }
        if (otherClass == argsClass) {
          otherClass = objectClass;
        }
        if (className != otherClass) {
          return false;
        }
        switch (className) {
          case boolClass:
          case dateClass:
            return +a == +b;
          case numberClass:
            return (a != +a) ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
          case regexpClass:
          case stringClass:
            return a == String(b);
        }
        var isArr = className == arrayClass;
        if (!isArr) {
          if (hasOwnProperty.call(a, '__wrapped__ ') || hasOwnProperty.call(b, '__wrapped__')) {
            return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
          }
          if (className != objectClass) {
            return false;
          }
          var ctorA = a.constructor,
              ctorB = b.constructor;
          if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB)) {
            return false;
          }
        }
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == a) {
            return stackB[length] == b;
          }
        }
        var size = 0;
        result = true;
        stackA.push(a);
        stackB.push(b);
        if (isArr) {
          length = a.length;
          size = b.length;
          result = size == a.length;
          if (!result && !whereIndicator) {
            return result;
          }
          while (size--) {
            var index = length,
                value = b[size];
            if (whereIndicator) {
              while (index--) {
                if ((result = isEqual(a[index], value, callback, thisArg, stackA, stackB))) {
                  break;
                }
              }
            } else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) {
              break;
            }
          }
          return result;
        }
        forIn(b, function(value, key, b) {
          if (hasOwnProperty.call(b, key)) {
            size++;
            return (result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB));
          }
        });
        if (result && !whereIndicator) {
          forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) {
              return (result = --size > -1);
            }
          });
        }
        if (initedStack) {
          releaseArray(stackA);
          releaseArray(stackB);
        }
        return result;
      }
      function isFinite(value) {
        return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
      }
      function isFunction(value) {
        return typeof value == 'function';
      }
      function isObject(value) {
        return !!(value && objectTypes[typeof value]);
      }
      function isNaN(value) {
        return isNumber(value) && value != +value;
      }
      function isNull(value) {
        return value === null;
      }
      function isNumber(value) {
        return typeof value == 'number' || toString.call(value) == numberClass;
      }
      var isPlainObject = function(value) {
        if (!(value && toString.call(value) == objectClass)) {
          return false;
        }
        var valueOf = value.valueOf,
            objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
        return objProto ? (value == objProto || getPrototypeOf(value) == objProto) : shimIsPlainObject(value);
      };
      function isRegExp(value) {
        return value ? (typeof value == 'object' && toString.call(value) == regexpClass) : false;
      }
      function isString(value) {
        return typeof value == 'string' || toString.call(value) == stringClass;
      }
      function isUndefined(value) {
        return typeof value == 'undefined';
      }
      function merge(object, source, deepIndicator) {
        var args = arguments,
            index = 0,
            length = 2;
        if (!isObject(object)) {
          return object;
        }
        if (deepIndicator === indicatorObject) {
          var callback = args[3],
              stackA = args[4],
              stackB = args[5];
        } else {
          var initedStack = true;
          stackA = getArray();
          stackB = getArray();
          if (typeof deepIndicator != 'number') {
            length = args.length;
          }
          if (length > 3 && typeof args[length - 2] == 'function') {
            callback = lodash.createCallback(args[--length - 1], args[length--], 2);
          } else if (length > 2 && typeof args[length - 1] == 'function') {
            callback = args[--length];
          }
        }
        while (++index < length) {
          (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
            var found,
                isArr,
                result = source,
                value = object[key];
            if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
              var stackLength = stackA.length;
              while (stackLength--) {
                if ((found = stackA[stackLength] == source)) {
                  value = stackB[stackLength];
                  break;
                }
              }
              if (!found) {
                var isShallow;
                if (callback) {
                  result = callback(value, source);
                  if ((isShallow = typeof result != 'undefined')) {
                    value = result;
                  }
                }
                if (!isShallow) {
                  value = isArr ? (isArray(value) ? value : []) : (isPlainObject(value) ? value : {});
                }
                stackA.push(source);
                stackB.push(value);
                if (!isShallow) {
                  value = merge(value, source, indicatorObject, callback, stackA, stackB);
                }
              }
            } else {
              if (callback) {
                result = callback(value, source);
                if (typeof result == 'undefined') {
                  result = source;
                }
              }
              if (typeof result != 'undefined') {
                value = result;
              }
            }
            object[key] = value;
          });
        }
        if (initedStack) {
          releaseArray(stackA);
          releaseArray(stackB);
        }
        return object;
      }
      function omit(object, callback, thisArg) {
        var indexOf = getIndexOf(),
            isFunc = typeof callback == 'function',
            result = {};
        if (isFunc) {
          callback = lodash.createCallback(callback, thisArg);
        } else {
          var props = concat.apply(arrayRef, nativeSlice.call(arguments, 1));
        }
        forIn(object, function(value, key, object) {
          if (isFunc ? !callback(value, key, object) : indexOf(props, key) < 0) {
            result[key] = value;
          }
        });
        return result;
      }
      function pairs(object) {
        var index = -1,
            props = keys(object),
            length = props.length,
            result = Array(length);
        while (++index < length) {
          var key = props[index];
          result[index] = [key, object[key]];
        }
        return result;
      }
      function pick(object, callback, thisArg) {
        var result = {};
        if (typeof callback != 'function') {
          var index = -1,
              props = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
              length = isObject(object) ? props.length : 0;
          while (++index < length) {
            var key = props[index];
            if (key in object) {
              result[key] = object[key];
            }
          }
        } else {
          callback = lodash.createCallback(callback, thisArg);
          forIn(object, function(value, key, object) {
            if (callback(value, key, object)) {
              result[key] = value;
            }
          });
        }
        return result;
      }
      function transform(object, callback, accumulator, thisArg) {
        var isArr = isArray(object);
        callback = lodash.createCallback(callback, thisArg, 4);
        if (accumulator == null) {
          if (isArr) {
            accumulator = [];
          } else {
            var ctor = object && object.constructor,
                proto = ctor && ctor.prototype;
            accumulator = createObject(proto);
          }
        }
        (isArr ? forEach : forOwn)(object, function(value, index, object) {
          return callback(accumulator, value, index, object);
        });
        return accumulator;
      }
      function values(object) {
        var index = -1,
            props = keys(object),
            length = props.length,
            result = Array(length);
        while (++index < length) {
          result[index] = object[props[index]];
        }
        return result;
      }
      function at(collection) {
        var index = -1,
            props = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
            length = props.length,
            result = Array(length);
        while (++index < length) {
          result[index] = collection[props[index]];
        }
        return result;
      }
      function contains(collection, target, fromIndex) {
        var index = -1,
            indexOf = getIndexOf(),
            length = collection ? collection.length : 0,
            result = false;
        fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
        if (length && typeof length == 'number') {
          result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
        } else {
          forOwn(collection, function(value) {
            if (++index >= fromIndex) {
              return !(result = value === target);
            }
          });
        }
        return result;
      }
      function countBy(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg);
        forEach(collection, function(value, key, collection) {
          key = String(callback(value, key, collection));
          (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
        });
        return result;
      }
      function every(collection, callback, thisArg) {
        var result = true;
        callback = lodash.createCallback(callback, thisArg);
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          while (++index < length) {
            if (!(result = !!callback(collection[index], index, collection))) {
              break;
            }
          }
        } else {
          forOwn(collection, function(value, index, collection) {
            return (result = !!callback(value, index, collection));
          });
        }
        return result;
      }
      function filter(collection, callback, thisArg) {
        var result = [];
        callback = lodash.createCallback(callback, thisArg);
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            if (callback(value, index, collection)) {
              result.push(value);
            }
          }
        } else {
          forOwn(collection, function(value, index, collection) {
            if (callback(value, index, collection)) {
              result.push(value);
            }
          });
        }
        return result;
      }
      function find(collection, callback, thisArg) {
        callback = lodash.createCallback(callback, thisArg);
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            if (callback(value, index, collection)) {
              return value;
            }
          }
        } else {
          var result;
          forOwn(collection, function(value, index, collection) {
            if (callback(value, index, collection)) {
              result = value;
              return false;
            }
          });
          return result;
        }
      }
      function forEach(collection, callback, thisArg) {
        var index = -1,
            length = collection ? collection.length : 0;
        callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
        if (typeof length == 'number') {
          while (++index < length) {
            if (callback(collection[index], index, collection) === false) {
              break;
            }
          }
        } else {
          forOwn(collection, callback);
        }
        return collection;
      }
      function groupBy(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg);
        forEach(collection, function(value, key, collection) {
          key = String(callback(value, key, collection));
          (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
        });
        return result;
      }
      function invoke(collection, methodName) {
        var args = nativeSlice.call(arguments, 2),
            index = -1,
            isFunc = typeof methodName == 'function',
            length = collection ? collection.length : 0,
            result = Array(typeof length == 'number' ? length : 0);
        forEach(collection, function(value) {
          result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
        });
        return result;
      }
      function map(collection, callback, thisArg) {
        var index = -1,
            length = collection ? collection.length : 0;
        callback = lodash.createCallback(callback, thisArg);
        if (typeof length == 'number') {
          var result = Array(length);
          while (++index < length) {
            result[index] = callback(collection[index], index, collection);
          }
        } else {
          result = [];
          forOwn(collection, function(value, key, collection) {
            result[++index] = callback(value, key, collection);
          });
        }
        return result;
      }
      function max(collection, callback, thisArg) {
        var computed = -Infinity,
            result = computed;
        if (!callback && isArray(collection)) {
          var index = -1,
              length = collection.length;
          while (++index < length) {
            var value = collection[index];
            if (value > result) {
              result = value;
            }
          }
        } else {
          callback = (!callback && isString(collection)) ? charAtCallback : lodash.createCallback(callback, thisArg);
          forEach(collection, function(value, index, collection) {
            var current = callback(value, index, collection);
            if (current > computed) {
              computed = current;
              result = value;
            }
          });
        }
        return result;
      }
      function min(collection, callback, thisArg) {
        var computed = Infinity,
            result = computed;
        if (!callback && isArray(collection)) {
          var index = -1,
              length = collection.length;
          while (++index < length) {
            var value = collection[index];
            if (value < result) {
              result = value;
            }
          }
        } else {
          callback = (!callback && isString(collection)) ? charAtCallback : lodash.createCallback(callback, thisArg);
          forEach(collection, function(value, index, collection) {
            var current = callback(value, index, collection);
            if (current < computed) {
              computed = current;
              result = value;
            }
          });
        }
        return result;
      }
      function pluck(collection, property) {
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          var result = Array(length);
          while (++index < length) {
            result[index] = collection[index][property];
          }
        }
        return result || map(collection, property);
      }
      function reduce(collection, callback, accumulator, thisArg) {
        if (!collection)
          return accumulator;
        var noaccum = arguments.length < 3;
        callback = lodash.createCallback(callback, thisArg, 4);
        var index = -1,
            length = collection.length;
        if (typeof length == 'number') {
          if (noaccum) {
            accumulator = collection[++index];
          }
          while (++index < length) {
            accumulator = callback(accumulator, collection[index], index, collection);
          }
        } else {
          forOwn(collection, function(value, index, collection) {
            accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection);
          });
        }
        return accumulator;
      }
      function reduceRight(collection, callback, accumulator, thisArg) {
        var iterable = collection,
            length = collection ? collection.length : 0,
            noaccum = arguments.length < 3;
        if (typeof length != 'number') {
          var props = keys(collection);
          length = props.length;
        }
        callback = lodash.createCallback(callback, thisArg, 4);
        forEach(collection, function(value, index, collection) {
          index = props ? props[--length] : --length;
          accumulator = noaccum ? (noaccum = false, iterable[index]) : callback(accumulator, iterable[index], index, collection);
        });
        return accumulator;
      }
      function reject(collection, callback, thisArg) {
        callback = lodash.createCallback(callback, thisArg);
        return filter(collection, function(value, index, collection) {
          return !callback(value, index, collection);
        });
      }
      function shuffle(collection) {
        var index = -1,
            length = collection ? collection.length : 0,
            result = Array(typeof length == 'number' ? length : 0);
        forEach(collection, function(value) {
          var rand = floor(nativeRandom() * (++index + 1));
          result[index] = result[rand];
          result[rand] = value;
        });
        return result;
      }
      function size(collection) {
        var length = collection ? collection.length : 0;
        return typeof length == 'number' ? length : keys(collection).length;
      }
      function some(collection, callback, thisArg) {
        var result;
        callback = lodash.createCallback(callback, thisArg);
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          while (++index < length) {
            if ((result = callback(collection[index], index, collection))) {
              break;
            }
          }
        } else {
          forOwn(collection, function(value, index, collection) {
            return !(result = callback(value, index, collection));
          });
        }
        return !!result;
      }
      function sortBy(collection, callback, thisArg) {
        var index = -1,
            length = collection ? collection.length : 0,
            result = Array(typeof length == 'number' ? length : 0);
        callback = lodash.createCallback(callback, thisArg);
        forEach(collection, function(value, key, collection) {
          var object = result[++index] = getObject();
          object.criteria = callback(value, key, collection);
          object.index = index;
          object.value = value;
        });
        length = result.length;
        result.sort(compareAscending);
        while (length--) {
          var object = result[length];
          result[length] = object.value;
          releaseObject(object);
        }
        return result;
      }
      function toArray(collection) {
        if (collection && typeof collection.length == 'number') {
          return slice(collection);
        }
        return values(collection);
      }
      var where = filter;
      function compact(array) {
        var index = -1,
            length = array ? array.length : 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result.push(value);
          }
        }
        return result;
      }
      function difference(array) {
        var index = -1,
            indexOf = getIndexOf(),
            length = array ? array.length : 0,
            seen = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
            result = [];
        var isLarge = length >= largeArraySize && indexOf === basicIndexOf;
        if (isLarge) {
          var cache = createCache(seen);
          if (cache) {
            indexOf = cacheIndexOf;
            seen = cache;
          } else {
            isLarge = false;
          }
        }
        while (++index < length) {
          var value = array[index];
          if (indexOf(seen, value) < 0) {
            result.push(value);
          }
        }
        if (isLarge) {
          releaseObject(seen);
        }
        return result;
      }
      function findIndex(array, callback, thisArg) {
        var index = -1,
            length = array ? array.length : 0;
        callback = lodash.createCallback(callback, thisArg);
        while (++index < length) {
          if (callback(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function first(array, callback, thisArg) {
        if (array) {
          var n = 0,
              length = array.length;
          if (typeof callback != 'number' && callback != null) {
            var index = -1;
            callback = lodash.createCallback(callback, thisArg);
            while (++index < length && callback(array[index], index, array)) {
              n++;
            }
          } else {
            n = callback;
            if (n == null || thisArg) {
              return array[0];
            }
          }
          return slice(array, 0, nativeMin(nativeMax(0, n), length));
        }
      }
      var flatten = overloadWrapper(function flatten(array, isShallow, callback) {
        var index = -1,
            length = array ? array.length : 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (callback) {
            value = callback(value, index, array);
          }
          if (isArray(value)) {
            push.apply(result, isShallow ? value : flatten(value));
          } else {
            result.push(value);
          }
        }
        return result;
      });
      function indexOf(array, value, fromIndex) {
        if (typeof fromIndex == 'number') {
          var length = array ? array.length : 0;
          fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
        } else if (fromIndex) {
          var index = sortedIndex(array, value);
          return array[index] === value ? index : -1;
        }
        return array ? basicIndexOf(array, value, fromIndex) : -1;
      }
      function initial(array, callback, thisArg) {
        if (!array) {
          return [];
        }
        var n = 0,
            length = array.length;
        if (typeof callback != 'number' && callback != null) {
          var index = length;
          callback = lodash.createCallback(callback, thisArg);
          while (index-- && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = (callback == null || thisArg) ? 1 : callback || n;
        }
        return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
      }
      function intersection(array) {
        var args = arguments,
            argsLength = args.length,
            argsIndex = -1,
            caches = getArray(),
            index = -1,
            indexOf = getIndexOf(),
            length = array ? array.length : 0,
            result = [],
            seen = getArray();
        while (++argsIndex < argsLength) {
          var value = args[argsIndex];
          caches[argsIndex] = indexOf === basicIndexOf && (value ? value.length : 0) >= largeArraySize && createCache(argsIndex ? args[argsIndex] : seen);
        }
        outer: while (++index < length) {
          var cache = caches[0];
          value = array[index];
          if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
            argsIndex = argsLength;
            (cache || seen).push(value);
            while (--argsIndex) {
              cache = caches[argsIndex];
              if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
                continue outer;
              }
            }
            result.push(value);
          }
        }
        while (argsLength--) {
          cache = caches[argsLength];
          if (cache) {
            releaseObject(cache);
          }
        }
        releaseArray(caches);
        releaseArray(seen);
        return result;
      }
      function last(array, callback, thisArg) {
        if (array) {
          var n = 0,
              length = array.length;
          if (typeof callback != 'number' && callback != null) {
            var index = length;
            callback = lodash.createCallback(callback, thisArg);
            while (index-- && callback(array[index], index, array)) {
              n++;
            }
          } else {
            n = callback;
            if (n == null || thisArg) {
              return array[length - 1];
            }
          }
          return slice(array, nativeMax(0, length - n));
        }
      }
      function lastIndexOf(array, value, fromIndex) {
        var index = array ? array.length : 0;
        if (typeof fromIndex == 'number') {
          index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
        }
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function range(start, end, step) {
        start = +start || 0;
        step = +step || 1;
        if (end == null) {
          end = start;
          start = 0;
        }
        var index = -1,
            length = nativeMax(0, ceil((end - start) / step)),
            result = Array(length);
        while (++index < length) {
          result[index] = start;
          start += step;
        }
        return result;
      }
      function rest(array, callback, thisArg) {
        if (typeof callback != 'number' && callback != null) {
          var n = 0,
              index = -1,
              length = array ? array.length : 0;
          callback = lodash.createCallback(callback, thisArg);
          while (++index < length && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
        }
        return slice(array, n);
      }
      function sortedIndex(array, value, callback, thisArg) {
        var low = 0,
            high = array ? array.length : low;
        callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
        value = callback(value);
        while (low < high) {
          var mid = (low + high) >>> 1;
          (callback(array[mid]) < value) ? low = mid + 1 : high = mid;
        }
        return low;
      }
      function union(array) {
        if (!isArray(array)) {
          arguments[0] = array ? nativeSlice.call(array) : arrayRef;
        }
        return uniq(concat.apply(arrayRef, arguments));
      }
      var uniq = overloadWrapper(function(array, isSorted, callback) {
        var index = -1,
            indexOf = getIndexOf(),
            length = array ? array.length : 0,
            result = [];
        var isLarge = !isSorted && length >= largeArraySize && indexOf === basicIndexOf,
            seen = (callback || isLarge) ? getArray() : result;
        if (isLarge) {
          var cache = createCache(seen);
          if (cache) {
            indexOf = cacheIndexOf;
            seen = cache;
          } else {
            isLarge = false;
            seen = callback ? seen : (releaseArray(seen), result);
          }
        }
        while (++index < length) {
          var value = array[index],
              computed = callback ? callback(value, index, array) : value;
          if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
            if (callback || isLarge) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        if (isLarge) {
          releaseArray(seen.array);
          releaseObject(seen);
        } else if (callback) {
          releaseArray(seen);
        }
        return result;
      });
      function unzip(array) {
        var index = -1,
            length = array ? max(pluck(array, 'length')) : 0,
            result = Array(length < 0 ? 0 : length);
        while (++index < length) {
          result[index] = pluck(array, index);
        }
        return result;
      }
      function without(array) {
        return difference(array, nativeSlice.call(arguments, 1));
      }
      function zip(array) {
        return array ? unzip(arguments) : [];
      }
      function zipObject(keys, values) {
        var index = -1,
            length = keys ? keys.length : 0,
            result = {};
        while (++index < length) {
          var key = keys[index];
          if (values) {
            result[key] = values[index];
          } else {
            result[key[0]] = key[1];
          }
        }
        return result;
      }
      function after(n, func) {
        if (n < 1) {
          return func();
        }
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function bind(func, thisArg) {
        return support.fastBind || (nativeBind && arguments.length > 2) ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, nativeSlice.call(arguments, 2));
      }
      function bindAll(object) {
        var funcs = arguments.length > 1 ? concat.apply(arrayRef, nativeSlice.call(arguments, 1)) : functions(object),
            index = -1,
            length = funcs.length;
        while (++index < length) {
          var key = funcs[index];
          object[key] = bind(object[key], object);
        }
        return object;
      }
      function bindKey(object, key) {
        return createBound(object, key, nativeSlice.call(arguments, 2), indicatorObject);
      }
      function compose() {
        var funcs = arguments;
        return function() {
          var args = arguments,
              length = funcs.length;
          while (length--) {
            args = [funcs[length].apply(this, args)];
          }
          return args[0];
        };
      }
      function createCallback(func, thisArg, argCount) {
        if (func == null) {
          return identity;
        }
        var type = typeof func;
        if (type != 'function') {
          if (type != 'object') {
            return function(object) {
              return object[func];
            };
          }
          var props = keys(func);
          return function(object) {
            var length = props.length,
                result = false;
            while (length--) {
              if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
                break;
              }
            }
            return result;
          };
        }
        if (typeof thisArg == 'undefined' || (reThis && !reThis.test(fnToString.call(func)))) {
          return func;
        }
        if (argCount === 1) {
          return function(value) {
            return func.call(thisArg, value);
          };
        }
        if (argCount === 2) {
          return function(a, b) {
            return func.call(thisArg, a, b);
          };
        }
        if (argCount === 4) {
          return function(accumulator, value, index, collection) {
            return func.call(thisArg, accumulator, value, index, collection);
          };
        }
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      }
      function debounce(func, wait, options) {
        var args,
            result,
            thisArg,
            callCount = 0,
            lastCalled = 0,
            maxWait = false,
            maxTimeoutId = null,
            timeoutId = null,
            trailing = true;
        function clear() {
          clearTimeout(maxTimeoutId);
          clearTimeout(timeoutId);
          callCount = 0;
          maxTimeoutId = timeoutId = null;
        }
        function delayed() {
          var isCalled = trailing && (!leading || callCount > 1);
          clear();
          if (isCalled) {
            if (maxWait !== false) {
              lastCalled = new Date;
            }
            result = func.apply(thisArg, args);
          }
        }
        function maxDelayed() {
          clear();
          if (trailing || (maxWait !== wait)) {
            lastCalled = new Date;
            result = func.apply(thisArg, args);
          }
        }
        wait = nativeMax(0, wait || 0);
        if (options === true) {
          var leading = true;
          trailing = false;
        } else if (isObject(options)) {
          leading = options.leading;
          maxWait = 'maxWait' in options && nativeMax(wait, options.maxWait || 0);
          trailing = 'trailing' in options ? options.trailing : trailing;
        }
        return function() {
          args = arguments;
          thisArg = this;
          callCount++;
          clearTimeout(timeoutId);
          if (maxWait === false) {
            if (leading && callCount < 2) {
              result = func.apply(thisArg, args);
            }
          } else {
            var now = new Date;
            if (!maxTimeoutId && !leading) {
              lastCalled = now;
            }
            var remaining = maxWait - (now - lastCalled);
            if (remaining <= 0) {
              clearTimeout(maxTimeoutId);
              maxTimeoutId = null;
              lastCalled = now;
              result = func.apply(thisArg, args);
            } else if (!maxTimeoutId) {
              maxTimeoutId = setTimeout(maxDelayed, remaining);
            }
          }
          if (wait !== maxWait) {
            timeoutId = setTimeout(delayed, wait);
          }
          return result;
        };
      }
      function defer(func) {
        var args = nativeSlice.call(arguments, 1);
        return setTimeout(function() {
          func.apply(undefined, args);
        }, 1);
      }
      if (isV8 && freeModule && typeof setImmediate == 'function') {
        defer = bind(setImmediate, context);
      }
      function delay(func, wait) {
        var args = nativeSlice.call(arguments, 2);
        return setTimeout(function() {
          func.apply(undefined, args);
        }, wait);
      }
      function memoize(func, resolver) {
        function memoized() {
          var cache = memoized.cache,
              key = keyPrefix + (resolver ? resolver.apply(this, arguments) : arguments[0]);
          return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments));
        }
        memoized.cache = {};
        return memoized;
      }
      function once(func) {
        var ran,
            result;
        return function() {
          if (ran) {
            return result;
          }
          ran = true;
          result = func.apply(this, arguments);
          func = null;
          return result;
        };
      }
      function partial(func) {
        return createBound(func, nativeSlice.call(arguments, 1));
      }
      function partialRight(func) {
        return createBound(func, nativeSlice.call(arguments, 1), null, indicatorObject);
      }
      function throttle(func, wait, options) {
        var leading = true,
            trailing = true;
        if (options === false) {
          leading = false;
        } else if (isObject(options)) {
          leading = 'leading' in options ? options.leading : leading;
          trailing = 'trailing' in options ? options.trailing : trailing;
        }
        options = getObject();
        options.leading = leading;
        options.maxWait = wait;
        options.trailing = trailing;
        var result = debounce(func, wait, options);
        releaseObject(options);
        return result;
      }
      function wrap(value, wrapper) {
        return function() {
          var args = [value];
          push.apply(args, arguments);
          return wrapper.apply(this, args);
        };
      }
      function escape(string) {
        return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
      }
      function identity(value) {
        return value;
      }
      function mixin(object) {
        forEach(functions(object), function(methodName) {
          var func = lodash[methodName] = object[methodName];
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__,
                args = [value];
            push.apply(args, arguments);
            var result = func.apply(lodash, args);
            return (value && typeof value == 'object' && value === result) ? this : new lodashWrapper(result);
          };
        });
      }
      function noConflict() {
        context._ = oldDash;
        return this;
      }
      var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
        return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
      };
      function random(min, max) {
        if (min == null && max == null) {
          max = 1;
        }
        min = +min || 0;
        if (max == null) {
          max = min;
          min = 0;
        } else {
          max = +max || 0;
        }
        var rand = nativeRandom();
        return (min % 1 || max % 1) ? min + nativeMin(rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1))), max) : min + floor(rand * (max - min + 1));
      }
      function result(object, property) {
        var value = object ? object[property] : undefined;
        return isFunction(value) ? object[property]() : value;
      }
      function template(text, data, options) {
        var settings = lodash.templateSettings;
        text || (text = '');
        options = defaults({}, options, settings);
        var imports = defaults({}, options.imports, settings.imports),
            importsKeys = keys(imports),
            importsValues = values(imports);
        var isEvaluating,
            index = 0,
            interpolate = options.interpolate || reNoMatch,
            source = "__p += '";
        var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
        text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = options.variable,
            hasVariable = variable;
        if (!hasVariable) {
          variable = 'obj';
          source = 'with (' + variable + ') {\n' + source + '\n}\n';
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
        source = 'function(' + variable + ') {\n' + (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') + "var __t, __p = '', __e = _.escape" + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
        var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';
        try {
          var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
        } catch (e) {
          e.source = source;
          throw e;
        }
        if (data) {
          return result(data);
        }
        result.source = source;
        return result;
      }
      function times(n, callback, thisArg) {
        n = (n = +n) > -1 ? n : 0;
        var index = -1,
            result = Array(n);
        callback = lodash.createCallback(callback, thisArg, 1);
        while (++index < n) {
          result[index] = callback(index);
        }
        return result;
      }
      function unescape(string) {
        return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return String(prefix == null ? '' : prefix) + id;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function wrapperToString() {
        return String(this.__wrapped__);
      }
      function wrapperValueOf() {
        return this.__wrapped__;
      }
      lodash.after = after;
      lodash.assign = assign;
      lodash.at = at;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.compact = compact;
      lodash.compose = compose;
      lodash.countBy = countBy;
      lodash.createCallback = createCallback;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.filter = filter;
      lodash.flatten = flatten;
      lodash.forEach = forEach;
      lodash.forIn = forIn;
      lodash.forOwn = forOwn;
      lodash.functions = functions;
      lodash.groupBy = groupBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.invert = invert;
      lodash.invoke = invoke;
      lodash.keys = keys;
      lodash.map = map;
      lodash.max = max;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.min = min;
      lodash.omit = omit;
      lodash.once = once;
      lodash.pairs = pairs;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.pick = pick;
      lodash.pluck = pluck;
      lodash.range = range;
      lodash.reject = reject;
      lodash.rest = rest;
      lodash.shuffle = shuffle;
      lodash.sortBy = sortBy;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.times = times;
      lodash.toArray = toArray;
      lodash.transform = transform;
      lodash.union = union;
      lodash.uniq = uniq;
      lodash.unzip = unzip;
      lodash.values = values;
      lodash.where = where;
      lodash.without = without;
      lodash.wrap = wrap;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.collect = map;
      lodash.drop = rest;
      lodash.each = forEach;
      lodash.extend = assign;
      lodash.methods = functions;
      lodash.object = zipObject;
      lodash.select = filter;
      lodash.tail = rest;
      lodash.unique = uniq;
      mixin(lodash);
      lodash.chain = lodash;
      lodash.prototype.chain = function() {
        return this;
      };
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.contains = contains;
      lodash.escape = escape;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.has = has;
      lodash.identity = identity;
      lodash.indexOf = indexOf;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isBoolean = isBoolean;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isFinite = isFinite;
      lodash.isFunction = isFunction;
      lodash.isNaN = isNaN;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isString = isString;
      lodash.isUndefined = isUndefined;
      lodash.lastIndexOf = lastIndexOf;
      lodash.mixin = mixin;
      lodash.noConflict = noConflict;
      lodash.parseInt = parseInt;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.result = result;
      lodash.runInContext = runInContext;
      lodash.size = size;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.template = template;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.all = every;
      lodash.any = some;
      lodash.detect = find;
      lodash.findWhere = find;
      lodash.foldl = reduce;
      lodash.foldr = reduceRight;
      lodash.include = contains;
      lodash.inject = reduce;
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          lodash.prototype[methodName] = function() {
            var args = [this.__wrapped__];
            push.apply(args, arguments);
            return func.apply(lodash, args);
          };
        }
      });
      lodash.first = first;
      lodash.last = last;
      lodash.take = first;
      lodash.head = first;
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          lodash.prototype[methodName] = function(callback, thisArg) {
            var result = func(this.__wrapped__, callback, thisArg);
            return callback == null || (thisArg && typeof callback != 'function') ? result : new lodashWrapper(result);
          };
        }
      });
      lodash.VERSION = '1.3.1';
      lodash.prototype.toString = wrapperToString;
      lodash.prototype.value = wrapperValueOf;
      lodash.prototype.valueOf = wrapperValueOf;
      forEach(['join', 'pop', 'shift'], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
          return func.apply(this.__wrapped__, arguments);
        };
      });
      forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
          func.apply(this.__wrapped__, arguments);
          return this;
        };
      });
      forEach(['concat', 'slice', 'splice'], function(methodName) {
        var func = arrayRef[methodName];
        lodash.prototype[methodName] = function() {
          return new lodashWrapper(func.apply(this.__wrapped__, arguments));
        };
      });
      return lodash;
    }
    var _ = runInContext();
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      window._ = _;
      define(function() {
        return _;
      });
    } else if (freeExports && !freeExports.nodeType) {
      if (freeModule) {
        (freeModule.exports = _)._ = _;
      } else {
        freeExports._ = _;
      }
    } else {
      window._ = _;
    }
  }(this));
})(require("process"));
