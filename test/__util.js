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
    object: 'cyan',
  });
  const output = seperator.input + ' ' + title.info + ' ' + obj.object + ' ' + ts.info + ' ' + seperator;
  const fs = require('fs');
  if (process.env.DEBUG) {
    fs.appendFile('logs/util.logs', output, (err) => {
      if (err) throw err;
      console.log(output);
    });
  }
};
