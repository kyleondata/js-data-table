var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
//Give the URL to the actual URL where your Angular app is runningbrowser.get('http://127.0.0.1:9000/#/main);
var name = element(by.css('animation-one')).getText();
expect(name.getText()).to.eventually.equal('Data Table');