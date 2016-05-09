'use strict';

System.register([], function (_export, _context) {
  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);

          this.primaryColor = '#ee6e73';
          this.accentColor = '#2bbbad';
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Praveen Gandhi P';

          config.map([{ name: 'about', route: ['', 'about'], moduleId: 'about/about', title: 'About' }, { name: 'chmod', route: 'chmod', moduleId: 'chmod/chmod', title: 'CHMOD Calculator' }, { name: 'works', route: 'works', moduleId: 'works/works', title: 'Works' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxQkFBYSxHOzs7O2VBQ1gsWSxHQUFlLFM7ZUFDZixXLEdBQWMsUzs7O3NCQUVkLGUsNEJBQWdCLE0sRUFBUSxNLEVBQVE7QUFDOUIsaUJBQU8sS0FBUCxHQUFlLGtCQUFmOztBQUVBLGlCQUFPLEdBQVAsQ0FBVyxDQUNULEVBQUUsTUFBTSxPQUFSLEVBQWtCLE9BQU8sQ0FBQyxFQUFELEVBQUssT0FBTCxDQUF6QixFQUF3QyxVQUFVLGFBQWxELEVBQWtFLE9BQU8sT0FBekUsRUFEUyxFQUVULEVBQUUsTUFBTSxPQUFSLEVBQWtCLE9BQU8sT0FBekIsRUFBd0MsVUFBVSxhQUFsRCxFQUFrRSxPQUFPLGtCQUF6RSxFQUZTLEVBR1QsRUFBRSxNQUFNLE9BQVIsRUFBa0IsT0FBTyxPQUF6QixFQUF3QyxVQUFVLGFBQWxELEVBQWtFLE9BQU8sT0FBekUsRUFIUyxDQUFYOztBQU1BLGVBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRCxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
