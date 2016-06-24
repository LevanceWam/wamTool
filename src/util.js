exports.debug = (title, obj, status) => {
  const seperator = '\n====================\n';
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
  const output2 = colors.info(obj) + ' ' + colors.debug(time) + ' ' + colors.debug(status);
  const fs = require('fs');
  if (process.env.DEBUG) {
    console.log(output + output2);
  }
};
