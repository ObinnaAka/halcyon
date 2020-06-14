const memberResolver = require('./member');
const transactionResolver = require('./transaction');
const toolResolver = require('./tool');
const trainingResolver = require('./training');

module.exports = {
	...memberResolver,
	...transactionResolver,
	...toolResolver,
	...trainingResolver,
}