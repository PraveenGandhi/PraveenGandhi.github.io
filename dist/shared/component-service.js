'use strict';

System.register(['./components.json!json'], function (_export, _context) {
  var components, _typeof, ComponentService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_componentsJsonJson) {
      components = _componentsJsonJson;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('ComponentService', ComponentService = function () {
        function ComponentService() {
          _classCallCheck(this, ComponentService);

          this.components = components;
        }

        ComponentService.prototype.transformToMap = function transformToMap(obj) {
          var map = new Map();
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                map.set(key, this.transformToMap(value));
              } else {
                map.set(key, value);
              }
            }
          }
          return map;
        };

        ComponentService.prototype.getIterableComponents = function getIterableComponents() {
          var _this = this;

          var hideEmptyCategories = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

          var categories = [];
          Object.keys(this.components).forEach(function (cat) {
            if (cat !== 'default') {
              (function () {
                var category = {
                  title: cat,
                  controls: []
                };
                var cfg = _this.components[cat];
                Object.keys(cfg).forEach(function (title) {
                  var ctrl = {
                    title: title,
                    status: cfg[title].status
                  };
                  if (cfg[title].status && cfg[title].nav !== false) {
                    ctrl.link = '#/samples/' + (cfg[title].moduleId || title.toLowerCase());
                  }
                  category.controls.push(ctrl);
                });
                if (!hideEmptyCategories || category.controls.some(function (c) {
                  return !!c.link;
                })) {
                  categories.push(category);
                }
              })();
            }
          });
          return categories;
        };

        ComponentService.prototype.getRouterConfig = function getRouterConfig() {
          var _this2 = this;

          var routes = [];
          Object.keys(this.components).forEach(function (cat) {
            var cfg = _this2.components[cat];
            Object.keys(cfg).forEach(function (title) {
              if (cfg[title].status && cfg[title].nav !== false) {
                var shortModuleId = cfg[title].moduleId || title.toLowerCase();
                var moduleId = 'samples/' + shortModuleId + '/index';
                routes.push({ name: shortModuleId, route: shortModuleId, moduleId: moduleId, title: title });
              }
            });
          });
          return routes;
        };

        return ComponentService;
      }());

      _export('ComponentService', ComponentService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVksZ0I7Ozs7Ozs7OztrQ0FFQyxnQjtBQUNYLG9DQUFjO0FBQUE7O0FBQ1osZUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBRUQ7O21DQUVELGMsMkJBQWUsRyxFQUFLO0FBQ2xCLGNBQUksTUFBTSxJQUFJLEdBQUosRUFBVjtBQUNBLGVBQUssSUFBSSxHQUFULElBQWdCLEdBQWhCLEVBQXFCO0FBQ25CLGdCQUFJLElBQUksY0FBSixDQUFtQixHQUFuQixDQUFKLEVBQTZCO0FBQzNCLGtCQUFJLFFBQVEsSUFBSSxHQUFKLENBQVo7QUFDQSxrQkFBSSxRQUFPLEtBQVAseUNBQU8sS0FBUCxPQUFpQixRQUFyQixFQUErQjtBQUM3QixvQkFBSSxHQUFKLENBQVEsR0FBUixFQUFhLEtBQUssY0FBTCxDQUFvQixLQUFwQixDQUFiO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsb0JBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxLQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsaUJBQU8sR0FBUDtBQUNELFM7O21DQUVELHFCLG9DQUFtRDtBQUFBOztBQUFBLGNBQTdCLG1CQUE2Qix5REFBUCxLQUFPOztBQUNqRCxjQUFJLGFBQWEsRUFBakI7QUFDQSxpQkFBTyxJQUFQLENBQVksS0FBSyxVQUFqQixFQUE2QixPQUE3QixDQUFxQyxlQUFPO0FBQzFDLGdCQUFJLFFBQVEsU0FBWixFQUF1QjtBQUFBO0FBQ3JCLG9CQUFJLFdBQVc7QUFDYix5QkFBTyxHQURNO0FBRWIsNEJBQVU7QUFGRyxpQkFBZjtBQUlBLG9CQUFJLE1BQU0sTUFBSyxVQUFMLENBQWdCLEdBQWhCLENBQVY7QUFDQSx1QkFBTyxJQUFQLENBQVksR0FBWixFQUFpQixPQUFqQixDQUF5QixpQkFBUztBQUNoQyxzQkFBSSxPQUFPO0FBQ1QsZ0NBRFM7QUFFVCw0QkFBUSxJQUFJLEtBQUosRUFBVztBQUZWLG1CQUFYO0FBSUEsc0JBQUksSUFBSSxLQUFKLEVBQVcsTUFBWCxJQUFxQixJQUFJLEtBQUosRUFBVyxHQUFYLEtBQW1CLEtBQTVDLEVBQW1EO0FBQ2pELHlCQUFLLElBQUwsbUJBQXlCLElBQUksS0FBSixFQUFXLFFBQVgsSUFBdUIsTUFBTSxXQUFOLEVBQWhEO0FBQ0Q7QUFDRCwyQkFBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLElBQXZCO0FBQ0QsaUJBVEQ7QUFVQSxvQkFBSSxDQUFDLG1CQUFELElBQXdCLFNBQVMsUUFBVCxDQUFrQixJQUFsQixDQUF1QjtBQUFBLHlCQUFLLENBQUMsQ0FBQyxFQUFFLElBQVQ7QUFBQSxpQkFBdkIsQ0FBNUIsRUFBbUU7QUFDakUsNkJBQVcsSUFBWCxDQUFnQixRQUFoQjtBQUNEO0FBbEJvQjtBQW1CdEI7QUFDRixXQXJCRDtBQXNCQSxpQkFBTyxVQUFQO0FBQ0QsUzs7bUNBRUQsZSw4QkFBa0I7QUFBQTs7QUFDaEIsY0FBSSxTQUFTLEVBQWI7QUFDQSxpQkFBTyxJQUFQLENBQVksS0FBSyxVQUFqQixFQUE2QixPQUE3QixDQUFxQyxlQUFPO0FBQzFDLGdCQUFJLE1BQU0sT0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQVY7QUFDQSxtQkFBTyxJQUFQLENBQVksR0FBWixFQUFpQixPQUFqQixDQUF5QixpQkFBUztBQUNoQyxrQkFBSSxJQUFJLEtBQUosRUFBVyxNQUFYLElBQXFCLElBQUksS0FBSixFQUFXLEdBQVgsS0FBbUIsS0FBNUMsRUFBbUQ7QUFDakQsb0JBQUksZ0JBQWdCLElBQUksS0FBSixFQUFXLFFBQVgsSUFBdUIsTUFBTSxXQUFOLEVBQTNDO0FBQ0Esb0JBQUksd0JBQXNCLGFBQXRCLFdBQUo7QUFDQSx1QkFBTyxJQUFQLENBQVksRUFBRSxNQUFNLGFBQVIsRUFBdUIsT0FBTyxhQUE5QixFQUE2QyxrQkFBN0MsRUFBdUQsWUFBdkQsRUFBWjtBQUNEO0FBQ0YsYUFORDtBQU9ELFdBVEQ7QUFVQSxpQkFBTyxNQUFQO0FBQ0QsUyIsImZpbGUiOiJzaGFyZWQvY29tcG9uZW50LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
