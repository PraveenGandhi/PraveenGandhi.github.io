'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().plugin('aurelia-materialize-bridge', function (bridge) {
          return bridge.useCard().useFooter().useNavbar().useProgress().useCheckbox().useSidenav();
        });

        aurelia.use.plugin('aurelia-animator-css');


        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ08sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUlFLE1BSkYsQ0FJUyw0QkFKVCxFQUl1QztBQUFBLGlCQUFVLE9BQU8sT0FBUCxHQUUxQyxTQUYwQyxHQUcxQyxTQUgwQyxHQUkxQyxXQUowQyxHQUsxQyxXQUwwQyxHQU0xQyxVQU4wQyxFQUFWO0FBQUEsU0FKdkM7O0FBYUEsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsc0JBQW5COzs7QUFNQSxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO0FBQUEsaUJBQU0sUUFBUSxPQUFSLEVBQU47QUFBQSxTQUFyQjtBQUNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
