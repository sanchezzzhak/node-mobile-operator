const detector = new (require('../index'));
const should = require('chai').should;
const assert = require('chai').assert;
const expect = require('chai').expect;
const Table = require('cli-table');
const fs = require('fs');
const util = require('util');

function perryJSON(obj){
  return JSON.stringify(obj,  null, 2);
}

const fixtureFolder = __dirname + '/fixtures/';
const fixturesFiles = fs.readdirSync(fixtureFolder);

function testsFromFixturePhone(fixture){
  let result;
  try {
    let {phone} = fixture;
	result = detector.detect(phone);
	
	console.log('Phone \x1b[33m%s\x1b[0m', phone);
	const table = new Table({
	  head: ['Result', 'Fixture']
	  , colWidths: [100, 100]
	});
	table.push([
	  perryJSON(result),
	  perryJSON(fixture)
	]);
	console.log(table.toString());
	
  } catch (e) {
	throw new SyntaxError(e.stack);
  }
  let messageError = 'fixture data\n' + perryJSON(fixture);
}

describe('tests phones fixtures', function () {
  this.timeout(6000);
  fixturesFiles.forEach(function (file) {
	describe('file fixture ' + file, function () {
	  let fixtureData = require(fixtureFolder +  file);
	  fixtureData.forEach((fixture, pos) => {
		it(pos + '/' + total, function(){
		  testsFromFixturePhone.call(this, fixture);
		});
	  });
	});
  });
});