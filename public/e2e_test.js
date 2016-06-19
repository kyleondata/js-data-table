var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage todo list', function() {


  it('should have a header', function() {
    browser.get('http://localhost:8081/');

    var name = element(by.css('.animation-one')).getText();
	expect(name.getText()).to.eventually.equal('DATA TABLE');
  });
});