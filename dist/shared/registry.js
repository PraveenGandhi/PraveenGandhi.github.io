'use strict';

System.register([], function (_export, _context) {
  var Registry;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Registry', Registry = function () {
        function Registry() {
          _classCallCheck(this, Registry);
        }

        Registry.prototype.load = function load(config, control) {
          var _this = this;

          return System.import('samples/' + control + '/registry.json!json').then(function (registry) {
            config.title = registry.title;

            var map = [];

            Object.keys(registry.samples).forEach(function (_sample) {
              var sample = registry.samples[_sample];

              sample.path = 'samples/' + control + '/' + _sample;
              sample.route = sample.route || _sample;
              sample.title = sample.title || _this.getTitleFromRoute(_sample);
              sample.moduleId = sample.moduleId || 'shared/sample-runner';
              sample.nav = sample.nav || true;
              sample.files = sample.files || ['html', 'js'];
              sample.files.forEach(function (extension) {
                sample[extension] = sample.path + '.' + extension;
              });

              if (sample.default === true) {
                map.push({
                  title: sample.title,
                  redirect: sample.route,
                  route: '',
                  sample: sample
                });
              }

              map.push({
                title: sample.title,
                nav: sample.nav,
                moduleId: sample.moduleId,
                route: sample.route,
                sample: sample
              });
            });

            config.map(map);
          });
        };

        Registry.prototype.getTitleFromRoute = function getTitleFromRoute(route) {
          route = route.replace(/-/g, ' ');
          route = route.charAt(0).toUpperCase() + route.slice(1);
          return route;
        };

        return Registry;
      }());

      _export('Registry', Registry);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQkFBYSxROzs7OzsyQkFDWCxJLGlCQUFLLE0sRUFBUSxPLEVBQVM7QUFBQTs7QUFDcEIsaUJBQU8sT0FBTyxNQUFQLGNBQXlCLE9BQXpCLDBCQUNOLElBRE0sQ0FDRCxvQkFBWTtBQUNoQixtQkFBTyxLQUFQLEdBQWUsU0FBUyxLQUF4Qjs7QUFFQSxnQkFBSSxNQUFNLEVBQVY7O0FBR0EsbUJBQU8sSUFBUCxDQUFZLFNBQVMsT0FBckIsRUFBOEIsT0FBOUIsQ0FBc0MsbUJBQVc7QUFDL0Msa0JBQUksU0FBUyxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsQ0FBYjs7QUFFQSxxQkFBTyxJQUFQLGdCQUF5QixPQUF6QixTQUFvQyxPQUFwQztBQUNBLHFCQUFPLEtBQVAsR0FBZSxPQUFPLEtBQVAsSUFBZ0IsT0FBL0I7QUFDQSxxQkFBTyxLQUFQLEdBQWUsT0FBTyxLQUFQLElBQWdCLE1BQUssaUJBQUwsQ0FBdUIsT0FBdkIsQ0FBL0I7QUFDQSxxQkFBTyxRQUFQLEdBQWtCLE9BQU8sUUFBUCxJQUFtQixzQkFBckM7QUFDQSxxQkFBTyxHQUFQLEdBQWEsT0FBTyxHQUFQLElBQWMsSUFBM0I7QUFDQSxxQkFBTyxLQUFQLEdBQWUsT0FBTyxLQUFQLElBQWdCLENBQUMsTUFBRCxFQUFTLElBQVQsQ0FBL0I7QUFDQSxxQkFBTyxLQUFQLENBQWEsT0FBYixDQUFxQixxQkFBYTtBQUNoQyx1QkFBTyxTQUFQLElBQXVCLE9BQU8sSUFBOUIsU0FBc0MsU0FBdEM7QUFDRCxlQUZEOztBQUlBLGtCQUFJLE9BQU8sT0FBUCxLQUFtQixJQUF2QixFQUE2QjtBQUMzQixvQkFBSSxJQUFKLENBQVM7QUFDUCx5QkFBTyxPQUFPLEtBRFA7QUFFUCw0QkFBVSxPQUFPLEtBRlY7QUFHUCx5QkFBTyxFQUhBO0FBSVAsMEJBQVE7QUFKRCxpQkFBVDtBQU1EOztBQUVELGtCQUFJLElBQUosQ0FBUztBQUNQLHVCQUFPLE9BQU8sS0FEUDtBQUVQLHFCQUFLLE9BQU8sR0FGTDtBQUdQLDBCQUFVLE9BQU8sUUFIVjtBQUlQLHVCQUFPLE9BQU8sS0FKUDtBQUtQLHdCQUFRO0FBTEQsZUFBVDtBQU9ELGFBN0JEOztBQStCQSxtQkFBTyxHQUFQLENBQVcsR0FBWDtBQUNELFdBdkNNLENBQVA7QUF3Q0QsUzs7MkJBRUQsaUIsOEJBQWtCLEssRUFBTztBQUN2QixrQkFBUSxNQUFNLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLENBQVI7QUFDQSxrQkFBUSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBeEM7QUFDQSxpQkFBTyxLQUFQO0FBQ0QsUyIsImZpbGUiOiJzaGFyZWQvcmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
