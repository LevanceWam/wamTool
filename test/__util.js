
 const util = require('../src/util');
 const expect = require('chai').expect;

 describe(' wamTool debugger ', () => {
   it('Should be able to tell me this is a string', (done) => {
     expect(util.output).to.not.equal(null);
    done();
  });
 });
