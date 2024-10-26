const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe('Temperature Conversion Functions', () => {
    // Test for fahrenheitToCelsius function
    describe('fahrenheitToCelsius()', () => {
      it('should convert Fahrenheit to Celsius correctly', () => {
        const result = apiTemperature.fahrenheitToCelsius(32);
        expect(result).to.equal(0); // 32°F should equal 0°C
      });
      
      it('should handle negative values correctly', () => {
        const result = apiTemperature.fahrenheitToCelsius(-40);
        expect(result).to.equal(-40); // -40°F should equal -40°C
      });
    });
  
    // Test for celsiusToFahrenheit function
    describe('celsiusToFahrenheit()', () => {
      it('should convert Celsius to Fahrenheit correctly', () => {
        const result = apiTemperature.celsiusToFahrenheit(0);
        expect(result).to.equal(32); // 0°C should equal 32°F
      });
  
      it('should handle negative values correctly', () => {
        const result = apiTemperature.celsiusToFahrenheit(-40);
        expect(result).to.equal(-40); // -40°C should equal -40°F
      });
    });
  });