'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('aurelia-materialize-bridge', function (plugin) {
          plugin.useCard().useFooter().useNavbar().useProgress().useCheckbox().useSidenav();
        });

        aurelia.start().then(function (au) {
          return au.setRoot('app');
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZILEdBR0csTUFISCxDQUdVLHNCQUhWLEVBSUcsTUFKSCxDQUlVLDRCQUpWLEVBSXdDLGtCQUFVO0FBQzlDLGlCQUNHLE9BREgsR0FHRyxTQUhILEdBSUcsU0FKSCxHQUtHLFdBTEgsR0FNRyxXQU5ILEdBT0csVUFQSDtBQVFELFNBYkg7O0FBZUEsZ0JBQVEsS0FBUixHQUNHLElBREgsQ0FDUTtBQUFBLGlCQUFNLEdBQUcsT0FBSCxDQUFXLEtBQVgsQ0FBTjtBQUFBLFNBRFI7QUFFRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
