System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "*": "dist/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.5",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.1",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.5.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.5",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "fetch": "github:github/fetch@0.11.1",
    "font-awesome": "npm:font-awesome@4.6.1",
    "jquery": "npm:jquery@2.2.3",
    "text": "github:systemjs/plugin-text@0.0.3",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "github:Dogfalo/materialize@0.97.6": {
      "css": "github:systemjs/plugin-css@0.1.21",
      "jquery": "npm:jquery@2.2.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.5",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-materialize-bridge@0.5.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6",
      "materialize": "github:Dogfalo/materialize@0.97.6"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:font-awesome@4.6.1": {
      "css": "github:systemjs/plugin-css@0.1.21"
    }
  },
  bundles: {
    "app-build.js": [
      "about/about.html!github:systemjs/plugin-text@0.0.3.js",
      "about/about.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "chmod/chmod.html!github:systemjs/plugin-text@0.0.3.js",
      "chmod/chmod.js",
      "components/nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "components/nav-bar.js",
      "components/route-highlight.js",
      "github:Dogfalo/materialize@0.97.6.js",
      "github:Dogfalo/materialize@0.97.6/css/materialize.css!github:systemjs/plugin-css@0.1.21.js",
      "github:Dogfalo/materialize@0.97.6/js/materialize.js",
      "main.js",
      "nav-bar.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.5.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.5/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.3.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.3/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.5.1.js",
      "npm:aurelia-materialize-bridge@0.5.1/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.5.1/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.5.1/common/constants.js",
      "npm:aurelia-materialize-bridge@0.5.1/common/events.js",
      "npm:aurelia-materialize-bridge@0.5.1/config-builder.js",
      "npm:aurelia-materialize-bridge@0.5.1/index.js",
      "npm:aurelia-materialize-bridge@0.5.1/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.5.1/toast/toastService.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.2.js",
      "npm:aurelia-router@1.0.0-beta.1.2.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.6/aurelia-templating.js",
      "npm:jquery@2.2.3.js",
      "npm:jquery@2.2.3/dist/jquery.js",
      "works/works.html!github:systemjs/plugin-text@0.0.3.js",
      "works/works.js"
    ]
  }
});