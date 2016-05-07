export class App {
  primaryColor = '#ee6e73';
  accentColor = '#2bbbad';

  configureRouter(config, router) {
    config.title = 'Praveen Gandhi P';

    config.map([
      { name: 'about',  route: ['', 'about'], moduleId: 'about/about',  title: 'About' },
      { name: 'chmod',  route: 'chmod',       moduleId: 'chmod',        title: 'CHMOD Calculator' }
    ]);

    this.router = router;
  }
}
