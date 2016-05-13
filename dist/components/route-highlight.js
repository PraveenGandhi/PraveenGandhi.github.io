'use strict';

System.register(['aurelia-framework', 'aurelia-router', 'aurelia-event-aggregator'], function (_export, _context) {
  var inject, bindable, customAttribute, Router, EventAggregator, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, RouteHighlight;

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
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _export('RouteHighlight', RouteHighlight = (_dec = inject(Element, Router, EventAggregator), _dec2 = customAttribute('route-highlight'), _dec(_class = _dec2(_class = (_class2 = function () {
        function RouteHighlight(element, router, eventAggregator) {
          var _this = this;

          _classCallCheck(this, RouteHighlight);

          _initDefineProp(this, 'routes', _descriptor, this);

          this.element = element;
          this.router = router;
          this.ea = eventAggregator;

          this.subscription = this.ea.subscribe('router:navigation:complete', function () {
            return _this.refresh();
          });
        }

        RouteHighlight.prototype.routesChanged = function routesChanged() {
          this.refresh();
        };

        RouteHighlight.prototype.refresh = function refresh() {
          var instruction = this.router.currentInstruction;
          var isActive = false;

          if (instruction) {
            var activeRoute = instruction.config.name;

            if (Array.isArray(this.routes)) {
              isActive = this.routes.includes(activeRoute);
            } else {
              isActive = this.routes === activeRoute;
            }
          }

          if (isActive) {
            this.highlight();
          } else {
            this.unhighlight();
          }
        };

        RouteHighlight.prototype.highlight = function highlight() {
          this.element.classList.add('active');
        };

        RouteHighlight.prototype.unhighlight = function unhighlight() {
          this.element.classList.remove('active');
        };

        RouteHighlight.prototype.detached = function detached() {
          if (this.subscription) {
            this.subscription();
          }
        };

        return RouteHighlight;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'routes', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('RouteHighlight', RouteHighlight);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcm91dGUtaGlnaGxpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsWSxxQkFBQSxNO0FBQVEsYyxxQkFBQSxRO0FBQVUscUIscUJBQUEsZTs7QUFDbEIsWSxrQkFBQSxNOztBQUNBLHFCLDJCQUFBLGU7OztnQ0FJSyxjLFdBRlosT0FBTyxPQUFQLEVBQWdCLE1BQWhCLEVBQXdCLGVBQXhCLEMsVUFDQSxnQkFBZ0IsaUJBQWhCLEM7QUFLRyxnQ0FBWSxPQUFaLEVBQXFCLE1BQXJCLEVBQTZCLGVBQTdCLEVBQThDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQzVDLGVBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxlQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsZUFBSyxFQUFMLEdBQVUsZUFBVjs7QUFFQSxlQUFLLFlBQUwsR0FBb0IsS0FBSyxFQUFMLENBQVEsU0FBUixDQUFrQiw0QkFBbEIsRUFBZ0Q7QUFBQSxtQkFBTSxNQUFLLE9BQUwsRUFBTjtBQUFBLFdBQWhELENBQXBCO0FBQ0Q7O2lDQUVELGEsNEJBQWdCO0FBQ2QsZUFBSyxPQUFMO0FBQ0QsUzs7aUNBRUQsTyxzQkFBVTtBQUNSLGNBQUksY0FBYyxLQUFLLE1BQUwsQ0FBWSxrQkFBOUI7QUFDQSxjQUFJLFdBQVcsS0FBZjs7QUFFQSxjQUFJLFdBQUosRUFBaUI7QUFDZixnQkFBSSxjQUFjLFlBQVksTUFBWixDQUFtQixJQUFyQzs7QUFFQSxnQkFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLE1BQW5CLENBQUosRUFBZ0M7QUFDOUIseUJBQVcsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixXQUFyQixDQUFYO0FBQ0QsYUFGRCxNQUVPO0FBQ0wseUJBQVcsS0FBSyxNQUFMLEtBQWdCLFdBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLFFBQUosRUFBYztBQUNaLGlCQUFLLFNBQUw7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBSyxXQUFMO0FBQ0Q7QUFDRixTOztpQ0FFRCxTLHdCQUFZO0FBRVYsZUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNELFM7O2lDQUVELFcsMEJBQWM7QUFFWixlQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0QsUzs7aUNBRUQsUSx1QkFBVztBQUNULGNBQUksS0FBSyxZQUFULEVBQXVCO0FBQ3JCLGlCQUFLLFlBQUw7QUFDRDtBQUNGLFM7OztrRkFqREEsUSIsImZpbGUiOiJjb21wb25lbnRzL3JvdXRlLWhpZ2hsaWdodC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
