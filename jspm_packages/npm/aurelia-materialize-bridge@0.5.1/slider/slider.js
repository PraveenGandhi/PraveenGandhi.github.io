/* */ 
define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSlider = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdSlider = exports.MdSlider = (_dec = (0, _aureliaTemplating.customElement)('md-slider'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <content select="li"></content>\n  </ul>\n  </template>\n'), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec8 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function MdSlider(element) {
      _classCallCheck(this, MdSlider);

      _initDefineProp(this, 'mdFillContainer', _descriptor, this);

      _initDefineProp(this, 'mdHeight', _descriptor2, this);

      _initDefineProp(this, 'mdIndicators', _descriptor3, this);

      _initDefineProp(this, 'mdInterval', _descriptor4, this);

      _initDefineProp(this, 'mdTransition', _descriptor5, this);

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-slider');
    }

    MdSlider.prototype.attached = function attached() {
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFillContainer)) {
        this.element.classList.add('fullscreen');
      }
      this.refresh();
    };

    MdSlider.prototype.pause = function pause() {
      $(this.element).slider('pause');
    };

    MdSlider.prototype.start = function start() {
      $(this.element).slider('start');
    };

    MdSlider.prototype.next = function next() {
      $(this.element).slider('next');
    };

    MdSlider.prototype.prev = function prev() {
      $(this.element).slider('prev');
    };

    MdSlider.prototype.refresh = function refresh() {
      var options = {
        height: parseInt(this.mdHeight, 10),
        indicators: (0, _attributes.getBooleanFromAttributeValue)(this.mdIndicators),
        interval: parseInt(this.mdInterval, 10),
        transition: parseInt(this.mdTransition, 10)
      };
      this.log.debug('refreshing slider, params:', options);
      $(this.element).slider(options);
    };

    MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
      this.refresh();
    };

    return MdSlider;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFillContainer', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdHeight', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 400;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdIndicators', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdInterval', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return 6000;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTransition', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 500;
    }
  })), _class2)) || _class) || _class) || _class);
});