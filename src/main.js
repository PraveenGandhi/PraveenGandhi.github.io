export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-materialize-bridge', plugin => {
      plugin
        .useCard()
        
        .useFooter()
        .useNavbar()
        .useProgress()
        .useCheckbox()
        .useSidenav();
    });

  aurelia.start()
    .then(au => au.setRoot('app'));
}
