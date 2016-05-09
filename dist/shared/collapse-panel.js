'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  var bindable, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, CollapsePanel;

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
      _export('CollapsePanel', CollapsePanel = (_class = function () {
        function CollapsePanel() {
          _classCallCheck(this, CollapsePanel);

          _initDefineProp(this, 'title', _descriptor, this);

          _initDefineProp(this, 'footer', _descriptor2, this);

          _initDefineProp(this, 'allowCollapse', _descriptor3, this);

          _initDefineProp(this, 'collapsed', _descriptor4, this);

          _initDefineProp(this, 'panelClass', _descriptor5, this);
        }

        CollapsePanel.prototype.toggle = function toggle() {
          if (this.allowCollapse) {
            this.collapsed = !this.collapsed;
          }
        };

        return CollapsePanel;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'title', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'footer', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'allowCollapse', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'collapsed', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'panelClass', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'default';
        }
      })), _class));

      _export('CollapsePanel', CollapsePanel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb2xsYXBzZS1wYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGMscUJBQUEsUTs7OytCQUVLLGE7Ozs7Ozs7Ozs7Ozs7OztnQ0FPWCxNLHFCQUFTO0FBQ1AsY0FBSSxLQUFLLGFBQVQsRUFBd0I7QUFDdEIsaUJBQUssU0FBTCxHQUFpQixDQUFDLEtBQUssU0FBdkI7QUFDRDtBQUNGLFM7OztnRkFWQSxROzs7Z0ZBQ0EsUTs7O3VGQUNBLFE7OztpQkFBeUIsSzs7bUZBQ3pCLFE7OztpQkFBcUIsSzs7b0ZBQ3JCLFE7OztpQkFBc0IsUyIsImZpbGUiOiJzaGFyZWQvY29sbGFwc2UtcGFuZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
