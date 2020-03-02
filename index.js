const resolver = require('jest-resolve/build/defaultResolver').default;
const path = require('path');
const cachedPaths = {};

function cachedResolve(id, options) {
  const joinedId = id.startsWith('.') ? path.join(options.basedir, id) : id;
  if (!cachedPaths[joinedId]) {
    cachedPaths[joinedId] = resolver(id, options);
  }

  return cachedPaths[joinedId];
}

module.exports = cachedResolve;