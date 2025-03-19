const fs = require('fs');
const pkgJson = require('../dist/package.json');

for (const dep in pkgJson.dependencies) {
  // ensure we point to NPM instead of a local directory
  if (dep === '@dackerman-stainless/demostore') {
    pkgJson.dependencies[dep] = '>0.1';
  }
}

fs.writeFileSync('dist/package.json', JSON.stringify(pkgJson, null, 2));

// test
