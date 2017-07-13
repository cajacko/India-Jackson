import Handlebars from 'handlebars';
import { readFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { minify } from 'html-minifier';
import mkdirp from 'mkdirp';
import manifest from 'dist/assets/scripts/manifest.json';

const file = readFileSync(join(__dirname, '../src/index.html'), 'utf8');
const template = Handlebars.compile(file);
const manifestContent = readFileSync(join(__dirname, `../dist/assets/scripts/${manifest['manifest.js']}`), 'utf8');

// eslint-disable-next-line
function renderPage(location, htmlData, reactData) {
  let url = location;

  if (url === '/') {
    url = '/index';
  }

  const originalHtml = template({
    manifest: manifestContent,
    js: {
      main: '/assets/scripts/main.js',
      vendor: '/assets/scripts/vendor.js',
    },
    ...htmlData,
  });

  const html = minify(originalHtml, {
    removeComments: true,
    collapseWhitespace: true,
  });

  const path = join(__dirname, `../dist${url}.html`);

  mkdirp(dirname(path), (err) => {
    if (err) {
      throw err;
    }

    writeFile(path, html);
  });
}

function getPages() {
  return [
    {
      url: '/',
      htmlData: {},
      reactData: {},
    },
  ];
}

const pages = getPages();

pages.forEach(({ url, htmlData, reactData }) => {
  renderPage(url, htmlData, reactData);
});
