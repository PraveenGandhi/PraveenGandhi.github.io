'use strict';

System.register(['aurelia-framework', 'shared/theme-manager', 'settings'], function (_export, _context) {
  var inject, ThemeManager, Settings, _dec, _class, ThemeSelector;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_sharedThemeManager) {
      ThemeManager = _sharedThemeManager.ThemeManager;
    }, function (_settings) {
      Settings = _settings.Settings;
    }],
    execute: function () {
      _export('ThemeSelector', ThemeSelector = (_dec = inject(ThemeManager, Settings), _dec(_class = function () {
        function ThemeSelector(themeManager, settings) {
          _classCallCheck(this, ThemeSelector);

          this.themes = [{ value: 'material', name: 'Material', colors: ['#3f51b5', '#283593', '#fff'] }];

          this.themeManager = themeManager;
          this.settings = settings;
        }

        ThemeSelector.prototype.selectTheme = function selectTheme(theme) {
          var _this = this;

          jQuery('body').fadeOut(400, function () {
            _this.settings.activeTheme = theme.value;
            _this.themeManager.loadTheme(theme.value).then(function () {
              return jQuery('body').fadeIn();
            });
          });
        };

        return ThemeSelector;
      }()) || _class));

      _export('ThemeSelector', ThemeSelector);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLXNlbGVjdG9yL3RoZW1lLXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0Esa0IsdUJBQUEsWTs7QUFDQSxjLGFBQUEsUTs7OytCQUdLLGEsV0FEWixPQUFPLFlBQVAsRUFBcUIsUUFBckIsQztBQXNCQywrQkFBWSxZQUFaLEVBQTBCLFFBQTFCLEVBQW9DO0FBQUE7O0FBQUEsZUFuQnBDLE1BbUJvQyxHQW5CM0IsQ0FRTixFQUFFLE9BQU8sVUFBVCxFQUFxQixNQUFNLFVBQTNCLEVBQXVDLFFBQVEsQ0FBRSxTQUFGLEVBQWEsU0FBYixFQUF3QixNQUF4QixDQUEvQyxFQVJNLENBbUIyQjs7QUFDbEMsZUFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EsZUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7O2dDQUVELFcsd0JBQVksSyxFQUFPO0FBQUE7O0FBQ2pCLGlCQUFPLE1BQVAsRUFBZSxPQUFmLENBQXVCLEdBQXZCLEVBQTRCLFlBQU07QUFDaEMsa0JBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsTUFBTSxLQUFsQztBQUNBLGtCQUFLLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBNEIsTUFBTSxLQUFsQyxFQUNDLElBREQsQ0FDTTtBQUFBLHFCQUFNLE9BQU8sTUFBUCxFQUFlLE1BQWYsRUFBTjtBQUFBLGFBRE47QUFFRCxXQUpEO0FBS0QsUyIsImZpbGUiOiJ0aGVtZS1zZWxlY3Rvci90aGVtZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
