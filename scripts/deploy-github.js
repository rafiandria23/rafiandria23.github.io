'use strict'

const ghPages = require('gh-pages')

ghPages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/rafiandria23/rafiandria23.github.io.git',
  },
  () => console.log('Successfully deployed to GitHub Pages!')
);
