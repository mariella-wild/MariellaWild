const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
const { expect } = chai;  // Added expect import

const api = supertest.agent(server);

describe('API Connection Tests', () => {
  // Test for Celsius to Fahrenheit conversion endpoint
  it('should convert Celsius to Fahrenheit', (done) => {
    api.post('/api/fromCelsiusToFahrenheit')
      .send({ temperature: 0 })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('result');
        expect(res.body.result).to.equal(32); // 0°C should be 32°F
        done();
      });
  });

  // Test for Fahrenheit to Celsius conversion endpoint
  it('should convert Fahrenheit to Celsius', (done) => {
    api.post('/api/fromFahrheitToCelsius')
      .send({ temperature: 32 })
      .end((err, res) => {
        expect(res.status).to.equal(500);
        expect(res.body).to.have.property('result');
        expect(res.body.result).to.equal(0); // 32°F should be 0°C
        done();
      });
  });
});