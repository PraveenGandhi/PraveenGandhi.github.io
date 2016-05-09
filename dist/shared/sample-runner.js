'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-router', 'aurelia-event-aggregator', 'aurelia-framework'], function (_export, _context) {
  var inject, activationStrategy, EventAggregator, TaskQueue, _dec, _class, SampleRunner;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      activationStrategy = _aureliaRouter.activationStrategy;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_aureliaFramework) {
      TaskQueue = _aureliaFramework.TaskQueue;
    }],
    execute: function () {
      _export('SampleRunner', SampleRunner = (_dec = inject(EventAggregator, TaskQueue), _dec(_class = function () {
        function SampleRunner(ea, taskQueue) {
          _classCallCheck(this, SampleRunner);

          this.taskQueue = taskQueue;
          this.ea = ea;
        }

        SampleRunner.prototype.activate = function activate(params, route) {
          var sample = route.navModel.config.sample;

          if (!sample) throw new Error('Route does not contain a \'sample\' property');

          this.sample = sample;
        };

        SampleRunner.prototype.restart = function restart() {
          var _this = this;

          var old = this.sample;
          this.sample = undefined;
          this.taskQueue.queueTask(function () {
            _this.sample = old;
          });
        };

        SampleRunner.prototype.determineActivationStrategy = function determineActivationStrategy() {
          return activationStrategy.replace;
        };

        return SampleRunner;
      }()) || _class));

      _export('SampleRunner', SampleRunner);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zYW1wbGUtcnVubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLCtCQUFBLE07O0FBQ0Esd0Isa0JBQUEsa0I7O0FBQ0EscUIsMkJBQUEsZTs7QUFDQSxlLHFCQUFBLFM7Ozs4QkFHSyxZLFdBRFosT0FBTyxlQUFQLEVBQXdCLFNBQXhCLEM7QUFHQyw4QkFBWSxFQUFaLEVBQWdCLFNBQWhCLEVBQTJCO0FBQUE7O0FBQ3pCLGVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGVBQUssRUFBTCxHQUFVLEVBQVY7QUFDRDs7K0JBRUQsUSxxQkFBUyxNLEVBQVEsSyxFQUFPO0FBQ3RCLGNBQUksU0FBUyxNQUFNLFFBQU4sQ0FBZSxNQUFmLENBQXNCLE1BQW5DOztBQUVBLGNBQUksQ0FBQyxNQUFMLEVBQWEsTUFBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOOztBQUViLGVBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRCxTOzsrQkFFRCxPLHNCQUFVO0FBQUE7O0FBQ1IsY0FBSSxNQUFNLEtBQUssTUFBZjtBQUNBLGVBQUssTUFBTCxHQUFjLFNBQWQ7QUFDQSxlQUFLLFNBQUwsQ0FBZSxTQUFmLENBQXlCLFlBQU07QUFDN0Isa0JBQUssTUFBTCxHQUFjLEdBQWQ7QUFDRCxXQUZEO0FBR0QsUzs7K0JBRUQsMkIsMENBQThCO0FBQzVCLGlCQUFPLG1CQUFtQixPQUExQjtBQUNELFMiLCJmaWxlIjoic2hhcmVkL3NhbXBsZS1ydW5uZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
