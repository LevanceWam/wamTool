exports.debug = (title, obj) => {
  const seperator = '\n====================\n';
  const ts = new Date();
  const colors = require('colors');
  colors.setTheme({
    info: 'blue',
    warn: 'yellow',
    debug: 'red',
    error: 'green',
    input: 'orange',
  });
  const output = seperator + ' ' + title + ' ' + obj + ' ' + ts + ' ' + seperator;
  const fs = require('fs');
  if (process.env.DEBUG) {
    fs.appendFile('logs/util.logs', output, (err) => {
      if (err) throw err;
      console.log(output);
    });
  }
};
