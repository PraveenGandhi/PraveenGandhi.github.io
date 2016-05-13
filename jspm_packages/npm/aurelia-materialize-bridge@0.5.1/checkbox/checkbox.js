/* */ 
define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCheckbox = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

  var MdCheckbox = exports.MdCheckbox = (_dec = (0, _aureliaTemplating.customElement)('md-checkbox'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdCheckbox(element) {
      _classCallCheck(this, MdCheckbox);

      _initDefineProp(this, 'mdChecked', _descriptor, this);

      _initDefineProp(this, 'mdDisabled', _descriptor2, this);

      _initDefineProp(this, 'mdFilledIn', _descriptor3, this);

      this.element = element;
      this.controlId = 'md-checkbox-' + MdCheckbox.id++;
      this.handleChange = this.handleChange.bind(this);
    }

    MdCheckbox.prototype.attached = function attached() {
      this.attributeManager = new _attributeManager.AttributeManager(this.checkbox);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFilledIn)) {
        this.attributeManager.addClasses('filled-in');
      }
      if (this.mdChecked === null) {
        this.checkbox.indeterminate = true;
      } else {
        this.checkbox.indeterminate = false;
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdDisabled)) {
        this.checkbox.disabled = true;
      }
      this.checkbox.checked = (0, _attributes.getBooleanFromAttributeValue)(this.mdChecked);
      this.checkbox.addEventListener('change', this.handleChange);
    };

    MdCheckbox.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['filled-in', 'disabled']);
      this.checkbox.removeEventListener('change', this.handleChange);
    };

    MdCheckbox.prototype.handleChange = function handleChange() {
      this.mdChecked = this.checkbox.checked;
    };

    MdCheckbox.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
      if (this.checkbox) {
        this.checkbox.checked = !!newValue;
      }
    };

    MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
      if (this.checkbox) {
        this.checkbox.disabled = !!newValue;
      }
    };

    return MdCheckbox;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdFilledIn', [_dec5], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});