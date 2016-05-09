'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var bindable, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, ContactButton;

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
      _export('ContactButton', ContactButton = (_class = function () {
        function ContactButton() {
          _classCallCheck(this, ContactButton);

          _initDefineProp(this, 'value', _descriptor, this);

          _initDefineProp(this, 'icon', _descriptor2, this);

          _initDefineProp(this, 'active', _descriptor3, this);
        }

        ContactButton.prototype.click = function click() {
          this.active = !this.active;
        };

        return ContactButton;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'icon', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'active', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class));

      _export('ContactButton', ContactButton);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsYyxxQkFBQSxROzs7K0JBR0ssYTs7Ozs7Ozs7Ozs7Z0NBS1gsSyxvQkFBUTtBQUNOLGVBQUssTUFBTCxHQUFjLENBQUMsS0FBSyxNQUFwQjtBQUNELFM7OztnRkFOQSxROzs7aUJBQWlCLEk7OzhFQUNqQixROzs7aUJBQWdCLEk7O2dGQUNoQixROzs7aUJBQWtCLEsiLCJmaWxlIjoiY29udGFjdC1idXR0b24uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
