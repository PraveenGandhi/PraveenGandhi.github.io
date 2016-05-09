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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLWhpZ2hsaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTtBQUFRLGMscUJBQUEsUTtBQUFVLHFCLHFCQUFBLGU7O0FBQ2xCLFksa0JBQUEsTTs7QUFDQSxxQiwyQkFBQSxlOzs7Z0NBSUssYyxXQUZaLE9BQU8sT0FBUCxFQUFnQixNQUFoQixFQUF3QixlQUF4QixDLFVBQ0EsZ0JBQWdCLGlCQUFoQixDO0FBS0csZ0NBQVksT0FBWixFQUFxQixNQUFyQixFQUE2QixlQUE3QixFQUE4QztBQUFBOztBQUFBOztBQUFBOztBQUM1QyxlQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsZUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGVBQUssRUFBTCxHQUFVLGVBQVY7O0FBRUEsZUFBSyxZQUFMLEdBQW9CLEtBQUssRUFBTCxDQUFRLFNBQVIsQ0FBa0IsNEJBQWxCLEVBQWdEO0FBQUEsbUJBQU0sTUFBSyxPQUFMLEVBQU47QUFBQSxXQUFoRCxDQUFwQjtBQUNEOztpQ0FFRCxhLDRCQUFnQjtBQUNkLGVBQUssT0FBTDtBQUNELFM7O2lDQUVELE8sc0JBQVU7QUFDUixjQUFJLGNBQWMsS0FBSyxNQUFMLENBQVksa0JBQTlCO0FBQ0EsY0FBSSxXQUFXLEtBQWY7O0FBRUEsY0FBSSxXQUFKLEVBQWlCO0FBQ2YsZ0JBQUksY0FBYyxZQUFZLE1BQVosQ0FBbUIsSUFBckM7O0FBRUEsZ0JBQUksTUFBTSxPQUFOLENBQWMsS0FBSyxNQUFuQixDQUFKLEVBQWdDO0FBQzlCLHlCQUFXLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsV0FBckIsQ0FBWDtBQUNELGFBRkQsTUFFTztBQUNMLHlCQUFXLEtBQUssTUFBTCxLQUFnQixXQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsY0FBSSxRQUFKLEVBQWM7QUFDWixpQkFBSyxTQUFMO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsaUJBQUssV0FBTDtBQUNEO0FBQ0YsUzs7aUNBRUQsUyx3QkFBWTtBQUVWLGVBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDRCxTOztpQ0FFRCxXLDBCQUFjO0FBRVosZUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixRQUE5QjtBQUNELFM7O2lDQUVELFEsdUJBQVc7QUFDVCxjQUFJLEtBQUssWUFBVCxFQUF1QjtBQUNyQixpQkFBSyxZQUFMO0FBQ0Q7QUFDRixTOzs7a0ZBakRBLFEiLCJmaWxlIjoicm91dGUtaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
