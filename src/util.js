exports.debug = (title, obj) => {
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
  const fs = require('fs');
  if (process.env.DEBUG) {
    fs.appendFile('logs/util.logs', output, (err) => {
      if (err) throw err;
      console.log(output);
    });
  }
};
