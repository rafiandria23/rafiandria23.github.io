'use strict';

const ghPages = require('gh-pages');

ghPages.clean();

ghPages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/rafiandria23/rafiandria23.github.io.git',
  },
  () => console.log('Successfully deployed to GitHub Pages!')
);
