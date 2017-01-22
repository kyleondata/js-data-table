var config = require('../test.conf.js');

describe('loading the main page', function () {
	browser.url(config.prodSite);

    it('should have the correct browser title', function () {
        var title = browser.getTitle();   // EXECUTE
		expect(title).to.equal('JS Data Table'); // VERIFY
    });
});