exports.debug = (title, obj) => {
  const seperator = '\n====================\n';
  const ts = new Date();
  const colors = require('colors');
  colors.setTheme({
    info: 'blue',
    warn: 'yellow',
    debug: 'green',
    error: 'red',
    input: 'orange',
    object: 'cyan',
  });
  const output = colors.debug(seperator) + ' ' + colors.info(title) + ' ' + obj + ' ' + ts.info + ' ' + seperator;
  const fs = require('fs');
  if (process.env.DEBUG) {
    fs.appendFile('logs/util.logs', output, (err) => {
      if (err) throw err;
      console.log(output);
    });
  }
};
