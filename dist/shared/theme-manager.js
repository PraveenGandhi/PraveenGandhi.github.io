'use strict';

System.register(['aurelia-framework', 'aurelia-pal', 'aurelia-event-aggregator'], function (_export, _context) {
  var inject, DOM, EventAggregator, _dec, _class, ThemeManager;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _export('ThemeManager', ThemeManager = (_dec = inject(EventAggregator), _dec(_class = function () {
        function ThemeManager(ea) {
          _classCallCheck(this, ThemeManager);

          this.commons = [{ name: 'standard', value: 'common' }, { name: 'bootstrap', value: 'common-bootstrap', relativity: 'larger' }, { name: 'material', value: 'common-material', relativity: 'bold' }, { name: 'nova', value: 'common-nova', relativity: 'bold' }, { name: 'fiori', value: 'common-fiori', relativity: 'larger' }, { name: 'office365', value: 'common-office365', relativity: 'bold' }];

          this.ea = ea;
        }

        ThemeManager.prototype.loadTheme = function loadTheme(theme) {
          var _this = this;

          this.removeOldThemes();

          return Promise.all([this.common(theme), this.theme(theme)]).then(function () {
            return _this.ea.publish('kendo:skinChange', theme);
          });
        };

        ThemeManager.prototype.theme = function theme(_theme) {
          var themePath = this.getNormalizedThemePath(_theme);
          this.deleteFromSystemJS(themePath);

          return System.import(themePath).then(function () {
            var themable = ['Chart', 'TreeMap', 'Diagram', 'StockChart', 'Sparkline', 'RadialGauge', 'LinearGauge'];

            if (kendo.dataviz && _theme) {
              for (var i = 0; i < themable.length; i++) {
                var widget = kendo.dataviz.ui[themable[i]];

                if (widget) {
                  widget.fn.options.theme = _theme;
                }
              }
            }
          });
        };

        ThemeManager.prototype.common = function common(theme) {
          var common = (this.commons.find(function (i) {
            return i.name === theme;
          }) || this.commons.find(function (i) {
            return i.name === 'standard';
          })).value;
          var commonPath = this.getNormalizedThemePath(common);
          this.deleteFromSystemJS(commonPath);

          return System.import(commonPath);
        };

        ThemeManager.prototype.deleteFromSystemJS = function deleteFromSystemJS(normalizedPath) {
          if (System.has(normalizedPath)) {
            System.delete(normalizedPath);
          }
        };

        ThemeManager.prototype.getNormalizedThemePath = function getNormalizedThemePath(theme) {
          return System.normalizeSync('kendo-ui/styles/kendo.' + theme + '.min.css!');
        };

        ThemeManager.prototype.removeOldThemes = function removeOldThemes() {
          jQuery('head > link').each(function () {
            if (this.href.includes('styles/kendo.')) {
              DOM.removeNode(this);
            }
          });
        };

        return ThemeManager;
      }()) || _class));

      _export('ThemeManager', ThemeManager);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90aGVtZS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsUyxlQUFBLEc7O0FBQ0EscUIsMkJBQUEsZTs7OzhCQUdLLFksV0FEWixPQUFPLGVBQVAsQztBQVlDLDhCQUFZLEVBQVosRUFBZ0I7QUFBQTs7QUFBQSxlQVRoQixPQVNnQixHQVROLENBQ04sRUFBRSxNQUFNLFVBQVIsRUFBb0IsT0FBTyxRQUEzQixFQURNLEVBRU4sRUFBRSxNQUFNLFdBQVIsRUFBcUIsT0FBTyxrQkFBNUIsRUFBZ0QsWUFBWSxRQUE1RCxFQUZNLEVBR04sRUFBRSxNQUFNLFVBQVIsRUFBb0IsT0FBTyxpQkFBM0IsRUFBOEMsWUFBWSxNQUExRCxFQUhNLEVBSU4sRUFBRSxNQUFNLE1BQVIsRUFBZ0IsT0FBTyxhQUF2QixFQUFzQyxZQUFZLE1BQWxELEVBSk0sRUFLTixFQUFFLE1BQU0sT0FBUixFQUFpQixPQUFPLGNBQXhCLEVBQXdDLFlBQVksUUFBcEQsRUFMTSxFQU1OLEVBQUUsTUFBTSxXQUFSLEVBQXFCLE9BQU8sa0JBQTVCLEVBQWdELFlBQVksTUFBNUQsRUFOTSxDQVNNOztBQUNkLGVBQUssRUFBTCxHQUFVLEVBQVY7QUFDRDs7K0JBRUQsUyxzQkFBVSxLLEVBQU87QUFBQTs7QUFDZixlQUFLLGVBQUw7O0FBRUEsaUJBQU8sUUFBUSxHQUFSLENBQVksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQUQsRUFBcUIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFyQixDQUFaLEVBQ04sSUFETSxDQUNEO0FBQUEsbUJBQU0sTUFBSyxFQUFMLENBQVEsT0FBUixDQUFnQixrQkFBaEIsRUFBb0MsS0FBcEMsQ0FBTjtBQUFBLFdBREMsQ0FBUDtBQUVELFM7OytCQUVELEssa0JBQU0sTSxFQUFPO0FBQ1gsY0FBSSxZQUFZLEtBQUssc0JBQUwsQ0FBNEIsTUFBNUIsQ0FBaEI7QUFDQSxlQUFLLGtCQUFMLENBQXdCLFNBQXhCOztBQUVBLGlCQUFPLE9BQU8sTUFBUCxDQUFjLFNBQWQsRUFDTixJQURNLENBQ0QsWUFBTTtBQUNWLGdCQUFJLFdBQVcsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixTQUFyQixFQUFnQyxZQUFoQyxFQUE4QyxXQUE5QyxFQUEyRCxhQUEzRCxFQUEwRSxhQUExRSxDQUFmOztBQUVBLGdCQUFJLE1BQU0sT0FBTixJQUFpQixNQUFyQixFQUE0QjtBQUMxQixtQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsTUFBN0IsRUFBcUMsR0FBckMsRUFBMEM7QUFDeEMsb0JBQUksU0FBUyxNQUFNLE9BQU4sQ0FBYyxFQUFkLENBQWlCLFNBQVMsQ0FBVCxDQUFqQixDQUFiOztBQUVBLG9CQUFJLE1BQUosRUFBWTtBQUNWLHlCQUFPLEVBQVAsQ0FBVSxPQUFWLENBQWtCLEtBQWxCLEdBQTBCLE1BQTFCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsV0FiTSxDQUFQO0FBY0QsUzs7K0JBRUQsTSxtQkFBTyxLLEVBQU87QUFDWixjQUFJLFNBQVMsQ0FBQyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCO0FBQUEsbUJBQUssRUFBRSxJQUFGLEtBQVcsS0FBaEI7QUFBQSxXQUFsQixLQUE0QyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCO0FBQUEsbUJBQUssRUFBRSxJQUFGLEtBQVcsVUFBaEI7QUFBQSxXQUFsQixDQUE3QyxFQUE0RixLQUF6RztBQUNBLGNBQUksYUFBYSxLQUFLLHNCQUFMLENBQTRCLE1BQTVCLENBQWpCO0FBQ0EsZUFBSyxrQkFBTCxDQUF3QixVQUF4Qjs7QUFFQSxpQkFBTyxPQUFPLE1BQVAsQ0FBYyxVQUFkLENBQVA7QUFDRCxTOzsrQkFFRCxrQiwrQkFBbUIsYyxFQUFnQjtBQUNqQyxjQUFJLE9BQU8sR0FBUCxDQUFXLGNBQVgsQ0FBSixFQUFnQztBQUM5QixtQkFBTyxNQUFQLENBQWMsY0FBZDtBQUNEO0FBQ0YsUzs7K0JBRUQsc0IsbUNBQXVCLEssRUFBTztBQUM1QixpQkFBTyxPQUFPLGFBQVAsNEJBQThDLEtBQTlDLGVBQVA7QUFDRCxTOzsrQkFFRCxlLDhCQUFrQjtBQUNoQixpQkFBTyxhQUFQLEVBQXNCLElBQXRCLENBQTJCLFlBQVc7QUFDcEMsZ0JBQUksS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixlQUFuQixDQUFKLEVBQXlDO0FBQ3ZDLGtCQUFJLFVBQUosQ0FBZSxJQUFmO0FBQ0Q7QUFDRixXQUpEO0FBS0QsUyIsImZpbGUiOiJzaGFyZWQvdGhlbWUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
