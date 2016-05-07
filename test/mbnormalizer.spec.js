require('chai').should();
require('chai').expect();
var MbNormalizer = require('../lib/mbnormalizer');

describe('MbNormalizer', function() {

  describe('filterIgnoreWhiteSpace', function() {

    it('should remove all white spaces', function() {
      var options = {
        ignoreWhiteSpace: true
      };
      MbNormalizer.normalize(' a b c ', options).should.equal('abc');
      MbNormalizer.normalize('ab   c', options).should.equal('abc');
    });

    it('should be off by default', function() {
      MbNormalizer.normalize(' abc ').should.equal(' abc ');
    });
  });

  describe('filterNormalizeSeriesIndex', function() {

    it('should convert to numbers', function() {
      var options = {
        normalizeSeriesIndex: true
      };
      MbNormalizer.normalize('前後', options).should.equal('(1)(3)');
      MbNormalizer.normalize('上中下', options).should.equal('(1)(2)(3)');
    });

    it('should be off by default', function() {
      MbNormalizer.normalize('前後').should.equal('前後');
    });
  });

  describe('filterToLowerCase', function() {

    it('should convert to lowercase letters', function() {
      var options = {
        toLowerCase: true
      };
      MbNormalizer.normalize('ABcdE', options).should.equal('abcde');
    });

    it('should be off by default', function() {
      MbNormalizer.normalize('ABcdE').should.equal('ABcdE');
    });
  });
});
