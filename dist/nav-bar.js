'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var bindable, _desc, _value, _class, _descriptor, NavBar;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      _export('NavBar', NavBar = (_class = function () {
        function NavBar() {
          _classCallCheck(this, NavBar);

          _initDefineProp(this, 'router', _descriptor, this);
        }

        NavBar.prototype.attached = function attached() {
          $('.button-collapse').sideNav();
        };

        return NavBar;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'router', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class));

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxjLHFCQUFBLFE7Ozt3QkFFSyxNOzs7Ozs7O3lCQUdYLFEsdUJBQVc7QUFDVCxZQUFFLGtCQUFGLEVBQXNCLE9BQXRCO0FBQ0QsUzs7O2lGQUpBLFE7OztpQkFBa0IsSSIsImZpbGUiOiJuYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
