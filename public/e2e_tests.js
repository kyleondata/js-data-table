var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage todo list', function () {
	this.timeout(15000);

	it.only('should have a header1', function () {
		browser.get('http://localhost:8081/');
		var name = element(by.css('.animation-one')).getText();
		expect(name.getText()).to.eventually.equal('DATA TABLE');
	});

	describe('to DO stuff', function () {
		it('should have2', function () {
			browser.get('http://localhost:8081/');
			var name = element(by.css('.animation-one')).getText();
			expect(name.getText()).to.eventually.equal('DATA TABLE');
		});
	});

	describe(' New Test ', function () {
		it('description should be there3', function () {
			browser.get('http://localhost:8081/');
			var desc = element(by.cssContainingText('b', 'Click on the icons above to get more information'));
			// expect(desc.getText()).to.eventually.exist;
			var myPanelElem = desc.element(by.xpath('following-sibling::my-panel'));
			expect(myPanelElem.getAttribute('title')).to.eventually.equal('User')
		});

		it('something somthing', function () {
			browser.get('http://localhost:8081/');
			var thisDIv = $("div").hasClass('.animation-one');
            expect(thisDIv).to.eventually.be.true;
		});
	});
});
