'use strict';

System.register(['aurelia-framework', 'prism', 'prism/themes/prism.css!', 'aurelia-loader'], function (_export, _context) {
  var inject, bindable, noView, customElement, processContent, TargetInstruction, prism, Loader, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, AuCode;

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

  function parseCode(element, resources, instruction) {
    instruction.html = dedent(decodeHtml(element.innerHTML));
  }

  function decodeHtml(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  function dedent(str) {
    var match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str;

    var indent = Math.min.apply(Math, match.map(function (el) {
      return el.length;
    }));

    var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
    return indent > 0 ? str.replace(re, '') : str;
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
      customElement = _aureliaFramework.customElement;
      processContent = _aureliaFramework.processContent;
      TargetInstruction = _aureliaFramework.TargetInstruction;
    }, function (_prism) {
      prism = _prism.default;
    }, function (_prismThemesPrismCss) {}, function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }],
    execute: function () {
      _export('AuCode', AuCode = (_dec = processContent(function (compiler, resources, element, instruction) {
        parseCode(element, resources, instruction);
        return true;
      }), _dec2 = customElement('au-code'), _dec3 = inject(Element, TargetInstruction, Loader), _dec(_class = _dec2(_class = noView(_class = _dec3(_class = (_class2 = function () {
        function AuCode(element, targetInstruction, loader) {
          _classCallCheck(this, AuCode);

          _initDefineProp(this, 'language', _descriptor, this);

          _initDefineProp(this, 'url', _descriptor2, this);

          this.element = element;
          this.loader = loader;
          this.html = targetInstruction.behaviorInstructions[0].html;
        }

        AuCode.prototype.urlChanged = function urlChanged() {
          var _this = this;

          if (this.url) {
            this.loader.loadText(this.url).then(function (text) {
              _this.html = text;
              _this.render();
            });
          } else {
            this.html = '';
            this.render();
          }
        };

        AuCode.prototype.attached = function attached() {
          this.render();
        };

        AuCode.prototype.render = function render() {
          jQuery('pre', this.element).remove();
          var pre = document.createElement('pre');
          this.element.appendChild(pre);
          pre.innerHTML = prism.highlight(this.html, Prism.languages[this.language]);
        };

        return AuCode;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'language', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'url', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('AuCode', AuCode);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
