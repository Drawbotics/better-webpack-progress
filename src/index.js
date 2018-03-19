const betterWebpackProgressCompact = require('./compact');
const betterWebpackProgressDetailed = require('./detailed');


module.exports = function betterWebpackProgress(options) {
  if (options && options.mode === 'detailed') {
    return betterWebpackProgressDetailed(options);
  }
  else {
    return betterWebpackProgressCompact(options);
  }
}
