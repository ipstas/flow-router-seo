Package.describe({
  name: 'asoares:flow-router-seo',
  version: '0.0.4',
  summary: 'A simple way to set the title and meta tags for sites using flow router',
  git: 'https://github.com/asoares/flow-router-seo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4');

  api.use(['mongo', 'underscore', 'jquery']);
  api.use('kadira:flow-router@2.12.1');

  api.addFiles('flow-router-seo.js');

  api.export('FlowRouterSEO');
});
