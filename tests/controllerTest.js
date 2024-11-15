const expect = require('chai').expect;
const { fahrenheitToCelsius, celsiusToFahrenheit }  = require('../public/js/auxiliaryAPI')
const { getGreetingDependOnTime } = require('../public/js/auxiliaryAPI')

describe('fahrenheitToCelsius()', () => {
  it('test below 32', () => {
      const result = fahrenheitToCelsius(20);
      expect(result).to.be.closeTo(-6.67, 0.01);
  });

  it('test over 32', () => {
      const result = fahrenheitToCelsius(40);
      expect(result).to.be.closeTo(4.44, 0.01);
  });

  it('test exact 32', () => {
      const result = fahrenheitToCelsius(32);
      expect(result).to.equal(0);
  });

  it('test 0', () => {
      const result = fahrenheitToCelsius(0);
      expect(result).to.be.closeTo(-17.78, 0.01);
  });

  it('test negative number', () => {
      const result = fahrenheitToCelsius(-40);
      expect(result).to.equal(-40);
  });

  it('test float number', () => {
      const result = fahrenheitToCelsius(98.6);
      expect(result).to.be.closeTo(37, 0.01);
  });
});

describe('celsiusToFahrenheit()', () => {
  it('test below 0', () => {
      const result = celsiusToFahrenheit(-10);
      expect(result).to.be.closeTo(14, 0.01);
  });

  it('test over 0', () => {
      const result = celsiusToFahrenheit(10);
      expect(result).to.be.closeTo(50, 0.01);
  });

  it('test exact 0', () => {
      const result = celsiusToFahrenheit(0);
      expect(result).to.equal(32);
  });

  it('test positive number', () => {
      const result = celsiusToFahrenheit(25);
      expect(result).to.be.closeTo(77, 0.01);
  });

  it('test negative number', () => {
      const result = celsiusToFahrenheit(-40);
      expect(result).to.equal(-40);
  });

  it('test float number', () => {
      const result = celsiusToFahrenheit(37);
      expect(result).to.be.closeTo(98.6, 0.01);
  });
});
describe('getGreetingDependOnTime()', () => {
  it('should return "Guten Morgen"', () => {
      const date = new Date('2020-01-01T05:00:00');
      const result = getGreetingDependOnTime(date);
      expect(result).to.equal('Guten Morgen');
  });
});