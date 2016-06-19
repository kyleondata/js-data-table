exports.config = {
	specs: [
    '*.js'
  	],
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e_test.js']
}