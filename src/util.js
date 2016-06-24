const pkgj = require('../package.json');
exports.debug = (title, obj) => {
  const seperator = '\n====<(°_°<)===(^°_°^)===(>°_°)>====\n';
  const ts = new Date();
  const colors = require('colors');
  colors.setTheme({
    info: 'blue',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red',
    data: 'white',
    help: 'cyan',
  });
  const output = colors.debug(seperator) + ' ' + colors.info(title) + ' ' + colors.help(obj) + ' ' + colors.warn(ts) + ' ' + colors.debug(seperator);
  const fs = require('fs');
  if (process.env.DEBUG) {
    console.log(output);
  }
};

exports.versionBump(currentV, semanticV) => {
  let patch = currentV.patch;
  let minor = currentV.minor;
  let major = currentV.major;
  if (typeof semanticV){
    if (semanticV === 'patch'){
      patch += 1;
      console.log('You have created a Patch');
    }
    if (semanticV === 'minor'){
      minor += 1;
      console.log('You have created a Minor change');
    }
    if (semanticV === 'major'){
      patch = 0;
      minor = 0;
      major += 1;
      console.warn('You have created a Major change!');
    }
  }
}
console.log(pkgj.version);
