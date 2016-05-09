'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-event-aggregator', 'nprogress'], function (_export, _context) {
  var noView, inject, EventAggregator, nprogress, _dec, _dec2, _class, LoadingIndicator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_nprogress) {
      nprogress = _nprogress.default;
    }],
    execute: function () {
      _export('LoadingIndicator', LoadingIndicator = (_dec = noView(), _dec2 = inject(EventAggregator), _dec(_class = _dec2(_class = function () {
        function LoadingIndicator(eventAggregator) {
          _classCallCheck(this, LoadingIndicator);

          eventAggregator.subscribe('router:navigation:processing', this.start);
          eventAggregator.subscribe('router:navigation:complete', this.done);
        }

        LoadingIndicator.prototype.start = function start() {
          nprogress.start();
          nprogress.inc();
        };

        LoadingIndicator.prototype.done = function done() {
          nprogress.done();
        };

        return LoadingIndicator;
      }()) || _class) || _class));

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUyxZLHNCQUFBLE07O0FBQ0EsWSwrQkFBQSxNOztBQUNBLHFCLDJCQUFBLGU7O0FBQ0YsZTs7O2tDQUlNLGdCLFdBRlosUSxVQUNBLE9BQU8sZUFBUCxDO0FBRUMsa0NBQVksZUFBWixFQUE2QjtBQUFBOztBQUMzQiwwQkFBZ0IsU0FBaEIsQ0FBMEIsOEJBQTFCLEVBQTBELEtBQUssS0FBL0Q7QUFDQSwwQkFBZ0IsU0FBaEIsQ0FBMEIsNEJBQTFCLEVBQXdELEtBQUssSUFBN0Q7QUFDRDs7bUNBRUQsSyxvQkFBUTtBQUNOLG9CQUFVLEtBQVY7QUFDQSxvQkFBVSxHQUFWO0FBQ0QsUzs7bUNBRUQsSSxtQkFBTztBQUNMLG9CQUFVLElBQVY7QUFDRCxTIiwiZmlsZSI6ImxvYWRpbmctaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
