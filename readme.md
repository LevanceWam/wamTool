## Debugging Tool

[ ![codeship status for LevanceWam/wamTool](https://codeship.com/projects/d8b93840-1bb8-0134-b36e-22fb94432a98/status?branch=master)](https://codeship.com/projects/159752)


## Installing

```
  To install this package you first want to:

  npm install wamTool --save

```

## Usage

```
const util = require('../../lib/util');
```
## Testing

```
  util.debug('You're message here ', obj);

```

## Run it

```
After you save this to your package.json you need to set a const for this inside of your server. after doing that when  you run:

DEBUG=true nodemon src/server.js

Its going to change the color of certain things in your terminal
```
