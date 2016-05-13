module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text",


        "aurelia-framework",
        "aurelia-bootstrapper",
        //"aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        //"aurelia-logging-console",
        "aurelia-materialize-bridge",
        /*"bootstrap",
        "bootstrap/css/bootstrap.css!text",*/
        "jquery"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    }
  }
};
